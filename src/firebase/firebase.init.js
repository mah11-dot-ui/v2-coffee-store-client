// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEAe7x9hGsiDOG5r4I5ICKrZ4crIRTX_g",
  authDomain: "coffee-store-a258c.firebaseapp.com",
  projectId: "coffee-store-a258c",
  storageBucket: "coffee-store-a258c.firebasestorage.app",
  messagingSenderId: "718029367188",
  appId: "1:718029367188:web:e57c6637f85ac2418c9181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth