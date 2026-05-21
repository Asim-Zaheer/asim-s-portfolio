import { buildFitAnalysis, buildPortfolioContext } from "@/app/utils/portfolio-intelligence";
import { NextResponse } from "next/server";

const GEMINI_MODELS = ["gemini-1.5-flash", "gemini-1.5-flash-latest", "gemini-2.0-flash"];

type PortfolioAiRequest = {
	type?: "assistant" | "fit";
	question?: string;
	role?: string;
	jobDescription?: string;
	localAnswer?: string;
	localPitch?: string;
};

const fallbackMessage = (body: PortfolioAiRequest) => {
	if (body.type === "fit") {
		return body.localPitch || "Gemini is unavailable right now, so the local role-fit summary is being shown.";
	}

	return body.localAnswer || "Gemini is unavailable right now, so the local portfolio answer is being shown.";
};

const buildPrompt = ({
	type,
	question,
	role,
	jobDescription,
	localAnswer,
	localPitch,
}: PortfolioAiRequest) => {
	const portfolioContext = buildPortfolioContext();

	if (type === "fit") {
		const analysis = buildFitAnalysis(role || "Full Stack Developer", jobDescription || "");

		return `
You are an AI recruiter assistant embedded inside Asim Zaheer's developer portfolio.
Use only the portfolio context below. Do not invent companies, projects, dates, metrics, links, or technologies.
Write in first person as Asim where appropriate. Keep the response concise and professional.

Portfolio context:
${portfolioContext}

Target role:
${role || "Full Stack Developer"}

Job description:
${jobDescription || "No job description provided."}

Local match signals:
${analysis.matchedSignals.join(", ")}

Best matching projects:
${analysis.rankedProjects.map((project) => `${project.name}: ${project.impact}`).join("\n")}

Existing fallback pitch:
${localPitch || ""}

Return exactly this format:
Fit summary: one strong sentence.
Why Asim fits: 3 concise bullets.
Best proof: 3 concise bullets naming specific projects or experience.
Recruiter pitch: 2 polished sentences.
`;
	}

	return `
You are Asim Zaheer's portfolio assistant.
Answer using only the portfolio context below. If the answer is not supported by the context, say what is known and avoid guessing.
Keep the answer helpful, specific, and under 140 words.

Portfolio context:
${portfolioContext}

User question:
${question || "What should a recruiter know about Asim?"}

Existing fallback answer:
${localAnswer || ""}
`;
};

export async function POST(request: Request) {
	try {
		if (!process.env.GEMINI_API_KEY) {
			return NextResponse.json({ error: "Gemini API key is not configured." }, { status: 500 });
		}

		const body = (await request.json()) as PortfolioAiRequest;
		const prompt = buildPrompt(body);

		let lastStatus = 500;
		let lastError = "";

		for (const model of GEMINI_MODELS) {
			const response = await fetch(
				`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						contents: [
							{
								role: "user",
								parts: [{ text: prompt }],
							},
						],
						generationConfig: {
							temperature: 0.35,
							topP: 0.9,
							maxOutputTokens: body.type === "fit" ? 420 : 220,
						},
					}),
				},
			);

			if (response.ok) {
				const data = await response.json();
				const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;

				if (answer) {
					return NextResponse.json({ answer, model });
				}

				lastStatus = 502;
				lastError = "Gemini returned an empty response.";
				continue;
			}

			lastStatus = response.status;
			lastError = await response.text();

			if (response.status !== 404 && response.status !== 429) {
				break;
			}
		}

		return NextResponse.json({
			answer: fallbackMessage(body),
			fallback: true,
			error:
				lastStatus === 429
					? "Gemini quota or rate limit reached. Showing local fallback."
					: lastStatus === 404
						? "Configured Gemini model is unavailable for this API key. Showing local fallback."
						: `Gemini request failed. Showing local fallback. ${lastError}`,
		});
	} catch {
		return NextResponse.json({ answer: "Unable to generate AI response right now.", fallback: true });
	}
}
