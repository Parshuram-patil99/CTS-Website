import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';
import { API_BASE_URL } from '../config';
import './IndustrialTraining.css';

export default function TrainingEnquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Industrial Training Enquiry',
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
      const response = await fetch(`${API_BASE_URL}/api/enquiry`, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setStatusMsg({ type: 'success', text: 'Thank you! Your training enquiry has been submitted. Our course counselor will contact you shortly.' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Industrial Training Enquiry',
          message: ''
        });
      } else {
        setStatusMsg({ type: 'error', text: data.error || 'Failed to submit enquiry.' });
      }
    } catch (err) {
      console.error(err);
      setStatusMsg({ type: 'error', text: 'Backend server unavailable. Please make sure the Python Flask API is running.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="training-enquiry-page">
      <section className="page-header">
        <div className="container">
          <span className="section-subtitle light">ASK FOR INFORMATION</span>
          <h1>Training Enquiry</h1>
          <p>Have questions regarding our Industrial Training & Student Internship programs?</p>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="card" style={{ padding: '3rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Send a Training Inquiry</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Fill in the form below and our academic counseling team will reach out with complete batch schedules, syllabus details, and fee structure.
            </p>

            {statusMsg && (
              <div className={`status-alert ${statusMsg.type}`}>
                {statusMsg.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                <span>{statusMsg.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid-2">
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

                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp *</label>
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
              </div>

              <div className="form-group">
                <label className="form-label">Inquiry Details *</label>
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Tell us your college/branch and what course track you are interested in..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : <><Send size={18} /> Submit Training Enquiry</>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
