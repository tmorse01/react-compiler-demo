import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactCompilerApp from "./App.tsx";
import "./index.css";
// import ServerComponentApp from "./ServerComponentApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ServerComponentApp /> */}
    <ReactCompilerApp />
  </StrictMode>
);
