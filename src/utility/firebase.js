// Modular ways of import....there is a legacy way also
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuq8FSZ5friO8FxwVpDukL9wo3NBAahLw",
  authDomain: "clone-43875.firebaseapp.com",
  projectId: "clone-43875",
  storageBucket: "clone-43875.firebasestorage.app",
  messagingSenderId: "444816878034",
  appId: "1:444816878034:web:98d1ea8f4fd2de61be000b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
