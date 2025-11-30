import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import assets from "./assets/assets";

// Minimum time to show preloader (in ms)
const MIN_PRELOAD_TIME = 2000;

// Start timer
const startTime = Date.now();

// Load the header image
const img = new Image();
img.src = assets.header;

img.onload = () => {
  const elapsed = Date.now() - startTime;
  const remaining = MIN_PRELOAD_TIME - elapsed;

  // Ensure preloader stays visible for at least MIN_PRELOAD_TIME
  setTimeout(() => {
    const loader = document.querySelector(".loading-container");
    if (loader) loader.style.display = "none";

    createRoot(document.getElementById("root")).render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }, remaining > 0 ? remaining : 0);
};
