import React from "react";
import { Outlet, Link } from "react-router-dom";

const Api = () => {

    return (
        <>
            <div className="container">

                <h4> Bem-vindo à API do WebPonto. Você pode obter todos os dados de acordo com a API para uso interno das informações</h4>

                <h2 className="sub-header">Escolha o método e categoria a ser vista</h2>

                <section className="section">
                    <table className="table is-striped is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>Método</th>
                                <th>URL</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Link to="usuarios">GET</Link></td>
                                <td>/api/usuarios</td>
                                <td>Busca todos os usuários</td>
                            </tr>
                            <tr>
                                <td>postPOST</td>
                                <td>/api/usuarios</td>
                                <td>Cria um novo usuário</td>
                            </tr>
                            <tr>
                                <td>Delete</td>
                                <td>/api/usuarios/:id</td>
                                <td>Apaga um usuário pela ID</td>
                            </tr>
                            <tr>
                                <td><Link to="usuarios/jaleem_rabbey">GET</Link></td>
                                <td>/api/usuarios/:id</td>
                                <td>Busca um usuário pela ID</td>
                            </tr>
                            <tr>
                                <td>PUT</td>
                                <td>/api/Usuarios/:id</td>
                                <td>Altera um dsuário pela ID</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </>
    );
}

export default Api;
