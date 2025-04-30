/*Esercizio 2: Lista di nomi
Argomenti: map, props
Crea un componente NameList che riceva via props un array di nomi e visualizzi ciascun nome come elemento di una
lista*/

export function NameList({ names }) {
  return (
    <div>
        <h1>Esercizio 2.</h1>
      <p>Lista di nomi:</p>
      <ul>
        {names.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
