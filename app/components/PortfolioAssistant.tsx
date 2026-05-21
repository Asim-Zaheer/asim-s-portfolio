"use client";

import { fadeIn, textVariant } from "@/app/utils/motion";
import { answerPortfolioQuestion } from "@/app/utils/portfolio-intelligence";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";

const starterQuestions = [
	"What projects prove Asim can build SaaS dashboards?",
	"Is Asim strong with React Native mobile apps?",
	"What backend and API experience does Asim have?",
	"How does Asim use Three.js and interactive UI?",
];

const PortfolioAssistant = () => {
	const [question, setQuestion] = useState(starterQuestions[0]);
	const [aiAnswer, setAiAnswer] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const answer = useMemo(() => answerPortfolioQuestion(question), [question]);
	const displayedAnswer = aiAnswer || answer;

	const askGemini = async () => {
		setIsLoading(true);
		setError("");

		try {
			const response = await fetch("/api/portfolio-ai", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					type: "assistant",
					question,
					localAnswer: answer,
				}),
			});
			const data = await response.json();

			if (!response.ok) {
				throw new Error(data?.error || "Gemini request failed.");
			}

			setAiAnswer(data.answer);
			if (data.fallback && data.error) {
				setError(data.error);
			}
		} catch {
			setAiAnswer("");
			setError("Gemini is unavailable right now, so the portfolio is showing the local answer.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Ask the portfolio</p>
				<h2 className="sectionHeadText">Asim AI Assistant.</h2>
			</motion.div>

			<div className="mt-8 grid min-w-0 gap-5 lg:mt-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
				<motion.div variants={fadeIn("right", "spring", 0.2, 0.75)} className="min-w-0 space-y-3">
					{starterQuestions.map((item) => (
						<button
							key={item}
							type="button"
							onClick={() => setQuestion(item)}
							className={`w-full rounded-lg border px-4 py-3 text-left text-sm leading-6 transition ${
								question === item
									? "border-[#00cea8] bg-[#00cea8]/10 text-white"
									: "border-white/10 bg-tertiary text-secondary hover:border-white/30 hover:text-white"
							}`}
							onMouseDown={() => {
								setAiAnswer("");
								setError("");
							}}
						>
							{item}
						</button>
					))}
				</motion.div>

				<motion.div
					variants={fadeIn("left", "spring", 0.3, 0.75)}
					className="min-w-0 rounded-lg border border-white/10 bg-black-100 p-4 sm:p-5"
				>
					<label className="text-sm font-semibold uppercase tracking-wider text-secondary">
						Recruiter question
					</label>
					<textarea
						value={question}
						onChange={(event) => {
							setQuestion(event.target.value);
							setAiAnswer("");
							setError("");
						}}
						rows={4}
						className="mt-4 w-full resize-none rounded-lg border border-white/10 bg-tertiary px-4 py-4 text-white outline-none transition focus:border-[#00cea8]"
					/>

					<div className="mt-5 rounded-lg border border-[#00cea8]/30 bg-[#07111f] p-5">
						<div className="flex flex-wrap items-center justify-between gap-3">
							<p className="text-sm font-semibold uppercase tracking-wider text-secondary">
								{aiAnswer ? "Gemini answer" : "Portfolio answer"}
							</p>
							<button
								type="button"
								onClick={askGemini}
								disabled={isLoading}
								className="w-full rounded-md bg-[#00cea8] px-4 py-2 text-sm font-bold text-primary transition hover:bg-[#20e6c0] disabled:cursor-not-allowed disabled:opacity-60 xs:w-auto"
							>
								{isLoading ? "Thinking..." : "Ask Gemini"}
							</button>
						</div>
						<p className="mt-3 whitespace-pre-line break-words text-[15px] leading-7 text-white sm:text-[16px] sm:leading-8">{displayedAnswer}</p>
						{error && <p className="mt-3 text-sm leading-6 text-[#ffb86c]">{error}</p>}
					</div>

					<p className="mt-4 text-sm leading-6 text-secondary">
						This assistant uses Gemini when configured, with structured portfolio data as
						guardrails and a local fallback if the API is unavailable.
					</p>
				</motion.div>
			</div>
		</>
	);
};

export default SectionWrapper(PortfolioAssistant, "assistant");
