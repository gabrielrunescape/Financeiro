import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import SignForm from "../components/signform.jsx";

import { AuthContext } from "../contexts/auth";

const SignIn = () => {    
    const { authenticated } = useContext(AuthContext);

    if (authenticated) {
         return <Navigate to="/" />;
    } else {
        return <SignForm isLogin={true}></SignForm>;
    }
}

export default SignIn;