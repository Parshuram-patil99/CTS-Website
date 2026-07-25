import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { API_BASE_URL } from '../config';
import './Career.css';

export default function Career() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    position: 'React Frontend Developer',
    experience: '1-3 Years',
    resume_link: '',
    message: ''
  });

  const [statusMsg, setStatusMsg] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/apply-job`, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setStatusMsg({ type: 'success', text: 'Your career application has been submitted successfully! HR will review your profile.' });
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          position: 'React Frontend Developer',
          experience: '1-3 Years',
          resume_link: '',
          message: ''
        });
      } else {
        setStatusMsg({ type: 'error', text: data.error || 'Failed to submit application.' });
      }
    } catch (err) {
      console.error(err);
      setStatusMsg({ type: 'error', text: 'Backend server connection error. Please make sure the Python Flask API is running on port 5000.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const jobs = [
    {
      title: 'React Frontend Developer',
      type: 'Full-time',
      location: 'Udgir / Hybrid',
      exp: '1 - 3 Years',
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5/CSS3', 'REST API Integration', 'Responsive Design']
    },
    {
      title: 'Python Backend Developer',
      type: 'Full-time',
      location: 'Udgir / Hybrid',
      exp: '1 - 3 Years',
      skills: ['Python', 'Flask / Django', 'PostgreSQL / MySQL', 'RESTful API Architecture', 'Docker']
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time / Internship',
      location: 'Udgir / Remote',
      exp: '0 - 2 Years',
      skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      title: 'IT Support & DevOps Specialist',
      type: 'Full-time',
      location: 'Udgir',
      exp: '1 - 2 Years',
      skills: ['AWS', 'Docker', 'Linux Administration', 'Nginx', 'Network Security']
    }
  ];

  return (
    <div className="career-page">
      <section className="page-header">
        <div className="container">
          <span className="section-subtitle light">JOIN OUR TEAM</span>
          <h1>Careers at CTS</h1>
          <p>CODE. SOLVE. DELIVER. EMPOWER.</p>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">GROW WITH US</span>
            <h2 className="section-title">CURRENT JOB OPENINGS</h2>
            <p className="section-description">
              We are seeking passionate developers, designers, and tech enthusiasts to shape the future of software solutions.
            </p>
          </div>

          <div className="grid-2">
            {jobs.map((job, idx) => (
              <div className="job-card card" key={idx}>
                <div className="job-header">
                  <div>
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span><Briefcase size={14} /> {job.type}</span>
                      <span><MapPin size={14} /> {job.location}</span>
                      <span><Clock size={14} /> {job.exp}</span>
                    </div>
                  </div>
                </div>

                <div className="job-skills">
                  <strong>Required Skills:</strong>
                  <div className="skill-tags">
                    {job.skills.map((s, i) => (
                      <span key={i} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="job-action">
                  <a href="#apply" className="btn btn-outline btn-sm">
                    Apply For Position
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section section-bg-alt" id="apply">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">SUBMIT RESUME</span>
            <h2 className="section-title">CAREER APPLICATION FORM</h2>
          </div>

          <div className="career-form-card card">
            {statusMsg && (
              <div className={`status-alert ${statusMsg.type}`}>
                {statusMsg.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                <span>{statusMsg.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="full_name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid-3">
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="+91 8275453443"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Applying Position *</label>
                  <select
                    name="position"
                    className="form-control"
                    value={formData.position}
                    onChange={handleChange}
                    required
                  >
                    <option value="React Frontend Developer">React Frontend Developer</option>
                    <option value="Python Backend Developer">Python Backend Developer</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="IT Support & DevOps Specialist">IT Support & DevOps Specialist</option>
                    <option value="Software Developer Intern">Software Developer Intern</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Experience Level *</label>
                  <select
                    name="experience"
                    className="form-control"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  >
                    <option value="Fresher / Intern">Fresher / Intern</option>
                    <option value="1-3 Years">1-3 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Resume / LinkedIn / Portfolio Link</label>
                <input
                  type="url"
                  name="resume_link"
                  className="form-control"
                  placeholder="https://drive.google.com/... or LinkedIn URL"
                  value={formData.resume_link}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Cover Letter / Note</label>
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Tell us briefly about your technical background and key projects..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-submit-row">
                <button type="submit" className="btn btn-primary btn-submit-lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : <><Send size={18} /> Submit Application</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
