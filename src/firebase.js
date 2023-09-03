// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvh61CKusDnj4cpdUJ22SYBErcV1Vr6Ug",
  authDomain: "mycongress-feb22.firebaseapp.com",
  projectId: "mycongress-feb22",
  storageBucket: "mycongress-feb22.appspot.com",
  messagingSenderId: "116323199266",
  appId: "1:116323199266:web:38e57928c47346df91dd7b",
  measurementId: "G-N74H2GJ3V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getAuth(app);
export default getFirestore();