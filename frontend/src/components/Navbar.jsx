import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight, ChevronDown, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTrainingDropdownOpen, setIsTrainingDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsTrainingDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className="header-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-info">
            <a href="tel:+918275453443"><Phone size={13} /> +91 8275453443</a>
            <a href="mailto:cts.udgir@gmail.com"><Mail size={13} /> cts.udgir@gmail.com</a>
          </div>
          <div className="top-extra">
            <span className="cin-text"><ShieldCheck size={13} className="cin-icon" /> CIN: U62013ME2026PTC475255</span>
            <Link to="/admin" className="top-admin-link">Admin Portal</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar with Light Blue Background */}
      <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo Brand Link */}
          <Link to="/" className="logo-brand-link">
            <Logo mode="light" size="small" />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/directors" className={`nav-link ${location.pathname === '/directors' ? 'active' : ''}`}>
                Directors
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
                Services
              </Link>
            </li>

            {/* Training Dropdown */}
            <li 
              className="nav-item dropdown-item"
              onMouseEnter={() => setIsTrainingDropdownOpen(true)}
              onMouseLeave={() => setIsTrainingDropdownOpen(false)}
            >
              <Link to="/training" className={`nav-link dropdown-trigger ${location.pathname.includes('/training') ? 'active' : ''}`}>
                Training <ChevronDown size={14} className={`arrow-icon ${isTrainingDropdownOpen ? 'rotate' : ''}`} />
              </Link>
              {isTrainingDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/training" className="dropdown-link">Training Overview</Link>
                  <Link to="/training-enquiry" className="dropdown-link">Training Enquiry</Link>
                  <Link to="/training#register" className="dropdown-link">Student Registration</Link>
                </div>
              )}
            </li>

            <li className="nav-item">
              <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>

          {/* CTA Group */}
          <div className="nav-cta-group">
            <Link to="/contact" className="btn btn-primary nav-enquiry-btn">
              Enquiry Now <ChevronRight size={16} />
            </Link>

            <button
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <ul className="mobile-nav-list">
              <li><Link to="/" className="mobile-nav-link">Home</Link></li>
              <li><Link to="/about" className="mobile-nav-link">About Us</Link></li>
              <li><Link to="/directors" className="mobile-nav-link">Directors</Link></li>
              <li><Link to="/services" className="mobile-nav-link">Services</Link></li>
              <li><Link to="/training" className="mobile-nav-link">Training Overview</Link></li>
              <li><Link to="/training-enquiry" className="mobile-nav-link">Training Enquiry</Link></li>
              <li><Link to="/portfolio" className="mobile-nav-link">Portfolio</Link></li>
              <li><Link to="/contact" className="mobile-nav-link">Contact Us</Link></li>
              <li><Link to="/contact" className="mobile-nav-link btn-enquire">Enquire Form</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
