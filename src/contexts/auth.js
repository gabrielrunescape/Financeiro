import { useNavigate } from "react-router-dom";
import { firebaseApp } from "../config/firebase_config";

import React,  { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const errorAuthenticatioin = message => {
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
        default:
            return "Erro desconhecido. \n" + message;
    }
}

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [failMessage, setFailMessage] = useState(null);

    useEffect(() => {
        const recoverUser = sessionStorage.getItem("@AuthFirebase:user");

        if (recoverUser) {
            setUser(JSON.parse(recoverUser));
        }

        setLoading(false);
    }, []);

    const signInEmail = (email, senha) => {        
        signInWithEmailAndPassword(firebaseApp, email, senha) 
            .then((userCredential) => {
                const userResult = userCredential.user;
                
                setUser(userResult);
                setFailMessage(null);

                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(userResult));
                sessionStorage.setItem("@AuthFirebase:token", userResult.accessToken);
                
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                setFailMessage(errorAuthenticatioin(errorMessage));
                
                console.error(`Error code ${errorCode}: ${errorMessage}`);
            });
        }
        
        const signUpEmail = (email, senha) => {
            createUserWithEmailAndPassword(firebaseApp, email, senha)
                .then((userCredential) => {
                const userResult = userCredential.user;
                
                setUser(userResult);
                setFailMessage(null);

                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(userResult));
                sessionStorage.setItem("@AuthFirebase:token", userResult.accessToken);
                
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                setFailMessage(errorAuthenticatioin(errorMessage));
                
                console.error(`Error code ${errorCode}: ${errorMessage}`);
            });
        }

        const logout = () => {
            signOut(firebaseApp).then(() => {
                sessionStorage.clear();
                setUser(null);
            });
            
            navigate("/");
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