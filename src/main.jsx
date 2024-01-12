import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Suspense } from "react";

function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <p class="header header-left">
        Luke Song
        <br />
        challenge story - connecting dots
      </p>
      <div class="header header-right">1/11/2024</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
  </>
);
