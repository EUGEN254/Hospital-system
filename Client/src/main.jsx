import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Minimum time to show preloader
const MIN_PRELOAD_TIME = 2000;
const startTime = Date.now();

window.addEventListener("load", () => {
  const elapsed = Date.now() - startTime;
  const remaining = MIN_PRELOAD_TIME - elapsed;

  setTimeout(() => {
    const loader = document.querySelector(".loading-container");
    if (loader) loader.style.display = "none";

    createRoot(document.getElementById("root")).render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }, remaining > 0 ? remaining : 0);
});
