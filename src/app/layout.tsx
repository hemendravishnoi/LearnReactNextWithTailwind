import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
title: "Hemendra Vishnoi — Senior Automation Engineer (SDET)",
description: "Resume & portfolio of Hemendra Vishnoi — QA automation, .NET, SpecFlow, Playwright, Azure DevOps.",
openGraph: {
title: "Hemendra Vishnoi — Senior Automation Engineer (SDET)",
description: "QA automation, .NET, SpecFlow, Playwright, Azure DevOps.",
type: "profile",
url: "https://your-domain.com",
},
icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en" suppressHydrationWarning>
<body className={`${inter.className} min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100`}>
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b dark:bg-slate-950/70">
<nav className="h-14 flex items-center justify-between">
<a href="#" className="font-semibold">Hemendra Vishnoi</a>
<div className="hidden sm:flex gap-5 text-sm">
<a href="#about" className="opacity-80 hover:opacity-100">About</a>
<a href="#experience" className="opacity-80 hover:opacity-100">Experience</a>
<a href="#projects" className="opacity-80 hover:opacity-100">Projects</a>
<a href="#education" className="opacity-80 hover:opacity-100">Education</a>
<a href="#skills" className="opacity-80 hover:opacity-100">Skills</a>
<a href="#achievements" className="opacity-80 hover:opacity-100">Achievements</a>
<a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
<a href="/HemendraVishnoi.pdf" className="opacity-80 hover:opacity-100 underline" target="_blank">Download CV</a>
</div>
</nav>
</header>
<main className="py-10">{children}</main>
<footer className="border-t py-8 text-sm opacity-70">© {new Date().getFullYear()} Hemendra Vishnoi</footer>
</div>
</body>
</html>
);
}