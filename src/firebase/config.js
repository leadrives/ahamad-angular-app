import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
// IMPORTANT: Replace these with your actual Firebase project credentials
// Go to: https://console.firebase.google.com/project/ahamadwebpagehtml/settings/general
// In "Your apps" section, select "Web app" and copy the config values
const firebaseConfig = {
  apiKey: "AIzaSyB49_Ojt_Uae5Cfe5JFp4h8EotnMQsTCDM",
  authDomain: "ahamadwebpagehtml.firebaseapp.com",
  projectId: "ahamadwebpagehtml",
  storageBucket: "ahamadwebpagehtml.firebasestorage.app",
  messagingSenderId: "409355534699",
  appId: "1:409355534699:web:668cec611201b499878c2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
export default app;
