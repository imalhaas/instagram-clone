import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/functions";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDRJHn6z03vJIuL-yaifqs6ZI8h4dH749A",
  authDomain: "instagram-clone-9f261.firebaseapp.com",
  projectId: "instagram-clone-9f261",
  storageBucket: "instagram-clone-9f261.appspot.com",
  messagingSenderId: "1079397437966",
  appId: "1:1079397437966:web:b0a2c2e211ec44fd6ba25f",
  measurementId: "G-66T1TSBFPZ"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

// Exportações nomeadas
export { firebaseApp, db, auth, storage, functions };
