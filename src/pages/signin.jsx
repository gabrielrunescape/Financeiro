import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Columns, Container, Form, Heading, Hero } from "react-bulma-components";

import SignForm from "../components/signform.jsx";
import { AuthContext } from "../contexts/auth";

/**
 * Render login page
 * 
 * @returns Rendered React component
 */
const SignIn = () => {    
    const { authenticated } = useContext(AuthContext);

    if (authenticated) {
         return <Navigate to="/" />;
    } else {
        return (
            <div className="background_image">
                <Hero size="fullheight" className="hero_transparent">
                    <Container mt={6} >
                        <Columns my={5} mx={4}>
                            <Columns.Column textAlign="justify" >
                                <div style={{maxWidth: "400px"}} className="is-narrow-mobile is-hidden-touch">
                                    <Heading textColor="primary" weight="bold" size={2} my={4}>WebFinanceiro</Heading>
                                    
                                    <p className="has-text-black">
                                        Controle suas finanças, saiba onde estão seus gastos e tenha controle sobre investimentos.
                                        Entre de cabeça em cada centavo gasto em suas finanças.
                                    </p>
                                </div>
                            </Columns.Column>

                            <Columns.Column narrow={true} style={{width: "400px"}}>
                                <Container>
                                    <SignForm isLogin={true}></SignForm>;
                                </Container>
                            </Columns.Column>
                        </Columns>
                    </Container>

                    <Hero.Footer backgroundColor="white" p={6}>
                        <Container textAlign="center">
                            <Link to="/">WebFinanceiro</Link> developed by
                            <Link to="https://github.com/gabrielrunescape"> GabrielRuneScape </Link>
                            | GRS Inc. 2K23
                        </Container>
                    </Hero.Footer>
                </Hero>
            </div>
        );
    }
}

export default SignIn;