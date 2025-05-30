export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
	{
		title: "Modelling",
		icon: "/backend.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/ql	.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
	
];

const experiences = [
	{
		title: "Associate Software Engineer",
		company_name: "At HashPotatpo",
		icon: "/company/hp-modified.png",
		iconBg: "#383E56",
		date: "2025 -  Present",
		points: [
			"Developed full-stack solutions for web and mobile applications using modern technologies.",
			"Engineered scalable backend APIs with Node js , mongo DB ",
			"Performed thorough testing and assisted in the management and optimization of web applications.",
			"Collaborated closely with cross-functional teams to deliver high-quality, maintainable code..",
			"Positive Business Impact: Contributed to +54.25% sales and overall business growth through the improved website."
		],
	},
	{
		title: "Next.JS Developer",
		company_name: "At LocalReviews",
		icon: "/company/lr-modified.png",
		iconBg: "#E6DEDD",
		date: "2024 - 2025",
		points: [
			"Remote Software Developer working on Next.js web applications",
			"building high-performance, scalable solutions with seamless API integration and a focus on exceptional user experiences.",
			"Looked in to backend also on purpose ",
			"Daily meeting , stands up and communicate with clients"
		],
	},
	{
		title: "Software Developer",
		company_name: "Way to Web Pvt. Ltd.",
		icon: "/company/360-modified.png",
		iconBg: "#E6DEDD",
		date: "2023 - 2024",
		points: [
			"Full-stack Web and App Developer including modeling",
			"Back-end, leading API development and collaborating with designers.",
			"Search Engine Optimization.",
			"Modeling on Three JS,React Three Fibre.",
			"Collaborate with developers to bring designs to life."
		],
	},
];

const testimonials = [
	// {
	// 	id: 1,
	// 	testimonial:
	// 		"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
	// 	name: "Om Patel",
	// 	image: "/socialmedia/behance.svg",
	// 	link: "https://www.behance.net/omthecreator",
	// },
	{
		id: 1,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Asim Zaheer",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/asim-zaheer-813674228/",
	},
	// {
	// 	id: 3,
	// 	testimonial:
	// 		"Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
	// 	name: "Om Patel",
	// 	image: "/socialmedia/dribble.svg",
	// 	link: "https://dribbble.com/om2121",
	// },
	// {
	// 	id: 4,
	// 	testimonial:
	// 		"Also do check out my UI/UX Portfolio where I have shared by design studies.",
	// 	name: "Om Patel",
	// 	image: "/socialmedia/portfolio.svg",
	// 	link: "https://omthecreator.netlify.app/",
	// },
	{
		id: 2,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Asim-Zaheer",
		image: "/tech/github.webp",
		link: "https://github.com/Asim-Zaheer",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web" | "React Native";
}[] = [
	{
		name: "CheckPointSpot - Your Race Starts Here ",
		description:
			"Stay ahead of your sports with CheckPointSpot, the all-in-one app designed for every sports enthusiasts. Whether you're a seasoned athlete, a casual enthusiast, or just starting your fitness journey, CheckPointSpot is designed to provide you with a seamless and enhanced experience in joining sports events",
		tags: [
			{
				name: "React Native",
				color: "blue-text-gradient",
			},
			{
				name: "Camera",
				color: "green-text-gradient",
			},
			{
				name: "EventList",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/cp.PNG",
		platform: "Vercel",
		deploy_link: "https://play.google.com/store/apps/details?id=asia.checkpointspot.app&hl=en",
	},
	{
		name: "KUSA | KIN USA",
		description:
			"Discover KUSA, the Korean-American community app that enhances your American lifestyle with abundance and vitality. Connect with fellow members, fostering warm neighborly relationships. Experience the power of three key features within our vibrant community.",
		tags: [
			{
				name: "React Native",
				color: "green-text-gradient",
			},
			{
				name: "Location",
				color: "orange-text-gradient",
			},
			{
				name: "React-Query",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/kusa.png",
		// source_code_link: "https://github.com/omunite215/React-Admin-DashBoard",
		platform: "Vercel",
		deploy_link: "https://play.google.com/store/apps/details?id=com.KUSA&hl=en&pli=1",
	},
	{
		name: "LOCAL REVIEWS",
		description:
			"I developed and deployed the Local Reviews platform, a comprehensive review management system designed to help businesses collect, manage, and promote customer reviews across various platforms. Built with Next.js for the frontend, the application offers a seamless user experience, enabling businesses to enhance their online reputation and drive sales.",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
			{
				name: "Licenses",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/lr.PNG",
		// source_code_link: "https://github.com/omunite215/hoobank",
		platform: "Vercel",
		deploy_link: "https://dev.localreviews.com/",
	},
	{
		name: "Al-Jidar Steel Manufacturing",
		description:
			"I designed and developed a professional, multi-page website for Al-Jidar Steel Manufacturing, a Saudi-based company specializing in gypsum/drywall accessories. Utilizing Next.js and Tailwind CSS, the site features a clean, modern design that aligns with the industrial aesthetic. Providing comprehensive information about the company's offerings. The website is fully responsive, SEO-optimized, and ensures cross-browser compatibility, enhancing user experience across all devices.",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "Stripe",
				color: "green-text-gradient",
			},

		],
		image: "/projectimg/jidar.PNG",
		// source_code_link: "https://github.com/omunite215/Project_MERN-Dashboard",
		platform: "Vercel",
		deploy_link: "https://al-jidar.vercel.app/",
	},
	{
		name: "Mefic-Financial & Investment Platform",
		description:
			"Built a responsive landing page designed for a financial services company, likely modeled after MEFIC Capital. It showcases various investment services, including asset management, private equity, and real estate investments.",
		tags: [
			{
				name: "Next.js",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "framer-motion",
				color: "orange-text-gradient",
			},
			{
				name: "Three JS",
				color: "yellow-text-gradient",
			},
		],
		image: "/projectimg/mefic.PNG",
		// source_code_link: "https://github.com/omunite215/Project_Metaverse",
		platform: "Vercel",
		deploy_link: "",
	},
	{
		name: "Level-5 IT botique",
		description:
			" designed, developed, and deployed the official website for Level Five, an IT consultancy based in Riyadh, Saudi Arabia. built with Next.js and Tailwind CSS, the site showcases the company’s boutique approach to technology, emphasizing elegance, agility, and cost-effectiveness. It features sections Level Five’s lean operating model and strategic partnerships. The fully responsive design ensures optimal performance across devices, enhancing user experience and reinforcing the brand’s credibility",
		tags: [
			{
				name: "next",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "Three Js",
				color: "orange-text-gradient",
			},
			{
				name: "Framer Motion",
				color: "green-text-gradient",
			},
			{
				name: "GSAP",
				color: "purple-text-gradient",
			},
		],
		image: "/projectimg/level.PNG",
		// source_code_link: "https://github.com/omunite215/Project_Issue-Tracker",
		platform: "Vercel",
		deploy_link: "",
	},
];

export { services, technologies, experiences, testimonials, projects };
