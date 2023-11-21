// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDiahzNpzMzIct--mKCL690lt4GCx9Tqq4",
  authDomain: "webfinanceiro.firebaseapp.com",
  projectId: "webfinanceiro",
  storageBucket: "webfinanceiro.appspot.com",
  messagingSenderId: "653486645698",
  appId: "1:653486645698:web:e42d955cc73ebe3ccab65b",
  measurementId: "G-03WR53VQ9C"
});

// Initialize Firebase
export const firebaseApp = getAuth(firebaseConfig);
export const database = getFirestore(firebaseConfig);