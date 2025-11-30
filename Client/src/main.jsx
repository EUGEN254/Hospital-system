import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Artificial delay to see preloader (remove in production)
const SHOW_PRELOADER_FOR = 3000; // 8 seconds - adjust as needed

const renderApp = () => {
  createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

// Show preloader for specified time before rendering the app
setTimeout(renderApp, SHOW_PRELOADER_FOR);