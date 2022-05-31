// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPuAJr7xCSlFlTN4TATSpLzOizBV92HYg",
  authDomain: "francopenafotografia.firebaseapp.com",
  projectId: "francopenafotografia",
  storageBucket: "francopenafotografia.appspot.com",
  messagingSenderId: "76763531903",
  appId: "1:76763531903:web:c18d4b7327a938f820cd4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {return app}