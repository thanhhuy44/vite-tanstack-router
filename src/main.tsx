import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

// Import the generated route tree
import Providers from "./providers";
import App from "./App";

// Create a new router instance

// Register the router instance for type safety

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
