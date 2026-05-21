import { experiences, projects, technologies } from "@/app/constants";

export const skillGroups = [
	{
		name: "Frontend",
		description: "Interfaces, dashboards, landing pages, and responsive product experiences.",
		signals: ["next", "react", "typescript", "tailwind", "framer", "ui", "dashboard", "seo"],
	},
	{
		name: "Mobile",
		description: "React Native apps, app-store workflows, location features, and mobile UX.",
		signals: ["react native", "mobile", "camera", "location", "android", "app"],
	},
	{
		name: "Backend",
		description: "APIs, data flows, GraphQL, REST, FastAPI, Node.js, and integration work.",
		signals: ["api", "graphql", "rest", "fastapi", "node", "mongodb", "postgresql", "backend"],
	},
	{
		name: "Interactive 3D",
		description: "Three.js, React Three Fiber, animated product storytelling, and immersive UI.",
		signals: ["three", "3d", "animation", "interactive", "gsap", "fiber"],
	},
	{
		name: "Product Delivery",
		description: "Remote collaboration, production releases, client communication, and ownership.",
		signals: ["production", "client", "deployment", "standups", "collaborate", "business", "saas"],
	},
	{
		name: "AI Integration",
		description: "AI-ready UX, assistant patterns, job matching, and API-backed automations.",
		signals: ["ai", "assistant", "match", "automation", "api", "recruiter"],
	},
];

export const rolePresets = [
	"Full Stack Developer",
	"Next.js Developer",
	"React Native Developer",
	"Backend API Engineer",
	"AI Product Engineer",
];

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9+#.\s-]/g, " ");

export const scoreText = (text: string, signals: string[]) => {
	const normalized = normalize(text);
	return signals.reduce((score, signal) => (normalized.includes(signal) ? score + 1 : score), 0);
};

export const extractSignals = (input: string) => {
	const normalized = normalize(input);
	const knownSignals = Array.from(new Set(skillGroups.flatMap((group) => group.signals)));
	const matched = knownSignals.filter((signal) => normalized.includes(signal));
	return matched.length > 0 ? matched : ["react", "api", "next", "production"];
};

export const buildFitAnalysis = (role: string, jobDescription: string) => {
	const matchedSignals = extractSignals(`${role} ${jobDescription}`);
	const rankedProjects = [...projects]
		.map((project) => ({
			...project,
			score: scoreText(
				[
					project.name,
					project.description,
					project.role,
					project.impact,
					project.metric,
					project.caseStudy.problem,
					project.caseStudy.solution,
					project.caseStudy.highlights.join(" "),
					project.caseStudy.challenges.join(" "),
					project.tags.map((tag) => tag.name).join(" "),
				].join(" "),
				matchedSignals,
			),
		}))
		.sort((a, b) => b.score - a.score)
		.slice(0, 3);

	const rankedExperience = [...experiences]
		.map((experience) => ({
			...experience,
			score: scoreText(
				`${experience.title} ${experience.company_name} ${experience.points.join(" ")}`,
				matchedSignals,
			),
		}))
		.sort((a, b) => b.score - a.score)[0];

	const stack = technologies
		.map((technology) => technology.name)
		.filter((name) => scoreText(name, matchedSignals) > 0)
		.slice(0, 6);

	return {
		matchedSignals,
		rankedProjects,
		rankedExperience,
		stack,
		score: Math.min(97, 70 + matchedSignals.length * 3 + (rankedProjects[0]?.score ?? 0) * 3),
	};
};

