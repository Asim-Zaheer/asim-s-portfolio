"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ComputersCanvas } from "./canvas";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
	return (
		<section className="relative mx-auto min-h-[760px] w-full overflow-hidden sm:h-screen sm:min-h-[720px]">
			<div className="paddingX absolute inset-x-0 top-[96px] z-10 mx-auto flex max-w-7xl flex-row items-start gap-4 sm:top-[120px] sm:gap-5">
				<div className="mt-4 flex flex-col items-center justify-center sm:mt-5">
					<div className="h-4 w-4 rounded-full bg-[#915EFF] sm:h-5 sm:w-5" />
					<div className="violet-gradient h-40 w-1 sm:h-72 lg:h-80" />
				</div>
				<div className="min-w-0 max-w-[820px]">
					<h1 className="heroHeadText max-w-[12ch] text-white sm:max-w-none">
						Hi, I&apos;m <span className="text-[#915EFF] ">Asim Zaheer</span>
					</h1>
					<p className="heroSubText min-h-[28px]">
						<Typewriter
							words={[
								"A Web Developer",
								"A React Native Developer",
								"A 3D Enthusiast",
								"A Problem Solver",
								"GraphQL/Rest Api Developer",
								"A Software Engineer",
							]}
							loop={0}
							cursor
							cursorStyle="|"
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1500}
						/>
					</p>
					<div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
						<Link
							href="#ai-match"
							className="rounded-md bg-[#00cea8] px-4 py-3 text-sm font-bold text-primary transition hover:bg-[#20e6c0] sm:px-5"
						>
							Analyze my fit
						</Link>
						<Link
							href="#projects"
							className="rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm font-bold text-white transition hover:border-white/50 sm:px-5"
						>
							View projects
						</Link>
					</div>
				</div>
			</div>
			<div className="absolute inset-x-0 bottom-0 h-[430px] sm:h-[520px] lg:h-[620px]">
				<ComputersCanvas />
			</div>
			<div className="absolute bottom-8 hidden w-full items-center justify-center sm:flex">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
