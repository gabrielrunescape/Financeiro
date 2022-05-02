import React from "react";
import { Outlet, Link, useMatch } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar is-info">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">WebFinanceiro</Link>
                    </div>

                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <Link to="/" className={getDir("/")}>Home</Link>
                            <Link to="/blog" className={getDir("blog")}>Blogs</Link>
                            <Link to="/api" className={getDir("api")}>API</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
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
