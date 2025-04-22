/*Crea un secondo componente denominato Colors, che accetta un array di oggetti come prop.
 Le proprietà che l'oggetto deve avere sono sempre nome e id, e visualizza un elenco non ordinato del componente Color.*/
import { Color } from "./Color";
export function Colors({ colorList }) {
  return (
    <>
      <h2>
        Componente Colors con un array di oggetti come props che renderizza la
        proprietà name con metodo map
      </h2>
      <ul>
        {colorList.map((value, index) => (
          <Color key={index} color={value} />
        ))}
      </ul>
    </>
  );
}
