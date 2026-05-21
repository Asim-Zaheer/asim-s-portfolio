"use client";
import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`paddingX fixed top-0 z-20 flex w-full items-center py-3 transition-colors sm:py-4 ${
				scrolled ? "bg-primary/95 backdrop-blur" : "bg-transparent"
			}`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					className="flex min-w-0 items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<Link href="https://github.com/Asim-Zaheer">
						<Image
							src="/logo.png"
							width={64}
							height={64}
							alt="logo"
							priority
							className="h-12 w-12 rounded-full object-contain sm:h-16 sm:w-16"
						/>
					</Link>
					<p className="flex min-w-0 cursor-pointer text-[16px] font-bold text-white sm:text-[18px]">
						M. &nbsp; <span className="hidden truncate xs:block">Asim Zaheer</span>
					</p>
				</div>

				<ul className="hidden list-none flex-row gap-5 lg:flex xl:gap-6">
					{navLinks.map((nav) => (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<li
							key={nav.id}
							className={`${
								active === nav.title ? "text-white" : "text-secondary"
							} hover:text-white text-[16px] font-medium cursor-pointer`}
							onClick={() => setActive(nav.title)}
						>
							<Link href={`#${nav.id}`}>{nav.title}</Link>
						</li>
					))}
				</ul>
				<div className="mt-1 hidden xl:block">
					<ResumeButton />
				</div>

				<div className="flex flex-1 items-center justify-end lg:hidden">
					<Image
						src={toggle ? "/close.svg" : "/menu.svg"}
						width={28}
						height={28}
						alt="menu"
						className="w-[28px] h-[28px] object-contain"
						onClick={() => setToggle(!toggle)}
					/>

					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} black-gradient absolute right-4 top-16 z-10 my-2 max-h-[calc(100vh-88px)] min-w-[220px] overflow-y-auto rounded-xl p-5 shadow-card`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
							{navLinks.map((nav) => (
								// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] ${
										active === nav.title ? "text-white" : "text-secondary"
									}`}
									onClick={() => {
										setToggle(!toggle);
										setActive(nav.title);
									}}
								>
									<Link href={`#${nav.id}`}>{nav.title}</Link>
								</li>
							))}
							<li>
								<div className="mt-2">
									<ResumeButton />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
