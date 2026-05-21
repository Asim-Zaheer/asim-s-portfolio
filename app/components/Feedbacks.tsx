"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type FeedbackCardProps = {
	index: number;
	testimonial: string;
	name: string;
	link: string;
	image: string;
};

const FeedbackCard = ({
	index,
	testimonial,
	name,
	link,
	image,
}: FeedbackCardProps) => (
	<motion.div
		variants={fadeIn("", "spring", index * 0.15, 0.65)}
		className="w-full rounded-lg bg-black-200 p-5 sm:p-8 lg:max-w-[360px]"
	>
		<p className="text-white font-black text-[48px]">&quot;</p>

		<div className="mt-1 ">
			<p className="break-words text-[16px] leading-7 tracking-wide text-white sm:text-[18px]">{testimonial}</p>
			<div className="mt-7 flex justify-between items-center gap-1">
				<div className="flex-1 flex flex-col">
					<p className="text-white font-medium text-[16px]">
						<span className="blue-text-gradient">@</span>
						{name}
					</p>
				</div>
				<Link href={link}>
					<Image
						src={image}
						width={40}
						height={40}
						alt={`feedback by ${name}`}
						className="w-10 h-10 rounded-full object-cover "
					/>
				</Link>
			</div>
		</div>
	</motion.div>
);

const Feedbacks = () => {
	return (
		<div className="mt-12 rounded-lg bg-black-100">
			<div className="padding min-h-[240px] rounded-lg bg-tertiary sm:min-h-[300px]">
				<motion.div variants={textVariant()}>
					<h2 className="sectionHeadText">Social Profiles</h2>
					<p className="sectionSubText">
						Click on social media icons to check out..
					</p>
				</motion.div>
			</div>
			<div className="paddingX -mt-16 grid gap-5 pb-14 sm:-mt-20 sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-7">
				{testimonials.map((testimonial, index) => (
					<FeedbackCard key={testimonial.id} index={index} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, "");
