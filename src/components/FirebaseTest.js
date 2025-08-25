import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

const FirebaseTest = () => {
  const [contactInquiries, setContactInquiries] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testFirebaseConnection = async () => {
      try {
        setLoading(true);
        console.log('Testing Firebase connection...');
        
        // Test contactInquiries collection
        console.log('Fetching contactInquiries...');
        const contactSnapshot = await getDocs(collection(db, 'contactInquiries'));
        const contactData = contactSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setContactInquiries(contactData);
        console.log('Contact inquiries found:', contactData.length);
        
        // Test properties collection
        console.log('Fetching properties...');
        const propertiesSnapshot = await getDocs(collection(db, 'properties'));
        const propertiesData = propertiesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProperties(propertiesData);
        console.log('Properties found:', propertiesData.length);
        
      } catch (error) {
        console.error('Firebase connection error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    testFirebaseConnection();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h3>Testing Firebase Connection...</h3>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Firebase Connection Test</h2>
      
      {error && (
        <div style={{ 
          background: '#ffebee', 
          color: '#c62828', 
          padding: '10px', 
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      
      <div style={{ marginBottom: '30px' }}>
        <h3>Contact Inquiries ({contactInquiries.length})</h3>
        {contactInquiries.length > 0 ? (
          <ul>
            {contactInquiries.map(inquiry => (
              <li key={inquiry.id} style={{ marginBottom: '10px' }}>
                <strong>{inquiry.name}</strong> - {inquiry.phone} 
                ({inquiry.submittedDate})
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: '#666' }}>No contact inquiries found</p>
        )}
      </div>

      <div>
        <h3>Properties ({properties.length})</h3>
        {properties.length > 0 ? (
          <ul>
            {properties.map(property => (
              <li key={property.id} style={{ marginBottom: '10px' }}>
                <strong>{property.title}</strong> - {property.location} 
                ({property.price})
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: '#666' }}>No properties found</p>
        )}
      </div>
    </div>
  );
};

export default FirebaseTest;
