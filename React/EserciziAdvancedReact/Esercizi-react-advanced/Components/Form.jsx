/*Esercizio 3: Form controllato per messaggi
Argomenti: Controlled Form, useState
Crea un componente con un campo di input e un bottone.
Quando l’utente scrive e preme il bottone, il testo deve essere aggiunto sotto come elenco. */

import React, { useState } from "react";

export function Form() {
  // Stati per gestire il campo di input e la lista dei messaggi
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  // Funzione per gestire il cambiamento del campo di input
  // aggiorna lo stato inputValue ogni volta che l'utente digita qualcosa nel campo di input.
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Funzione per gestire il submit del form
  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (inputValue.trim() !== "") {
      // Aggiunge il nuovo messaggio alla lista e resetta il campo di input
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
        <h1>Esercizio 3.</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Scrivi un messaggio..."
        />
        <button type="submit">Aggiungi</button>
      </form>
      <div>
        <h3>Messaggi:</h3>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
