import React, { useState } from 'react';

const ContactModal = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [selectedCountry, setSelectedCountry] = useState({ flag: '🇺🇸', code: '+1' });

  const countries = [
    { flag: '🇺🇸', code: '+1', name: 'United States' },
    { flag: '🇨🇦', code: '+1', name: 'Canada' },
    { flag: '🇬🇧', code: '+44', name: 'United Kingdom' },
    { flag: '🇦🇺', code: '+61', name: 'Australia' },
    { flag: '🇦🇪', code: '+971', name: 'UAE' },
    { flag: '🇸🇦', code: '+966', name: 'Saudi Arabia' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData, selectedCountry);
    // You can add actual form submission logic here
  };

  return (
    <div
      className="modal fade"
      id="contactModal"
      tabIndex="-1"
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold" id="contactModalLabel">
              Get in Touch
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row g-0">
                {/* LEFT: Contact Form */}
                <div className="col-md-6 p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="contact-name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="contact-name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="contact-phone" className="form-label">
                        Phone
                      </label>
                      <div className="input-group">
                        <button
                          className="btn dropdown-toggle flag-dropdown"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {selectedCountry.flag} {selectedCountry.code}
                        </button>
                        <ul className="dropdown-menu">
                          {countries.map((country, index) => (
                            <li key={index}>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleCountrySelect(country)}
                              >
                                {country.flag} {country.code}
                              </button>
                            </li>
                          ))}
                        </ul>
                        <input
                          type="tel"
                          className="form-control"
                          id="contact-phone"
                          name="phone"
                          placeholder="123-456-7890"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="contact-message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="contact-message"
                        name="message"
                        rows="4"
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>

                {/* RIGHT: Agent Profile */}
                <div className="col-md-6 profile-section p-4 d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="profile-accent mb-3"></div>
                  <img
                    src="assets/contact.jpeg"
                    alt="Mohamad Ahmad"
                    className="agent-photo mb-3"
                  />
                  <h5 className="text-white mb-1">Mohamad Ahmad</h5>
                  <p className="text-secondary mb-3">Luxury Real Estate Agent</p>
                  <p className="text-secondary mb-4">
                    "Building bespoke property experiences in Dubai & beyond."
                  </p>
                  <div className="d-flex justify-content-center gap-3">
                    <a 
                      href="tel:+971562279111" 
                      className="text-decoration-none text-light"
                      aria-label="Call Mohamad Ahmad"
                    >
                      <i className="fa-solid fa-phone"></i>
                    </a>
                    <a 
                      href="mailto:mohamad@realty.com" 
                      className="text-decoration-none text-light"
                      aria-label="Email Mohamad Ahmad"
                    >
                      <i className="fa-solid fa-envelope"></i>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/mohamadahmad" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-light"
                      aria-label="Connect on LinkedIn"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
