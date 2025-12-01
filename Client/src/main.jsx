import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HealthCareContextProvider } from "./sharedcontext/healthCareContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const MIN_PRELOAD_TIME = 2000;
const startTime = Date.now();

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

window.addEventListener("load", () => {
  const elapsed = Date.now() - startTime;
  const remaining = MIN_PRELOAD_TIME - elapsed;

  setTimeout(() => {
    const loader = document.querySelector(".loading-container");
    if (loader) loader.style.display = "none";

    createRoot(document.getElementById("root")).render(
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <HealthCareContextProvider>
            <App />
          </HealthCareContextProvider>
        </BrowserRouter>
      </GoogleOAuthProvider>
    );
  }, remaining > 0 ? remaining : 0);
});
