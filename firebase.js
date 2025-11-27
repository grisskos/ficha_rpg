<script type="module">
// NÃO COLOQUE API KEY NO CHAT — isto é um exemplo.
// Use sua API KEY real do Firebase.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  onSnapshot,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export const firebaseConfig = {
	apiKey: "AIzaSyAANME6i8psLUlX13AAi3PBgnd0IIvaY5Y",
	authDomain: "ficharpg-edc5c.firebaseapp.com",
	projectId: "ficharpg-edc5c",
	storageBucket: "ficharpg-edc5c.firebasestorage.app",
	messagingSenderId: "522630132698",
	appId: "1:522630132698:web:30d3dc6f103916d70246e3",
	measurementId: "G-6PJKQYBRRC
};

// Inicializa
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Exporta funções úteis
export {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  onSnapshot,
  orderBy,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
};
</script>
