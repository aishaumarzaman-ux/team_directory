import React from 'react';
import './Section.css';

export default function Section({ title, children }) {
  return (
    <section className="team-section">
      <h2>{title}</h2>
      <div className="content">
        {children}
      </div>
    </section>
  );
}
