export const navLinks = [
	{ id: "ai-match", title: "AI Fit" },
	{ id: "about", title: "About" },
	{ id: "projects", title: "Projects" },
	{ id: "skills-map", title: "Skills" },
	{ id: "work", title: "Experience" },
	{ id: "contact", title: "Contact" },
];

const services = [
	{ title: "Next.js Full-Stack Developer", icon: "/web.webp" },
	{ title: "React Native App Developer", icon: "/mobile.webp" },
	{ title: "Backend API Engineer", icon: "/creator.webp" },
	{ title: "AI & 3D Product Experiences", icon: "/backend.webp" },
];

const technologies = [
	{ name: "HTML 5", icon: "/tech/html.webp" },
	{ name: "CSS 3", icon: "/tech/css.webp" },
	{ name: "JavaScript", icon: "/tech/javascript.webp" },
	{ name: "TypeScript", icon: "/tech/typescript.webp" },
	{ name: "React JS", icon: "/tech/reactjs.webp" },
	{ name: "Next.JS", icon: "/tech/nextjs.svg" },
	{ name: "Redux Toolkit", icon: "/tech/redux.webp" },
	{ name: "Tailwind CSS", icon: "/tech/tailwind.webp" },
	{ name: "Three JS", icon: "/tech/threejs.webp" },
	{ name: "Git", icon: "/tech/git.webp" },
	{ name: "Figma", icon: "/tech/figma.webp" },
	{ name: "WordPress", icon: "/tech/wordpress.webp" },
	{ name: "Bootstrap", icon: "/tech/bootstrap.webp" },
];

