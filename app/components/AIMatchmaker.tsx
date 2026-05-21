"use client";

import { fadeIn, textVariant } from "@/app/utils/motion";
import { buildFitAnalysis, rolePresets } from "@/app/utils/portfolio-intelligence";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";

const AIMatchmaker = () => {
	const [role, setRole] = useState(rolePresets[0]);
	const [jobDescription, setJobDescription] = useState(
		"We need a developer who can build responsive Next.js apps, integrate APIs, support mobile features, and collaborate with product teams.",
	);
	const [aiPitch, setAiPitch] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const analysis = useMemo(() => buildFitAnalysis(role, jobDescription), [role, jobDescription]);
	const pitch = `Hi, I am Asim Zaheer, a full-stack developer matching this ${role} role through ${analysis.matchedSignals
		.slice(0, 5)
		.join(", ")}. The strongest proof is ${analysis.rankedProjects
		.map((project) => project.name)
		.join(", ")}. I can contribute across polished UI, API integration, mobile workflows, and production delivery.`;
	const displayedPitch = aiPitch || pitch;

	const generateGeminiFit = async () => {
		setIsLoading(true);
		setError("");

		try {
			const response = await fetch("/api/portfolio-ai", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					type: "fit",
					role,
					jobDescription,
					localPitch: pitch,
				}),
			});
			const data = await response.json();

			if (!response.ok) {
				throw new Error(data?.error || "Gemini request failed.");
			}

			setAiPitch(data.answer);
		} catch {
			setAiPitch("");
			setError("Gemini is unavailable right now, so the portfolio is showing the local fit summary.");
		} finally {
			setIsLoading(false);
		}
	};

	const resetGeminiOutput = () => {
		setAiPitch("");
		setError("");
	};

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Recruiter AI</p>
				<h2 className="sectionHeadText">Role Fit Engine.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
			>
				Paste a job description and this portfolio maps the role to my projects, stack,
				experience, and recruiter-ready pitch. Gemini can enhance the summary while the
				local matching engine keeps the experience reliable.
			</motion.p>

			<div className="mt-8 grid min-w-0 gap-5 lg:mt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
				<motion.div
					variants={fadeIn("right", "spring", 0.2, 0.75)}
					className="min-w-0 rounded-lg border border-white/10 bg-black-100 p-4 sm:p-5"
				>
					<label className="text-sm font-semibold uppercase tracking-wider text-secondary">Target role</label>
					<div className="mt-4 flex flex-wrap gap-2">
						{rolePresets.map((preset) => (
							<button
								key={preset}
								type="button"
								onClick={() => {
									setRole(preset);
									resetGeminiOutput();
								}}
								className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
									role === preset
										? "border-[#00cea8] bg-[#00cea8]/15 text-white"
										: "border-white/10 bg-tertiary text-secondary hover:border-white/30 hover:text-white"
								}`}
							>
								{preset}
							</button>
						))}
					</div>

					<label className="mt-6 block text-sm font-semibold uppercase tracking-wider text-secondary">
						Job description
					</label>
					<textarea
						value={jobDescription}
						onChange={(event) => {
							setJobDescription(event.target.value);
							resetGeminiOutput();
						}}
						rows={9}
						className="mt-4 w-full resize-none rounded-lg border border-white/10 bg-tertiary px-4 py-4 text-white outline-none transition placeholder:text-secondary focus:border-[#00cea8]"
						placeholder="Paste a job post or describe what your team needs..."
					/>
				</motion.div>

				<motion.div
					variants={fadeIn("left", "spring", 0.3, 0.75)}
					className="min-w-0 rounded-lg border border-[#00cea8]/30 bg-[#07111f] p-4 shadow-card sm:p-5"
				>
					<div className="flex flex-wrap items-start justify-between gap-4">
						<div>
							<p className="text-sm uppercase tracking-wider text-secondary">Estimated fit</p>
							<h3 className="mt-1 text-4xl font-black text-white">{analysis.score}%</h3>
						</div>
						<div className="rounded-full border border-[#00cea8]/40 px-4 py-2 text-sm font-semibold text-[#00cea8]">
							AI-assisted proof
						</div>
					</div>

					<div className="mt-6 grid gap-3 md:grid-cols-3">
						{analysis.rankedProjects.map((project) => (
							<a
								key={project.name}
								href={project.deploy_link || "#projects"}
								target={project.deploy_link ? "_blank" : undefined}
								className="min-w-0 rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#00cea8]/60"
							>
								<span className="block break-words text-base font-bold text-white">{project.name}</span>
								<span className="mt-2 block text-sm leading-6 text-secondary">{project.impact}</span>
							</a>
						))}
					</div>

					<div className="mt-6 rounded-lg bg-black-200 p-4">
						<div className="flex flex-wrap items-center justify-between gap-3">
							<p className="text-sm font-semibold uppercase tracking-wider text-secondary">
								{aiPitch ? "Gemini fit summary" : "Recruiter pitch"}
							</p>
							<button
								type="button"
								onClick={generateGeminiFit}
								disabled={isLoading}
								className="w-full rounded-md bg-[#00cea8] px-4 py-2 text-sm font-bold text-primary transition hover:bg-[#20e6c0] disabled:cursor-not-allowed disabled:opacity-60 xs:w-auto"
							>
								{isLoading ? "Analyzing..." : "Enhance with Gemini"}
							</button>
						</div>
						<p className="mt-3 whitespace-pre-line break-words text-[15px] leading-7 text-white">{displayedPitch}</p>
						{error && <p className="mt-3 text-sm leading-6 text-[#ffb86c]">{error}</p>}
					</div>

					<div className="mt-5 grid gap-4 md:grid-cols-2">
						<div>
							<p className="text-sm font-semibold uppercase tracking-wider text-secondary">Best experience</p>
							<p className="mt-2 text-white">{analysis.rankedExperience.title}</p>
							<p className="text-sm text-secondary">{analysis.rankedExperience.company_name}</p>
						</div>
						<div>
							<p className="text-sm font-semibold uppercase tracking-wider text-secondary">Detected signals</p>
							<div className="mt-2 flex flex-wrap gap-2">
								{analysis.matchedSignals.slice(0, 8).map((signal) => (
									<span key={signal} className="rounded-full bg-[#00cea8]/10 px-3 py-1 text-sm text-[#00cea8]">
										#{signal}
									</span>
								))}
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default SectionWrapper(AIMatchmaker, "ai-match");
