import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@emotion/react";
import { THEME } from "./theme/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={THEME}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
