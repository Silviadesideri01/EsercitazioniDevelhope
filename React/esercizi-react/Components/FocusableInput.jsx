//Crea un componente FocusableInput che esegua il rendering di un tag di input.
// Non appena il componente esegue il rendering, il tag di input dovrebbe essere automaticamente focalizzato.
//Utilizzando StrictMode, crea un componente con un effetto che visualizza un messaggio solo quando il componente viene montato per la prima volta.
// Utilizza un riferimento per tenere traccia se il componente è montato o meno.
import { useEffect, useRef } from "react";


export function FocusableInput() {
  const mountComponent = useRef(false);

  
  useEffect(() => {
    if (!mountComponent.current) {
      mountComponent.current = true;
      console.log("Componente montato per la prima volta");
    } else {
      console.log("Componente montato di nuovo");
    }
    inputRef.current?.focus();
  }, []); //fase di mount. esegue il focus non appena il componente viene montato.

  const inputRef = useRef(null);

  return (
    <div>
      <h1>Focus input Ref</h1>
      <input
        ref={inputRef}
        type="text"
        name="username"
        placeholder="inserisci il nome"
      />
    </div>
  );
}
