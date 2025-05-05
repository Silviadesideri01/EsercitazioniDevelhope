/*Crea un hook personalizzato useCounter 
che tenga traccia dello stato di un contatore e restituisca il valore corrente del contatore,
nonché tre funzioni per incrementare, decrementare e reimpostare il contatore.*/

import { useState } from "react";

export function UseCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }
  function decrement() {
    setCount((count) => count - 1);
  }
  function reset() {
    setCount(0);
  }

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
