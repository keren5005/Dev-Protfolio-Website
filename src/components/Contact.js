import React from 'react';
import './Contact.css';

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

const LINKS = [
  {
    href: 'mailto:keren5005005@gmail.com',
    Icon: MailIcon,
    label: 'Email',
    sub: 'keren5005005@gmail.com',
  },
  {
    href: 'https://www.linkedin.com/in/keren-cohen-aa6987215/',
    Icon: LinkedInIcon,
    label: 'LinkedIn',
    sub: 'linkedin.com/in/keren-cohen-aa6987215',
  },
  {
    href: 'https://github.com/keren5005',
    Icon: GitHubIcon,
    label: 'GitHub',
    sub: 'github.com/keren5005',
  },
];

export default function Contact() {
  return (
    <div className="contact-page">
      {/* background orbs */}
      <div className="contact__orb contact__orb--1" />
      <div className="contact__orb contact__orb--2" />

      <div className="contact__inner">
        <div className="contact__avatar-wrap">
          <img src="/avatarPictures/thumbsUp.png" alt="Keren Cohen" className="contact__avatar" />
        </div>

        <span className="section-label">Contact</span>
        <h1 className="contact__title">Get in touch</h1>
        <p className="contact__sub">
          Open to mid-senior software engineering roles. Whether it's a position, a collaboration,
          or just a conversation about distributed systems — reach out.
        </p>

        <div className="contact__links">
          {LINKS.map(({ href, Icon, label, sub }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="contact__link"
            >
              <span className="contact__link-icon">
                <Icon />
              </span>
              <div>
                <p className="contact__link-label">{label}</p>
                <p className="contact__link-sub">{sub}</p>
              </div>
              <span className="contact__link-arrow">→</span>
            </a>
          ))}
        </div>

        <p className="contact__footnote">Based in Israel · Available for on-site, hybrid, or remote</p>
      </div>
    </div>
  );
}
