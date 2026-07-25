import React from 'react';
import { Lightbulb, Award, Users, Headphones, Target, Eye, CheckCircle2, Shield } from 'lucide-react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <span className="section-subtitle light">WHO WE ARE</span>
          <h1>About Chaitanya Tech Solutions</h1>
          <p>CODE. SOLVE. DELIVER. EMPOWER.</p>
        </div>
      </section>

      {/* Main Story */}
      <section className="section section-bg">
        <div className="container grid-2 align-center">
          <div className="about-text">
            <span className="section-subtitle">OUR STORY & PHILOSOPHY</span>
            <h2 className="section-title left-align">Empowering Businesses Through Digital Innovation</h2>
            <p className="lead-paragraph">
              Chaitanya Tech Solutions Pvt. Ltd. is a technology-driven company committed to delivering innovative, reliable, and scalable software solutions that empower businesses and drive digital transformation.
            </p>
            <p>
              Headquartered in Udgir, Maharashtra, we bridge the gap between complex software requirements and scalable enterprise realities. From custom full-stack software development to cloud migration and digital transformation, our engineering team brings high technical precision to every project.
            </p>

            <div className="corporate-details-box">
              <h4>Corporate Registration</h4>
              <p><strong>Corporate Identification Number (CIN):</strong> U62013ME2026PTC475255</p>
              <p><strong>Registered Name:</strong> Chaitanya Tech Solutions Pvt. Ltd.</p>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-card-deck">
              <div className="deck-card">
                <Shield size={36} className="deck-icon" />
                <h3>Enterprise Standard</h3>
                <p>Built with robustness, security, and performance at its core.</p>
              </div>
              <div className="deck-card accent">
                <Users size={36} className="deck-icon" />
                <h3>Client First</h3>
                <p>Tailored strategies that align directly with your business goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Pillars */}
      <section className="section section-bg-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">OUR FOUNDATION</span>
            <h2 className="section-title">CORE CORPORATE PILLARS</h2>
          </div>

          <div className="grid-4">
            <div className="pillar-detail-card">
              <div className="icon-wrap"><Lightbulb size={32} /></div>
              <h3>Innovative Solutions</h3>
              <p>We harness emerging technologies, modern cloud architectures, and modern web frameworks to engineer future-ready solutions.</p>
            </div>

            <div className="pillar-detail-card">
              <div className="icon-wrap"><Award size={32} /></div>
              <h3>Quality Delivery</h3>
              <p>Our systematic testing, automated pipelines, and strict coding standards ensure error-free, resilient code execution.</p>
            </div>

            <div className="pillar-detail-card">
              <div className="icon-wrap"><Users size={32} /></div>
              <h3>Customer Focused</h3>
              <p>We put client satisfaction at the heart of our engineering process, fostering open communication and collaborative iteration.</p>
            </div>

            <div className="pillar-detail-card">
              <div className="icon-wrap"><Headphones size={32} /></div>
              <h3>Reliable Support</h3>
              <p>Our commitment doesn’t end at deployment. We offer 24/7 technical assistance, ongoing updates, and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section-dark">
        <div className="container grid-2">
          <div className="vision-box-lg">
            <Eye size={40} className="vm-lg-icon" />
            <h2>OUR VISION</h2>
            <p>
              To be a trusted technology partner recognized for excellence, innovation and customer satisfaction across global enterprise markets.
            </p>
          </div>

          <div className="mission-box-lg">
            <Target size={40} className="vm-lg-icon" />
            <h2>OUR MISSION</h2>
            <p>
              To deliver high-quality software solutions that solve real-world problems and empower businesses to grow and succeed in the digital era.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
