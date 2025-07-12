// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGeFr2GAOd119UwnzhDUjbyXuED3gppbA",
  authDomain: "rewear-app-5d3e9.firebaseapp.com",
  projectId: "rewear-app-5d3e9",
  storageBucket: "rewear-app-5d3e9.firebasestorage.app",
  messagingSenderId: "859347177878",
  appId: "1:859347177878:web:22982c72af99d6e803cdb7",
  measurementId: "G-H6LP0V35Y5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
