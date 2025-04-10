//Crea un componente Clock che visualizzi l'ora corrente all'interno di un tag h2.
// Utilizza il gancio useEffect per aggiornare l'ora ogni secondo.
import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("Time every 1000s...");
      setTime(new Date());
    }, 1000);
    return () => {
      console.log("Stop time...");
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div>
      <h2>The current time is {time.toLocaleTimeString()}</h2>
    </div>
  );
}
