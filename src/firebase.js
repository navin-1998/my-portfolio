// src/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB6LH52uu1YFV2zxIGky_bqLZggq3TASMc",
  authDomain: "navinportfolio-b14c3.firebaseapp.com",
  projectId: "navinportfolio-b14c3",
  storageBucket: "navinportfolio-b14c3.firebasestorage.app",
  messagingSenderId: "740809287562",
  appId: "1:740809287562:web:527df0df33bc65dd3c0a73",
  measurementId: "G-JQT377K6BZ"
};

const app = initializeApp(firebaseConfig);
export default app;
