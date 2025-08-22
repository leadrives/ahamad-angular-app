import React, { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
import './AdminPanel.css';

const AdminPanel = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const q = query(collection(db, 'contactInquiries'), orderBy('submittedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const inquiryData = [];
      querySnapshot.forEach((doc) => {
        inquiryData.push({ id: doc.id, ...doc.data() });
      });
      setInquiries(inquiryData);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id) => {
    try {
      await updateDoc(doc(db, 'contactInquiries', id), {
        isRead: true,
        status: 'read'
      });
      
      setInquiries(prev => prev.map(inquiry => 
        inquiry.id === id 
          ? { ...inquiry, isRead: true, status: 'read' }
          : inquiry
      ));
    } catch (error) {
      console.error('Error updating inquiry:', error);
    }
  };

  if (loading) {
    return (
      <div className="admin-panel">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading inquiries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="admin-header">
              <h1>Contact Inquiries Dashboard</h1>
              <p className="text-muted">Total inquiries: {inquiries.length}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="inquiries-list">
              {inquiries.length === 0 ? (
                <div className="no-inquiries">
                  <i className="fa-solid fa-inbox fa-3x text-muted mb-3"></i>
                  <h5>No inquiries yet</h5>
                  <p className="text-muted">New contact form submissions will appear here.</p>
                </div>
              ) : (
                inquiries.map((inquiry) => (
                  <div
                    key={inquiry.id}
                    className={`inquiry-card ${!inquiry.isRead ? 'unread' : ''} ${selectedInquiry?.id === inquiry.id ? 'selected' : ''}`}
                    onClick={() => setSelectedInquiry(inquiry)}
                  >
                    <div className="inquiry-header">
                      <h6 className="inquiry-name">{inquiry.name}</h6>
                      <span className="inquiry-country">
                        {inquiry.selectedCountry?.flag} {inquiry.selectedCountry?.name}
                      </span>
                      {!inquiry.isRead && <span className="new-badge">New</span>}
                    </div>
                    <p className="inquiry-preview">{inquiry.message?.substring(0, 60)}...</p>
                    <div className="inquiry-meta">
                      <small className="text-muted">
                        <i className="fa-solid fa-calendar me-1"></i>
                        {inquiry.submittedDate} at {inquiry.submittedTime}
                      </small>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="col-md-8">
            {selectedInquiry ? (
              <div className="inquiry-details">
                <div className="inquiry-details-header">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h4>{selectedInquiry.name}</h4>
                      <p className="text-muted">
                        From: {selectedInquiry.userLocation?.city}, {selectedInquiry.userLocation?.country}
                        <span className="ms-2">IP: {selectedInquiry.userLocation?.ip}</span>
                      </p>
                    </div>
                    {!selectedInquiry.isRead && (
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => markAsRead(selectedInquiry.id)}
                      >
                        Mark as Read
                      </button>
                    )}
                  </div>
                </div>

                <div className="inquiry-details-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="detail-card">
                        <h6><i className="fa-solid fa-user me-2"></i>Contact Information</h6>
                        <p><strong>Name:</strong> {selectedInquiry.name}</p>
                        <p><strong>Phone:</strong> {selectedInquiry.selectedCountry?.code} {selectedInquiry.phone}</p>
                        <p><strong>Country:</strong> {selectedInquiry.selectedCountry?.flag} {selectedInquiry.selectedCountry?.name}</p>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="detail-card">
                        <h6><i className="fa-solid fa-location-dot me-2"></i>Location Details</h6>
                        <p><strong>IP Address:</strong> {selectedInquiry.userLocation?.ip}</p>
                        <p><strong>Country:</strong> {selectedInquiry.userLocation?.country}</p>
                        <p><strong>City:</strong> {selectedInquiry.userLocation?.city}</p>
                        <p><strong>Region:</strong> {selectedInquiry.userLocation?.region}</p>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="detail-card">
                        <h6><i className="fa-solid fa-message me-2"></i>Message</h6>
                        <div className="message-content">
                          {selectedInquiry.message}
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="detail-card">
                        <h6><i className="fa-solid fa-clock me-2"></i>Submission Details</h6>
                        <p><strong>Date:</strong> {selectedInquiry.submittedDate}</p>
                        <p><strong>Time:</strong> {selectedInquiry.submittedTime}</p>
                        <p><strong>Status:</strong> 
                          <span className={`badge ms-2 ${selectedInquiry.isRead ? 'bg-success' : 'bg-warning'}`}>
                            {selectedInquiry.status || 'new'}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inquiry-actions">
                  <a 
                    href={`tel:${selectedInquiry.selectedCountry?.code}${selectedInquiry.phone}`}
                    className="btn btn-success me-2"
                  >
                    <i className="fa-solid fa-phone me-2"></i>Call Now
                  </a>
                  <a 
                    href={`mailto:contact@example.com?subject=Re: Your Property Inquiry&body=Hi ${selectedInquiry.name},%0D%0A%0D%0AThank you for your interest in Dubai real estate...`}
                    className="btn btn-primary"
                  >
                    <i className="fa-solid fa-envelope me-2"></i>Send Email
                  </a>
                </div>
              </div>
            ) : (
              <div className="no-selection">
                <div className="text-center">
                  <i className="fa-solid fa-mouse-pointer fa-3x text-muted mb-3"></i>
                  <h5>Select an inquiry to view details</h5>
                  <p className="text-muted">Click on any inquiry from the list to see full details.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
