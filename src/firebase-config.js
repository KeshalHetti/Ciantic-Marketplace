// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireStore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbijxTmNRXKi0j1Dda0BiLWniEUg4l6UE",
  authDomain: "ciantic-marketplace-e0806.firebaseapp.com",
  projectId: "ciantic-marketplace-e0806",
  storageBucket: "ciantic-marketplace-e0806.appspot.com",
  messagingSenderId: "853030423696",
  appId: "1:853030423696:web:f06acec45b4df8cb5e5c15",
  measurementId: "G-JSRZSRHDEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFireStore(app)


