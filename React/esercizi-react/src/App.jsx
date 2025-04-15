import Hello from "../Components/Hello"; //importo il componente Hello, per poterlo utilizzare e visualizzare
import { Welcome } from "../Components/Welcome"; //importo il componente Welcome
import { AlertClock } from "../Components/AlertClock";
import "./App.css";
import { Counter } from "../Components/Counter";
import { Clock } from "../Components/Clock";
import { MouseClicker } from "../Components/MouseClicker";
import EsercizioUseState from "../Components/EsercizioUseState";
import { InteractiveWelcome } from "../Components/InteractiveWelcome";
import { Login } from "../Components/Login";

//Qui dichiaro la funzione che gestirà l'evento e verrà assegnata al valore di onClick come props
function NewDate() {
  const date = new Date().toLocaleTimeString();
  alert(`The current time is: ${date}`);
}
function App() {
  const handleLogin = (datiForm) => {
    console.log("Login effettuato con i dati:", datiForm);
  };
  return (
    <>
      {/* <Hello /> */}
      {/* Chiamata del componente/rendering*/}
      {/* <Welcome name="Silvia" age={24} /> */}
      {/*valorizzo la props name ed age, assegnando il valore all'attributo.*/}
      {/* <AlertClock date={NewDate} />{" "} */}
      {/* passo la funzione che gestisce l'evento come props del componente AlertClock */}
      {/* <Counter />
      <Clock />
      <MouseClicker/>
      <EsercizioUseState/> */}
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
    </>
  );
}

export default App;
