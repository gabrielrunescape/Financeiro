import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase_config";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthEmailContext = createContext();

export const AuthEmailProvider = ({children}) => {
    const navigate = useNavigate();

    //const auth = getAuth(auth);
    const [user, setUser]  = useState(null);
    const [loading, setLoading] = useState(true);
    
    const signInEmail = async (email, pass) => {
        /*const credential = await signInWithEmailAndPassword(auth, email, pass); 
            .then((userCredential) => {
                const userResult = userCredential.user;
                //const token = userCredential.

                setUser(userResult);
                //sessionStorage.setItem("@AuthFirebase:token", token);
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(userResult));

                console.log("Usuário: ", userResult);
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(`Error code ${errorCode}: ${errorMessage}`);
            }
        );

        console.log(credential.user);
        
        navigate("/");*/
    }

    //const logout = () => signOut(auth).then(() => setUser(null));

    //useEffect(() => {
        /*const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
            setIsAuthenticating(false);
        });

        return () => unsubscribe();*/
        /*const recoverUser = localStorage.getItem("user");

        if (recoverUser) {
            setUser(JSON.parse(recoverUser));
        }

        setLoading(false);*/
    //}, []);

    const valuesToExport = {
        authenticated: !!user, user, loading, signInEmail: "", logout: ""
    }

    return (
        <AuthEmailContext.Provider value={{valuesToExport}}>
            {children}
        </AuthEmailContext.Provider>
    );
}