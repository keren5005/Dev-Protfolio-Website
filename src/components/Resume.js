import React, { useEffect } from 'react';
import { RESUME_PDF, resumeData } from '../data/resumeData';
import './Resume.css';

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

const SkillGroup = ({ label, items }) =>
  items?.length ? (
    <div className="skill-group">
      <h4 className="skill-group__label">{label}</h4>
      <div className="skill-group__chips">
        {items.map(item => <span className="chip" key={item}>{item}</span>)}
      </div>
    </div>
  ) : null;

const ResumeSection = ({ label, title, children }) => (
  <section className="resume-section">
    <div className="resume-section__header">
      <span className="section-label">{label}</span>
      <h2 className="resume-section__title">{title}</h2>
    </div>
    {children}
  </section>
);

export default function Resume() {
  const { skills, projects, experience, education, volunteering, certifications } = resumeData;

  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="resume-page">
      {/* background orbs */}
      <div className="resume__orb resume__orb--1" />
      <div className="resume__orb resume__orb--2" />

      <div className="container resume__container">
        {/* Header */}
        <header className="resume-header fade-in">
          <div>
            <span className="section-label">Curriculum Vitae</span>
            <h1 className="resume-header__title">Keren Cohen</h1>
            <p className="resume-header__sub">Software Developer · Backend &amp; Distributed Systems</p>
          </div>
          <a
            href={RESUME_PDF || '#'}
            download
            className="btn btn--primary"
            onClick={e => { if (!RESUME_PDF) e.preventDefault(); }}
          >
            <DownloadIcon /> Download PDF
          </a>
        </header>

        {/* Skills */}
        <ResumeSection label="Stack" title="Technical Skills">
          <div className="skills-grid fade-in">
            <SkillGroup label="Languages" items={skills.languages} />
            <SkillGroup label="Frameworks" items={skills.frameworks} />
            <SkillGroup label="Databases" items={skills.databases} />
            <SkillGroup label="Messaging" items={skills.messaging} />
            <SkillGroup label="DevOps & Cloud" items={skills.devops} />
            <SkillGroup label="AI & Tools" items={skills.aiTools} />
            <SkillGroup label="Testing" items={skills.testing} />
          </div>
          {skills.spoken && (
            <p className="resume-spoken fade-in">
              <strong>Spoken:</strong> {skills.spoken}
            </p>
          )}
        </ResumeSection>

        {/* Experience */}
        <ResumeSection label="Career" title="Experience">
          <div className="timeline">
            {experience.map((job, i) => (
              <div className="timeline-item fade-in" key={i}>
                <div className="timeline-item__dot" />
                <div className="timeline-item__body">
                  <div className="timeline-item__header">
                    <div>
                      <h3 className="timeline-item__company">{job.company}</h3>
                      {job.role && <p className="timeline-item__role">{job.role}</p>}
                    </div>
                    {job.dates && <span className="timeline-item__dates">{job.dates}</span>}
                  </div>
                  <ul className="timeline-item__bullets">
                    {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Projects */}
        <ResumeSection label="Open Source" title="Projects">
          <div className="resume-projects fade-in">
            {projects.map(p => (
              <div className="resume-project" key={p.name}>
                <div className="resume-project__header">
                  <h3 className="resume-project__name">{p.name}</h3>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="resume-project__link">
                      {p.link.replace('https://', '')} →
                    </a>
                  )}
                </div>
                <p className="resume-project__desc">{p.description}</p>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Education */}
        <ResumeSection label="Academic" title="Education">
          <ul className="simple-list fade-in">
            {education.map((e, i) => (
              <li key={i}>
                <span className="simple-list__title">{e.place}</span>
                <span className="simple-list__detail"> — {e.details}</span>
              </li>
            ))}
          </ul>
        </ResumeSection>

        {/* Volunteering */}
        <ResumeSection label="Community" title="Volunteering">
          <ul className="simple-list fade-in">
            {volunteering.map((v, i) => (
              <li key={i}>
                <span className="simple-list__title">{v.org}</span>
                <span className="simple-list__detail"> — {v.details}</span>
              </li>
            ))}
          </ul>
        </ResumeSection>

        {/* Certifications */}
        <ResumeSection label="Credentials" title="Certifications">
          <ul className="simple-list fade-in">
            {certifications.map((c, i) => (
              <li key={i}>
                <span className="simple-list__title">{c.name}</span>
                <span className="simple-list__detail"> — {c.details}</span>
              </li>
            ))}
          </ul>
        </ResumeSection>
      </div>
    </div>
  );
}
