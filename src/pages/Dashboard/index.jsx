import React, { useContext } from "react";

import { AuthContext } from "../../contexts/auth";
import useDocumentTitle from "../../components/title";

import * as fa from "@fortawesome/free-solid-svg-icons";
import { Panel, Form, Button, Container } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Main page of Dashboard menu
 * 
 * @returns Render React component
 */
const Dashboard = () => {
    useDocumentTitle("WebFinanceiro - Painel");

    const { authenticated, user, logout } = useContext(AuthContext);

    return (
        <>
            <section className="hero is-fullheight">
                <div className="hero-body has-text-centered">
                    <Container textAlign="center">
                        <div className="column is-8 is-offset-2">
                            <Panel color="primary">
                                <Panel.Header>
                                    Bem-vindo camarada {user ? user.displayName : null}
                                </Panel.Header>

                                <Panel.Block className="box has-text-left">
                                    <form onSubmit={logout} className="container" >
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
                    </Container>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
