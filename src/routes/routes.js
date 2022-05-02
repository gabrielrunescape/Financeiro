import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUp from "../pages/signup.jsx";
import SignIn from "../pages/signin.jsx";
import Dashboard from "../pages/Dashboard/index.jsx";

import Layout from "../components/layout.jsx";
import Private from "../components/private.js";

import { AuthProvider } from "../contexts/auth.js";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Private><Dashboard /></Private>}/>
            <Route path="signup" element={<SignUp />}/>
            <Route path="signin" element={<SignIn />}/>

            <Route path="/dashboard" element={<Dashboard />} />            
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