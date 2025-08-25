import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const SeedProperties = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sampleProperties = [
    {
      badge: { text: "Luxury Villa", type: "luxury" },
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=250&fit=crop",
      alt: "Emirates Hills Villa",
      title: "Emirates Hills Villa",
      description: "Spectacular 6-bedroom villa with private pool, garden, and stunning city views in Dubai's most prestigious community.",
      location: "Emirates Hills",
      details: {
        bedrooms: 6,
        bathrooms: 7,
        area: "8,500 sq ft",
        parking: 4
      },
      price: "AED 8.5M",
      roi: "12% ROI",
      featured: true,
      status: "active",
      createdAt: new Date().toISOString()
    },
    {
      badge: { text: "Off-Plan", type: "offplan" },
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop",
      alt: "Downtown Dubai Apartment",
      title: "Downtown Dubai Apartment",
      description: "Modern 2-bedroom apartment with Burj Khalifa views, premium finishes, and world-class amenities.",
      location: "Downtown Dubai",
      details: {
        bedrooms: 2,
        bathrooms: 3,
        area: "1,450 sq ft",
        parking: 2
      },
      price: "AED 2.8M",
      roi: "18% ROI",
      featured: true,
      status: "active",
      createdAt: new Date().toISOString()
    },
    {
      badge: { text: "Ready", type: "ready" },
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=250&fit=crop",
      alt: "Dubai Marina Penthouse",
      title: "Dubai Marina Penthouse",
      description: "Exclusive penthouse with panoramic marina views, private terrace, and premium amenities.",
      location: "Dubai Marina",
      details: {
        bedrooms: 4,
        bathrooms: 5,
        area: "3,200 sq ft",
        parking: 3
      },
      price: "AED 4.2M",
      roi: "15% ROI",
      featured: true,
      status: "active",
      createdAt: new Date().toISOString()
    },
    {
      badge: { text: "Investment", type: "investment" },
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=250&fit=crop",
      alt: "Business Bay Studio",
      title: "Business Bay Studio",
      description: "High-yield studio apartment perfect for investors, with guaranteed rental returns.",
      location: "Business Bay",
      details: {
        bedrooms: "Studio",
        bathrooms: 1,
        area: "550 sq ft",
        parking: 1
      },
      price: "AED 850K",
      roi: "22% ROI",
      featured: true,
      status: "active",
      createdAt: new Date().toISOString()
    },
    {
      badge: { text: "Luxury Villa", type: "luxury" },
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop",
      alt: "Palm Jumeirah Villa",
      title: "Palm Jumeirah Villa",
      description: "Beachfront villa on the iconic Palm Jumeirah with private beach access and world-class amenities.",
      location: "Palm Jumeirah",
      details: {
        bedrooms: 5,
        bathrooms: 6,
        area: "6,800 sq ft",
        parking: 4
      },
      price: "AED 12.5M",
      roi: "10% ROI",
      featured: true,
      status: "active",
      createdAt: new Date().toISOString()
    },
    {
      badge: { text: "Off-Plan", type: "offplan" },
      image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&h=250&fit=crop",
      alt: "City Walk Townhouse",
      title: "City Walk Townhouse",
      description: "Contemporary 3-bedroom townhouse in the heart of Dubai with retail and dining at your doorstep.",
      location: "City Walk",
      details: {
        bedrooms: 3,
        bathrooms: 4,
        area: "2,100 sq ft",
        parking: 2
      },
      price: "AED 3.5M",
      roi: "16% ROI",
      featured: true,
      status: "active",
      createdAt: new Date().toISOString()
    }
  ];

  const addSampleProperties = async () => {
    setLoading(true);
    setMessage('');
    
    try {
      const promises = sampleProperties.map(property => 
        addDoc(collection(db, 'properties'), property)
      );
      
      await Promise.all(promises);
      setMessage(`Successfully added ${sampleProperties.length} properties!`);
    } catch (error) {
      console.error('Error adding properties:', error);
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center', 
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      minHeight: '100vh',
      color: 'white'
    }}>
      <h2>Seed Properties Database</h2>
      <p>Click the button below to add sample properties to Firebase</p>
      
      <button
        onClick={addSampleProperties}
        disabled={loading}
        style={{
          background: loading ? '#6b7280' : '#22C55E',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginTop: '20px'
        }}
      >
        {loading ? 'Adding Properties...' : 'Add Sample Properties'}
      </button>
      
      {message && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          borderRadius: '8px',
          background: message.includes('Error') ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)',
          color: message.includes('Error') ? '#f87171' : '#22C55E',
          border: `1px solid ${message.includes('Error') ? 'rgba(239, 68, 68, 0.3)' : 'rgba(34, 197, 94, 0.3)'}`
        }}>
          {message}
        </div>
      )}
      
      <div style={{ marginTop: '40px' }}>
        <p>After adding properties, go back to the main page to see them in the Portfolio Gallery!</p>
      </div>
    </div>
  );
};

export default SeedProperties;
