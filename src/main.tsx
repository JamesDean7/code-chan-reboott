import "./reset.css";
import "./font.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router";
import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { THEME } from "./theme/index.ts";
import App from "./App.tsx";
import { TIME_IN_MS } from "@/const/unit/unit.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: TIME_IN_MS.halfHour,
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={THEME}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
