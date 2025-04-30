/*Esercizio 5: Componente Timer
Argomenti: useState, useEffect
Crea un componente che mostri un timer che aumenta di 1 ogni secondo. Aggiungi due bottoni per fermare e riprendere
il timer.*/

import { useState, useEffect } from "react";

export function Timer() {
  const [seconds, setSeconds] = useState(0); //seconds parte da 0 e conta il tempo.
  const [isRunning, setIsRunning] = useState(true); //isRunning è true all'inizio → vuol dire che il timer deve subito partire.

  useEffect(() => {
    let interval = null;

    if (isRunning) { // //Se isRunning è vero creo un setInterval che ogni 1 secondo aggiunge +1 a seconds.
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1); //prendo il valore attuale dei secondi e aggiungo 1
      }, 1000);
    } else if (!isRunning && interval !== null) { //Se isRunning è falso fermo il timer con clearInterval.
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Pulizia
  }, [isRunning]); //useEffect dipende da isRunning si ri-esegue ogni volta che premi "Ferma" o "Riprendi".

  const stopTimer = () => {
    setIsRunning(false);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  return (
    <div>
      <h1>Timer: {seconds} secondi</h1>
      <button onClick={stopTimer}>Ferma</button>
      <button onClick={startTimer}>Riprendi</button>
    </div>
  );
}
