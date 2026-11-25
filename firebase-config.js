// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC50kmJOtz-KefNYgrZdNyWGczXBKncCRM",
  authDomain: "testing001-aec86.firebaseapp.com",
  projectId: "testing001-aec86",
  storageBucket: "testing001-aec86.firebasestorage.app",
  messagingSenderId: "504790570221",
  appId: "1:504790570221:web:cc66ac211c5f47b48068e4",
  measurementId: "G-B6CDKJ0W7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
