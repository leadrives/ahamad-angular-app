import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
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
