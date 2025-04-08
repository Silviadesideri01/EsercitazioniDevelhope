//Crea un componente funzione Welcome che riceve una name prop e visualizza il Welcome, {name}! messaggio all'interno del tag p.

//Aggiungi un secondo prop chiamato age e visualizzalo sotto il messaggio di benvenuto, all'interno del tag p dopo il messaggio "La tua età è ".

//Modificare il valore passato alla proprietà name in modo che sia contenuto in un tag strong.

//Estrarre il messaggio "La tua età è" in un nuovo componente denominato Età ed eseguirne il rendering all'interno del componente Benvenuto.

//Passare al componente Età la proprietà età che Welcome riceve dal componente App.

import { Age } from "./Age";
import { Messaggio } from "./Messaggio";
export function Welcome({ name = "Utente", age }) {
  //Ho impostato un valore di defoult a name, nel caso usassi il componente senza valorizzare la props.
  return (
    <div>
      <p>
        Welcome, <strong>{name}!</strong>
      </p>
      {/*Assegno al componente Age, il valore della props age utilizzata in welcome */}
      {/*usa il rendering condizionale con una delle seguenti condizioni:*/}
      {age >= 18 ? <Age age={age} /> : <Messaggio />}
      {/*L'età è maggiore o uguale a 18? se si, renderizza l'età: altrimenti mostra il messaggio*/}
      {age && <Age age={age} />}
      {/*L'età deve essere inserita per essere renderizzata*/}
      {age > 18 && age < 65 ? <Age age={age} /> : ""}{" "}
      {/*L'età è maggiore di 18 E minore di 65? Se si, renderizzala*/}
      {age > 18 && name === "John" ? <Age age={age} /> : ""}
      {/*l'età è maggiore di 18 E il nome è uguale a Jhon? Se si, renderizzalo*/}
    </div>
  );
}
