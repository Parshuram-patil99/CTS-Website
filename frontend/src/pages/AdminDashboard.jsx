import React, { useState, useEffect } from 'react';
import { Database, Inbox, UserCheck, Briefcase, RefreshCw, Lock, KeyRound, LogOut, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { API_BASE_URL } from '../config';
import Logo from '../components/Logo';
import './AdminDashboard.css';


export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState('enquiries');
  const [data, setData] = useState({ enquiries: [], registrations: [], applications: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Check existing session on load
  useEffect(() => {
    const savedAuth = sessionStorage.getItem('cts_admin_auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
      fetchData();
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setAuthError('');
    
    // Default admin credentials: CTS@admin2026 or admin123
    if (password === 'admin123' || password === 'CTS@admin2026' || password === 'admin') {
      sessionStorage.setItem('cts_admin_auth', 'true');
      setIsAuthenticated(true);
      fetchData();
    } else {
      setAuthError('Incorrect admin password. Please try again.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('cts_admin_auth');
    setIsAuthenticated(false);
    setPassword('');
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/submissions`);
      if (!response.ok) {
        throw new Error('Failed to fetch admin data from backend');
      }
      const json = await response.json();
      setData({
        enquiries: json.enquiries || [],
        registrations: json.registrations || [],
        applications: json.applications || []
      });
    } catch (err) {
      console.error(err);
      setError(`Unable to fetch submissions. Ensure backend server is running at ${API_BASE_URL}`);
    }
 finally {
      setLoading(false);
    }
  };

  // If NOT authenticated, show Password Login Screen
  if (!isAuthenticated) {
    return (
      <div className="admin-page login-page">
        <div className="container login-container">
          <div className="login-card card">
            <div className="login-header">
              <div className="lock-icon-circle">
                <Lock size={32} />
              </div>
              <h2>CTS Admin Access</h2>
              <p>Enter administrative password to view submissions</p>
            </div>

            <form onSubmit={handleLogin} className="login-form">
              {authError && <div className="status-alert error">{authError}</div>}

              <div className="form-group">
                <label htmlFor="adminPassword">
                  <KeyRound size={16} /> Password
                </label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="adminPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password (default: admin123)"
                    required
                    autoFocus
                  />
                  <button
                    type="button"
                    className="toggle-pwd-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Unlock Dashboard
              </button>
            </form>

            <div className="login-footer">
              <small><ShieldCheck size={14} /> Chaitanya Tech Solutions Admin Portal</small>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Dashboard View when Authenticated
  return (
    <div className="admin-page">
      <section className="page-header">
        <div className="container">
          <div className="admin-header-flex">
            <div>
              <h1>CTS Admin Dashboard</h1>
              <p>Database Management & Form Submissions</p>
            </div>
            <div className="admin-header-actions">
              <button onClick={fetchData} className="btn btn-light btn-sm flex-btn" disabled={loading}>
                <RefreshCw size={16} className={loading ? 'spin' : ''} /> Refresh Data
              </button>
              <button onClick={handleLogout} className="btn btn-danger btn-sm flex-btn">
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container">
          {error && <div className="status-alert error">{error}</div>}

          {/* Admin Tabs */}
          <div className="admin-tabs">
            <button
              className={`admin-tab ${activeTab === 'enquiries' ? 'active' : ''}`}
              onClick={() => setActiveTab('enquiries')}
            >
              <Inbox size={18} /> Enquiries ({data.enquiries.length})
            </button>
            <button
              className={`admin-tab ${activeTab === 'registrations' ? 'active' : ''}`}
              onClick={() => setActiveTab('registrations')}
            >
              <UserCheck size={18} /> Student Registrations ({data.registrations.length})
            </button>
            <button
              className={`admin-tab ${activeTab === 'applications' ? 'active' : ''}`}
              onClick={() => setActiveTab('applications')}
            >
              <Briefcase size={18} /> Job Applications ({data.applications.length})
            </button>
          </div>

          {/* Tab 1: Enquiries */}
          {activeTab === 'enquiries' && (
            <div className="admin-table-wrapper card">
              <h3>Customer Enquiries</h3>
              {data.enquiries.length === 0 ? (
                <p className="no-data">No enquiries received yet.</p>
              ) : (
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Name</th>
                      <th>Email & Phone</th>
                      <th>Subject</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.enquiries.map((e) => (
                      <tr key={e.id}>
                        <td>#{e.id}</td>
                        <td>{e.created_at}</td>
                        <td><strong>{e.name}</strong></td>
                        <td>
                          {e.email}<br />
                          <small>{e.phone}</small>
                        </td>
                        <td><span className="badge">{e.subject}</span></td>
                        <td className="msg-cell">{e.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* Tab 2: Student Registrations */}
          {activeTab === 'registrations' && (
            <div className="admin-table-wrapper card">
              <h3>Student Training Registrations</h3>
              {data.registrations.length === 0 ? (
                <p className="no-data">No student registrations received yet.</p>
              ) : (
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Student Name</th>
                      <th>Contact</th>
                      <th>College & Branch</th>
                      <th>Track & Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.registrations.map((r) => (
                      <tr key={r.id}>
                        <td>#{r.id}</td>
                        <td>{r.created_at}</td>
                        <td><strong>{r.full_name}</strong></td>
                        <td>
                          {r.email}<br />
                          <small>{r.phone}</small>
                        </td>
                        <td>
                          {r.college}<br />
                          <small>{r.branch}</small>
                        </td>
                        <td>
                          <span className="badge">{r.technology}</span><br />
                          <small>{r.duration}</small>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* Tab 3: Job Applications */}
          {activeTab === 'applications' && (
            <div className="admin-table-wrapper card">
              <h3>Job Applications</h3>
              {data.applications.length === 0 ? (
                <p className="no-data">No job applications received yet.</p>
              ) : (
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Date</th>
                      <th>Applicant</th>
                      <th>Position & Exp</th>
                      <th>Contact</th>
                      <th>Resume / Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.applications.map((a) => (
                      <tr key={a.id}>
                        <td>#{a.id}</td>
                        <td>{a.created_at}</td>
                        <td><strong>{a.full_name}</strong></td>
                        <td>
                          <span className="badge">{a.position}</span><br />
                          <small>{a.experience}</small>
                        </td>
                        <td>
                          {a.email}<br />
                          <small>{a.phone}</small>
                        </td>
                        <td>
                          {a.resume_link && (
                            <a href={a.resume_link} target="_blank" rel="noopener noreferrer" className="link-text">
                              View Resume
                            </a>
                          )}
                          <p className="msg-cell">{a.message}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
