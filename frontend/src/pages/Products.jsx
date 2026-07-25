import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, ShoppingCart, HeartPulse, Check, ExternalLink } from 'lucide-react';
import './Products.css';

export default function Products() {
  const products = [
    {
      title: 'CTS EduSphere',
      category: 'Education & E-Learning',
      icon: <GraduationCap size={36} />,
      desc: 'All-in-one School & Campus ERP software designed to automate admissions, online fee collection, attendance, grading, and parent communication.',
      highlights: ['Student Life-cycle Management', 'Online Fee Payment Integration', 'Automated Report Cards & Analytics', 'Mobile App for Parents & Staff']
    },
    {
      title: 'CTS HRFlow',
      category: 'Enterprise HR & Payroll',
      icon: <Users size={36} />,
      desc: 'Intelligent Human Resource Management System (HRMS) covering automated payroll calculation, leave approval, biometric attendance sync, and tax filing.',
      highlights: ['Biometric & Attendance API Integration', 'One-click Automated Payroll', 'Employee Self-Service Portal', 'Customizable Leave Workflows']
    },
    {
      title: 'CTS BizCart',
      category: 'Retail & E-Commerce',
      icon: <ShoppingCart size={36} />,
      desc: 'High-performance e-commerce platform with real-time inventory management, multi-currency support, order tracking, and integrated CRM.',
      highlights: ['Multi-vendor & Store Management', 'Secure Payment Gateway Connectors', 'Real-time Stock Alert System', 'SEO-Optimized Storefront']
    },
    {
      title: 'CTS HealthSync',
      category: 'Healthcare & Clinics',
      icon: <HeartPulse size={36} />,
      desc: 'Comprehensive Hospital & Healthcare Management System facilitating seamless OPD/IPD registration, EHR records, pharmacy stock, and lab reports.',
      highlights: ['Electronic Health Records (EHR)', 'OPD & IPD Billing Management', 'Pharmacy & Lab Diagnostics Sync', 'Patient Appointment Scheduler']
    }
  ];

  return (
    <div className="products-page">
      <section className="page-header">
        <div className="container">
          <span className="section-subtitle light">OUR READY SOLUTIONS</span>
          <h1>Software Products</h1>
          <p>CODE. SOLVE. DELIVER. EMPOWER.</p>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">ENTERPRISE PRODUCTS</span>
            <h2 className="section-title">ENGINEERED FOR SCALABILITY</h2>
            <p className="section-description">
              Turnkey software platforms developed by Chaitanya Tech Solutions to accelerate your business operations.
            </p>
          </div>

          <div className="grid-2">
            {products.map((prod, idx) => (
              <div className="product-card card" key={idx}>
                <div className="prod-badge">{prod.category}</div>
                <div className="prod-header">
                  <div className="prod-icon">{prod.icon}</div>
                  <h2>{prod.title}</h2>
                </div>
                <p className="prod-desc">{prod.desc}</p>
                <div className="prod-highlights">
                  <h4>Key Capabilities</h4>
                  <ul>
                    {prod.highlights.map((h, i) => (
                      <li key={i}><Check size={16} className="h-check" /> {h}</li>
                    ))}
                  </ul>
                </div>
                <div className="prod-action">
                  <Link to="/contact" className="btn btn-outline">
                    Schedule Demo <ExternalLink size={16} />
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
