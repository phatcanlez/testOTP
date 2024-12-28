// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCwGCkygtxJhkmo-ZAYHT1ffPZanofZseE",
//   authDomain: "swp391-bdd95.firebaseapp.com",
//   projectId: "swp391-bdd95",
//   storageBucket: "swp391-bdd95.firebasestorage.app",
//   messagingSenderId: "894374759496",
//   appId: "1:894374759496:web:587e4c64cca0eead4cdc7d",
//   measurementId: "G-KDGJRTZK8G",
// };

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
