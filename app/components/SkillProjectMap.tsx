"use client";

import { fadeIn, textVariant } from "@/app/utils/motion";
import { projectsForSkillGroup, skillGroups } from "@/app/utils/portfolio-intelligence";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";

const SkillProjectMap = () => {
	const [activeGroup, setActiveGroup] = useState(skillGroups[0].name);
	const active = skillGroups.find((group) => group.name === activeGroup) ?? skillGroups[0];
	const mappedProjects = useMemo(() => projectsForSkillGroup(activeGroup), [activeGroup]);

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Skill intelligence</p>
				<h2 className="sectionHeadText">Skill-to-Project Map.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
			>
				Click a capability and see the real projects that prove it. This turns the tech stack
				from a logo wall into evidence.
			</motion.p>

			<div className="mt-8 grid min-w-0 gap-5 lg:mt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-6">
				<motion.div variants={fadeIn("right", "spring", 0.2, 0.75)} className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-1">
					{skillGroups.map((group) => (
						<button
							key={group.name}
							type="button"
							onClick={() => setActiveGroup(group.name)}
							className={`min-w-0 rounded-lg border p-4 text-left transition ${
								activeGroup === group.name
									? "border-[#00cea8] bg-[#00cea8]/10"
									: "border-white/10 bg-tertiary hover:border-white/30"
							}`}
						>
							<span className="block break-words text-lg font-bold text-white">{group.name}</span>
							<span className="mt-2 block text-sm leading-6 text-secondary">{group.description}</span>
						</button>
					))}
				</motion.div>

				<motion.div
					variants={fadeIn("left", "spring", 0.3, 0.75)}
					className="min-w-0 rounded-lg border border-white/10 bg-black-100 p-4 sm:p-5"
				>
					<div className="flex flex-wrap items-center justify-between gap-3">
						<div>
							<p className="text-sm uppercase tracking-wider text-secondary">Selected capability</p>
							<h3 className="mt-1 text-2xl font-black text-white">{active.name}</h3>
						</div>
						<div className="rounded-full border border-[#00cea8]/40 px-4 py-2 text-sm font-semibold text-[#00cea8]">
							{mappedProjects.length} proof points
						</div>
					</div>

					<div className="mt-6 space-y-4">
						{mappedProjects.map((project) => (
							<div key={project.name} className="rounded-lg bg-tertiary p-4">
								<div className="flex flex-wrap items-start justify-between gap-3">
									<h4 className="break-words text-lg font-bold text-white">{project.name}</h4>
									<span className="rounded-full bg-white/5 px-3 py-1 text-xs text-secondary">
										match score {project.score}
									</span>
								</div>
								<p className="mt-2 text-sm leading-6 text-secondary">{project.role}</p>
								<p className="mt-3 text-sm leading-6 text-white">{project.impact}</p>
								<div className="mt-3 flex flex-wrap gap-2">
									{project.tags.slice(0, 4).map((tag) => (
										<span key={`${project.name}-${tag.name}`} className={`text-sm ${tag.color}`}>
											#{tag.name}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default SectionWrapper(SkillProjectMap, "skills-map");
