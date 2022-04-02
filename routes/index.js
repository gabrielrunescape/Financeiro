import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Api from "./api.jsx";
import Error from "./error.jsx";
import Layout from "./layout.jsx";

const App = () => (
  <>
    <div className="container mt-4">
      <h1 className="title">Bem-vindo !</h1>
    </div>
  </>
);

const LesRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />}/>
        <Route path="*" element={<Error />} />
        <Route path="api" element={<Api />} />
         
      </Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(<LesRoutes />, document.getElementById("root"));