// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6TyBaZwSNvJ6imtmsq1SgPeMUKvKEKhk",
  authDomain: "bird-bef7d.firebaseapp.com",
  projectId: "bird-bef7d",
  storageBucket: "bird-bef7d.appspot.com",
  messagingSenderId: "778269473802",
  appId: "1:778269473802:web:1cb33b10a126e6babcb3f3",
  measurementId: "G-H09BB8YM4S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
