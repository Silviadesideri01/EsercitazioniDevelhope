//Crea un componente funzione Welcome che riceve una name prop e visualizza il Welcome, {name}! messaggio all'interno del tag p.

//Aggiungi un secondo prop chiamato age e visualizzalo sotto il messaggio di benvenuto, all'interno del tag p dopo il messaggio "La tua età è ".

//Modificare il valore passato alla proprietà name in modo che sia contenuto in un tag strong.

//Estrarre il messaggio "La tua età è" in un nuovo componente denominato Età ed eseguirne il rendering all'interno del componente Benvenuto.

//Passare al componente Età la proprietà età che Welcome riceve dal componente App.

import { Age } from "./Age";
export function Welcome({ name = "Utente" }) {
  //Ho impostato un valore di defoult a name, nel caso usassi il componente senza valorizzare la props.
  return (
    <div>
      <p>Welcome, {name}!</p>
      <Age age="24" />
    </div>
  );
}
