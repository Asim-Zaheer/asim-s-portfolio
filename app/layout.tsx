import type { Metadata } from "next";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
	title: "Asim Zaheer | Full-Stack Developer",
	description:
		"AI-enhanced portfolio of Asim Zaheer, a full-stack developer building Next.js, React Native, backend API, and 3D web experiences.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
