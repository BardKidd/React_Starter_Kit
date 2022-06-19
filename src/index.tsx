import { createRoot } from "react-dom/client";
import App from "./App";
import "~~assets/css/tailwind.css";

// ===============================================================
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
