// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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

// Get a list of cities from your database
/*async function getCategorias(db) {
  const columns = collection(db, "Categoria");
  const snapshot = await getDocs(columns);
  const list = snapshot.docs.map(doc => doc.data());

  console.log(list);

  return list;
}*/

/*let array = [];

const getCategoria = async () => {
  const columns = collection(db, "Categoria");
  const snapshot = await getDocs(columns); 
  const list = snapshot.docs.map(doc => doc.data());

  data_Parser(list);

  return list;
}


const data_Parser = lista => {
  array = lista;
}

const data_Receiver = () => array;

console.log("Document data:", getCategoria());
console.log("Bananal");
console.log("Enquanto tu mama os amigos", data_Receiver());*/