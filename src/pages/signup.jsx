import React from "react";
import SignForm from "../components/signform.jsx"
import { Container, Hero } from "react-bulma-components";
import { Link } from "react-router-dom";

/**
 * Render register page
 * 
 * @returns React component rendered
 */
const SignUp = () => {
    return (
        <div className="background_image">
            <Hero size="fullheight" className="hero_transparent">
                <Container mt={6} >
                    <div style={{width: "500px"}}>
                        <SignForm isLogin={false}></SignForm>;
                    </div>
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

export default SignUp;