// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaO7FAuBK4VLKKwkGOEMPvJhJ88OEA2rg",
  authDomain: "restserver-21f0a.firebaseapp.com",
  projectId: "restserver-21f0a",
  storageBucket: "restserver-21f0a.appspot.com",
  messagingSenderId: "164453181564",
  appId: "1:164453181564:web:01218e5de6dcb4330b41f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;