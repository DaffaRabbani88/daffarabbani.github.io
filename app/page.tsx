"use client";

import { useState } from "react";
import { portfolioData } from "../data/portfolio";
import {
  Download,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Code2,
  BookOpen,
  Cpu,
} from "lucide-react";

const withBasePath = (path: string) =>
  path.startsWith("http")
    ? path
    : `/daffarabbani.github.io${path.startsWith("/") ? path : `/${path}`}`;

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
  </svg>
);

const WhatsappIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.758.458 3.473 1.328 4.988L2 22l5.188-1.359a9.93 9.93 0 0 0 4.843 1.258h.004c5.515 0 9.969-4.453 9.969-9.969A9.93 9.93 0 0 0 19.08 4.93 9.914 9.914 0 0 0 12.031 2zm5.82 14.273c-.246.691-1.434 1.324-1.988 1.406-.512.078-1.16.11-1.871-.117-.434-.137-.988-.32-1.703-.629-2.996-1.293-4.953-4.312-5.102-4.512-.148-.199-1.219-1.621-1.219-3.094 0-1.473.77-2.195 1.043-2.496.273-.301.598-.375.797-.375.199 0 .398.004.574.012.184.008.43-.07.672.512.246.598.844 2.062.918 2.211.074.148.125.324.023.523-.098.199-.148.324-.297.496-.148.176-.312.391-.445.523-.148.148-.305.309-.133.605.176.297.777 1.281 1.668 2.074 1.148 1.023 2.113 1.34 2.41 1.488.297.148.473.125.648-.074.176-.199.746-.871.945-1.172.199-.297.398-.25.672-.148.273.098 1.742.82 2.043.969.297.148.496.223.57.348.074.125.074.723-.172 1.414z" />
  </svg>
);

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<"all" | "ai" | "app">("all");
  const { personal, projects, education, skills,workExperiences, researchExperience, leadershipAndCommunity, } =
    portfolioData;

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight text-white">
            Daffa <span className="text-indigo-400">Rabbani</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#certifications" className="hover:text-white transition">
              Certifications
            </a>
          </nav>
         <a
  href={withBasePath("/CV_DaffaRabbani.pdf")}
  download="CV_DaffaRabbani.pdf"
  className="..." // biarkan class Tailwind yang sudah ada tetap sama
>
  Download CV
