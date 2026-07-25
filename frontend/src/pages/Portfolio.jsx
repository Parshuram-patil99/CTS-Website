import React, { useState } from 'react';
import { Building, GraduationCap, Landmark, ShoppingCart, HeartPulse, Building2, ExternalLink } from 'lucide-react';
import './Portfolio.css';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Smart Factory ERP System',
      industry: 'Manufacturing & Industrial',
      icon: <Building size={24} />,
      techStack: ['React', 'Python', 'Flask', 'PostgreSQL', 'Docker'],
      summary: 'Automated real-time machine telemetry tracking, raw material supply chain monitoring, and inventory forecasting for an industrial plant.'
    },
    {
      title: 'Global Campus LMS & Portal',
      industry: 'Education & E-Learning',
      icon: <GraduationCap size={24} />,
      techStack: ['React', 'Node.js', 'MySQL', 'AWS'],
      summary: 'Unified online portal handling live video lectures, automated grading, student fee payment gateway, and digital report card distribution.'
    },
    {
      title: 'Microfinance & Loan Dashboard',
      industry: 'Finance & Banking',
      icon: <Landmark size={24} />,
      techStack: ['React', 'Python', 'Flask', 'PostgreSQL', 'Nginx'],
      summary: 'Bank-grade portal with automated credit score evaluations, loan disbursement tracking, and customer EMI repayment schedules.'
    },
    {
      title: 'Omnichannel Retail & POS Sync',
      industry: 'Retail & E-Commerce',
      icon: <ShoppingCart size={24} />,
      techStack: ['React', 'Node.js', 'MySQL', 'Docker'],
      summary: 'Real-time synchronization engine connecting physical store Point-of-Sale (POS) terminals with online web storefronts.'
    },
    {
      title: 'Telemedicine Diagnostic Hub',
      industry: 'Healthcare',
      icon: <HeartPulse size={24} />,
      techStack: ['Flutter', 'Python', 'Flask', 'AWS'],
      summary: 'Mobile and desktop portal enabling video consultations between doctors and patients, electronic prescription writing, and lab report delivery.'
    },
  ];

  const filters = ['All', 'Manufacturing & Industrial', 'Education & E-Learning', 'Finance & Banking', 'Retail & E-Commerce', 'Healthcare'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.industry === activeFilter);

  return (
    <div className="portfolio-page">
      <section className="page-header">
        <div className="container">
          <span className="section-subtitle light">OUR PROVEN SUCCESS</span>
          <h1>Client Portfolio</h1>
          <p>CODE. SOLVE. DELIVER. EMPOWER.</p>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">PROJECT CASE STUDIES</span>
            <h2 className="section-title">DELIVERING IMPACT WORLDWIDE</h2>
          </div>

          {/* Filter Bar */}
          <div className="filter-bar">
            {filters.map((f, i) => (
              <button
                key={i}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid-3">
            {filteredProjects.map((p, idx) => (
              <div className="project-card card" key={idx}>
                <div className="project-header">
                  <div className="project-icon">{p.icon}</div>
                  <span className="project-ind-badge">{p.industry}</span>
                </div>
                <h3>{p.title}</h3>
                <p className="project-summary">{p.summary}</p>
                <div className="project-tech">
                  {p.techStack.map((t, i) => (
                    <span key={i} className="p-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
