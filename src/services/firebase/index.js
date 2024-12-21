// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4hxLwJHYr_4b7H5SjvKyuuFAPeJ9KtCg",
  authDomain: "ecommerce-quiroga.firebaseapp.com",
  projectId: "ecommerce-quiroga",
  storageBucket: "ecommerce-quiroga.firebasestorage.app",
  messagingSenderId: "156590232723",
  appId: "1:156590232723:web:b4c5231bc4c3bcbbc72966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);