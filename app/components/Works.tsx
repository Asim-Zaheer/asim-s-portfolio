"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type ProjectCardProps = {
	index: number;
	name: string;
	description: string;
	role: string;
	impact: string;
	metric: string;
	tags: {
		name: string;
		color: string;
	}[];
	caseStudy: {
		problem: string;
		solution: string;
		highlights: string[];
		challenges: string[];
	};
	image: string;
	source_code_link?: string;
	source_links?: { label: string; url: string }[];
	deploy_link?: string;
	availability: "Live" | "App Store" | "Source Available" | "Private/Internal";
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web" | "React Native"
};

const ProjectCard = ({
	index,
	name,
	description,
	role,
	impact,
	metric,
	tags,
	caseStudy,
	image,
	source_code_link,
	source_links,
	deploy_link,
	availability,
	platform
}: ProjectCardProps) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<motion.div className="min-w-0" variants={fadeIn("up", "spring", index * 0.12, 0.65)}>
			<article className="group flex h-full min-w-0 flex-col rounded-lg border border-white/10 bg-tertiary p-4 shadow-card transition duration-300 hover:-translate-y-2 hover:border-[#00cea8]/45 hover:shadow-[0_28px_90px_-35px_rgba(0,206,168,0.65)] sm:p-5">
				<div className="relative h-[200px] w-full overflow-hidden rounded-lg sm:h-[230px]">
					<Image
						src={image}
						width={1000}
						height={1000}
						alt="project_image"
						className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
					/>

					<div className="absolute inset-0 flex justify-end m-3 opacity-90 transition duration-300 group-hover:opacity-100">
						{source_code_link && <Link
							href={source_code_link}
							target="_blank"
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src="/tech/github.webp"
								width={24}
								height={24}
								alt="source-code"
								className="object-contain"
							/>
						</Link>}
						{deploy_link && (
							<Link
								href={deploy_link}
								target="_blank"
								className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
							>
								<Image
									src={platform === "Netlify" ? "/tech/netlify.webp" : platform === "Vercel" ? "/tech/vercel.svg" : platform === "Wordpress" ? "/tech/wordpress.webp" : platform === "Web" ? "/web.webp" : "/mobile.webp"}
									width={24}
									height={24}
									alt="live project"
									className="object-contain"
								/>
							</Link>
						)}
					</div>
				</div>

				<div className="mt-5">
					<h3 className="break-words text-[22px] font-bold leading-tight text-white sm:text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
					<div className="mt-4 rounded-lg border border-white/10 bg-black-100 p-3">
						<p className="text-xs font-semibold uppercase tracking-wider text-secondary">My role</p>
						<p className="mt-2 break-words text-[13px] leading-6 text-white">{role}</p>
					</div>
					<div className="mt-3 rounded-lg bg-[#00cea8]/10 p-3">
						<p className="text-xs font-semibold uppercase tracking-wider text-[#00cea8]">Impact signal</p>
						<p className="mt-2 break-words text-[13px] leading-6 text-white">{metric}</p>
					</div>
					<p className="mt-3 text-[13px] leading-6 text-[#00cea8]">{impact}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>

				<button
					type="button"
					onClick={() => setExpanded((value) => !value)}
					className="mt-5 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-[#00cea8]/60"
				>
					{expanded ? "Hide case study" : "View case study"}
				</button>

				<div className="mt-3 flex flex-col gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-secondary xs:flex-row xs:items-center xs:justify-between">
					<span>{availability}</span>
					<span>{source_code_link || source_links?.length ? "Source available" : "Client/private source"}</span>
				</div>

				{source_links && source_links.length > 0 && (
					<div className="mt-3 flex flex-wrap gap-2">
						{source_links.map((link) => (
							<Link
								key={`${name}-${link.label}`}
								href={link.url}
								target="_blank"
								className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-secondary transition hover:border-[#00cea8]/60 hover:text-white"
							>
								{link.label}
							</Link>
						))}
					</div>
				)}

				{expanded && (
					<div className="mt-4 space-y-4 rounded-lg border border-[#00cea8]/20 bg-[#07111f] p-4">
						<div>
							<p className="text-xs font-semibold uppercase tracking-wider text-secondary">Problem</p>
							<p className="mt-2 text-sm leading-6 text-white">{caseStudy.problem}</p>
						</div>
						<div>
							<p className="text-xs font-semibold uppercase tracking-wider text-secondary">Solution</p>
							<p className="mt-2 text-sm leading-6 text-white">{caseStudy.solution}</p>
						</div>
						<div>
							<p className="text-xs font-semibold uppercase tracking-wider text-secondary">Highlights</p>
							<ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-6 text-secondary">
								{caseStudy.highlights.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
						<div>
							<p className="text-xs font-semibold uppercase tracking-wider text-secondary">Challenges solved</p>
							<ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-6 text-secondary">
								{caseStudy.challenges.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</article>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">My work</p>
				<h2 className="sectionHeadText">Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					These projects show shipped product work across mobile apps, SaaS dashboards,
					business websites, API-driven interfaces, and interactive experiences. Open
					each case study to see the problem, my role, solution, and proof behind the stack.
				</motion.p>
			</div>

			<div id="projects" className="mt-10 grid min-w-0 gap-5 sm:grid-cols-2 lg:gap-7 xl:grid-cols-3">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "projects");
