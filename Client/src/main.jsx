import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import assets from "./assets/assets"; // <--- important!

// Load your header image first
const img = new Image();
img.src = assets.header;

img.onload = () => {
  // Hide preloader
  const loader = document.querySelector(".loading-container");
  if (loader) loader.style.display = "none";

  // Render the app
  createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
