// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv2j9XHuBQew_5HaN72-_GmGl00it3pOo",
  authDomain: "netflix-gpt-44398.firebaseapp.com",
  projectId: "netflix-gpt-44398",
  storageBucket: "netflix-gpt-44398.appspot.com",
  messagingSenderId: "405639825245",
  appId: "1:405639825245:web:93bbd9e472066622d74ab4",
  measurementId: "G-CDGQYEJH0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();