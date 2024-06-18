// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzx0WvT9G48SyI1y2LEjlyUc3mEcYSs7g",
  authDomain: "dars-1c63e.firebaseapp.com",
  projectId: "dars-1c63e",
  storageBucket: "dars-1c63e.appspot.com",
  messagingSenderId: "353195629637",
  appId: "1:353195629637:web:e6ad68ce20e70c2613d72c",
  measurementId: "G-XX48B71HPB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)