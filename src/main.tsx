import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

import Providers from "./providers";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
