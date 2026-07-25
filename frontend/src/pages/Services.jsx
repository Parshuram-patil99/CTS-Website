import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Cloud, Settings, ShieldCheck, Check, ArrowRight, Server, Database, Smartphone, Cpu } from 'lucide-react';
import './Services.css';

export default function Services() {
  const serviceList = [
    {
      id: 'software-development',
      title: 'SOFTWARE DEVELOPMENT',
      tagline: 'Custom software solutions tailored to your business needs.',
      icon: <Code size={40} />,
      features: [
        'Enterprise Web Application Development (React, Node.js, Python, Flask)',
        'Mobile Application Engineering (Flutter cross-platform iOS & Android)',
        'RESTful & GraphQL API Architecture',
        'Scalable Microservices Architecture',
        'Database Design & Optimization (PostgreSQL, MySQL)'
      ]
    },
    {
      id: 'cloud-solutions',
      title: 'CLOUD SOLUTIONS',
      tagline: 'Scalable, secure and cost-effective cloud services.',
      icon: <Cloud size={40} />,
      features: [
        'Amazon Web Services (AWS) Infrastructure Deployment',
        'Docker Containerization & Kubernetes Orchestration',
        'Continuous Integration & Deployment (CI/CD Pipelines)',
        'Nginx Reverse Proxy & High Availability Load Balancing',
        'Cloud Security, Backup & Disaster Recovery Strategies'
      ]
    },
    {
      id: 'it-services',
      title: 'IT SERVICES',
      tagline: 'End-to-end IT support, infrastructure management and digital workplace solutions.',
      icon: <Settings size={40} />,
      features: [
        '24/7 Managed IT Infrastructure Monitoring',
        'Digital Workplace Setup & System Optimization',
        'Database Management & Maintenance (MySQL / PostgreSQL)',
        'Network Configuration & Firewall Management',
        'Enterprise Software Maintenance & Version Upgrades'
      ]
    },
    {
      id: 'digital-transformation',
      title: 'DIGITAL TRANSFORMATION',
      tagline: 'Empowering businesses to transform operations and enhance customer experiences.',
      icon: <ShieldCheck size={40} />,
      features: [
        'Legacy Software Modernization & Refactoring',
        'Workflow & Business Process Automation',
        'UI/UX Redesign for Superior User Engagement',
        'Data Analytics & Enterprise Dashboard Integration',
        'Cross-System Enterprise Resource Integration'
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="page-header">
        <div className="container">
          <span className="section-subtitle light">OUR CAPABILITIES</span>
          <h1>Services & Solutions</h1>
          <p>CODE. SOLVE. DELIVER. EMPOWER.</p>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <div className="services-detail-list">
            {serviceList.map((svc, idx) => (
              <div key={svc.id} className="service-detail-item card" id={svc.id}>
                <div className="service-detail-header">
                  <div className="svc-icon-large">{svc.icon}</div>
                  <div>
                    <h2>{svc.title}</h2>
                    <p className="svc-tagline">{svc.tagline}</p>
                  </div>
                </div>

                <div className="svc-feature-grid">
                  {svc.features.map((feat, fIdx) => (
                    <div key={fIdx} className="svc-feature-card">
                      <Check size={18} className="svc-check" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="svc-action-footer">
                  <Link to="/contact" className="btn btn-primary">
                    Request Consultation <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
