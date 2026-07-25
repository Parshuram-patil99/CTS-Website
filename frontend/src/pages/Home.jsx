import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, Globe, Smartphone, Cpu, GraduationCap, Cloud, Play, ArrowRight,
  Smile, CheckCircle2, Users, Building, Lightbulb, Award, ShieldCheck, Heart,
  FileText, HelpCircle, UserPlus, Download, ExternalLink, Mail, Quote
} from 'lucide-react';
import Logo from '../components/Logo';
import ctsAnimatedVideo from '../assets/CTS_Animated_logo.mp4';
import bmbImg from '../assets/BMB.jpeg';
import pnpImg from '../assets/PNP.jpeg';
import './Home.css';

export default function Home() {
  const featureCards = [
    { title: 'Software Development', desc: 'Custom software solutions to grow your business.', icon: <Code size={28} /> },
    { title: 'Web Development', desc: 'Modern & responsive websites.', icon: <Globe size={28} /> },
    { title: 'Mobile App Development', desc: 'Android & iOS applications that perform.', icon: <Smartphone size={28} /> },
    { title: 'AI & Automation', desc: 'AI powered solutions for smart businesses.', icon: <Cpu size={28} /> },
    { title: 'Training & Internship', desc: 'Industry oriented training & placement support.', icon: <GraduationCap size={28} /> },
    { title: 'Cloud Solutions', desc: 'Scalable & secure cloud services.', icon: <Cloud size={28} /> }
  ];

  const stats = [
    { count: '500+', label: 'Happy Students', icon: <Smile size={28} /> },
    { count: '150+', label: 'Projects Delivered', icon: <CheckCircle2 size={28} /> },
    { count: '20+', label: 'Expert Trainers', icon: <Users size={28} /> },
    { count: '30+', label: 'Corporate Clients', icon: <Building size={28} /> }
  ];

  const valueChips = [
    { title: 'Innovation', subtitle: 'We embrace new ideas', icon: <Lightbulb size={20} /> },
    { title: 'Quality', subtitle: 'We deliver excellence', icon: <Award size={20} /> },
    { title: 'Integrity', subtitle: 'We build trust', icon: <ShieldCheck size={20} /> },
    { title: 'Commitment', subtitle: 'We ensure success', icon: <Heart size={20} /> }
  ];

  const directors = [
    {
      name: 'Mr. Balaji Mohanrao Bunnawar',
      role: 'Director',
      image: bmbImg,
      imgClass: 'bmb-img',
      desc: 'Visionary leader with expertise in business strategy and technology development.'
    },
    {
      name: 'Mr. Parshuram Nandkumar Patil',
      role: 'Director',
      image: pnpImg,
      imgClass: 'pnp-img',
      desc: 'Focused on innovation, operations and building strong client relationships.'
    }
  ];

  const portfolioPreviews = [
    { title: 'AI Based Analytics Dashboard', category: 'AI / Machine Learning', tech: 'React, Python, Flask' },
    { title: 'E-Commerce Website', category: 'Web Development', tech: 'React, Node.js, MySQL' },
    { title: 'School Management System', category: 'Software Development', tech: 'React, Python, PostgreSQL' },
    { title: 'Portfolio Website', category: 'Web Development', tech: 'React, CSS3' }
  ];

  return (
    <div className="home-page">
      {/* High-Tech Hero Banner Mixed with Logo Colors */}
      <section className="hero-ai-section">
        <div className="hero-ai-bg"></div>
        <div className="container hero-ai-container">
          <div className="hero-ai-left">
            <h1 className="hero-ai-heading">
              EMPOWERING <br />
              <span className="cyan-text">DIGITAL INTELLIGENCE</span>
            </h1>
            <p className="hero-ai-subheading">
              Innovative IT Solutions, AI Technologies & Industry Ready Training for a Smarter Tomorrow
            </p>
            <div className="hero-ai-buttons">
              <Link to="/services" className="btn btn-primary btn-ai">
                <CheckCircle2 size={18} /> Our Services
              </Link>
              <Link to="/training" className="btn btn-light-outline btn-ai">
                Explore Training
              </Link>
            </div>
          </div>

          {/* Animated Logo Video Showcase replacing AI Core 2.4 */}
          <div className="hero-ai-right">
            <div className="hero-animated-video-card">
              <div className="video-glow-effect"></div>
              <video
                className="hero-logo-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={ctsAnimatedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Feature Overlay Cards */}
      <section className="features-overlay-section">
        <div className="container">
          <div className="grid-6-features">
            {featureCards.map((feat, idx) => (
              <div className="feature-overlay-card card" key={idx}>
                <div className="feat-icon-wrap">{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="stats-bar-section">
        <div className="container">
          <div className="grid-4 stats-grid">
            {stats.map((st, idx) => (
              <div className="stat-box" key={idx}>
                <div className="stat-icon">{st.icon}</div>
                <div>
                  <h3 className="stat-number">{st.count}</h3>
                  <p className="stat-label">{st.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About CTS Section */}
      <section className="section section-bg about-cts-section">
        <div className="container grid-2 align-center">
          <div className="about-cts-left">
            <span className="section-subtitle">ABOUT CTS</span>
            <h2 className="section-title left-align">We Build Intelligent Solutions for the Future</h2>
            <p className="lead-paragraph">
              Chaitanya Tech Solutions Pvt. Ltd. is a technology driven company delivering innovative software solutions, AI technologies and industry focused training programs.
            </p>
            <p>
              We bring technical precision, software robustness, and scalablity to every enterprise client and student we mentor.
            </p>
            <Link to="/about" className="btn btn-primary btn-about-cta">
              Read More About Us <ArrowRight size={18} />
            </Link>
          </div>

          <div className="about-cts-right">
            <div className="video-card-preview card">
              <div className="video-overlay-box">
                <Logo mode="dark" size="small" />
                <div className="play-button-pulse">
                  <Play size={28} fill="#ffffff" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Value Chips */}
        <div className="container" style={{ marginTop: '3.5rem' }}>
          <div className="grid-4 value-chips-grid">
            {valueChips.map((v, i) => (
              <div className="value-chip-card" key={i}>
                <div className="value-icon">{v.icon}</div>
                <div>
                  <strong>{v.title}</strong>
                  <span>{v.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visionary Leadership / Directors Section */}
      <section className="section section-bg-alt directors-home-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">OUR DIRECTORS</span>
            <h2 className="section-title">VISIONARY LEADERSHIP</h2>
            <p className="section-description">
              Visionary leadership and strong commitment drive Chaitanya Tech Solutions towards excellence.
            </p>
          </div>

          <div className="grid-2 directors-home-grid">
            {directors.map((d, i) => (
              <div className="director-home-card card" key={i}>
                <div className="d-photo-frame">
                  <img
                    src={d.image}
                    alt={d.name}
                    className={`d-avatar-photo ${d.imgClass}`}
                  />
                </div>
                <h3>{d.name}</h3>
                <span className="d-role">{d.role}</span>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>

          {/* Quick Action Cards Bar */}
          <div className="quick-actions-grid" style={{ marginTop: '3rem' }}>
            <Link to="/training#register" className="quick-action-card card">
              <div className="qa-icon"><UserPlus size={24} /></div>
              <div>
                <strong>Student Registration</strong>
                <span className="qa-link">Join Our Courses <ArrowRight size={14} /></span>
              </div>
            </Link>

            <Link to="/training-enquiry" className="quick-action-card card">
              <div className="qa-icon"><HelpCircle size={24} /></div>
              <div>
                <strong>Training Enquiry</strong>
                <span className="qa-link">Ask for Information <ArrowRight size={14} /></span>
              </div>
            </Link>

            <Link to="/about" className="quick-action-card card">
              <div className="qa-icon"><Download size={24} /></div>
              <div>
                <strong>Download Brochure</strong>
                <span className="qa-link">Company Profile <ArrowRight size={14} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="section section-bg portfolio-home-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">OUR PORTFOLIO</span>
            <h2 className="section-title">SOME OF OUR RECENT WORK</h2>
          </div>

          <div className="grid-4">
            {portfolioPreviews.map((p, idx) => (
              <div className="portfolio-preview-card card" key={idx}>
                <div className="p-img-placeholder">
                  <span>{p.title}</span>
                </div>
                <div className="p-card-body">
                  <h4>{p.title}</h4>
                  <span className="p-cat">{p.category}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/portfolio" className="btn btn-primary">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
