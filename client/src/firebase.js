// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-66792.firebaseapp.com",
  projectId: "mern-blog-66792",
  storageBucket: "mern-blog-66792.appspot.com",
  messagingSenderId: "986172932767",
  appId: "1:986172932767:web:cc5121d8c0e8b083e598aa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);