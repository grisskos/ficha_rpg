// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, collection, addDoc, doc, getDoc, updateDoc, deleteDoc,
  query, where, onSnapshot, orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword,
  createUserWithEmailAndPassword, signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// SUBSTITUA "SUA_API_KEY" PELOS SEUS DADOS REAIS DO FIREBASE CONSOLE
const firebaseConfig = {	
  apiKey: "AIzaSyAANME6i8psLUlX13AAi3PBgnd0IIvaY5Y",
  authDomain: "ficharpg-edc5c.firebaseapp.com",
  projectId: "ficharpg-edc5c",
  storageBucket: "ficharpg-edc5c.firebasestorage.app",
  messagingSenderId: "522630132698",
  appId: "1:522630132698:web:30d3dc6f103916d70246e3",
  measurementId: "G-6PJKQYBRRC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db, auth, collection, addDoc, doc, getDoc, updateDoc, deleteDoc,
  query, where, onSnapshot, orderBy, onAuthStateChanged,
  signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut
};