const experiences = [
	{
		title: "Associate Software Engineer",
		company_name: "HashPotato",
		icon: "/company/hp-modified.png",
		iconBg: "#383E56",
		date: "2025 - Present",
		points: [
			"Develop full-stack solutions for web and mobile applications using modern JavaScript technologies.",
			"Engineer scalable backend APIs with Node.js, MongoDB, REST, GraphQL, and FastAPI services.",
			"Build production-ready interfaces with Next.js, React Native, Tailwind CSS, and API-driven workflows.",
			"Collaborate with cross-functional teams through standups, testing, reviews, and client communication.",
		],
	},
	{
		title: "Next.js Developer",
		company_name: "LocalReviews",
		icon: "/company/lr-modified.png",
		iconBg: "#E6DEDD",
		date: "2024 - 2025",
		points: [
			"Built high-performance Next.js web applications with scalable frontend architecture.",
			"Integrated APIs and review-management workflows for a SaaS-style customer platform.",
			"Supported backend-facing implementation work when product requirements required full-stack ownership.",
			"Worked remotely with clients and teams through daily standups and delivery-focused communication.",
		],
	},
	{
		title: "Software Developer",
		company_name: "360XpertSolution",
		icon: "/company/360-modified.png",
		iconBg: "#E6DEDD",
		date: "2023 - 2024",
		points: [
			"Delivered full-stack web and mobile features across frontend, backend, SEO, and deployment work.",
			"Led API development tasks and collaborated with designers to turn product ideas into interfaces.",
			"Built interactive 3D experiences using Three.js and React Three Fiber.",
			"Improved responsive UI quality, cross-device behavior, and search visibility for client projects.",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Connect with me on LinkedIn for my professional experience, collaborations, and career updates.",
		name: "Asim Zaheer",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/asim-zaheer-813674228/",
	},
	{
		id: 2,
		testimonial:
			"Explore my GitHub profile for code samples, experiments, and full-stack development work.",
		name: "Asim-Zaheer",
		image: "/tech/github.webp",
		link: "https://github.com/Asim-Zaheer",
	},
];

const projects: {
	name: string;
	description: string;
	role: string;
	impact: string;
	metric: string;
	tags: { name: string; color: string }[];
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
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web" | "React Native";
}[] = [
	{
		name: "MedScan AI",
		description:
			"A collaborative AI healthcare platform that detects diseases from medical scans and supports AI-generated report workflows through separate ML and backend APIs.",
		role: "Collaborative full-stack and backend contribution across the deployed frontend, NestJS backend, ML detection APIs, and report model API integration.",
		impact:
			"Brings together a medical scan frontend, backend services, and ML APIs into one AI-assisted diagnostic workflow.",
		metric: "Deployed frontend plus 3 source repositories covering frontend, backend, and report/ML model APIs.",
		caseStudy: {
			problem:
				"Medical image workflows need a clear way to upload scans, run ML predictions, and transform model output into useful report information.",
			solution:
				"Built a collaborative product architecture with a deployed frontend, NestJS backend services, disease-detection model APIs, and report-generation model APIs.",
			highlights: [
				"Deployed AI medical scan frontend",
				"NestJS backend and ML API integration",
				"Separate report model API for generated medical reports",
			],
			challenges: [
				"Coordinating multiple services across frontend, backend, and ML APIs",
				"Keeping AI output structured enough for a professional healthcare-style workflow",
			],
		},
		tags: [
			{ name: "AI/ML", color: "orange-text-gradient" },
			{ name: "NestJS", color: "blue-text-gradient" },
			{ name: "API Integration", color: "green-text-gradient" },
			{ name: "Healthcare", color: "pink-text-gradient" },
		],
		image: "/projectimg/medscan-ai.png",
		source_code_link: "https://github.com/manalimran-12/medScanAi",
		source_links: [
			{ label: "Frontend", url: "https://github.com/manalimran-12/medScanAi" },
			{ label: "Backend", url: "https://github.com/manalimran-12/medScanAi-backend" },
			{ label: "Report API", url: "https://github.com/manalimran-12/reportModelsApi" },
		],
		deploy_link: "https://med-scan-ai-beta.vercel.app/",
		platform: "Vercel",
		availability: "Live",
	},
	{
		name: "SnapOps AI",
		description:
			"A mobile-first AI operations assistant for service businesses, starting with AC and appliance repair teams before expanding into more service niches.",
		role: "Collaborative backend/product engineering for the first product foundation, focused on job, quote, checklist, invoice, customer reply, and report workflows.",
		impact:
			"Turns messy customer inputs like messages, photos, voice notes, and short descriptions into structured operations data.",
		metric: "In-progress product with backend foundation started; mobile app and admin panel planned as the product expands.",
		caseStudy: {
			problem:
				"Small service businesses lose time converting customer messages, photos, and voice notes into jobs, quotes, invoices, replies, and final reports.",
			solution:
				"Started with a niche AC/appliance repair backend foundation that can later support mobile technician workflows and admin operations.",
			highlights: [
				"Mobile-first AI operations product idea",
				"Backend foundation currently in progress",
				"Planned mobile app and admin panel workflow",
			],
			challenges: [
				"Designing flexible backend models for multiple future service niches",
				"Keeping the first niche focused enough to feel sellable and real",
			],
		},
		tags: [
			{ name: "Backend", color: "blue-text-gradient" },
			{ name: "AI Product", color: "orange-text-gradient" },
			{ name: "Mobile-first", color: "green-text-gradient" },
			{ name: "Operations", color: "pink-text-gradient" },
		],
		image: "/projectimg/snapops-ai.svg",
		source_code_link: "https://github.com/manalimran-12/SnapOps-AI",
		source_links: [{ label: "Backend", url: "https://github.com/manalimran-12/SnapOps-AI" }],
		platform: "Web",
		availability: "Source Available",
	},
	{
		name: "AI-Enhanced Developer Portfolio",
		description:
			"A unique portfolio experience with a recruiter fit engine, portfolio assistant, case-study projects, and a skill-to-project proof map.",
		role: "Product strategy, full-stack UI implementation, AI-style matching logic, content architecture, and deployment-ready polish.",
		impact:
			"Turns a static portfolio into an interactive hiring tool that helps recruiters understand role fit faster.",
		metric: "4 interactive portfolio systems: role matching, assistant Q&A, case studies, and skill proof mapping.",
		caseStudy: {
			problem:
				"Most developer portfolios show the same sections and make recruiters manually connect skills, projects, and job requirements.",
			solution:
				"Built an AI-style portfolio layer that analyzes job descriptions, answers recruiter questions, maps skills to proof, and presents project case studies.",
			highlights: ["AI-style recruiter fit engine", "Structured portfolio assistant", "Source-available Next.js implementation"],
			challenges: ["Making AI features useful without requiring an API key", "Keeping the experience professional instead of gimmicky"],
		},
		tags: [
			{ name: "Next.js", color: "blue-text-gradient" },
			{ name: "TypeScript", color: "green-text-gradient" },
			{ name: "AI UX", color: "orange-text-gradient" },
			{ name: "Tailwind", color: "pink-text-gradient" },
		],
		image: "/projectimg/portfolio.png",
		source_code_link: "https://github.com/Asim-Zaheer/asim-s-portfolio",
		platform: "Web",
		availability: "Source Available",
	},
	{
		name: "CheckPointSpot",
		description:
			"A sports event mobile app that helps athletes discover events, join activities, and manage participation through a clean React Native experience.",
		role: "React Native feature development, mobile flows, event discovery, and production support.",
		impact: "Helped deliver a real sports event app to Google Play with mobile-first event participation flows.",
		metric: "Google Play release with event discovery and camera-supported workflows.",
		caseStudy: {
			problem: "Sports participants needed a cleaner way to discover events, register, and stay connected from mobile.",
			solution:
				"Built React Native screens and feature flows focused on event lists, camera-supported interactions, and a smooth mobile experience.",
			highlights: ["Production Android release", "Event discovery experience", "Camera-enabled mobile workflow"],
			challenges: ["Designing for different athlete journeys", "Keeping app screens responsive across device sizes"],
		},
		tags: [
			{ name: "React Native", color: "blue-text-gradient" },
			{ name: "Camera", color: "green-text-gradient" },
			{ name: "EventList", color: "orange-text-gradient" },
		],
		image: "/projectimg/cp.PNG",
		platform: "React Native",
		availability: "App Store",
		deploy_link: "https://play.google.com/store/apps/details?id=asia.checkpointspot.app&hl=en",
	},
	{
		name: "KUSA | KIN USA",
		description:
			"A Korean-American community mobile app focused on connection, location-aware discovery, and practical lifestyle features.",
		role: "React Native development, location-aware features, API integration, and React Query data flows.",
		impact: "Supported a community mobile product shipped on Google Play for Korean-American users.",
		metric: "Production mobile app with location-aware community features.",
		caseStudy: {
			problem: "The product needed a dependable mobile experience for community discovery and member connection.",
			solution:
				"Implemented mobile UI and data-fetching flows with React Native and React Query, including location-driven experiences.",
			highlights: ["Community-first mobile app", "Location-based features", "React Query state and caching"],
			challenges: ["Balancing community content with simple navigation", "Handling remote data states gracefully"],
		},
		tags: [
			{ name: "React Native", color: "green-text-gradient" },
			{ name: "Location", color: "orange-text-gradient" },
			{ name: "React Query", color: "blue-text-gradient" },
		],
		image: "/projectimg/kusa.png",
		platform: "React Native",
		availability: "App Store",
		deploy_link: "https://play.google.com/store/apps/details?id=com.KUSA&hl=en&pli=1",
	},
	{
		name: "Local Reviews",
		description:
			"A review management platform that helps businesses collect, manage, and promote customer reviews from one dashboard.",
		role: "Next.js development, dashboard UI, API integration, and production feature delivery.",
		impact: "Built client-facing review management workflows that help businesses collect and promote reputation signals.",
		metric: "SaaS-style dashboard for review collection, management, and promotion.",
		caseStudy: {
			problem: "Businesses needed one place to manage review collection, reputation workflows, and customer-facing trust signals.",
			solution:
				"Delivered a responsive Next.js platform with structured dashboard flows and API-connected review management features.",
			highlights: ["Review management dashboard", "Production Next.js application", "Business reputation workflows"],
			challenges: ["Designing a complex SaaS workflow clearly", "Keeping dashboard interactions fast and understandable"],
		},
		tags: [
			{ name: "Next.js", color: "green-text-gradient" },
			{ name: "Tailwind", color: "blue-text-gradient" },
			{ name: "SaaS", color: "orange-text-gradient" },
		],
		image: "/projectimg/lr.PNG",
		platform: "Vercel",
		availability: "Live",
		deploy_link: "https://dev.localreviews.com/",
	},
	{
		name: "Al-Jidar Steel Manufacturing",
		description:
			"A professional multi-page website for a Saudi manufacturing company, built with responsive UI, product communication, and SEO structure.",
		role: "End-to-end website design and development with responsive UI, SEO structure, and deployment.",
		impact: "Created a professional digital presence for an industrial manufacturing business with clear product communication.",
		metric: "Responsive multi-page business website with SEO-focused structure.",
		caseStudy: {
			problem: "The company needed a credible web presence that communicated industrial products clearly across devices.",
			solution:
				"Designed and built a multi-page Next.js site with Tailwind styling, responsive layouts, and SEO-friendly structure.",
			highlights: ["Industrial brand presentation", "Responsive product pages", "SEO-focused implementation"],
			challenges: ["Making technical products easy to scan", "Balancing industrial tone with modern UI"],
		},
		tags: [
			{ name: "Next.js", color: "blue-text-gradient" },
			{ name: "Material UI", color: "orange-text-gradient" },
			{ name: "SEO", color: "green-text-gradient" },
		],
		image: "/projectimg/jidar.PNG",
		platform: "Vercel",
		availability: "Live",
		deploy_link: "https://al-jidar.vercel.app/",
	},
	{
		name: "Mefic Financial Platform",
		description:
			"A responsive financial services landing experience presenting investment services, asset management, private equity, and real estate.",
		role: "Frontend development, animation, responsive design, and interactive presentation.",
		impact: "Translated a financial services concept into a polished landing experience with modern visual storytelling.",
		metric: "Financial landing page concept with animation and responsive service storytelling.",
		caseStudy: {
			problem: "A financial services brand needed a polished landing experience to explain investment services.",
			solution:
				"Built a responsive Next.js landing page with motion and interactive visual elements for stronger engagement.",
			highlights: ["Financial landing page", "Framer Motion interactions", "Responsive service storytelling"],
			challenges: ["Keeping the interface professional", "Presenting multiple investment services without clutter"],
		},
		tags: [
			{ name: "Next.js", color: "blue-text-gradient" },
			{ name: "Tailwind", color: "green-text-gradient" },
			{ name: "Framer Motion", color: "orange-text-gradient" },
			{ name: "Three JS", color: "pink-text-gradient" },
		],
		image: "/projectimg/mefic.PNG",
		platform: "Vercel",
		availability: "Private/Internal",
	},
	{
		name: "Level Five IT Boutique",
		description:
			"A premium consultancy website for a Riyadh-based IT firm, built with Next.js, animation, and interactive brand storytelling.",
		role: "Next.js development, animation, 3D/interactive sections, and deployment.",
		impact: "Built a premium consultancy website that communicates credibility, agility, and strategic technology delivery.",
		metric: "Premium consultancy website with motion, GSAP, and Three.js-enhanced sections.",
		caseStudy: {
			problem: "The consultancy needed a distinctive website that felt premium while explaining its lean technology model.",
			solution:
				"Developed a Next.js experience with Tailwind, Framer Motion, GSAP, and Three.js-driven visual polish.",
			highlights: ["Consultancy brand website", "Animated interaction system", "Three.js-enhanced presentation"],
			challenges: ["Maintaining performance with animation", "Making a boutique brand feel credible and focused"],
		},
		tags: [
			{ name: "Next.js", color: "blue-text-gradient" },
			{ name: "Tailwind", color: "green-text-gradient" },
			{ name: "Three JS", color: "orange-text-gradient" },
			{ name: "Framer Motion", color: "green-text-gradient" },
			{ name: "GSAP", color: "pink-text-gradient" },
		],
		image: "/projectimg/level.PNG",
		platform: "Vercel",
		availability: "Private/Internal",
	},
];

export { services, technologies, experiences, testimonials, projects };
