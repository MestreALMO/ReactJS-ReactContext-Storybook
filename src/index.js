import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CountProvider from "./context/Count";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CountProvider>
      <App />
      <CssBaseline />
    </CountProvider>
  </React.StrictMode>
);
