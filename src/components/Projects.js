import React, { useEffect } from 'react';
import './Projects.css';

const EXPERTISE = [
  {
    area: 'Backend & APIs',
    desc: 'Java (Spring Boot), Node.js (Express), Python (FastAPI), Go — REST API design, Swagger/OpenAPI, JWT auth, and test-driven development.',
  },
  {
    area: 'Data & Messaging',
    desc: 'Event-driven pipelines with Kafka and BullMQ; full-text search with Elasticsearch; in-memory caching and session management with Redis.',
  },
  {
    area: 'Databases',
    desc: 'PostgreSQL and MySQL for relational workloads; MongoDB for document storage — schema design, query optimisation, indexing, and ORMs (SQLAlchemy, Mongoose).',
  },
  {
    area: 'Cloud & DevOps',
    desc: 'AWS (EC2, S3), Docker, Docker Compose, GitHub Actions CI/CD, Jenkins, Linux administration, Nginx reverse proxy, Prometheus monitoring.',
  },
  {
    area: 'AI-Driven Development',
    desc: 'Hands-on with Claude, Codex, and Cursor — MCP workflows, sub-agents, prompt engineering, AI-assisted code review and refactoring.',
  },
  {
    area: 'Systems & Low-Level',
    desc: 'C++, C, and C# for systems programming; algorithmic problem-solving; multithreaded and async architecture with workers, locks, and queues.',
  },
];

export default function Projects() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Page Header ── */}
      <section className="page-hero">
        <div className="page-hero__orb page-hero__orb--1" />
        <div className="page-hero__orb page-hero__orb--2" />
        <div className="container page-hero__content">
          <span className="section-label">Portfolio</span>
          <h1 className="page-hero__title">Projects</h1>
          <p className="page-hero__sub">
            Selected work — open-source contributions and live products shipped to production.
          </p>
        </div>
      </section>

      {/* ── Project Cards ── */}
      <section className="projects-section">
        <div className="container">

          {/* TryAI — large card with screenshot */}
          <a
            href="https://tryaii.com"
            target="_blank"
            rel="noopener noreferrer"
            className="img-card img-card--large fade-in"
          >
            <div className="img-card__image-wrap">
              <img
                src="https://api.microlink.io/?url=https://tryaii.com&screenshot=true&meta=false&embed=screenshot.url"
                alt="TryAI platform screenshot"
                className="img-card__image"
                loading="lazy"
              />
              <div className="img-card__image-overlay" />
            </div>
            <div className="img-card__body">
              <div className="img-card__meta">
                <span className="proj-card__label">Live Product</span>
                <div className="proj-card__tags">
                  {['Node.js', 'React', 'TypeScript', 'AWS'].map(t => (
                    <span className="proj-card__tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <h3 className="img-card__title">TryAI</h3>
              <p className="img-card__desc">
                AI comparison &amp; routing platform. Run any prompt against 6 providers side-by-side
                — compare quality, latency, and cost instantly. Routing engine recommends from 35+ models.
                Live benchmark dataset tracks 335+ LLMs across 8 public sources.
              </p>
              <span className="proj-card__link">Visit tryaii.com →</span>
            </div>
          </a>

          {/* PromLink — card with architecture diagram */}
          <a
            href="https://github.com/keren5005/PromLink"
            target="_blank"
            rel="noopener noreferrer"
            className="img-card fade-in"
          >
            <div className="img-card__image-wrap img-card__image-wrap--arch">
              <img
                src="/projects/promlink-arch.png"
                alt="PromLink architecture diagram"
                className="img-card__image img-card__image--contain"
                loading="lazy"
              />
              <div className="img-card__image-overlay" />
            </div>
            <div className="img-card__body">
              <div className="img-card__meta">
                <span className="proj-card__label">Open Source</span>
                <div className="proj-card__tags">
                  {['Go', 'Prometheus', 'Docker'].map(t => (
                    <span className="proj-card__tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <h3 className="img-card__title">PromLink</h3>
              <p className="img-card__desc">
                Extended the official Prometheus Alertmanager with native Mattermost and Rocket.Chat
                receivers — each isolated behind a clean interface in the existing receiver pipeline.
                Contribution to the open-source observability ecosystem.
              </p>
              <span className="proj-card__link">View on GitHub →</span>
            </div>
          </a>

        </div>
      </section>

      {/* ── GitHub Analytics ── */}
      <section className="github-section">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">Activity</span>
            <h2 className="section-title">GitHub Analytics</h2>
          </div>

          <div className="github-grid fade-in">
            <div className="github-card github-card--streak">
              <p className="github-card__label">Contribution Streak</p>
              <img
                src="https://streak-stats.demolab.com/?user=keren5005&theme=transparent&hide_border=true&stroke=2a2a40&ring=6366f1&fire=8b5cf6&currStreakLabel=6366f1&sideLabels=8b8fa8&dates=555570&currStreakNum=eeeeff&sideNums=eeeeff"
                alt="GitHub streak stats"
                className="github-card__img"
                loading="lazy"
              />
            </div>

            <div className="github-card github-card--langs">
              <p className="github-card__label">Top Languages</p>
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=keren5005&layout=compact&theme=transparent&hide_border=true&title_color=6366f1&text_color=8b8fa8&bg_color=00000000&langs_count=8"
                alt="Top languages"
                className="github-card__img"
                loading="lazy"
                onError={e => { e.target.style.display = 'none'; e.target.parentElement.classList.add('hidden'); }}
              />
            </div>

            <div className="github-card github-card--chart">
              <p className="github-card__label">Contribution Activity · 2025–2026</p>
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=keren5005&bg_color=11111c&color=8b8fa8&line=6366f1&point=8b5cf6&area=true&area_color=6366f1&hide_border=true&custom_title=Contributions+last+12+months"
                alt="GitHub contribution activity graph"
                className="github-card__img github-card__img--chart"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section className="expertise-section">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-label">Depth</span>
            <h2 className="section-title">Areas of Expertise</h2>
          </div>
          <div className="expertise-grid">
            {EXPERTISE.map((e, i) => (
              <div className="expertise-card fade-in" key={e.area} style={{ animationDelay: `${i * 0.07}s` }}>
                <h3 className="expertise-card__title">{e.area}</h3>
                <p className="expertise-card__desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
