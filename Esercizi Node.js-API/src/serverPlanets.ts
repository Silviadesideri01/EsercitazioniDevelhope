import express from "express"; // importa il modulo express,è un framework per Node.js che semplifica la creazione di applicazioni web e API.
import "express-async-errors";
//importa un modulo aggiuntivo "middleware" (che si interpone tra una richiesta e una risposta) gestisce automaticamente gli errori nelle funzioni asincrone (quelle che usano async/await) all'interno delle rotte di Express, evitando che l'applicazione si blocchi in caso di eccezioni non catturate.

import morgan from "morgan"; //Morgan è un logger di richieste HTTP, ogni volta che il tuo server riceve una richiesta, logga informazioni su quella richiesta nella console (ES. il metodo HTTP, l'URL, il codice di stato della risposta, il tempo di risposta, ecc.).

const app = express();
const port = 3000;

app.use(morgan("dev")); //configurazione di morgan in "dev", mostra LOG precisi e dettagliati.
app.use(express.json()) //configura le risposte in arrivo (POST,PUT,PATCH)in formato json

//alias di tipo Planets con corrispettivi tipi da rispettare nell'utilizzo.
type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[]; //la variabile tipizzata a planets deve essere un Array che rispetti la tipizzazione di Planet. (id:number, name:string)

let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get("/api/planets", (req, res) => {
  res.status(200).json(planets); //passiamo il json creato nella risposta dell'API
  //.send metodo che: imposta automaticamente l'header Content-Type appropriato alla richiesta.
  //alternativa: .json (che definisci tu che il content/type sarà application/json).
});

app.get("/api/planets/:id", (req, res) => {
  //:id è un parametro dinamico che cattura il valore numerico nell'URL.
  const { id } = req.params; // Estrae il valore del parametro id dall'URL.

  //Cerca nell'array planets il pianeta il cui id corrisponde al id estratto dall'URL.
  const planetID = planets.find((planet) => planet.id === Number(id)); //Converti l'ID a numero per il confronto.

  // Gestione dell'errore: se il pianeta non viene trovato 
  // Se planetID è undefined (cioè find non ha trovato nulla), inviamo un 404
  if (!planetID) {
    console.log(`Errore: Pianeta con ID ${id} non trovato.`);

    // Invia una risposta 404 al client con un messaggio JSON
    return res.status(404).send({ message: "Pianeta non trovato." });
  }

  // Se il pianeta viene trovato, inviamo una risposta 200 con i dati del pianeta
  res.status(200).json(planetID);
});


app.listen(port, () => {
  console.log(`listering on port http://localhost:${port}`);
});
