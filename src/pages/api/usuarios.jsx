import React from "react";
import { Outlet, Link, useParams } from "react-router-dom";

export const IndexUsuarios = () => {

    return (
        <>
            <div className="container">
                <h2 className="subtitle">Deveria aparecer alguma coisa legal aqui mas pelo visto nada</h2>

                <Link to="24Viado">Clica aqui </Link>
            </div>
        </>
    );
}

export const UsuarioID = () => {
    let params = useParams();

    return (
        <>
            <div className="container">
                {params.userID ? <p><span className="has-text-weight-bold">Parametro passado: </span> {params.userID}</p> : <p>Nada por aqui</p>}
            </div>
        </>
    );
}
