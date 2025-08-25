// Script to populate Firebase with the current property data
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBb9YUPOckJU6q1NWBCVWaZzBfRhHzJMAo",
  authDomain: "dubai-property-a2a3c.firebaseapp.com",
  projectId: "dubai-property-a2a3c",
  storageBucket: "dubai-property-a2a3c.firebasestorage.app",
  messagingSenderId: "1006710456165",
  appId: "1:1006710456165:web:75b58f765ec6fb51b5b089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const properties = [
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

async function populateProperties() {
  console.log('Starting to populate properties...');
  
  try {
    for (const property of properties) {
      const docRef = await addDoc(collection(db, 'properties'), property);
      console.log(`Property "${property.title}" added with ID: ${docRef.id}`);
    }
    console.log('All properties have been successfully added to Firebase!');
  } catch (error) {
    console.error('Error adding properties:', error);
  }
}

// Run the function if this script is executed directly
if (typeof window === 'undefined') {
  populateProperties();
}

export { populateProperties };
