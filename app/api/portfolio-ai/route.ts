import { buildFitAnalysis, buildPortfolioContext } from "@/app/utils/portfolio-intelligence";
import { NextResponse } from "next/server";

const GEMINI_MODEL = "gemini-2.0-flash";

type PortfolioAiRequest = {
	type?: "assistant" | "fit";
	question?: string;
	role?: string;
	jobDescription?: string;
	localAnswer?: string;
	localPitch?: string;
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

		const response = await fetch(
			`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`,
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
						maxOutputTokens: body.type === "fit" ? 520 : 260,
					},
				}),
			},
		);

		if (!response.ok) {
			const error = await response.text();
			return NextResponse.json({ error: `Gemini request failed: ${error}` }, { status: response.status });
		}

		const data = await response.json();
		const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;

		if (!answer) {
			return NextResponse.json({ error: "Gemini returned an empty response." }, { status: 502 });
		}

		return NextResponse.json({ answer });
	} catch {
		return NextResponse.json({ error: "Unable to generate AI response." }, { status: 500 });
	}
}
