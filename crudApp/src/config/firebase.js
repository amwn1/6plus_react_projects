// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHgfiBVLn71ZCDQ7ojGfFbjJB3RYAHuj0",
  authDomain: "vite-contact-e913d.firebaseapp.com",
  projectId: "vite-contact-e913d",
  storageBucket: "vite-contact-e913d.appspot.com",
  messagingSenderId: "535190728285",
  appId: "1:535190728285:web:b0ce098abcc421fb97a7b4"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);