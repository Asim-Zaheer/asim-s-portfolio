import {
	About,
	AIMatchmaker,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	PortfolioAssistant,
	SkillProjectMap,
	Tech,
	Works,
	StarsCanvas,
} from "./components";

export default function Home() {
	return (
		<div className="relative z-0 bg-primary font-sans">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>
			<AIMatchmaker />
			<About />
			<PortfolioAssistant />
			<Works />
			<SkillProjectMap />
			<Experience />
			<Tech />
			<Feedbacks />
			<div className="relative z-0">
				<Contact />
				<StarsCanvas />
			</div>
		</div>
	);
}