export const answerPortfolioQuestion = (question: string) => {
	const signals = extractSignals(question);
	const analysis = buildFitAnalysis("Recruiter", question);
	const lowerQuestion = question.toLowerCase();

	if (lowerQuestion.includes("contact") || lowerQuestion.includes("hire") || lowerQuestion.includes("available")) {
		return "You can contact Asim through the contact form below or LinkedIn. He is positioning this portfolio for full-stack, Next.js, React Native, backend API, and AI-integrated product roles.";
	}

	if (lowerQuestion.includes("project") || lowerQuestion.includes("work") || lowerQuestion.includes("built")) {
		return `The strongest matching projects are ${analysis.rankedProjects
			.map((project) => project.name)
			.join(", ")}. They show ${signals.slice(0, 4).join(", ")} through shipped web, mobile, dashboard, and interactive experiences.`;
	}

	if (lowerQuestion.includes("backend") || lowerQuestion.includes("api") || lowerQuestion.includes("graphql")) {
		return "Asim has backend-facing experience with Node.js, REST APIs, GraphQL, MongoDB, PostgreSQL, and FastAPI. The strongest proof points are Local Reviews for SaaS workflows and his HashPotato experience building scalable APIs.";
	}

	if (lowerQuestion.includes("mobile") || lowerQuestion.includes("react native")) {
		return "For mobile, Asim has shipped React Native work on CheckPointSpot and KUSA, including event flows, location-aware features, React Query data handling, and production Android releases.";
	}

	if (lowerQuestion.includes("3d") || lowerQuestion.includes("three")) {
		return "Asim brings a rare full-stack plus 3D mix: Three.js, React Three Fiber, Framer Motion, and GSAP appear in his interactive website work, especially Level Five and Mefic.";
	}

	return `Asim is strongest where ${signals.slice(0, 4).join(", ")} meet product delivery. Best evidence: ${analysis.rankedProjects
		.map((project) => project.name)
		.join(", ")}. He can contribute across frontend UI, API integration, mobile workflows, and production-ready delivery.`;
};

export const projectsForSkillGroup = (groupName: string) => {
	const group = skillGroups.find((item) => item.name === groupName) ?? skillGroups[0];
	return [...projects]
		.map((project) => ({
			...project,
			score: scoreText(
				`${project.name} ${project.description} ${project.role} ${project.impact} ${project.metric} ${project.tags
					.map((tag) => tag.name)
					.join(" ")} ${project.caseStudy.highlights.join(" ")}`,
				group.signals,
			),
		}))
		.filter((project) => project.score > 0)
		.sort((a, b) => b.score - a.score);
};

export const buildPortfolioContext = () => {
	const projectContext = projects
		.map((project) =>
			[
				`Project: ${project.name}`,
				`Description: ${project.description}`,
				`Role: ${project.role}`,
				`Impact: ${project.impact}`,
				`Metric: ${project.metric}`,
				`Availability: ${project.availability}`,
				`Source links: ${
					project.source_links?.map((link) => `${link.label} ${link.url}`).join(", ") ||
					project.source_code_link ||
					"Private or not provided"
				}`,
				`Tags: ${project.tags.map((tag) => tag.name).join(", ")}`,
				`Problem: ${project.caseStudy.problem}`,
				`Solution: ${project.caseStudy.solution}`,
				`Highlights: ${project.caseStudy.highlights.join(", ")}`,
				`Challenges: ${project.caseStudy.challenges.join(", ")}`,
			].join("\n"),
		)
		.join("\n\n");

	const experienceContext = experiences
		.map((experience) =>
			[
				`Experience: ${experience.title} at ${experience.company_name}`,
				`Date: ${experience.date}`,
				`Responsibilities: ${experience.points.join(" ")}`,
			].join("\n"),
		)
		.join("\n\n");

	return [
		"Candidate: Asim Zaheer",
		"Positioning: Full-stack developer focused on Next.js, React Native, backend APIs, AI-ready product experiences, and interactive 3D web experiences.",
		`Services: ${["Next.js Full-Stack Developer", "React Native App Developer", "Backend API Engineer", "AI & 3D Product Experiences"].join(", ")}`,
		`Technologies: ${technologies.map((technology) => technology.name).join(", ")}`,
		"",
		"Experience:",
		experienceContext,
		"",
		"Projects:",
		projectContext,
	].join("\n");
};
