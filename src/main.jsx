import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/Router";
import { RouterProvider } from "react-router";
import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookiesProvider>
      <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
    </CookiesProvider>
  </StrictMode>
);
