import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA4L5GS5sSkzKc2aktUqxIe7lOCBkBEoFk",
  authDomain: "react-curso-udemy-95115.firebaseapp.com",
  projectId: "react-curso-udemy-95115",
  storageBucket: "react-curso-udemy-95115.appspot.com",
  messagingSenderId: "121359320936",
  appId: "1:121359320936:web:58ce02440dc83c11bbb8dd",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
