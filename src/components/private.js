import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

/**
 * Check if Auth Firebase is started and redirect page
 * 
 * @param {*} param0 Children component
 * @returns React answer to call page
 */
const Private = ({children}) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="hero hero-body has-text-centered">Carregando ...</div>
    }

    if(!authenticated) {
        return <Navigate to="/signin" />;
    }
    return <Navigate to="/dashboard" replace={true} />;
}

export default Private;