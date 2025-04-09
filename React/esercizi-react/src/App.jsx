import Hello from "../Components/Hello"; //importo il componente Hello, per poterlo utilizzare e visualizzare
import { Welcome } from "../Components/Welcome"; //importo il componente Welcome
import { AlertClock } from "../Components/AlertClock";
import "./App.css";

//Qui dichiaro la funzione che gestirà l'evento e verrà assegnata al valore di onClick come props
function NewDate() {
  const date = new Date().toLocaleTimeString();
  alert(`The current time is: ${date}`);
}
function App() {
  return (
    <>
      <Hello />
      {/* Chiamata del componente/rendering*/}
      {/* <Welcome name="Silvia" age={24} /> */}
      {/*valorizzo la props name ed age, assegnando il valore all'attributo.*/}
      <AlertClock date={NewDate} />{" "}
      {/* passo la funzione che gestisce l'evento come props del componente AlertClock */}
    </>
  );
}

export default App;
