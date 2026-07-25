import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { API_BASE_URL } from '../config';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Software Enquiry',
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
        setStatusMsg({ type: 'success', text: 'Thank you for reaching out! Your enquiry has been received and our team will respond within 24 hours.' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'General Software Enquiry',
          message: ''
        });
      } else {
        setStatusMsg({ type: 'error', text: data.error || 'Failed to submit enquiry.' });
      }
    } catch (err) {
      console.error(err);
      setStatusMsg({ type: 'error', text: 'Unable to reach backend server. Please verify the Python Flask backend is running on port 5000.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <span className="section-subtitle light">GET IN TOUCH</span>
          <h1>Contact Us & Enquiry</h1>
          <p>CODE. SOLVE. DELIVER. EMPOWER.</p>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container grid-2">
          {/* Left: Contact Info */}
          <div className="contact-info-column">
            <span className="section-subtitle">CONNECT WITH CTS</span>
            <h2 className="section-title left-align">Let's Build Something Great Together</h2>
            <p className="contact-intro">
              Whether you need custom software development, cloud infrastructure setup, IT support, or industrial training, we are here to assist you.
            </p>

            <div className="contact-info-cards">
              <div className="c-info-card">
                <div className="c-icon-box"><MapPin size={24} /></div>
                <div>
                  <h4>Registered Office Address</h4>
                  <p>Sy. No.281/2, House No. 3-2-1362, Vivekanand Nagar, Nideban Road, Udgir, Dist. Latur - 413517, Maharashtra, India</p>
                </div>
              </div>

              <div className="c-info-card">
                <div className="c-icon-box"><Phone size={24} /></div>
                <div>
                  <h4>Phone / Mobile</h4>
                  <p><a href="tel:+918275453443">+91 8275453443</a></p>
                </div>
              </div>

              <div className="c-info-card">
                <div className="c-icon-box"><Mail size={24} /></div>
                <div>
                  <h4>Official Email</h4>
                  <p><a href="mailto:cts.udgir@gmail.com">cts.udgir@gmail.com</a></p>
                </div>
              </div>

              <div className="c-info-card">
                <div className="c-icon-box"><Globe size={24} /></div>
                <div>
                  <h4>Official Website</h4>
                  <p><a href="http://www.chaitanyatechsolutions.com" target="_blank" rel="noopener noreferrer">www.chaitanyatechsolutions.com</a></p>
                </div>
              </div>
            </div>

            <div className="quick-wa-box">
              <MessageCircle size={24} className="wa-icon-inline" />
              <div>
                <strong>Need Immediate Assistance?</strong>
                <p>Chat directly with our tech team on WhatsApp.</p>
              </div>
              <a
                href="https://wa.me/918275453443?text=Hello%20CTS,%20I%20have%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="contact-form-column" id="enquiry">
            <div className="card enquiry-card">
              <h3>Send Us an Enquiry</h3>
              <p className="enquiry-subtext">Fill out the form below and our team will get back to you.</p>

              {statusMsg && (
                <div className={`status-alert ${statusMsg.type}`}>
                  {statusMsg.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                  <span>{statusMsg.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
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
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

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
                </div>

                <div className="form-group">
                  <label className="form-label">Subject / Interest *</label>
                  <select
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Cloud Solutions & DevOps">Cloud Solutions & DevOps</option>
                    <option value="IT Services & Managed Support">IT Services & Managed Support</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="Industrial Training Program">Industrial Training Program</option>
                    <option value="General Software Enquiry">General Software Enquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Details *</label>
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Describe your requirements or questions..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : <><Send size={18} /> Submit Enquiry</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section map-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">OUR LOCATION</span>
            <h2 className="section-title">FIND US ON GOOGLE MAPS</h2>
            <p className="section-description">
              Vivekanand Nagar, Nideban Road, Udgir, Dist. Latur - 413517, Maharashtra.
            </p>
          </div>

          <div className="map-container card">
            <iframe
              title="CTS Office Location Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.2885973715694!2d77.106511!3d18.388835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf6f3f00000001%3A0x123456789abcdef!2sUdgir%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
