/*Crea un componente denominato Color che riceve come prop un oggetto denominato color, il quale avrà 2 proprietà; id e name.
il componente deve restituire l'oggetto in un tag li che visualizza la proprietà name.*/

export function Color({ color }) {
  return (
    <div>
      <li>{color.name}</li>
    </div>
  );
}
