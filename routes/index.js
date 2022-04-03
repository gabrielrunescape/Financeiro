import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error from "../pages/error.jsx";
import Api from "../pages/api/index.jsx";
import Layout from "../views/layout.jsx";
import HomePage from "../views/home.jsx";
import { IndexUsuarios, UsuarioID } from "../pages/api/usuarios.jsx";

const LesRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path="*" element={<Error />} />

        <Route path="api">
          <Route index element={<Api />} />
          
          <Route path="usuarios" >
            <Route index element={<IndexUsuarios />} />
            <Route path=":userID" element={<UsuarioID />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(<LesRoutes />, document.getElementById("root"));