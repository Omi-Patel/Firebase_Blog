// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS4M_LxLvlvWcpnXbTRMlHEgGqVlOvqbw",
  authDomain: "myblog-21451.firebaseapp.com",
  projectId: "myblog-21451",
  storageBucket: "myblog-21451.appspot.com",
  messagingSenderId: "419929227483",
  appId: "1:419929227483:web:bc24d6d736680040acccfe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDB, auth, storage}
