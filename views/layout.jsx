import React from "react";
import { Outlet, Link } from "react-router-dom";

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
                            <Link to="/" className="navbar-item has-text-info has-background-white">Home</Link>
                            <Link to="/blog" className="navbar-item has-text-white">Blogs</Link>
                            <Link to="/api" className="navbar-item has-text-white">API</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default Layout;
