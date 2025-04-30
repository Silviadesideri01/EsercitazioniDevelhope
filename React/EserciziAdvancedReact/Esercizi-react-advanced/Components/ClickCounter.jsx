/* ESERCIZIO 1.
Argomenti: Components, useState
Crea un componente ClickCounter che visualizzi un numero e un bottone. Al click sul bottone, il numero deve
aumentare di 1*/
import { useState } from "react";
export function ClickCounter() {
  const [count, setCount] = useState(0);

  const UpdateCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Esercizio 1.</h1>
      <p>Al click del bottone il numero incrementa di 1</p>
      <h1>{count}</h1>
      <button onClick={UpdateCounter}>Increment Count</button>
    </div>
  );
}
