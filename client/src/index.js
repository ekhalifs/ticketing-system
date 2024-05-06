import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AuthContextProvider from "./Context/AuthContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
