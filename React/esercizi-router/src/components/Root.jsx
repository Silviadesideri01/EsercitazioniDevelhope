import { BrowserRouter } from "react-router-dom";
import App from "../App";


export function Root() {
    // Esegui il rendering del componente App all'interno di un componente BrowserRouter
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  );
}
