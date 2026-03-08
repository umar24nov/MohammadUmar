


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-LKgOnc7EE7VbW9L82cqrNtMexMO61zM",
  authDomain: "portfolio-8239d.firebaseapp.com",
  projectId: "portfolio-8239d",
  storageBucket: "portfolio-8239d.firebasestorage.app",
  messagingSenderId: "222528097203",
  appId: "1:222528097203:web:07c5f9ce22cf580df819c6",
  measurementId: "G-CW1WYPWYSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);