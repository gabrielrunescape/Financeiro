import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard/index.jsx";
import Layout from "../components/layout.jsx";
import Private from "../components/private.js";
import SignIn from "../pages/signin.jsx";
import SignUp from "../pages/signup.jsx";

import { AuthProvider } from "../contexts/auth.js";

/**
 * Define routes to app
*/
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Private><Dashboard /></Private>}/>
            <Route path="signup" element={<SignUp />}/>
            <Route path="signin" element={<SignIn />}/>

            <Route path="/dashboard" element={<Layout />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}


/*
<Route path="*" element={<Error />} />
        <Route path="signin" element={<Signin />} />

        <Route path="api">
          <Route index element={<Api />} />
          
          <Route path="usuarios" >
            <Route index element={<IndexUsuarios />} />
            <Route path=":userID" element={<UsuarioID />} />
          </Route>
        </Route>
*/