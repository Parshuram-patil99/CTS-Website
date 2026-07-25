import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, Clock, CheckCircle, Send, AlertCircle, Sparkles } from 'lucide-react';
import { API_BASE_URL } from '../config';
import './IndustrialTraining.css';

export default function IndustrialTraining() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    college: '',
    branch: '',
    technology: 'React & Frontend Development',
    duration: '3 Months'
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
      const response = await fetch(`${API_BASE_URL}/api/register-student`, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setStatusMsg({ type: 'success', text: 'Registration submitted successfully! Our training coordinator will contact you shortly.' });
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          college: '',
          branch: '',
          technology: 'React & Frontend Development',
          duration: '3 Months'
        });
      } else {
        setStatusMsg({ type: 'error', text: data.error || 'Failed to submit registration.' });
      }
    } catch (err) {
      console.error(err);
      setStatusMsg({ type: 'error', text: 'Backend server unavailable. Please make sure the Python Flask API is running on port 5000.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const tracks = [
    { title: 'Full Stack Web Development', tech: 'React, Python, Flask, MySQL', duration: '3 - 6 Months' },
    { title: 'Mobile App Development', tech: 'Flutter, Dart, Firebase, REST API', duration: '3 - 6 Months' },
    { title: 'Backend & Cloud DevOps', tech: 'Python, Node.js, AWS, Docker', duration: '2 - 3 Months' },
    { title: 'Frontend UI/UX Design', tech: 'HTML5, CSS3, JavaScript, Figma', duration: '1 - 2 Months' }
  ];

  return (
    <div className="training-page">
      <section className="page-header">
        <div className="container">
          <span className="section-subtitle light">BUILD REAL EXPERIENCE</span>
          <h1>Industrial Training & Student Internship</h1>
          <p>CODE. SOLVE. DELIVER. EMPOWER.</p>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="section section-bg">
        <div className="container grid-2 align-center">
          <div>
            <span className="section-subtitle">SKILL DEVELOPMENT</span>
            <h2 className="section-title left-align">Bridge the Gap Between Campus & Industry</h2>
            <p className="lead-paragraph">
              Chaitanya Tech Solutions offers structured industrial training and internship programs tailored for Engineering, B.Sc (CS/IT), BCA, and MCA students.
            </p>
            <p>
              Work on live enterprise projects under the mentorship of senior developers. Gain practical mastery over React, Python, Flask, AWS, Docker, and SQL databases.
            </p>
            <div className="training-benefits">
              <div className="t-benefit"><CheckCircle className="tb-icon" size={18} /> Live Commercial Project Mentorship</div>
              <div className="t-benefit"><CheckCircle className="tb-icon" size={18} /> Official Internship Certification</div>
              <div className="t-benefit"><CheckCircle className="tb-icon" size={18} /> Code Review & GitHub Portfolio Setup</div>
              <div className="t-benefit"><CheckCircle className="tb-icon" size={18} /> Career Guidance & Interview Preparation</div>
            </div>
          </div>

          <div className="training-tracks-box">
            <h3>Popular Training Tracks</h3>
            <div className="tracks-list">
              {tracks.map((t, idx) => (
                <div key={idx} className="track-item">
                  <div className="track-header">
                    <strong>{t.title}</strong>
                    <span className="track-dur"><Clock size={14} /> {t.duration}</span>
                  </div>
                  <p>{t.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="section section-bg-alt" id="register">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">JOIN US TODAY</span>
            <h2 className="section-title">STUDENT REGISTRATION FORM</h2>
            <p className="section-description">
              Fill in your details to register for our upcoming Industrial Training batch.
            </p>
          </div>

          <div className="registration-form-card card">
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
                    placeholder="Enter your full name"
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

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">College / University Name *</label>
                  <input
                    type="text"
                    name="college"
                    className="form-control"
                    placeholder="e.g. COEP / Govt Polytechnic"
                    value={formData.college}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid-3">
                <div className="form-group">
                  <label className="form-label">Branch / Department *</label>
                  <input
                    type="text"
                    name="branch"
                    className="form-control"
                    placeholder="e.g. Computer Science / IT"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Technology Track *</label>
                  <select
                    name="technology"
                    className="form-control"
                    value={formData.technology}
                    onChange={handleChange}
                    required
                  >
                    <option value="React & Frontend Development">React & Frontend Development</option>
                    <option value="Python Backend Development (Flask)">Python Backend Development (Flask)</option>
                    <option value="Full Stack Development (React + Python)">Full Stack Development (React + Python)</option>
                    <option value="Flutter Mobile App Development">Flutter Mobile App Development</option>
                    <option value="Cloud Services & DevOps (AWS/Docker)">Cloud Services & DevOps (AWS/Docker)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Training Duration *</label>
                  <select
                    name="duration"
                    className="form-control"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                  >
                    <option value="1 Month (Fast-track)">1 Month (Fast-track)</option>
                    <option value="2 Months">2 Months</option>
                    <option value="3 Months (Recommended)">3 Months (Recommended)</option>
                    <option value="6 Months (Full Internship)">6 Months (Full Internship)</option>
                  </select>
                </div>
              </div>

              <div className="form-submit-row">
                <button type="submit" className="btn btn-primary btn-submit-lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : <><Send size={18} /> Submit Student Registration</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
