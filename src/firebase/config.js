// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc-quuUPrsC0Cgv1L7p_SYA4Xepdu90uQ",
  authDomain: "trinketsofluna-ecommerce-fbase.firebaseapp.com",
  projectId: "trinketsofluna-ecommerce-fbase",
  storageBucket: "trinketsofluna-ecommerce-fbase.appspot.com",
  messagingSenderId: "1034650262656",
  appId: "1:1034650262656:web:23e97ecd908c0921afda65",
  measurementId: "G-QJSCDVWYCK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
