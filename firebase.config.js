// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBIDcCGyZrRotJrTRNDJKhU1oWJaSZDkQ",
  authDomain: "auth-firebase-context-ta-58c0c.firebaseapp.com",
  projectId: "auth-firebase-context-ta-58c0c",
  storageBucket: "auth-firebase-context-ta-58c0c.appspot.com",
  messagingSenderId: "694119790373",
  appId: "1:694119790373:web:6743e83b94ffb14fc60ccc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app