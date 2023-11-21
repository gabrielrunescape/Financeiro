import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";

import useDocumentTitle from "./title";
import { AuthContext } from "../contexts/auth";
import { AsteriskError } from "./errorform.jsx";

import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Panel, Form, Icon, Button } from "react-bulma-components";

/**
 * Check if is a valid e-mail address
 * 
 * @param {string} value E-mail address
 * @returns React coloured component
 */
let isValidEmail = value => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value.match(mailformat)) {
        return (<FontAwesomeIcon color="#228838" size="sm" icon={fa.faCheck} />);
    } else {
        return (<FontAwesomeIcon size="sm" icon={fa.faTimes} />);
    }
}

/**
 * Check if is a valid password
 * 
 * @param {string} value Password
 * @returns React coloured component
 */
let isValidPassword = (value) => {
    if (value.length > 5) {
        return (<FontAwesomeIcon color="#228838" size="sm" icon={fa.faLockOpen} />);
    } else {
        return (<FontAwesomeIcon size="sm" icon={fa.faLock} />);
    }
}

/**
 * Check if password are equals
 * 
 * @param {string} value First password
 * @param {string} second Re typed password
 * @returns React coloured component to form
 */
let isSamePassword = (value, second) => {
    if (value == second && (value != 0 || second != 0)) {
        return (<FontAwesomeIcon color="#228838" size="sm" icon={fa.faLockOpen} />);
    } else {
        return (<FontAwesomeIcon size="sm" icon={fa.faLock} />);
    }
}

/**
 * Check if some variable is empty
 * 
 * @param {*} value Object to verify
 * @returns if is empty or not
 */
const isEmpty = value => {
    let typeOfValue = typeof value;

    switch(typeOfValue) {
        case 'object':
            return (value.length == 0 || !Object.keys(value).length);
        case 'number':
        case 'string':
            let str = value.trim();
            return (str == '' || str == undefined);
    }
}

/**
 * React component to form to authenticial or register
 * 
 * @param {*} param0 Children param  
 * @returns React object rendered
 */
const SignForm = ({isLogin = true}) => {
    if (isLogin) {
        useDocumentTitle("WebFinanceiro - Login");
    } else {
        useDocumentTitle("WebFinanceiro - Cadastrar-se");
    }

    const {signInEmail, signUpEmail, failMessage } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [invalid, setInvalid] = useState(null);
    const [nome, setNome] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    /**
     * Valid all parametres to log in and does it if is allowed
     * 
     * @param {Event} e Handle action
     */
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

            if (isEmpty(nome)) {
                errors.push(<li key="2">
                    <AsteriskError message="Campo nome não pode estar vazio!" />
                </li>);
            }

            if (isEmpty(sobrenome)) {
                errors.push(<li key="2">
                    <AsteriskError message="Campo sobrenome não pode estar vazio!" />
                </li>);
            }

            setInvalid(errors);

            if (invalid != null) {
                signUpEmail(email, password, nome, sobrenome);
            }
        }
    }

    return (
        <>
            <Panel color="primary">
                <Panel.Block p={3} className="transparent_container box has-text-left">
                    <form onSubmit={handleSubmit} style={{width: "100%"}}>  
                        {!isLogin ? 
                        <>
                            <Form.Field>
                                <Form.Label>Insira seu nome</Form.Label>

                                <Form.Control>
                                    <Form.Input value={nome} onChange={e => setNome(e.target.value)} size="medium" color="primary" type="text" placeholder="Nome" className="width_input" />

                                    <Icon align="left" size="small">
                                        <FontAwesomeIcon size="sm" icon={fa.faUser} />
                                    </Icon>
                                </Form.Control>
                            </Form.Field>


                            <Form.Field>
                                <Form.Label>Insira seu sobrenome</Form.Label>

                                <Form.Control>
                                    <Form.Input value={sobrenome} onChange={e => setSobrenome(e.target.value)} size="medium" color="primary" type="text" placeholder="Sobrenome" className="width_input" />

                                    <Icon align="left" size="small">
                                        <FontAwesomeIcon size="sm" icon={fa.faUserMd} />
                                    </Icon>
                                </Form.Control>
                            </Form.Field>
                        </>
                        : null }                   
                        <Form.Field>
                            {!isLogin ? <Form.Label>Endereço de e-mail</Form.Label> : null }

                            <Form.Control>
                                <Form.Input value={email} onChange={e => setEmail(e.target.value)} size="medium" color="primary" type="email" placeholder="Endereço de e-mail" className="width_input" />

                                <Icon align="left" size="small">
                                    <FontAwesomeIcon size="sm" icon={fa.faAt} />
                                </Icon>
                                <Icon align="right" size="small">
                                    {isValidEmail(email)}
                                </Icon>
                            </Form.Control>
                        </Form.Field>

                        <Form.Field>
                            {!isLogin ? <Form.Label>Defina uma senha</Form.Label> : null }

                            <Form.Control>
                                <Form.Input value={password} onChange={e => setPassword(e.target.value)} size="medium" color="primary" type="password" placeholder="Senha" className="width_input" />

                                <Icon align="left" size="small">
                                    {isValidPassword(password)}
                                </Icon>
                            </Form.Control>
                        </Form.Field>

                        {!isLogin ? 
                        <Form.Field>
                            <Form.Label>Confirme a senha</Form.Label>

                            <Form.Control>
                                <Form.Input value={repassword} onChange={e => setRepassword(e.target.value)} size="medium" color="primary" type="password" placeholder="Digite novamente sua senha" className="width_input" />

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
                            <Button type="submit" size="large" color="primary" className="width_input">
                                {isLogin ? "Acessar" : "Cadastrar-se" } {<FontAwesomeIcon icon={fa.faSignIn} />}
                            </Button>
                        </Form.Field>

                        {isLogin ?
                        <Form.Label textAlign="center">
                            <Link to="/#" className="column">Esqueci minha senha</Link>
                        </Form.Label>
                        : null}

                        <div className="horizontal_line" />

                        <div className="columns has-text-centered">
                            <Link to="/#" className="column">Esqueci minha senha</Link>
                            {isLogin ? <Link to="/signup" className="column">Criar conta</Link> :  <Link to="/signin" className="column">Login</Link> }
                            <Link to="/#" className="column">Ajuda</Link>
                        </div>
                    </form>
                </Panel.Block>
            </Panel>
        </>
    );
};

export default SignForm;
