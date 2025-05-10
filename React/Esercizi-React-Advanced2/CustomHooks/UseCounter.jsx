/*Crea un hook personalizzato useCounter 
che tenga traccia dello stato di un contatore e restituisca il valore corrente del contatore,
nonché tre funzioni per incrementare, decrementare e reimpostare il contatore.*/

/*Crea un hook personalizzato useCounter che tenga traccia dello stato di un contatore e ne restituisca il valore corrente, 
oltre a tre funzioni per incrementare, decrementare e azzerare il contatore. 
Utilizza useCallback per memorizzare le funzioni utilizzate per incrementare, decrementare e azzerare il contatore.*/

import { useState, useCallback } from "react";

export function UseCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount((count) => count + 1);
  }
  function decrement() {
    setCount((count) => count - 1);
  }
  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
