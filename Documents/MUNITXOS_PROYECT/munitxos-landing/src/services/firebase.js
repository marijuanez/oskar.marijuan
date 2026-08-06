// Firebase & Local Mock Storage Configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Default Firebase Configuration (Can be replaced with user's environment variables)
const firebaseConfig = {
  apiKey: import.meta.env?.VITE_FIREBASE_API_KEY || "AIzaSyMockKeyForLocalMunchosBuild",
  authDomain: import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN || "munchos-munich.firebaseapp.com",
  projectId: import.meta.env?.VITE_FIREBASE_PROJECT_ID || "munchos-munich",
  storageBucket: import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET || "munchos-munich.appspot.com",
  messagingSenderId: import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID || "1234567890",
  appId: import.meta.env?.VITE_FIREBASE_APP_ID || "1:1234567890:web:mockappid"
};

let app, auth, db;
let isFirebaseLive = false;

try {
  if (import.meta.env?.VITE_FIREBASE_API_KEY) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    isFirebaseLive = true;
  }
} catch (e) {
  console.warn("Firebase initialized in Local Mock Fallback mode for seamless local development.", e);
}

export { auth, db, isFirebaseLive };
