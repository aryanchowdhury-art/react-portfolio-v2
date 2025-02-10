import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/react-portfolio-v2"> {/* Add basename for GitHub Pages */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
