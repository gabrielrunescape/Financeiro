import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";

import useDocumentTitle from "./title";
import { AuthContext } from "../contexts/auth";
import { AsteriskError } from "./errorform.jsx";

import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Panel, Form, Icon, Button } from "react-bulma-components";

let isValidEmail = value => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value.match(mailformat)) {
        return (<FontAwesomeIcon color="#228838" size="sm" icon={fa.faCheck} />);
    } else {
        return (<FontAwesomeIcon size="sm" icon={fa.faTimes} />);
    }
}

let isValidPassword = (value) => {
    if (value.length > 5) {
        return (<FontAwesomeIcon color="#228838" size="sm" icon={fa.faLockOpen} />);
    } else {
        return (<FontAwesomeIcon size="sm" icon={fa.faLock} />);
    }
}

let isSamePassword = (value, second) => {
    if (value == second && (value != 0 || second != 0)) {
        return (<FontAwesomeIcon color="#228838" size="sm" icon={fa.faLockOpen} />);
    } else {
        return (<FontAwesomeIcon size="sm" icon={fa.faLock} />);
    }
}

const SignForm = ({isLogin = true}) => {
    if (isLogin) {
        useDocumentTitle("WebFinanceiro - Login");
    } else {
        useDocumentTitle("WebFinanceiro - Cadastrar-se");
    }

    const {signInEmail, signUpEmail, failMessage } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [invalid, setInvalid] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();

        if (isLogin) {
            signInEmail(email, password);
        } else {
            let errors = [];
            const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (password != repassword) {
                errors.push(<li key="0">
                    <AsteriskError message="Senhas não conferem!" />
                </li>);
            }

            if ((password.length == 0 || repassword.length == 0)) {
                errors.push(<li key="1">
                    <AsteriskError message="Senha inválida!" />
                </li>);
            }

            if (password.length < 6 || repassword.length < 6) {
                errors.push(<li key="2">
                    <AsteriskError message="Senha menor que 6 dígitos!" />
                </li>);
            }
            
            if (!email.match(mailformat)) {
                errors.push(<li key="3">
                    
                    <AsteriskError message="Endereço de e-mail não aceito." />
                </li>);
            }

            setInvalid(errors);

            if (invalid != null) {
                signUpEmail(email, password);
            }
        }
    }

    return (
        <section className="hero is-fullheight">
            <div className="hero-body has-text-centered">
                <div className="container has-text-centered">
                    <div className="column is-4 is-offset-4">
                        <Panel color="primary">
                            <Panel.Header>
                                Título pika
                            </Panel.Header>

                            <Panel.Block className="box has-text-left">
                                <form onSubmit={handleSubmit} >                                    
                                    <Form.Field>
                                        <Form.Label>Endereço de e-mail</Form.Label>
                                        <Form.Control>
                                            <Form.Input value={email} onChange={e => setEmail(e.target.value)} size="large" color="success" type="email" placeholder="Digite aqui seu e-mail" />

                                            <Icon align="left" size="small">
                                                <FontAwesomeIcon size="sm" icon={fa.faAt} />
                                            </Icon>
                                            <Icon align="right" size="small">
                                                {isValidEmail(email)}
                                            </Icon>
                                        </Form.Control>
                                    </Form.Field>

                                    <Form.Field>
                                        <Form.Label>Senha</Form.Label>

                                        <Form.Control>
                                            <Form.Input value={password} onChange={e => setPassword(e.target.value)} size="large" color="success" type="password" placeholder="Digite aqui sua senha" />

                                            <Icon align="left" size="small">
                                                {isValidPassword(password)}
                                            </Icon>
                                        </Form.Control>
                                    </Form.Field>

                                    {!isLogin ? 
                                    <Form.Field>
                                        <Form.Label>Confirme a senha</Form.Label>

                                        <Form.Control>
                                            <Form.Input value={repassword} onChange={e => setRepassword(e.target.value)} size="large" color="success" type="password" placeholder="Digite novamente sua senha" />

                                            <Icon align="left" size="small">
                                                <>{isSamePassword(password, repassword)}</>
                                            </Icon>
                                        </Form.Control>
                                    </Form.Field>
                                    : null}
                                    
                                    {failMessage ? 
                                    <Form.Field>
                                        <Form.Help color="danger">
                                            <Icon align="left" size="small">
                                                <FontAwesomeIcon className="" size="sm" icon={fa.faAsterisk} /> 
                                            </Icon>

                                            <>{failMessage}</>
                                        </Form.Help>
                                    </Form.Field>
                                    : null }
                                    
                                    {invalid ? 
                                    <Form.Field>
                                        <ul>{invalid}</ul>
                                    </Form.Field>
                                    : null }

                                    {isLogin ? 
                                    <Form.Field>
                                        <Form.Checkbox>
                                            Lembrar-me
                                        </Form.Checkbox>
                                    </Form.Field>
                                    : null}

                                    <Form.Field>
                                        <Button type="submit" size="large" color="primary" className="column is-12">
                                            {isLogin ? "Acessar" : "Cadastrar-se" } {<FontAwesomeIcon icon={fa.faSignIn} />}
                                        </Button>
                                    </Form.Field>
                                </form>
                            </Panel.Block>
                        </Panel>

                        <div className="columns">
                            <Link to="/#" className="column">Esqueci minha senha</Link>
                            {isLogin ? <Link to="/signup" className="column">Criar conta</Link> :  <Link to="/signin" className="column">Login</Link> }
                            <Link to="/#" className="column">Ajuda</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignForm;
