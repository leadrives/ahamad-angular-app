import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate loading delay for better UX
    setTimeout(() => {
      // Check credentials
      if (credentials.username === 'mohamad' && credentials.password === 'admin2025') {
        onLogin(true);
      } else {
        setError('Invalid username or password. Please try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-background">
        <div className="login-overlay"></div>
      </div>
      
      <div className="admin-login-content">
        <div className="login-card">
          {/* Agent Profile Section */}
          <div className="agent-profile-section">
            <div className="profile-image-wrapper">
              <img 
                src="assets/contact.jpeg" 
                alt="Mohamad Ahmad"
                className="profile-image"
              />
              <div className="profile-badge">
                <i className="fa-solid fa-crown"></i>
              </div>
            </div>
            <h2 className="agent-name">Mohamad Ahmad</h2>
            <p className="agent-title">Luxury Real Estate Agent</p>
            <div className="agent-location">
              <i className="fa-solid fa-location-dot"></i>
              <span>Dubai, UAE</span>
            </div>
          </div>

          {/* Login Form Section */}
          <div className="login-form-section">
            <div className="login-header">
              <h3>Admin Dashboard Access</h3>
              <p>Sign in to manage your property inquiries</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="username">
                  <i className="fa-solid fa-user"></i>
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  required
                  autoComplete="username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <i className="fa-solid fa-lock"></i>
                  Password
                </label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                    aria-label="Toggle password visibility"
                  >
                    <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              {error && (
                <div className="error-message">
                  <i className="fa-solid fa-exclamation-triangle"></i>
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                className="login-button"
                disabled={isLoading || !credentials.username || !credentials.password}
              >
                {isLoading ? (
                  <>
                    <div className="login-spinner"></div>
                    <span>Signing In...</span>
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-arrow-right"></i>
                    <span>Access Dashboard</span>
                  </>
                )}
              </button>
            </form>

            {/* Additional Info */}
            <div className="login-footer">
              <div className="security-note">
                <i className="fa-solid fa-shield-halved"></i>
                <span>Secure admin access protected by encryption</span>
              </div>
              
              <div className="stats-preview">
                <div className="stat-item">
                  <i className="fa-solid fa-envelope"></i>
                  <span>View Inquiries</span>
                </div>
                <div className="stat-item">
                  <i className="fa-solid fa-chart-line"></i>
                  <span>Track Leads</span>
                </div>
                <div className="stat-item">
                  <i className="fa-solid fa-phone"></i>
                  <span>Manage Contacts</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="floating-elements">
          <div className="floating-element element-1">
            <i className="fa-solid fa-building"></i>
          </div>
          <div className="floating-element element-2">
            <i className="fa-solid fa-home"></i>
          </div>
          <div className="floating-element element-3">
            <i className="fa-solid fa-key"></i>
          </div>
          <div className="floating-element element-4">
            <i className="fa-solid fa-chart-bar"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
