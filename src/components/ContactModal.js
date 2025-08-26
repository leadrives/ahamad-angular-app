import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import './ContactModal.css';
import SuccessModal from './SuccessModal';

const ContactModal = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [selectedCountry, setSelectedCountry] = useState({ flag: '🇦🇪', code: '+971', name: 'UAE' });
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userLocationData, setUserLocationData] = useState({
    ip: '',
    country: 'UAE',
    city: '',
    region: ''
  });

  const countries = [
    { flag: '🇦🇫', code: '+93', name: 'Afghanistan' },
    { flag: '🇦🇱', code: '+355', name: 'Albania' },
    { flag: '🇩🇿', code: '+213', name: 'Algeria' },
    { flag: '🇦🇩', code: '+376', name: 'Andorra' },
    { flag: '🇦🇴', code: '+244', name: 'Angola' },
    { flag: '🇦🇬', code: '+1268', name: 'Antigua and Barbuda' },
    { flag: '🇦🇷', code: '+54', name: 'Argentina' },
    { flag: '🇦🇲', code: '+374', name: 'Armenia' },
    { flag: '🇦🇺', code: '+61', name: 'Australia' },
    { flag: '🇦🇹', code: '+43', name: 'Austria' },
    { flag: '🇦🇿', code: '+994', name: 'Azerbaijan' },
    { flag: '🇧🇸', code: '+1242', name: 'Bahamas' },
    { flag: '🇧🇭', code: '+973', name: 'Bahrain' },
    { flag: '🇧🇩', code: '+880', name: 'Bangladesh' },
    { flag: '🇧🇧', code: '+1246', name: 'Barbados' },
    { flag: '🇧🇾', code: '+375', name: 'Belarus' },
    { flag: '🇧🇪', code: '+32', name: 'Belgium' },
    { flag: '🇧🇿', code: '+501', name: 'Belize' },
    { flag: '🇧🇯', code: '+229', name: 'Benin' },
    { flag: '🇧🇹', code: '+975', name: 'Bhutan' },
    { flag: '🇧🇴', code: '+591', name: 'Bolivia' },
    { flag: '🇧🇦', code: '+387', name: 'Bosnia and Herzegovina' },
    { flag: '🇧🇼', code: '+267', name: 'Botswana' },
    { flag: '🇧🇷', code: '+55', name: 'Brazil' },
    { flag: '🇧🇳', code: '+673', name: 'Brunei' },
    { flag: '🇧🇬', code: '+359', name: 'Bulgaria' },
    { flag: '🇧🇫', code: '+226', name: 'Burkina Faso' },
    { flag: '🇧🇮', code: '+257', name: 'Burundi' },
    { flag: '🇰🇭', code: '+855', name: 'Cambodia' },
    { flag: '🇨🇲', code: '+237', name: 'Cameroon' },
    { flag: '🇨🇦', code: '+1', name: 'Canada' },
    { flag: '🇨🇻', code: '+238', name: 'Cape Verde' },
    { flag: '🇨🇫', code: '+236', name: 'Central African Republic' },
    { flag: '🇹🇩', code: '+235', name: 'Chad' },
    { flag: '🇨🇱', code: '+56', name: 'Chile' },
    { flag: '🇨🇳', code: '+86', name: 'China' },
    { flag: '🇨🇴', code: '+57', name: 'Colombia' },
    { flag: '🇰🇲', code: '+269', name: 'Comoros' },
    { flag: '🇨🇩', code: '+243', name: 'Congo (DRC)' },
    { flag: '🇨🇬', code: '+242', name: 'Congo (Republic)' },
    { flag: '🇨🇷', code: '+506', name: 'Costa Rica' },
    { flag: '🇭🇷', code: '+385', name: 'Croatia' },
    { flag: '🇨🇺', code: '+53', name: 'Cuba' },
    { flag: '🇨🇾', code: '+357', name: 'Cyprus' },
    { flag: '🇨🇿', code: '+420', name: 'Czech Republic' },
    { flag: '🇩🇰', code: '+45', name: 'Denmark' },
    { flag: '🇩🇯', code: '+253', name: 'Djibouti' },
    { flag: '🇩🇲', code: '+1767', name: 'Dominica' },
    { flag: '🇩🇴', code: '+1809', name: 'Dominican Republic' },
    { flag: '🇪🇨', code: '+593', name: 'Ecuador' },
    { flag: '🇪🇬', code: '+20', name: 'Egypt' },
    { flag: '🇸🇻', code: '+503', name: 'El Salvador' },
    { flag: '🇬🇶', code: '+240', name: 'Equatorial Guinea' },
    { flag: '🇪🇷', code: '+291', name: 'Eritrea' },
    { flag: '🇪🇪', code: '+372', name: 'Estonia' },
    { flag: '🇪🇹', code: '+251', name: 'Ethiopia' },
    { flag: '🇫🇯', code: '+679', name: 'Fiji' },
    { flag: '🇫🇮', code: '+358', name: 'Finland' },
    { flag: '🇫🇷', code: '+33', name: 'France' },
    { flag: '🇬🇦', code: '+241', name: 'Gabon' },
    { flag: '🇬🇲', code: '+220', name: 'Gambia' },
    { flag: '🇬🇪', code: '+995', name: 'Georgia' },
    { flag: '🇩🇪', code: '+49', name: 'Germany' },
    { flag: '🇬🇭', code: '+233', name: 'Ghana' },
    { flag: '🇬🇷', code: '+30', name: 'Greece' },
    { flag: '🇬🇩', code: '+1473', name: 'Grenada' },
    { flag: '🇬🇹', code: '+502', name: 'Guatemala' },
    { flag: '🇬🇳', code: '+224', name: 'Guinea' },
    { flag: '🇬🇼', code: '+245', name: 'Guinea-Bissau' },
    { flag: '🇬🇾', code: '+592', name: 'Guyana' },
    { flag: '🇭🇹', code: '+509', name: 'Haiti' },
    { flag: '🇭🇳', code: '+504', name: 'Honduras' },
    { flag: '🇭🇺', code: '+36', name: 'Hungary' },
    { flag: '🇮🇸', code: '+354', name: 'Iceland' },
    { flag: '🇮🇳', code: '+91', name: 'India' },
    { flag: '🇮🇩', code: '+62', name: 'Indonesia' },
    { flag: '🇮🇷', code: '+98', name: 'Iran' },
    { flag: '🇮🇶', code: '+964', name: 'Iraq' },
    { flag: '🇮🇪', code: '+353', name: 'Ireland' },
    { flag: '🇮🇱', code: '+972', name: 'Israel' },
    { flag: '🇮🇹', code: '+39', name: 'Italy' },
    { flag: '🇯🇲', code: '+1876', name: 'Jamaica' },
    { flag: '🇯🇵', code: '+81', name: 'Japan' },
    { flag: '🇯🇴', code: '+962', name: 'Jordan' },
    { flag: '🇰🇿', code: '+7', name: 'Kazakhstan' },
    { flag: '🇰🇪', code: '+254', name: 'Kenya' },
    { flag: '🇰🇮', code: '+686', name: 'Kiribati' },
    { flag: '🇰🇵', code: '+850', name: 'North Korea' },
    { flag: '🇰🇷', code: '+82', name: 'South Korea' },
    { flag: '🇰🇼', code: '+965', name: 'Kuwait' },
    { flag: '🇰🇬', code: '+996', name: 'Kyrgyzstan' },
    { flag: '🇱🇦', code: '+856', name: 'Laos' },
    { flag: '🇱🇻', code: '+371', name: 'Latvia' },
    { flag: '🇱🇧', code: '+961', name: 'Lebanon' },
    { flag: '🇱🇸', code: '+266', name: 'Lesotho' },
    { flag: '🇱🇷', code: '+231', name: 'Liberia' },
    { flag: '🇱🇾', code: '+218', name: 'Libya' },
    { flag: '🇱🇮', code: '+423', name: 'Liechtenstein' },
    { flag: '🇱🇹', code: '+370', name: 'Lithuania' },
    { flag: '🇱🇺', code: '+352', name: 'Luxembourg' },
    { flag: '🇲🇰', code: '+389', name: 'North Macedonia' },
    { flag: '🇲🇬', code: '+261', name: 'Madagascar' },
    { flag: '🇲🇼', code: '+265', name: 'Malawi' },
    { flag: '🇲🇾', code: '+60', name: 'Malaysia' },
    { flag: '🇲🇻', code: '+960', name: 'Maldives' },
    { flag: '🇲🇱', code: '+223', name: 'Mali' },
    { flag: '🇲🇹', code: '+356', name: 'Malta' },
    { flag: '🇲🇭', code: '+692', name: 'Marshall Islands' },
    { flag: '🇲🇷', code: '+222', name: 'Mauritania' },
    { flag: '🇲🇺', code: '+230', name: 'Mauritius' },
    { flag: '🇲🇽', code: '+52', name: 'Mexico' },
    { flag: '🇫🇲', code: '+691', name: 'Micronesia' },
    { flag: '🇲🇩', code: '+373', name: 'Moldova' },
    { flag: '🇲🇨', code: '+377', name: 'Monaco' },
    { flag: '🇲🇳', code: '+976', name: 'Mongolia' },
    { flag: '🇲🇪', code: '+382', name: 'Montenegro' },
    { flag: '🇲🇦', code: '+212', name: 'Morocco' },
    { flag: '🇲🇿', code: '+258', name: 'Mozambique' },
    { flag: '🇲🇲', code: '+95', name: 'Myanmar' },
    { flag: '🇳🇦', code: '+264', name: 'Namibia' },
    { flag: '🇳🇷', code: '+674', name: 'Nauru' },
    { flag: '🇳🇵', code: '+977', name: 'Nepal' },
    { flag: '🇳🇱', code: '+31', name: 'Netherlands' },
    { flag: '🇳🇿', code: '+64', name: 'New Zealand' },
    { flag: '🇳🇮', code: '+505', name: 'Nicaragua' },
    { flag: '🇳🇪', code: '+227', name: 'Niger' },
    { flag: '🇳🇬', code: '+234', name: 'Nigeria' },
    { flag: '🇳🇴', code: '+47', name: 'Norway' },
    { flag: '🇴🇲', code: '+968', name: 'Oman' },
    { flag: '🇵🇰', code: '+92', name: 'Pakistan' },
    { flag: '🇵🇼', code: '+680', name: 'Palau' },
    { flag: '🇵🇦', code: '+507', name: 'Panama' },
    { flag: '🇵🇬', code: '+675', name: 'Papua New Guinea' },
    { flag: '🇵🇾', code: '+595', name: 'Paraguay' },
    { flag: '🇵🇪', code: '+51', name: 'Peru' },
    { flag: '🇵🇭', code: '+63', name: 'Philippines' },
    { flag: '🇵🇱', code: '+48', name: 'Poland' },
    { flag: '🇵🇹', code: '+351', name: 'Portugal' },
    { flag: '🇶🇦', code: '+974', name: 'Qatar' },
    { flag: '🇷🇴', code: '+40', name: 'Romania' },
    { flag: '🇷🇺', code: '+7', name: 'Russia' },
    { flag: '🇷🇼', code: '+250', name: 'Rwanda' },
    { flag: '🇼🇸', code: '+685', name: 'Samoa' },
    { flag: '🇸🇲', code: '+378', name: 'San Marino' },
    { flag: '🇸🇹', code: '+239', name: 'São Tomé and Príncipe' },
    { flag: '🇸🇦', code: '+966', name: 'Saudi Arabia' },
    { flag: '🇸🇳', code: '+221', name: 'Senegal' },
    { flag: '🇷🇸', code: '+381', name: 'Serbia' },
    { flag: '🇸🇨', code: '+248', name: 'Seychelles' },
    { flag: '🇸🇱', code: '+232', name: 'Sierra Leone' },
    { flag: '🇸🇬', code: '+65', name: 'Singapore' },
    { flag: '🇸🇰', code: '+421', name: 'Slovakia' },
    { flag: '🇸🇮', code: '+386', name: 'Slovenia' },
    { flag: '🇸🇧', code: '+677', name: 'Solomon Islands' },
    { flag: '🇸🇴', code: '+252', name: 'Somalia' },
    { flag: '🇿🇦', code: '+27', name: 'South Africa' },
    { flag: '🇸🇸', code: '+211', name: 'South Sudan' },
    { flag: '🇪🇸', code: '+34', name: 'Spain' },
    { flag: '🇱🇰', code: '+94', name: 'Sri Lanka' },
    { flag: '🇸🇩', code: '+249', name: 'Sudan' },
    { flag: '🇸🇷', code: '+597', name: 'Suriname' },
    { flag: '🇸🇿', code: '+268', name: 'Eswatini' },
    { flag: '🇸🇪', code: '+46', name: 'Sweden' },
    { flag: '🇨🇭', code: '+41', name: 'Switzerland' },
    { flag: '🇸🇾', code: '+963', name: 'Syria' },
    { flag: '🇹🇼', code: '+886', name: 'Taiwan' },
    { flag: '🇹🇯', code: '+992', name: 'Tajikistan' },
    { flag: '🇹🇿', code: '+255', name: 'Tanzania' },
    { flag: '🇹🇭', code: '+66', name: 'Thailand' },
    { flag: '🇹🇱', code: '+670', name: 'East Timor' },
    { flag: '🇹🇬', code: '+228', name: 'Togo' },
    { flag: '🇹🇴', code: '+676', name: 'Tonga' },
    { flag: '🇹🇹', code: '+1868', name: 'Trinidad and Tobago' },
    { flag: '🇹🇳', code: '+216', name: 'Tunisia' },
    { flag: '🇹🇷', code: '+90', name: 'Turkey' },
    { flag: '🇹🇲', code: '+993', name: 'Turkmenistan' },
    { flag: '🇹🇻', code: '+688', name: 'Tuvalu' },
    { flag: '🇺🇬', code: '+256', name: 'Uganda' },
    { flag: '🇺🇦', code: '+380', name: 'Ukraine' },
    { flag: '🇦🇪', code: '+971', name: 'UAE' },
    { flag: '🇬🇧', code: '+44', name: 'United Kingdom' },
    { flag: '🇺🇸', code: '+1', name: 'United States' },
    { flag: '🇺🇾', code: '+598', name: 'Uruguay' },
    { flag: '🇺🇿', code: '+998', name: 'Uzbekistan' },
    { flag: '🇻🇺', code: '+678', name: 'Vanuatu' },
    { flag: '🇻🇦', code: '+39', name: 'Vatican City' },
    { flag: '🇻🇪', code: '+58', name: 'Venezuela' },
    { flag: '🇻🇳', code: '+84', name: 'Vietnam' },
    { flag: '🇾🇪', code: '+967', name: 'Yemen' },
    { flag: '🇿🇲', code: '+260', name: 'Zambia' },
    { flag: '🇿🇼', code: '+263', name: 'Zimbabwe' }
  ];

  // Auto-detect user's country based on IP
  useEffect(() => {
    const detectUserCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // Save user location data
        setUserLocationData({
          ip: data.ip || '',
          country: data.country_name || 'UAE',
          city: data.city || '',
          region: data.region || ''
        });
        
        const userCountry = countries.find(country => 
          country.name.toLowerCase().includes(data.country_name?.toLowerCase() || '') ||
          country.code === `+${data.country_calling_code}`
        );
        
        if (userCountry) {
          setSelectedCountry(userCountry);
        }
      } catch (error) {
        console.log('Could not detect country, using default UAE');
        setUserLocationData(prev => ({ ...prev, country: 'UAE' }));
      }
    };

    detectUserCountry();
    setFilteredCountries(countries);
  }, []);

  // Filter countries based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.code.includes(searchTerm)
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countries);
    }
  }, [searchTerm]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSearchTerm('');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare data for Firebase
      const submissionData = {
        // Form data
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
        
        // Country selection
        selectedCountry: {
          flag: selectedCountry.flag,
          code: selectedCountry.code,
          name: selectedCountry.name
        },
        
        // User location data
        userLocation: {
          ip: userLocationData.ip,
          country: userLocationData.country,
          city: userLocationData.city,
          region: userLocationData.region
        },
        
        // Timestamp
        submittedAt: serverTimestamp(),
        submittedDate: new Date().toLocaleDateString(),
        submittedTime: new Date().toLocaleTimeString(),
        
        // Status
        status: 'new',
        isRead: false
      };
      
      // Save to Firestore
      const docRef = await addDoc(collection(db, 'contactInquiries'), submissionData);
      console.log('Document written with ID: ', docRef.id);
      
      // Reset form
      setFormData({ name: '', phone: '', message: '' });
      
      // Show success modal
      setShowSuccess(true);
      
      // Close the contact modal
      const modal = document.getElementById('contactModal');
      const bsModal = window.bootstrap?.Modal?.getInstance(modal);
      if (bsModal) {
        bsModal.hide();
      }
      
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Sorry, there was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
                          <ul className="dropdown-menu dropdown-menu-scrollable">
                            <li>
                              <input
                                type="text"
                                className="form-control dropdown-search"
                                placeholder="Search country..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                onClick={(e) => e.stopPropagation()}
                              />
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            {filteredCountries.slice(0, 10).map((country, index) => (
                              <li key={index}>
                                <button
                                  className="dropdown-item"
                                  type="button"
                                  onClick={() => handleCountrySelect(country)}
                                >
                                  {country.flag} {country.code} {country.name}
                                </button>
                              </li>
                            ))}
                            {filteredCountries.length > 10 && (
                              <li>
                                <div className="dropdown-item-text text-muted small">
                                  {filteredCountries.length - 10} more countries available...
                                </div>
                              </li>
                            )}
                            {filteredCountries.length === 0 && (
                              <li>
                                <div className="dropdown-item-text text-muted">
                                  No countries found
                                </div>
                              </li>
                            )}
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
                      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Submitting...
                          </>
                        ) : (
                          'Submit'
                        )}
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
                        href="mailto:ahmad@mr1properties.com" 
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
      
      {/* Success Modal */}
      <SuccessModal 
        show={showSuccess} 
        onHide={() => setShowSuccess(false)}
        userCountry={userLocationData.country}
      />
    </>
  );
};

export default ContactModal;