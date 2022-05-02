import React from "react";
import ReactDOM from "react-dom";

import { AppRoutes } from "./src/routes/routes";

ReactDOM.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>, 
    document.getElementById("root")
);