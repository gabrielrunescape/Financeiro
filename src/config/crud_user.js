import { firebaseApp, database } from "./firebase_config";
import Usuario from "../model/usuario";

import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

/**
 * Load user data from collection User
 * 
 * @param {string} uid User auth ID to get data
 * 
 * @returns Usuario data complete
 */
/*export const getUserDetails = async (uid) => {
    const q = query(collection(database, "Usuarios"), where("UID", "==", uid));

    const snapshot = await getDocs(q);
    const usuario = new Usuario();
        
    snapshot.forEach((doc) => {
        usuario.constructorWithData(doc);
    });

    console.log(usuario);

    // Define Usuario because this method is async
    sessionStorage.setItem("@AuthFirebase:user", usuario);

    return usuario;
}*/

export const getUserByToken = () => {
    const token = new Usuario(firebaseApp.currentUser);
    console.log(token);
}

/**
 * Send to Firebase collection a new Usuario 
 * 
 * @param {String} nome Name from new Usuario
 * @param {String} sobrenome Surname from new Usuario
 * @param {String} uid Unique Identificatioin number from new Usuario
 * 
 * @returns Sent Usuario object without ID
 */
export const addUserDetails = async (nome, sobrenome, uid) => {
    try {
        const usuario =  new Usuario();
        usuario.constructorWithDate(nome, sobrenome, uid, Date.now());

        const docRef = await addDoc(collection(database, "Usuarios"), usuario);

        // Define Usuario because this method is async
        sessionStorage.setItem("@AuthFirebase:user", usuario);

        return usuario;
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}