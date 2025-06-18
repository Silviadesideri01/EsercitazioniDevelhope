import express from "express"; // importa il modulo express,è un framework per Node.js che semplifica la creazione di applicazioni web e API.
import "express-async-errors";
//importa un modulo aggiuntivo "middleware" (che si interpone tra una richiesta e una risposta) gestisce automaticamente gli errori nelle funzioni asincrone (quelle che usano async/await) all'interno delle rotte di Express, evitando che l'applicazione si blocchi in caso di eccezioni non catturate.

import morgan from "morgan"; //Morgan è un logger di richieste HTTP, ogni volta che il tuo server riceve una richiesta, logga informazioni su quella richiesta nella console (ES. il metodo HTTP, l'URL, il codice di stato della risposta, il tempo di risposta, ecc.).

const app = express();
const port = 3000;

app.use(morgan("dev")); //configurazione di morgan in "dev", mostra LOG precisi e dettagliati.
app.use(express.json()); //configura le risposte in arrivo (POST,PUT,PATCH)in formato json

//alias di tipo Planets con corrispettivi tipi da rispettare nell'utilizzo.
type Planet = {
  id: string;
  name: string;
};

type Planets = Planet[]; //la variabile tipizzata a planets deve essere un Array che rispetti la tipizzazione di Planet. (id:number, name:string)

let planets: Planets = [
  {
    id: "1",
    name: "Earth",
  },
  {
    id: "2",
    name: "Mars",
  },
];

app.get("/api/planets", (req, res) => {
  res.status(200).json(planets); //passiamo il json creato nella risposta dell'API
  //.send metodo che: imposta automaticamente l'header Content-Type appropriato alla richiesta.
  //alternativa: .json (che definisci tu che il content/type sarà application/json).
});

//METODO GET : RICHIESTA.
app.get("/api/planets/:id", (req, res) => {
  //:id è un parametro dinamico che cattura il valore numerico nell'URL.
  const { id } = req.params; // Estrae il valore del parametro id dall'URL.

  //Cerca nell'array planets il pianeta il cui id corrisponde al id estratto dall'URL.
  const planetID = planets.find((planet) => planet.id === id);

  // Gestione dell'errore: se il pianeta non viene trovato
  // Se planetID è undefined (cioè find non ha trovato nulla), inviamo un errore 500
  if (!planetID) {
    console.log(`Errore: Pianeta con ID ${id} non trovato.`);

    // Invia una risposta 500 di errore al client
    return res
      .status(500)
      .send({ message: `Errore: Pianeta con ID ${id} non trovato.` });
  }

  // Se il pianeta viene trovato, inviamo una risposta 200 con i dati del pianeta
  res.status(200).json(planetID);
});

//METODO POST: INVIARE (AGGIUNGERE UN NUOVO PIANETA)
app.post("/api/planets", (req, res) => {
  //REQ: oggetto con tutte le informazioni sulla richiesta HTTP in arrivo, inclusi i dati inviati dal client (ad esempio, il corpo della richiesta), gli header, i parametri dell'URL, ecc.
  const { id, name } = req.body; //RES: oggetto che viene utilizzato per costruire e inviare la risposta HTTP al client.
  const newPlanet = { id, name };
  planets = [...planets, newPlanet];

  res
    .status(201)
    .json({
      msg: `Nuovo pianeta creato: id:${newPlanet.id}, name:${newPlanet.name} `,
    });
  console.log(newPlanet, planets);
});


//METODO PUT: AGGIORNARE LE INFORMAZIONI
app.put("/api/planets/:id", (req, res) => { 
  const { id } = req.params; // Estrazione dell'ID dal parametro URL
  const { name } = req.body; // Estrazione del nuovo nome dal corpo della richiesta

  // Variabile per tracciare se un pianeta è stato trovato e aggiornato
  let found = false;

  //Aggiornamento dell'array 'planets'
  planets = planets.map((planet) => {
    if (planet.id === id) { // Se l'ID del pianeta corrente corrisponde all'ID richiesto
      found = true; // Imposta 'found' a true
      return { ...planet, name }; //  E Restituisce un nuovo oggetto pianeta con il nome aggiornato
    }
    return planet; // Se l'ID non corrisponde, restituisce il pianeta originale senza modifiche
  });

  // Gestione del caso in cui il pianeta non venga trovato
  if (!found) {
    return res.status(404).json({ msg: `Pianeta con ID ${id} non trovato.` });
  }

  console.log(planets);

  res.status(200).json({ msg: `Il pianeta con ID ${id} è stato aggiornato con il nome: ${name}` });
});

//METODO DELETE: eliminazione di un elemento
app.delete("/api/planets/:id", (req, res) =>{
  const {id} = req.params
  planets = planets.filter(p => p.id !== (id))
  
  res.status(200).json({msg: `il pianeta con id ${id} è stato eliminato. `})

  console.log(planets)
})

app.listen(port, () => {
  console.log(`listering on port http://localhost:${port}`);
});
