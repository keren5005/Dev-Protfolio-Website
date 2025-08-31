// src/components/Resume.js
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FaBriefcase, FaGraduationCap, FaCode, FaHandsHelping } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { RESUME_PDF, resumeData } from "../data/resumeData";

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-xs font-medium bg-white dark:bg-neutral-900">
    {children}
  </span>
);

const SectionCard = ({ icon, title, children }) => (
  <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/50 shadow-sm p-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-9 h-9 rounded-full bg-teal-500 dark:bg-teal-400 text-white flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
    </div>
    {children}
  </section>
);

export default function Resume() {
  const { skills, projects, experience, education, volunteering, certifications } = resumeData;

  return (
    <section className="px-6 md:px-10 py-12 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      {/* Header */}
      <header className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-semibold tracking-tight">My Resume</h1>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
          Click the button below to download my resume:
        </p>

        <a
          href={RESUME_PDF}
          download
          className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 text-white dark:text-neutral-900"
        >
          <AiOutlineDownload className="text-lg" />
          Download Resume
        </a>

        <div className="mt-8 flex justify-center">
          <img
            src="/avatarPictures/coding.png"
            alt="Profile avatar"
            className="rounded-full w-36 h-36 object-cover border-4 border-teal-500"
          />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto mt-10 space-y-8">
        {/* Skills */}
        <SectionCard icon={<RiStackFill />} title="Skills">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide opacity-80">
                Programming Languages
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.languages.map((l) => (
                  <Chip key={l}>{l}</Chip>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide opacity-80">
                Tech Stack
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.stack.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </div>

          {skills.spoken && (
            <p className="mt-4 text-sm opacity-80">
              <strong>Languages:</strong> {skills.spoken}
            </p>
          )}
        </SectionCard>

        {/* Projects */}
        <SectionCard icon={<FaCode />} title="Projects">
          <ul className="space-y-2 leading-relaxed">
            {projects.map((p) => (
              <li key={p.name}>
                <span className="font-semibold">{p.name}:</span> {p.description}
              </li>
            ))}
          </ul>
        </SectionCard>

        {/* Experience */}
        <SectionCard icon={<FaBriefcase />} title="Experience">
          <div className="space-y-6">
            {experience.map((job, i) => (
              <div key={i}>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-semibold">{job.company}</span>
                  {job.role && <span className="opacity-80">— {job.role}</span>}
                  {job.dates && (
                    <span className="text-sm opacity-70 ml-auto">{job.dates}</span>
                  )}
                </div>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Education */}
        <SectionCard icon={<FaGraduationCap />} title="Education">
          <ul className="space-y-2">
            {education.map((e, i) => (
              <li key={i}>
                <span className="font-semibold">{e.place}:</span> {e.details}
              </li>
            ))}
          </ul>
        </SectionCard>

        {/* Volunteering */}
        <SectionCard icon={<FaHandsHelping />} title="Volunteering">
          <ul className="space-y-2">
            {volunteering.map((v, i) => (
              <li key={i}>
                <span className="font-semibold">{v.org}:</span> {v.details}
              </li>
            ))}
          </ul>
        </SectionCard>

        {/* Certifications */}
        <SectionCard icon={<FaGraduationCap />} title="Certifications">
          <ul className="space-y-2">
            {certifications.map((c, i) => (
              <li key={i}>
                <span className="font-semibold">{c.name}:</span> {c.details}
              </li>
            ))}
          </ul>
        </SectionCard>
      </main>
    </section>
  );
}
