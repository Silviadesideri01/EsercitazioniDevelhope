import { useEffect, useState } from "react";

//Creare un componente funzione Counter e creare una nuova variabile di stato denominata counter inizializzata a 0.

//Il valore del contatore dovrebbe essere incrementato ogni volta che l'utente clicca su un pulsante.

//Fare in modo che il valore iniziale del contatore e l'importo dell'incremento vengano passati come oggetti di scena al componente.

export function Counter({ initialValue = 0 }) {
  //passo il valore iniziale di usestate come props, inizializzato a 0.
  const [currentValue, setConteggio] = useState(initialValue);

  //Aggiungi un effetto collaterale al componente Counter che stampi il valore corrente del contatore all'interno della console.
  useEffect(() => {
    console.log(`the current value is: ${currentValue}`);
  }, [currentValue]);

  const increment = () => {
    setConteggio((currentValue) => currentValue + 1); //mi assicuro che il valore di conteggio sia sempre inizializzato a 0.
  };

  const decrement = () => {
    setConteggio((currentValue) => currentValue - 1);
  };
  const reset = () => {
    setConteggio(initialValue);
  };
  return (
    <div>
      <h2>Hai cliccato {currentValue} volte</h2>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
