// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFNQEnjl-J_-cN3TQ2T1iJ5owXTwPyAiU",
  authDomain: "politizen-9ca27.firebaseapp.com",
  projectId: "politizen-9ca27",
  storageBucket: "politizen-9ca27.appspot.com",
  messagingSenderId: "78547577759",
  appId: "1:78547577759:web:c455af02269829a698ebaa",
  measurementId: "G-VZSMBKBPLJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
