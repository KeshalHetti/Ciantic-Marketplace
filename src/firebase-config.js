// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
function initializeAppIfNecessary() {
  try {
    return getApp();
  } catch (any) {
    const firebaseConfig = {
      apiKey: "AIzaSyApOhLOayzmxuht1VAzexOBcSLpoLe9TD4",
      authDomain: "ciantic-marketplace.firebaseapp.com",
      projectId: "ciantic-marketplace",
      storageBucket: "ciantic-marketplace.appspot.com",
      messagingSenderId: "970911288012",
      appId: "1:970911288012:web:a74d69df12efa7f6331069",
      measurementId: "G-G9ZH32JWEE"
    };
    return initializeApp(firebaseConfig);
  }
}

export const app = initializeAppIfNecessary();
export const auth = getAuth(app);

export const db = getFirestore(app)

export const db = getFirestore(app)