/*Esercizio 4: Fetch utenti da API
Argomenti: useEffect, map
Crea un componente che faccia fetch da https://jsonplaceholder.typicode.com/users al montaggio e mostri
i nomi in una lista*/

import React, { useEffect, useState } from 'react';

export const FetchList = () => {
  const [utenti, setUtenti] = useState([]);
//useEffect: viene eseguito una sola volta al montaggio del componente (grazie all’array vuoto [] come secondo argomento).
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUtenti(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Lista Utenti</h2>
      <ul>
        {utenti.map(utente => (
          <li key={utente.id}>{utente.name}</li>
        ))}
      </ul>
    </div>
  );
};


