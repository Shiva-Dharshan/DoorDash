// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {useNavigate} from 'react-router-dom'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOEE_u0Yad6y7SQcjJNKk4dmSw32QCzzU",
  authDomain: "doordash-db55f.firebaseapp.com",
  projectId: "doordash-db55f",
  storageBucket: "doordash-db55f.appspot.com",
  messagingSenderId: "484851279738",
  appId: "1:484851279738:web:71797522efef52fc77d8c3",
  measurementId: "G-76X61B29HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export{auth,provider}