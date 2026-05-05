import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { resumeData } from '../data/resumeData';
import './Home.css';

const STATS = [
  { num: '3+',      desc: 'years of industry experience' },
  { num: '3',       desc: 'companies shipped to production' },
  { num: '8200',    desc: 'intelligence unit alumna' },
  { num: 'B.Sc.',   desc: 'computer science' },
];

const SKILL_SIDEBAR = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'Go', 'SQL', 'C#'],
  },
  {
    title: 'Stack',
    items: ['Spring Boot', 'Node.js / Express', 'FastAPI', 'Docker', 'AWS (EC2, S3)', 'Kafka', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
];

const exp = resumeData.experience[0];

export default function Home() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => aboutRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grain" />

        <div className="hero__content">
          <p className="hero__eyebrow">Software Developer · Backend &amp; Distributed Systems</p>
          <h1 className="hero__name">
            <img
              src="/avatarPictures/hi.png"
              alt="Keren Cohen"
              className="hero__avatar"
            />
            Keren Cohen
          </h1>
          <p className="hero__tagline">
            Building reliable, scalable backend systems — from distributed pipelines to AI-driven tools.
            8200 Alumna with a B.Sc. in Computer Science and a passion for high-quality code.
          </p>
          <div className="hero__ctas">
            <button className="btn btn--primary" onClick={scrollToAbout}>About me</button>
            <Link to="/projects" className="btn btn--outline">View Projects</Link>
          </div>
        </div>

        <button className="hero__scroll-hint" onClick={scrollToAbout} aria-label="Scroll down">
          <span className="hero__scroll-arrow" />
        </button>
      </section>

      {/* ── ABOUT ── */}
      <section className="about" ref={aboutRef}>
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">About</span>
            <h2 className="section-title">Who I am</h2>
          </div>

          <div className="about__grid">
            <div className="about__avatar-col fade-in">
              <div className="about__avatar-wrap">
                <img src="/avatarPictures/coding.png" alt="Keren Cohen coding" className="about__avatar-img" />
              </div>
            </div>

            <div className="about__text fade-in">
              <p>
                Software Developer with industry and military experience, currently working as the
                first in-house developer at Simploud directly under the CTO. I specialise in
                backend architecture, distributed systems, and building the kind of code that lasts —
                clean, tested, and maintainable.
              </p>
              <p>
                Before joining industry, I served in Unit 8200 as both a Cyber Security Analyst and
                a Software Developer, building ETL pipelines and applying secure design principles
                under real operational constraints. I bring that same rigour to every codebase I touch.
              </p>
              <div className="about__actions">
                <Link to="/resume" className="btn btn--primary">Full Resume</Link>
                <Link to="/projects" className="btn btn--ghost">My Projects</Link>
              </div>
            </div>

            <div className="about__sidebar fade-in">
              {SKILL_SIDEBAR.map(card => (
                <div className="about__card" key={card.title}>
                  <h3 className="about__card-title">{card.title}</h3>
                  <ul className="about__list">
                    {card.items.map(item => (
                      <li key={item}>
                        <span className="about__list-label">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="highlight fade-in">
        <div className="container highlight__grid">
          {STATS.map(s => (
            <div className="highlight__stat" key={s.desc}>
              <span className="highlight__num">{s.num}</span>
              <span className="highlight__desc">{s.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="featured">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">Selected Work</span>
            <h2 className="section-title">Projects I've shipped</h2>
          </div>

          <div className="proj-grid">
            {/* TryAI — large image card */}
            <a
              href="https://tryaii.com"
              target="_blank"
              rel="noopener noreferrer"
              className="proj-card proj-card--large proj-card--img fade-in"
            >
              <div className="proj-card__img-wrap">
                <img
                  src="https://api.microlink.io/?url=https://tryaii.com&screenshot=true&meta=false&embed=screenshot.url"
                  alt="TryAI screenshot"
                  className="proj-card__img"
                  loading="lazy"
                />
                <div className="proj-card__img-overlay" />
              </div>
              <div className="proj-card__body">
                <div className="proj-card__meta">
                  <span className="proj-card__label">Live Product</span>
                  <div className="proj-card__tags">
                    {['Node.js', 'React', 'TypeScript', 'AWS'].map(t => (
                      <span className="proj-card__tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <h3 className="proj-card__title">TryAI</h3>
                <p className="proj-card__desc">
                  AI comparison &amp; routing platform. Run any prompt against 6 providers side-by-side
                  — see quality, latency, and cost instantly. Routing engine recommends from 35+ models.
                  Live benchmark dataset tracks 335+ LLMs.
                </p>
                <span className="proj-card__link">Visit tryaii.com →</span>
              </div>
            </a>

            {/* PromLink — image card with architecture diagram */}
            <a
              href="https://github.com/keren5005/PromLink"
              target="_blank"
              rel="noopener noreferrer"
              className="proj-card proj-card--img fade-in"
            >
              <div className="proj-card__img-wrap proj-card__img-wrap--arch">
                <img
                  src="/projects/promlink-arch.png"
                  alt="PromLink architecture"
                  className="proj-card__img proj-card__img--contain"
                  loading="lazy"
                />
                <div className="proj-card__img-overlay" />
              </div>
              <div className="proj-card__body">
                <div className="proj-card__meta">
                  <span className="proj-card__label">Open Source</span>
                  <div className="proj-card__tags">
                    {['Go', 'Prometheus', 'Docker'].map(t => (
                      <span className="proj-card__tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <h3 className="proj-card__title">PromLink</h3>
                <p className="proj-card__desc">
                  Extended the official Prometheus Alertmanager with native Mattermost and
                  Rocket.Chat receivers, each isolated behind a clean interface in the existing
                  receiver pipeline.
                </p>
                <span className="proj-card__link">View on GitHub →</span>
              </div>
            </a>
          </div>

          <div className="featured__cta fade-in">
            <Link to="/projects" className="btn btn--outline">All Projects →</Link>
          </div>
        </div>
      </section>

      {/* ── CURRENT ROLE ── */}
      <section className="role-teaser">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">Experience</span>
            <h2 className="section-title">Current Role</h2>
          </div>

          <div className="role-card fade-in">
            <div className="role-card__header">
              <div>
                <h3 className="role-card__title">{exp.role}</h3>
                <p className="role-card__meta">{exp.company} · {exp.dates}</p>
              </div>
              <Link to="/resume" className="btn btn--outline">Full Resume →</Link>
            </div>
            <ul className="role-card__bullets">
              {exp.bullets.slice(0, 4).map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
