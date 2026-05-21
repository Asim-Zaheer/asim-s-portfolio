"use client";

import { fadeIn, textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { SectionWrapper } from "./HigherOrderComponents";

type ServiceCardProps = {
	index: number;
	title: string;
	icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
	return (
		<Tilt options={{ max: 18, scale: 1, speed: 450 }} className="w-full xs:w-[250px]">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="green-pink-gradient w-full rounded-lg p-px shadow-card"
			>
				<div className="flex min-h-[220px] flex-col items-center justify-evenly rounded-lg bg-tertiary px-6 py-5 sm:min-h-[260px] sm:px-10">
					<Image src={icon} width={64} height={64} alt={title} className="h-16 w-16 object-contain" />
					<h3 className="text-center text-[18px] font-bold leading-snug text-white sm:text-[20px]">{title}</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Introduction</p>
				<h2 className="sectionHeadText">Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
			>
				I am Asim Zaheer, a full-stack developer building high-performance web and
				mobile applications with Next.js, React, React Native, TypeScript, Tailwind
				CSS, Node.js, REST APIs, GraphQL, FastAPI, MongoDB, and PostgreSQL. I also
				create interactive 3D web experiences with Three.js and React Three Fiber,
				giving me a strong mix of product engineering, backend integration, mobile
				delivery, and visual polish.
			</motion.p>

			<div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-8">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
