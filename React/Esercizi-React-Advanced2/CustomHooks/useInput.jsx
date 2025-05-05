/*Crea un hook personalizzato che tenga traccia dello stato di un modulo controllato con gli input di nome utente e password.
 e restituisca il valore corrente degli input nonché un gestore eventi per aggiornare entrambi gli input.*/

import { useState } from "react";

export function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue)

  }

  return {
    inputValue,
    handleInputChange,
    handleSubmit
  };
}
