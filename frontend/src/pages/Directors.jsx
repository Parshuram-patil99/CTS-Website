import React from 'react';
import { Mail, Quote, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { LinkedinIcon, FacebookIcon } from '../components/SocialIcons';
import bmbImg from '../assets/BMB.jpeg';
import pnpImg from '../assets/PNP.jpeg';
import './Directors.css';

export default function Directors() {
  const directors = [
    {
      name: 'Mr. Balaji Mohanrao Bunnawar',
      title: 'Director',
      image: bmbImg,
      imgClass: 'bmb-img',
      bio: 'With a strong background in technology and business management, he leads the organization with strategic vision and innovation. Focused on empowering businesses and students with next-generation digital capabilities.',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      email: 'mailto:cts.udgir@gmail.com'
    },
    {
      name: 'Mr. Parshuram Nandkumar Patil',
      title: 'Director',
      image: pnpImg,
      imgClass: 'pnp-img',
      bio: 'An expert in operations and client relationships, he ensures quality delivery, sustainable growth, and seamless service execution across enterprise projects.',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com',
      email: 'mailto:cts.udgir@gmail.com'
    }
  ];

  return (
    <div className="directors-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="section-subtitle light">VISIONARY LEADERSHIP</span>
          <h1>Our Directors</h1>
          <p>Visionary leadership and strong commitment drive Chaitanya Tech Solutions towards excellence.</p>
        </div>
      </section>

      {/* Directors Profiles */}
      <section className="section section-bg">
        <div className="container">
          <div className="grid-2 directors-grid">
            {directors.map((dir, idx) => (
              <div className="director-profile-card card" key={idx}>
                <div className="director-img-wrapper">
                  <div className="director-photo-frame">
                    <img
                      src={dir.image}
                      alt={dir.name}
                      className={`director-photo ${dir.imgClass}`}
                    />
                  </div>
                  <span className="director-badge">{dir.title}</span>
                </div>

                <div className="director-info">
                  <h2>{dir.name}</h2>
                  <span className="director-role-title">{dir.title}</span>
                  <p className="director-bio">{dir.bio}</p>

                  <div className="director-socials">
                    <a href={dir.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <LinkedinIcon size={18} />
                    </a>
                    <a href={dir.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <FacebookIcon size={18} />
                    </a>
                    <a href={dir.email} aria-label="Email">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Directors Quote Box */}
          <div className="directors-quote-box card">
            <Quote size={40} className="quote-icon" />
            <p className="quote-text">
              "At Chaitanya Tech Solutions, we believe in delivering innovative solutions and empowering individuals with skills for a better tomorrow. Our commitment to quality, integrity and excellence drives everything we do."
            </p>
            <span className="quote-author">— Our Directors</span>
          </div>
        </div>
      </section>
    </div>
  );
}
