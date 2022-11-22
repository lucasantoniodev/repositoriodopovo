import { useState } from "preact/hooks";
import "./app.css";
export function App() {
  const contraste = true;

  return (
    <div className={contraste ? "bodyBlack" : "bodyWhite"}>
      <h1>Lucas</h1>
      <h2>vai funcionaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h2>
    </div>
  );
}
