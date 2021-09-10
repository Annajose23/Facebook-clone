import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDHX8CRMCecgYEO3AbPiCgl_UTX6vCg9g",
  authDomain: "facebook-clone-8801e.firebaseapp.com",
  projectId: "facebook-clone-8801e",
  storageBucket: "facebook-clone-8801e.appspot.com",
  messagingSenderId: "515040494776",
  appId: "1:515040494776:web:082ba1278b5e91b5d8a04d",
  measurementId: "G-F5YC882JE8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
  
  export {db, storage}; 