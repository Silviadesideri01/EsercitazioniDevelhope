import Hello from "../Components/Hello"; //importo il componente Hello, per poterlo utilizzare e visualizzare
import { Welcome } from "../Components/Welcome"; //importo il componente Welcome
import { AlertClock } from "../Components/AlertClock";
import "./App.css";

function App() {
  return (
    <>
      <Hello />
      {/* Chiamata del componente/rendering*/}
      {/* <Welcome name="Silvia" age={24} /> */}
      {/*valorizzo la props name ed age, assegnando il valore all'attributo.*/}
      <AlertClock />
    </>
  );
}

export default App;
