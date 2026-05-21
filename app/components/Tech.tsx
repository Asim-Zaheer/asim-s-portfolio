"use client";
import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import { BallCanvas } from "./canvas";

const Tech = () => {
	return (
		<div className="grid grid-cols-3 justify-items-center gap-6 sm:grid-cols-4 md:grid-cols-5 lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:gap-10">
			{technologies.map((technology) => (
				<div className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28" key={technology.name}>
					<BallCanvas icon={technology.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
