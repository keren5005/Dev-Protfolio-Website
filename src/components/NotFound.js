import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__orb notfound__orb--1" />
      <div className="notfound__orb notfound__orb--2" />

      <div className="notfound__content">
        <p className="notfound__code">404</p>
        <h1 className="notfound__title">Page not found</h1>
        <p className="notfound__sub">
          Looks like this route doesn't exist — probably a distributed systems problem.
        </p>
        <Link to="/" className="btn btn--primary">Back to Home</Link>
      </div>
    </div>
  );
}
