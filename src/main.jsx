import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/css/main.css";

import { DataProvider } from "./components/contexts/storageData.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <DataProvider>
            <App />
        </DataProvider>
    </React.StrictMode>
);
