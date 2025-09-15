// ➜ src/app/page.tsx
import {
  achievements,
  education,
  experiences,
  languages,
  profile,
  projects,
  softSkills,
  summary,
  techSkills,
} from "./lib/data";

export default function Home() {
  return (
    <>
      {/* Hero / About */}
      <section id="about" className="space-y-4">
        <h1 className="text-3xl font-bold">{profile.name}</h1>
        <p className="text-lg opacity-80">
          {profile.title} • {profile.location}
        </p>

        <div className="flex flex-wrap gap-3 text-sm">
          <a className="underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <span>•</span>
          <a
            className="underline"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            className="underline"
            href={profile.cvUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            Download CV (PDF)
          </a>
          <span>•</span>
          <span>{profile.phone}</span>
        </div>

        <p className="leading-relaxed max-w-prose whitespace-pre-line">
          {summary}
        </p>

        <div className="flex gap-3">
          <a className="px-4 py-2 rounded-lg bg-black text-white" href="#projects">
            View Projects
          </a>
          <a className="px-4 py-2 rounded-lg border" href="#contact">
            Contact
          </a>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-24 py-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="space-y-6">
          {experiences.map((e) => (
            <li key={`${e.company}-${e.role}`} className="rounded-xl border p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-medium">
                  {e.role} — {e.company}
                </p>
                <div className="text-sm opacity-70 flex items-center gap-2">
                  {e.location && <span>{e.location}</span>}
                  <span>•</span>
                  <span>{e.period}</span>
                </div>
              </div>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 py-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.name}
              className="rounded-xl border p-5 hover:shadow-sm transition"
            >
              <h3 className="font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-90">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border px-2 py-1 opacity-80">
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-block text-sm underline"
                >
                  Open
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-24 py-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="space-y-4">
          {education.map((ed) => (
            <li key={ed.school} className="rounded-xl border p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-medium">
                  {ed.degree} — {ed.school}
                </p>
                <span className="text-sm opacity-70">{ed.period}</span>
              </div>
              {ed.details && (
                <ul className="mt-2 list-disc pl-5 text-sm opacity-90">
                  {ed.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 py-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
          <SkillGroup title="Programming" items={techSkills.programming} />
          <SkillGroup title="Automation" items={techSkills.automation} />
          <SkillGroup title="API" items={techSkills.api} />
          <SkillGroup title="Performance" items={techSkills.performance} />
          <SkillGroup title="CI/CD & DevOps" items={techSkills.cicd} />
          <SkillGroup title="Test & Project Mgmt" items={techSkills.management} />
          <SkillGroup title="Cloud" items={techSkills.cloud} />
          <SkillGroup title="Soft Skills" items={softSkills} />
          <SkillGroup title="Languages" items={languages} />
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="scroll-mt-24 py-12">
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {achievements.map((a) => (
            <li key={a} className="rounded-lg border px-3 py-2 text-sm">
              {a}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="opacity-90">
          Email:{" "}
          <a className="underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </p>
        <p className="opacity-90">Phone: {profile.phone}</p>
        <p className="opacity-90">
          LinkedIn:{" "}
          <a
            className="underline"
            target="_blank"
            rel="noreferrer noopener"
            href={profile.linkedin}
          >
            /hemendra-vishnoi
          </a>
        </p>
        <p className="opacity-90">
          Download CV:{" "}
          <a
            className="underline"
            href={profile.cvUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            PDF
          </a>
        </p>
      </section>
    </>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border p-4">
      <h3 className="font-medium mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="rounded-full border px-3 py-1 opacity-80">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
