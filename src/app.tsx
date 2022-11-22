import { useState } from "preact/hooks";
import "./app.css";
export function App() {
  const contraste = true;

  return (
    <div className={contraste ? "bodyBlack" : "bodyWhite"}>
      <h1>Lucas</h1>
      <h2>Conteúdo</h2>
      sad
    </div>
  );
}
