// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp785hg6h2kDEypgWPTKqRXMEcCwZIP1I",
  authDomain: "realtor-clone-react-78f19.firebaseapp.com",
  projectId: "realtor-clone-react-78f19",
  storageBucket: "realtor-clone-react-78f19.appspot.com",
  messagingSenderId: "1097244447358",
  appId: "1:1097244447358:web:e353e5b6dc0348bf59fe2f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();