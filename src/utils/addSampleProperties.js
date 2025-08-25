// Utility function to add sample properties to Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

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
  },
  {
    badge: { text: "Ready", type: "ready" },
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=250&fit=crop",
    alt: "Jumeirah Beach Residence",
    title: "JBR Beachfront Apartment",
    description: "Stunning 3-bedroom apartment with direct beach access and panoramic sea views in JBR.",
    location: "JBR",
    details: {
      bedrooms: 3,
      bathrooms: 4,
      area: "2,400 sq ft",
      parking: 2
    },
    price: "AED 3.8M",
    roi: "14% ROI",
    featured: true,
    status: "active",
    createdAt: new Date().toISOString()
  },
  {
    badge: { text: "Investment", type: "investment" },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop",
    alt: "Dubai South Apartment",
    title: "Dubai South Modern Apartment",
    description: "Brand new 1-bedroom apartment near Al Maktoum Airport with excellent rental potential.",
    location: "Dubai South",
    details: {
      bedrooms: 1,
      bathrooms: 2,
      area: "750 sq ft",
      parking: 1
    },
    price: "AED 650K",
    roi: "20% ROI",
    featured: false,
    status: "active",
    createdAt: new Date().toISOString()
  },
  {
    badge: { text: "Luxury Villa", type: "luxury" },
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=400&h=250&fit=crop",
    alt: "Arabian Ranches Villa",
    title: "Arabian Ranches Family Villa",
    description: "Spacious 4-bedroom villa in gated community with golf course views and family amenities.",
    location: "Arabian Ranches",
    details: {
      bedrooms: 4,
      bathrooms: 5,
      area: "4,200 sq ft",
      parking: 3
    },
    price: "AED 2.9M",
    roi: "13% ROI",
    featured: true,
    status: "active",
    createdAt: new Date().toISOString()
  },
  {
    badge: { text: "Off-Plan", type: "offplan" },
    image: "https://images.unsplash.com/photo-1600607686663-6b8b62a446d9?w=400&h=250&fit=crop",
    alt: "Dubai Hills Apartment",
    title: "Dubai Hills Estate Apartment",
    description: "Premium 2-bedroom apartment in Dubai Hills with golf course and city skyline views.",
    location: "Dubai Hills Estate",
    details: {
      bedrooms: 2,
      bathrooms: 3,
      area: "1,350 sq ft",
      parking: 2
    },
    price: "AED 1.8M",
    roi: "17% ROI",
    featured: false,
    status: "active",
    createdAt: new Date().toISOString()
  }
];

export const addSampleProperties = async () => {
  console.log('Starting to add sample properties to Firebase...');
  const results = [];
  
  try {
    for (const property of sampleProperties) {
      const docRef = await addDoc(collection(db, 'properties'), property);
      console.log(`Added: ${property.title} with ID: ${docRef.id}`);
      results.push({ success: true, title: property.title, id: docRef.id });
    }
    
    console.log('All properties added successfully!');
    return { success: true, count: results.length, results };
  } catch (error) {
    console.error('Error adding properties:', error);
    return { success: false, error: error.message };
  }
};

export default addSampleProperties;
