// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUoS6l4vcflqn1igc6RmEZiysb2y83jcU",
  authDomain: "jobhub-prod.firebaseapp.com",
  projectId: "jobhub-prod",
  storageBucket: "jobhub-prod.appspot.com",
  messagingSenderId: "211590346142",
  appId: "1:211590346142:web:368abd2b4830ec1f5dd28f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);