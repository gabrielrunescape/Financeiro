import { useNavigate } from "react-router-dom";
import React,  { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import { firebaseApp } from "../config/firebase_config";
import Usuario from "../model/usuario";

/**
 * Get Firebase error message
 * 
 * @param {string} message Kind of firebase error
 * @returns Translated message
 */
const errorAuthentication = message => {
    switch(message) {
        case "Firebase: Error (auth/wrong-password).":
            return "Usuário ou senha incorreto.";
        case "Firebase: Error (auth/user-not-found).":
            return "Usuário não encontrado!";
        case "Firebase: Error (auth/email-already-in-use).":
            return "Usuário já cadastrado!";
        case "Firebase: Error (auth/invalid-email).":
            return "E-mail inválido!";
        case "Firebase: Error (auth/internal-error).":
            return "Ocorreu um erro internet. Por favor tente novamente."
        case "Firebase: Error (auth/missing-password).":
            return "O campo de senha não deve estar em branco!";
        default:
            return "Erro desconhecido. \n" + message;
    }
}

/**
 * Firebase Authentical process
 * 
 * @param {*} param0 None
 * @returns Exporter from all methods used
 */
export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    
    const [user = Usuario, setUser = Usuario] = useState(null);
    const [loading, setLoading] = useState(true);
    const [failMessage, setFailMessage] = useState(null);

    useEffect(() => {
        const recoverUser = sessionStorage.getItem("@AuthFirebase:user");

        if (recoverUser) {
            const user = new Usuario(recoverUser);
            setUser(user);
        }

        setLoading(false);
    }, []);

    /**
     * Log-in with email and password
     * 
     * @param {string} email E-mail address
     * @param {string} senha Password
     */
    const signInEmail = (email, senha) => {        
        signInWithEmailAndPassword(firebaseApp, email, senha) 
            .then((userCredential) => {
                const user = new Usuario(userCredential.user);
                
                setUser(user);
                setFailMessage(null);

                sessionStorage.setItem("@AuthFirebase:user", user.toString());
                sessionStorage.setItem("@AuthFirebase:token", user.token);
                
                navigate("/dashboard");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                setFailMessage(errorAuthentication(errorMessage));
                
                console.error(`Error code ${errorCode}: ${errorMessage}`);
            }
        );
    }
        
    /**
     * Create a new user with e-mail and password
     * 
     * @param {string} email E-mail address
     * @param {string} senha Password
     * @param {string} nome Display name
     */
    const signUpEmail = (email, senha, nome) => {
        createUserWithEmailAndPassword(firebaseApp, email, senha)
        .then((userCredential) => {
            const user = new Usuario(userCredential.user);
            updateProfile(user, {displayName: nome, photoURL: "https://faodo.ufms.br/files/2021/09/avatar.png"});

            setUser(user);
            setFailMessage(null);

            sessionStorage.setItem("@AuthFirebase:user", user);
            sessionStorage.setItem("@AuthFirebase:token", userResult.accessToken);
            
            navigate("/dashboard");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            setFailMessage(errorAuthentication(errorMessage));
            
            console.error(`Error code ${errorCode}: ${errorMessage}`);
        });
    }

    /**
     * Sign out event to current user and clean cache data
     * 
     * @param {Event} e HandleEvent
     */
    const logout = e => {
        e.preventDefault();

        signOut(firebaseApp).then(() => {
            sessionStorage.clear();
            setUser(null);
        });
        
        navigate("/");
        window.location.reload(true);
    }
    
    const valuesToExport = {
        authenticated: !!user, user, failMessage, loading, signInEmail, signUpEmail, logout
    }
        
    return (
        <AuthContext.Provider value={valuesToExport}>
            {children}
        </AuthContext.Provider>
    );
}

export const AuthContext = createContext();