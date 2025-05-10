/*Crea un componente FilteredList che riceva un elenco di oggetti, 
ciascuno contenente un nome, un ID e una proprietà "età". 
Il componente FilteredList deve visualizzare solo gli elementi dell'elenco la cui età è maggiore di 18 anni
e il filtraggio deve essere eseguito solo quando l'elenco cambia. 
Utilizza useMemo per memorizzare l'elenco filtrato.*/

import  { useMemo } from 'react';

export function FilteredList({ list }) {
  // useMemo per memorizzare l'elenco filtrato
  const filteredList = useMemo(() => {
    return list.filter(item => item.età > 18);
  }, [list]);

  //Questo codice ricalcola la lista solo se cambia list, evitando filtraggi inutili su ogni render.

  return (
    <ul>
      {filteredList.map(item => (
        <li key={item.id}>
          {item.nome} ({item.età} anni)
        </li>
      ))}
    </ul>
  );
}
