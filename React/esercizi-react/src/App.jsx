//import Hello from "../Components/Hello"; importo il componente Hello, per poterlo utilizzare e visualizzare

import { Welcome } from "../Components/Welcome"; //importo il componente Welcome

function App() {
  return (
    <>
      {/*<Hello /> Chiamata del componente/rendering*/}
      <Welcome name="Silvia" />
      {/*valorizzo la props name ed age, assegnando il valore all'attributo.*/}
    </>
  );
}

export default App;