</a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Kolom Teks Kiri */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Open to Work • Data, AI & Software Engineering
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Hi, I&apos;m <span className="text-indigo-400">{personal.name}</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-medium mb-6">
              {personal.role}
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              {personal.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition"
              >
                View Featured Projects
              </a>
              <a
               href={personal.whatsapp}
                target="_blank"
               rel="noreferrer"
               className="px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-medium text-sm hover:border-emerald-500/60 hover:text-emerald-400 transition flex items-center gap-2"
           >
               <WhatsappIcon className="w-4 h-4 text-emerald-400"/>
               Contact Me (WhatsApp)
              </a>
              <div className="flex items-center gap-4 ml-2 text-slate-400">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="hover:text-white transition"
                >
                  <GithubIcon />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-white transition"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:text-white transition"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Kolom Foto Profil Kanan */}
          <div className="shrink-0">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shadow-xl shadow-indigo-500/10 bg-slate-900">
              <img
                src={withBasePath("/profile.jpg")}
                alt={personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/80"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Code2 className="w-6 h-6 text-indigo-400" />
              Featured Projects
            </h2>
            <p className="text-sm text-slate-400">
              Academic research and real-world software engineering builds.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-medium">
            {[
              { id: "all", label: "All Projects" },
              { id: "ai", label: "AI & Computer Vision" },
              { id: "app", label: "Web & Mobile App" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as "all" | "ai" | "app")}
                className={`px-3.5 py-1.5 rounded-md transition ${
                  activeFilter === tab.id
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <article
              key={idx}
              className="group rounded-xl bg-slate-900/60 border border-slate-800 p-6 hover:border-indigo-500/50 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-indigo-400 font-medium mb-3">
                  <span>{project.categoryLabel}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs rounded bg-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-300 pt-4 border-t border-slate-800/80">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-indigo-400 transition flex items-center gap-1.5"
                    >
                      <GithubIcon className="w-3.5 h-3.5" /> Source Code
                    </a>
                  )}
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-indigo-400 transition flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        </section>

        {/* Selected Publications */}
      <section
        id="publications"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/80"
      >
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-400" />
            Selected Publications
          </h2>
          <p className="text-sm text-slate-400">
            Peer-reviewed scientific articles and academic research papers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioData.publications.map((pub, idx) => (
            <article
              key={idx}
              className="group rounded-xl bg-slate-900/60 border border-slate-800 overflow-hidden hover:border-indigo-500/50 transition flex flex-col justify-between"
            >
              <div>
                {/* Preview Gambar Halaman Artikel */}
                <div className="relative h-44 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Konten Artikel */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 text-xs text-indigo-400 font-medium mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">
                      {pub.category}
                    </span>
                    <span className="text-slate-400">{pub.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition mb-1.5 line-clamp-2">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-slate-300/90 font-medium mb-3">
                    {pub.venue}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {pub.description}
                  </p>
                </div>
              </div>

              {/* Tags & Tombol Read Paper */}
              <div className="px-5 pb-5">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pub.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[11px] rounded bg-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-3 border-t border-slate-800/80">
                  <a
                    href={pub.paperUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-slate-300 hover:text-indigo-400 transition inline-flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {pub.paperUrl.includes("play.google.com")
                      ? "View on Play Store"
                      : "Read paper"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Highlights */}
      <section
        id="highlights"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/80"
      >
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-indigo-400" />
            Technical highlights
          </h2>
          <p className="text-sm text-slate-400">
            What I can own from first commit to deployment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.technicalHighlights.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 hover:border-indigo-500/50 transition"
            >
              <h3 className="text-base font-bold text-white mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section
        id="certifications"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/80"
      >
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <Award className="w-6 h-6 text-indigo-400" />
            Certifications & Credentials
          </h2>
          <p className="text-sm text-slate-400">
            Verified national and industry certifications across data, software, and infrastructure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-slate-900/60 border border-slate-800 p-5 hover:border-indigo-500/50 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-indigo-400 font-medium mb-2">
                  <span>{cert.category}</span>
                  <span className="text-slate-400">{cert.date}</span>
                </div>
                <h3 className="text-sm font-bold text-white leading-snug mb-1.5">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400">{cert.issuer}</p>
              </div>

              {cert.credentialUrl && (
                <div className="pt-3 mt-3 border-t border-slate-800/80">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-slate-300 hover:text-indigo-400 transition inline-flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> View credential
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

     {/* Experience & Education */}
      <section
        id="experience"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/80"
      >
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-indigo-400" />
            Experience &amp; Education
          </h2>
          <p className="text-sm text-slate-400">
            Hands-on engineering and research first, followed by leadership and academic background.
          </p>
        </div>

        <div className="space-y-6">
          {/* 1. Kartu Pengalaman Magang / Kerja */}
          {workExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 hover:border-indigo-500/40 transition grid md:grid-cols-12 gap-6"
            >
              <div className="md:col-span-4">
                <h3 className="text-lg font-bold text-white leading-snug">
                  {exp.role}
                </h3>
                <p className="text-sm text-slate-400 mt-1.5">
                  {exp.organization}
                </p>
                <p className="text-xs text-slate-500 mt-1">{exp.period}</p>
              </div>

              <div className="md:col-span-8">
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                    >
                      <span className="w-2 h-2 rounded-sm bg-cyan-400 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* 2. Kartu Research Experience */}
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 md:p-8 hover:border-indigo-500/40 transition grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <h3 className="text-lg font-bold text-white leading-snug">
                {researchExperience.role}
              </h3>
              <p className="text-sm text-slate-400 mt-1.5">
                {researchExperience.subtitle}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {researchExperience.period}
              </p>
            </div>

            <div className="md:col-span-8 divide-y divide-slate-800/80">
              {researchExperience.items.map((item, rIdx) => (
                <div
                  key={rIdx}
                  className={
                    rIdx === 0
                      ? "pb-5"
                      : rIdx === researchExperience.items.length - 1
                      ? "pt-5"
                      : "py-5"
                  }
                >
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1.5">
                    {item.summary}
                  </p>
                  {item.publicationUrl && (
                    <a
                      href={item.publicationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-xs font-medium text-cyan-400 hover:text-cyan-300 transition mt-2"
                    >
                      View publication
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3. Kartu Organisasi & Komunitas (2 Kolom Sejajar) */}
          <div className="grid md:grid-cols-2 gap-6">
            {leadershipAndCommunity.map((card, cIdx) => (
              <div
                key={cIdx}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 md:p-7 hover:border-indigo-500/40 transition"
              >
                <h3 className="text-base font-bold text-white leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 mb-5">
                  {card.subtitle}
                </p>

                <ul className="space-y-3">
                  {card.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <span className="w-2 h-2 rounded-sm bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 4. Education Card */}
          <div className="p-6 rounded-xl bg-slate-900/40 border border-emerald-500/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                {education.degree}
              </h3>
              <span className="text-xs font-semibold text-emerald-400">
                {education.period}
              </span>
            </div>
            <div className="text-sm text-slate-300 font-medium mb-2">
              {education.institution} — GPA:{" "}
              <strong className="text-white">{education.gpa}</strong>
            </div>
            <p className="text-xs text-slate-400">{education.note}</p>
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section
        id="skills"
        className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-800/80"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Technical Skills
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2.5">
                  AI & Data Science
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  {skills.aiData.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2.5">
                  Software Development
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  {skills.softwareDev.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2.5">
                  Infrastructure & Tools
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  {skills.toolsInfra.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-12 text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © <span>© 2026 {personal.name}. All rights reserved.</span>
          </p>
          <div className="flex items-center gap-6 text-slate-400">
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-white transition"
            >
              {personal.email}
            </a>
            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition"
            >
              {personal.phone}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}