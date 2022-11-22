import { useState } from "preact/hooks";
import "./app.css";
export function App() {
  const contraste = true;

  return (
    <div className={contraste ? "bodyBlack" : "bodyWhite"}>
      <h1> João é lindo </h1>
      <img
        src="../mao.png"
        className={contraste ? "gatoDaAliciaComFomeLigado" : ""}
        alt=""
      />
    </div>
  );
}
