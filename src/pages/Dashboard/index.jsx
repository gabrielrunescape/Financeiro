import React, { useContext } from "react";

import { AuthContext } from "../../contexts/auth";
import useDocumentTitle from "../../components/title";

import * as fa from "@fortawesome/free-solid-svg-icons";
import { Panel, Form, Button } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
    useDocumentTitle("WebFinanceiro - Painel");

    const { authenticated, user, logout } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();

        logout();
    }

    return (
        <section className="hero is-fullheight">
            <div className="hero-body has-text-centered">
                <div className="container has-text-centered">
                    <div className="column is-4 is-offset-4">
                        <Panel color="primary">
                            <Panel.Header>
                                Bem-vindo camarada 
                            </Panel.Header>

                            <Panel.Block className="box has-text-left">
                                <form onSubmit={handleSubmit} className="container" >
                                    <Form.Field>
                                        <Form.Label>
                                            Olá bem vindo camarada! {String(authenticated)}
                                        </Form.Label>

                                        {user ? <p>{user.email}</p> : <></> }
                                    </Form.Field>

                                    <Form.Field>
                                        <Button type="submit" size="large" color="primary" className="column is-12">
                                            Sair {<FontAwesomeIcon icon={fa.faSignOut} />}
                                        </Button>
                                    </Form.Field>
                                </form>
                            </Panel.Block>
                        </Panel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
