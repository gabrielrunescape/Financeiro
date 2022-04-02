import React from "react";

import { Outlet, Link } from "react-router-dom";

const Layout = () => (
    <>
        <nav className="navbar has-background-info-dark">
            <div className="container navbar-menu">
                <Link to="/" className="navbar-item has-text-white">Home</Link>
                <Link to="/blog" className="navbar-item has-text-white">Blogs</Link>
                <Link to="/api" className="navbar-item has-text-white">API</Link>
            </div>
        </nav>

        <Outlet />
    </>
);

export default Layout;
