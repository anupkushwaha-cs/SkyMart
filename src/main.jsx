import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";

import AppRoutes from "./Routes/AppRoutes.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { ContextProvider } from "./Context/AppContaxts.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ContextProvider>
        <AppRoutes />
      </ContextProvider>
    </AuthProvider>
  </BrowserRouter>
);