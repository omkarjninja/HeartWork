// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIjLS4zVnnhaVmvI0upveMLUiAmQtVCrw",
  authDomain: "heartwork-f4aa8.firebaseapp.com",
  projectId: "heartwork-f4aa8",
  storageBucket: "heartwork-f4aa8.appspot.com",
  messagingSenderId: "37134877274",
  appId: "1:37134877274:web:7a7ca4488f147c9e5e0e63",
  measurementId: "G-ZVGDQQN156"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };