<<<<<<< HEAD
import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';
import { RiStackFill } from 'react-icons/ri';
import { FaHandsHelping } from 'react-icons/fa';

const Resume = () => {
  return (
    <section className="container mx-auto p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">
      <h2 className="text-4xl mb-8 dark:text-teal-300 text-center">My Resume</h2>
      
      {/* Download Resume Section */}
      <div className="text-center mb-10">
        <p className="text-lg mb-5 dark:text-gray-400">Click the button below to download my resume:</p>
        <a
          href="/Keren Cohen Software Developer CV.pdf"
          download="Keren Cohen Software Developer CV.pdf"
          className="bg-teal-500 dark:bg-teal-400 text-white dark:text-gray-900 px-6 py-3 rounded-md inline-flex items-center hover:bg-teal-700 dark:hover:bg-teal-500"
        >
          <AiOutlineDownload className="mr-2" /> Download Resume
        </a>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center mb-10">
        <img
          src="/avatarPictures/coding.png"
          alt="Profile Picture"
          className="rounded-full w-40 h-40 object-cover border-4 border-teal-500"
        />
      </div>

      {/* Timeline */}
      <div className="relative border-l-4 border-teal-500 dark:border-teal-400">
        
        {/* Skills Section */}
        <div className="mb-10 ml-6">
          <div className="absolute w-8 h-8 bg-teal-500 dark:bg-teal-400 rounded-full -left-4 flex items-center justify-center">
            <RiStackFill className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2 dark:text-teal-300">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong>Programming Languages:</strong> C#, TypeScript, JavaScript, C++, C, Python, Go
            </div>
            <div>
              <strong>Tech Stack:</strong> SQL, Docker, React, Node.js, GIT, Linux, CSS + HTML, REST APIs, Unity, Prometheus, Wireshark
            </div>
          </div>
        </div>
        
        {/* Projects Section */}
        <div className="mb-10 ml-6">
          <div className="absolute w-8 h-8 bg-teal-500 dark:bg-teal-400 rounded-full -left-4 flex items-center justify-center">
            <FaCode className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2 dark:text-teal-300">Projects</h3>
          <ul>
            <li><strong>PromLink:</strong> Open-source contribution to Prometheus, written in Go, integrating the Alertmanager component with chat apps like Mattermost and RocketChat.</li>
            <li><strong>Neural Network:</strong> Developed a fully connected feed-forward neural network in Python with multiple activation functions, achieving high accuracy in image recognition.</li>
          </ul>
        </div>

        {/* Experience Section */}
        <div className="mb-10 ml-6">
          <div className="absolute w-8 h-8 bg-teal-500 dark:bg-teal-400 rounded-full -left-4 flex items-center justify-center">
            <FaBriefcase className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2 dark:text-teal-300">Experience</h3>
          <ul>
            <li><strong>One Taldor (PMO):</strong> Led data optimization and network infrastructure projects during 2023–2024. Contributed to a PMO team overseeing Streamlined Distance Learning initiatives during the COVID-19 pandemic.</li>
            <li><strong>Big Idea (Tech Instructor):</strong> Conducted tech workshops in the USA at the JCC (Jewish Community Centers), teaching programming, robotics, and app development during 2019–2020.</li>
            <li><strong>8200 Unit (Cyber Threat Analyst):</strong> Led cybersecurity research and collaborated with Israeli and international intelligence organizations from 2017–2019. Commanded a specialized cybersecurity training course for national cyber defense.</li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="mb-10 ml-6">
          <div className="absolute w-8 h-8 bg-teal-500 dark:bg-teal-400 rounded-full -left-4 flex items-center justify-center">
            <FaGraduationCap className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2 dark:text-teal-300">Education</h3>
          <ul>
            <li><strong>Academic College of Tel-Aviv, Yafo:</strong> B.Sc in Computer Science (2021-2024). Most Liked Courses: Algorithms (100), Data Structures (92), Object-Oriented Programming (95).</li>
            <li><strong>8200 Unit Military Trainings:</strong> Cyber Threat Course, Data Analyst Course, Commander Course (2017–2019).</li>
          </ul>
        </div>

        {/* Volunteering Section */}
        <div className="mb-10 ml-6">
          <div className="absolute w-8 h-8 bg-teal-500 dark:bg-teal-400 rounded-full -left-4 flex items-center justify-center">
            <FaHandsHelping className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2 dark:text-teal-300">Volunteering</h3>
          <ul>
            <li><strong>Yozmot Organization:</strong> Delivered tech lectures on information security and cyber threats during the Iron Swords War.</li>
            <li><strong>QueenB:</strong> Contributed to events that empower women to pursue computer science careers, sharing personal experiences and offering mentorship.</li>
          </ul>
        </div>

        {/* Certifications Section */}
        <div className="mb-10 ml-6">
          <div className="absolute w-8 h-8 bg-teal-500 dark:bg-teal-400 rounded-full -left-4 flex items-center justify-center">
            <FaGraduationCap className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2 dark:text-teal-300">Certifications</h3>
          <ul>
            <li><strong>8200 Unit Certifications:</strong> Cyber Security Certification, Data Analysis Certification (Issued by Unit 8200).</li>
            <li><strong>Udemy:</strong> Completed dozens of courses on Udemy, focusing on programming languages, cybersecurity, and software development best practices.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
=======
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

const Section = ({ icon, title, children }) => (
  <section className="pt-8">
    <h3 className="flex items-center gap-2 text-xl font-semibold">
      <span className="w-8 h-8 rounded-full bg-teal-500 dark:bg-teal-400 text-white grid place-items-center">
        {icon}
      </span>
      {title}
    </h3>
    <div className="mt-4">{children}</div>
    <hr className="mt-8 border-neutral-200 dark:border-neutral-800" />
  </section>
);

export default function Resume() {
  const { skills, projects, experience, education, volunteering, certifications } = resumeData;

  return (
    <div className="px-6 md:px-10 py-12 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      {/* Header */}
      <header className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-semibold tracking-tight">My Resume</h1>
        <p className="mt-2 text-neutral-700 dark:text-neutral-300">
          Download the PDF or browse the highlights below.
        </p>

        <a
          href={RESUME_PDF || "#"}
          download
          className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 text-white dark:text-neutral-900 disabled:opacity-60"
          onClick={(e) => {
            if (!RESUME_PDF) e.preventDefault();
          }}
        >
          <AiOutlineDownload className="text-lg" />
          Download Resume
        </a>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto mt-10">
        {/* Skills */}
        <Section icon={<RiStackFill />} title="Skills">
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
        </Section>

        {/* Projects */}
        <Section icon={<FaCode />} title="Projects">
          <ul className="space-y-2 leading-relaxed">
            {projects.map((p) => (
              <li key={p.name}>
                <span className="font-semibold">{p.name}:</span> {p.description}
              </li>
            ))}
          </ul>
        </Section>

        {/* Experience */}
        <Section icon={<FaBriefcase />} title="Experience">
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
        </Section>

        {/* Education */}
        <Section icon={<FaGraduationCap />} title="Education">
          <ul className="space-y-2">
            {education.map((e, i) => (
              <li key={i}>
                <span className="font-semibold">{e.place}:</span> {e.details}
              </li>
            ))}
          </ul>
        </Section>

        {/* Volunteering */}
        <Section icon={<FaHandsHelping />} title="Volunteering">
          <ul className="space-y-2">
            {volunteering.map((v, i) => (
              <li key={i}>
                <span className="font-semibold">{v.org}:</span> {v.details}
              </li>
            ))}
          </ul>
        </Section>

        {/* Certifications */}
        <Section icon={<FaGraduationCap />} title="Certifications">
          <ul className="space-y-2">
            {certifications.map((c, i) => (
              <li key={i}>
                <span className="font-semibold">{c.name}:</span> {c.details}
              </li>
            ))}
          </ul>
        </Section>
      </main>
    </div>
  );
}
>>>>>>> feature/unified-top-projects
