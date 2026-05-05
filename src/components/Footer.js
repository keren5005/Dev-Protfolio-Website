import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

const NAV = [
  { to: '/',         label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume',   label: 'Resume' },
  { to: '/contact',  label: 'Contact' },
];

const SOCIALS = [
  { href: 'https://github.com/keren5005',                        Icon: GitHubIcon,   label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/keren-cohen-aa6987215/', Icon: LinkedInIcon, label: 'LinkedIn' },
  { href: 'mailto:keren5005005@gmail.com',                       Icon: MailIcon,     label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">KC</span>
          <p className="footer__tagline">Backend &amp; Distributed Systems · Based in Israel</p>
        </div>

        <nav className="footer__nav">
          {NAV.map(l => (
            <Link key={l.to} to={l.to} className="footer__nav-link">{l.label}</Link>
          ))}
        </nav>

        <div className="footer__socials">
          {SOCIALS.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Keren Cohen — Built with React</p>
      </div>
    </footer>
  );
}
