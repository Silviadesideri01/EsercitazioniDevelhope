import express from "express"; // importa il modulo express,è un framework per Node.js che semplifica la creazione di applicazioni web e API.
import "express-async-errors";
//importa un modulo aggiuntivo "middleware" (che si interpone tra una richiesta e una risposta) gestisce automaticamente gli errori nelle funzioni asincrone (quelle che usano async/await) all'interno delle rotte di Express, evitando che l'applicazione si blocchi in caso di eccezioni non catturate.

import morgan from "morgan"; //Morgan è un logger di richieste HTTP, ogni volta che il tuo server riceve una richiesta, logga informazioni su quella richiesta nella console (ES. il metodo HTTP, l'URL, il codice di stato della risposta, il tempo di risposta, ecc.).
import {
  createNewPlanet,
  deletePlanetById,
  getAllPlanets,
  getOnePlanetById,
  updatePlanetById,
} from "./Controllers/Planets.js";



const app = express();
const port = 3000;

app.use(morgan("dev")); //configurazione di morgan in "dev", mostra LOG precisi e dettagliati.
app.use(express.json()); //configura le risposte in arrivo (POST,PUT,PATCH)in formato json


app.get("/api/planets", getAllPlanets);

//METODO GET : RICHIESTA.
app.get("/api/planets/:id", getOnePlanetById);

//METODO POST: INVIARE (AGGIUNGERE UN NUOVO PIANETA)
app.post("/api/planets", createNewPlanet);

//METODO PUT: AGGIORNARE LE INFORMAZIONI
app.put("/api/planets/:id", updatePlanetById);

//METODO DELETE: eliminazione di un elemento
app.delete("/api/planets/:id", deletePlanetById);

app.listen(port, () => {
  console.log(`listering on port http://localhost:${port}`);
});
