import React, { useContext }  from "react";
import { Columns, Container, Navbar } from "react-bulma-components";
import { Outlet, Link, useMatch } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

/**
 * Main layout of dashboard
 * 
 * @returns React form with Bulma components
 */
const Layout = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <>
            <Navbar color="primary" fixed="top" className="horizontal_line">
                <Navbar.Brand>
                    <Link to="/" className="navbar-item">WebFinanceiro</Link>
                </Navbar.Brand>

                <Navbar.Menu>
                    <Navbar.Container align="right">
                        <Navbar.Item hoverable="true" className="has-dropdown has-dropdown-with-icons has-divider has-user-avatar">
                            <Navbar.Link arrowless="true">
                                <div className="is-user-avatar">
                                    <img src={user && (user.photoURL != "null" && user.photoURL != null ) ? user.photoURL : "https://avatars.dicebear.com/v2/initials/john-doe.svg" } alt={user ? user.displayName : "Zé Polvinho"} />
                                </div>

                                <div className="is-user-name"><span>{user && (user.displayName != "null" && user.displayName != null ) ? user.displayName : "Zé Polvinho"}</span></div>
                                <span className="icon"><i className="mdi mdi-chevron-down"></i></span>
                            </Navbar.Link>

                            <Navbar.Dropdown>
                                <a href="profile.html" className="navbar-item">
                                    <span className="icon"><i className="mdi mdi-account"></i></span>
                                    <span>Perfil</span>
                                </a>

                                <a className="navbar-item">
                                    <span className="icon"><i className="mdi mdi-settings"></i></span>
                                    <span>Configurações</span>
                                </a>

                                <hr className="navbar-divider"/>

                                <a className="navbar-item" onClick={logout}>
                                    <span className="icon"><i className="mdi mdi-logout"></i></span>
                                    <span>Sair</span>
                                </a>
                            </Navbar.Dropdown>
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>

            <Columns className="is-fullheight is-gapless">
                <aside style={{width: "250px", borderRight: "1px solid #929292"}} className="has-background-white is-narrow-mobile is-fullheight section is-hidden-mobile">
                    <p className="maneu-label is-hidden-touch">Navigation</p>

                    <ul className="menu-list">
                        <li>
                            <Link to="#">
                                <span className="icon"><i className="fa fa-home"></i></span> Home
                            </Link>
                        </li>

                        <li>
                            <Link to="#" className="is-active">
                                <span className="icon"><i className="fa fa-table"></i></span> Links
                            </Link>

                            <ul>
                                <li>
                                    <Link to="#">
                                        <span className="icon is-small"><i className="fa fa-link"></i></span> Link 1
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#">
                                        <span className="icon is-small"><i className="fa fa-link"></i></span> Link 2
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </aside>

                <Columns.Column>                 
                    <Outlet /> 
                </Columns.Column>
            </Columns>
        </>
    );
}

const getDir = path => {
    let vaiveno = useMatch({
        path: path
    });

    return (vaiveno ? "navbar-item has-text-info has-background-white" : "navbar-item has-text-white");
}

export default Layout;
