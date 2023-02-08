import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUw-Sg09CCX_OI5F0VOPjX4hbh1D4042U",
  authDomain: "chatgpt-messenger-c409a.firebaseapp.com",
  projectId: "chatgpt-messenger-c409a",
  storageBucket: "chatgpt-messenger-c409a.appspot.com",
  messagingSenderId: "729121379044",
  appId: "1:729121379044:web:211fde0fc73a76fc35d2f1"
};

// Initialize Firebase for nextjs13
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }