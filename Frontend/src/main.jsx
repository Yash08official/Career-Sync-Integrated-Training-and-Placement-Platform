import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeProvider from "./utils/ThemeContext";
import { AuthProvider } from "./context/auth";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
);
