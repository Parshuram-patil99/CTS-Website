import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Shield, FileText, ArrowRight, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container grid-4">
          {/* Col 1: Brand & Social */}
          <div className="footer-col">
            <div className="footer-logo-wrap">
              <Logo mode="dark" size="small" showTagline={false} />
            </div>
            <p className="footer-desc">
              Empowering businesses and students with innovative IT solutions, AI technologies and industry-oriented training programs.
            </p>

            <div className="footer-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YoutubeIcon size={18} /></a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><Link to="/"><ArrowRight size={14} /> Home</Link></li>
              <li><Link to="/about"><ArrowRight size={14} /> About Us</Link></li>
              <li><Link to="/directors"><ArrowRight size={14} /> Directors</Link></li>
              <li><Link to="/services"><ArrowRight size={14} /> Services</Link></li>
              <li><Link to="/training"><ArrowRight size={14} /> Training</Link></li>
              <li><Link to="/training#register"><ArrowRight size={14} /> Student Registration</Link></li>
              <li><Link to="/training-enquiry"><ArrowRight size={14} /> Training Enquiry</Link></li>
              <li><Link to="/portfolio"><ArrowRight size={14} /> Portfolio</Link></li>
              <li><Link to="/contact"><ArrowRight size={14} /> Contact Us</Link></li>
              <li><Link to="/privacy"><ArrowRight size={14} /> Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="footer-col">
            <h4 className="footer-title">CONTACT INFO</h4>
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <span>Sy. No.281/2, House No. 3-2-1362, Vivekanand Nagar, Nideban Road, Udgir, Dist. Latur - 413517</span>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <a href="tel:+918275453443">8275453443</a>
            </div>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <a href="mailto:cts.udgir@gmail.com">cts.udgir@gmail.com</a>
            </div>
            <div className="contact-item cin-footer-item">
              <FileText size={18} className="contact-icon" />
              <span>CIN: U62013ME2026PTC475255</span>
            </div>
          </div>

          {/* Col 4: Stay Connected */}
          <div className="footer-col">
            <h4 className="footer-title">STAY CONNECTED</h4>
            <div className="stay-connected-buttons">
              <a 
                href="https://wa.me/918275453443?text=Hello%20CTS,%20I%20have%20an%20enquiry." 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-action-btn wa-btn"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>

              <a href="tel:+918275453443" className="footer-action-btn call-btn">
                <Phone size={20} />
                <div>
                  <small>Call Us Now</small>
                  <strong>8275453443</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>© {new Date().getFullYear()} Chaitanya Tech Solutions Pvt. Ltd. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
