// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDl7NWtiY2glxV20jUuPUMyGcSC3AEBYo",
  authDomain: "coffee-project-auth-fb3c5.firebaseapp.com",
  projectId: "coffee-project-auth-fb3c5",
  storageBucket: "coffee-project-auth-fb3c5.firebasestorage.app",
  messagingSenderId: "82971133461",
  appId: "1:82971133461:web:7e6ec2ee202cd338b4b01c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);