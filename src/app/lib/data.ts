export type Experience = {
role: string;
company: string;
location?: string;
period: string;
bullets: string[];
};
export type Project = {
name: string;
summary: string;
tags: string[];
link?: string;
};


export type Education = {
school: string;
degree: string;
period: string;
details?: string[];
};
export const profile = {
name: "Hemendra Vishnoi",
title: "Senior Automation Engineer (SDET)",
location: "Dubai, United Arab Emirates",
email: "hemendravishnoi@gmail.com",
phone: "+971 50 867 5691",
linkedin: "https://www.linkedin.com/in/hemendra-vishnoi-60419211a/",
cvUrl: "/HemendraVishnoi.pdf",
};


export const summary = `Experienced and results-driven SDET with 15+ years in test automation and software quality engineering.
Skilled in designing scalable automation frameworks and improving QA processes using industry-standard tools.
Proven success in enhancing test efficiency, software quality, and delivery speed across financial and enterprise platforms.
Strong leadership in cross-functional teams, aligning testing strategies with business goals in Agile, high-impact environments.`;

export const experiences: Experience[] = [
{
role: "Senior Automation Engineer",
company: "GAC Group Holdings HQ (UAE)",
location: "Dubai, United Arab Emirates",
period: "Feb 2023 – Present",
bullets: [
"Managing manual and automated testing strategies to ensure high‑quality, timely releases across web and API platforms for a financial product used in 140 countries.",
"Led end‑to‑end QA strategy: test planning, manual execution, and automation coverage across multiple delivery streams (70%+ automation).",
"Designed and developed scalable automation frameworks; mentored QA engineers on best practices in Agile Scrum.",
"Tools: SpecFlow (BDD), xUnit, .NET, Selenium, Appium, RestSharp, JMeter, Xray, JIRA, Azure Test Plans.",
],
},{
role: "Assistant Vice President",
company: "J.P. Morgan Chase & Co.",
location: "India",
period: "Jul 2020 – Dec 2022",
bullets: [
"Architected automation ecosystem for Collateral Central platform handling high‑value client assets and multi‑currency workflows.",
"Led SDET team: development, code reviews, sprint deliverables, and best practices.",
"Implemented testing pyramid (UI, Integration, API, performance, DB) to ensure end‑to‑end quality.",
"Tools: Selenium (Java), Rest Assured, Mockito, Maven, Jenkins, JMeter, JIRA.",
],
},{
role: "Lead SDET",
company: "Leadventure",
location: "India",
period: "Feb 2018 – Jul 2020",
bullets: [
"Drove automation for DOMINO platform across UI and backend layers; increased coverage and ROI by 45%.",
"Integrated automated tests into CI/CD, reducing deployment time by 20% and accelerating releases.",
"Adopted Docker & Kubernetes for parallel execution (run time ↓ 60%).",
"Tools: Selenium, TestRail, Docker, Kubernetes.",
],
},{
role: "Senior SDET",
company: "Virtusa (NatWest Group)",
location: "India",
period: "Feb 2018 – Jul 2020",
bullets: [
"Led automation for MIVAL platform ensuring accurate independent financial valuations.",
"Built UI automation with Protractor (Selenium), Jasmine, Cucumber (JavaScript).",
"Reduced external service costs by 20% via API automation and advanced mocking in SOAP UI/Groovy.",
"Improved coverage by 15% and reduced repetitive bugs by 40% via structured reporting.",
],
},{
role: "Senior RPA Developer",
company: "Infosys",
location: "India",
period: "Feb 2013 – Sep 2015",
bullets: [
"Automated invoice processing (Automation Anywhere, Selenium with .NET, Apache PDFBox) achieving 150% capacity increase.",
"Improved client response time by 35% with automated email notifications.",
],
},
{
role: "Software Developer",
company: "Infosys",
location: "India",
period: "Jun 2010 – Feb 2013",
bullets: [
"Delivered web apps using ASP.NET, JavaScript, HTML, CSS, and SQL Server.",
"Led cross‑functional teams; accelerated delivery by 30% using Agile best practices.",
],
},
];

export const projects: Project[] = [
{
name: "Collateral Central Automation Suite",
summary: "End‑to‑end framework validating asset movements & multi‑currency flows; testing pyramid with UI/API/perf/DB.",
tags: ["Selenium", "Rest Assured", "JMeter", "Jenkins", "Java"],
},
{
name: "DOMINO Platform QA Automation",
summary: "CI‑first automation with Docker/K8s parallelism; coverage & ROI up 45%, run time down 60%.",
tags: ["Selenium", "Docker", "Kubernetes", "TestRail"],
},
{
name: "MIVAL Valuations QA",
summary: "Protractor/Jasmine/Cucumber suite ensuring accurate financial valuations with service mocks to cut costs by 20%.",
tags: ["Protractor", "Jasmine", "CucumberJS", "SOAP UI", "Groovy"],
},
{
name: "Invoice Processing RPA",
summary: "Automation Anywhere + .NET + PDFBox pipeline delivering 150% throughput increase and faster client response.",
tags: ["Automation Anywhere", ".NET", "Apache PDFBox", "RPA"],
},
];


export const education: Education[] = [
{
school: "Birla Institute of Technology and Science, Pilani",
degree: "M.Tech (Computer Science)",
period: "2022 – 2024",
details: ["Key Subjects: Project Management, Agile, AI/ML, Software Quality Management"],
},
{
school: "Jaypee University of Information Technology, Solan",
degree: "B.Tech",
period: "2006 – 2010",
},
];


export const techSkills = {
programming: ["C# (.NET)", "Java", "TypeScript", "JavaScript", "HTML", "CSS", "SQL", "NoSQL", "Cassandra"],
automation: ["Selenium", "Playwright", "Appium", "Protractor", "Jasmine", "Cucumber", "SpecFlow", "xUnit", "JUnit", "NUnit", "TestNG"],
api: ["RestAssured", "RestSharp", "SOAP UI", "Groovy"],
performance: ["JMeter", "LoadRunner"],
cicd: ["Azure DevOps", "Jenkins", "Maven", "Git", "Bitbucket", "GitHub", "SVN", "Docker", "Kubernetes"],
management: ["Agile/Scrum/Kanban", "JIRA", "Azure Test Plans", "XRay", "TestRail", "HP-QC"],
cloud: ["Azure (App Services, Functions)", "AWS (EC2, Lambda, S3)"]
};


export const softSkills = [
"Team Leadership", "Agile/Scrum Expertise", "Communication", "Training & Development",
"Decision Making", "Cross‑Functional Collaboration", "Strategic Thinking",
"Risk‑Based Testing", "Root Cause Analysis", "Tool Selection", "Test Management",
"Troubleshooting", "Result Driven"
];


export const achievements = [
"Star award at Infosys (org‑level)",
"Kudos award (client) at Infosys",
"Runner‑up Hackathon at Infosys (org‑level)",
"Extra Miler award at Leadventure",
"Spot award at J.P. Morgan",
"Global Hackathon winner",
];


export const languages = ["English", "Hindi"];