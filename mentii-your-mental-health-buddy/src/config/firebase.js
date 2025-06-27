// config/firebase.js - Single Firebase configuration file
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs, addDoc, query, orderBy  } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDnyq5vhxTuoXWSo4rrDVjpDtF297stBJY",
  authDomain: "mentii-2a174.firebaseapp.com",
  projectId: "mentii-2a174",
  storageBucket: "mentii-2a174.firebasestorage.app",
  messagingSenderId: "210894663233",
  appId: "1:210894663233:web:7c4db3cb8dfa30fc4fa0c0",
  measurementId: "G-RX3JQ9CTTE"
};

// Initialize Firebase only if it hasn't been initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;