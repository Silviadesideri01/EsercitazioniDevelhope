import express from "express" // importa il modulo express.  è un framework per Node.js che semplifica la creazione di applicazioni web e API. 
import "express-async-errors"
//importa un modulo aggiuntivo "middleware" (che si interpone tra una richiesta e una risposta) gestisce automaticamente gli errori nelle funzioni asincrone (quelle che usano async/await) all'interno delle rotte di Express, evitando che l'applicazione si blocchi in caso di eccezioni non catturate.
import morgan from "morgan" //Morgan è un logger di richieste HTTP, ogni volta che il tuo server riceve una richiesta, Morgan registrerà informazioni su quella richiesta nella console (ES. il metodo HTTP, l'URL, il codice di stato della risposta, il tempo di risposta, ecc.).
const app = express()
const port = 3000


app.use(morgan("dev")) //configurazione di morgan in "dev", mostra LOG precisi e dettagliati.

//parte centrale che definisce una rotta HTTP METODO GET.
app.get('/', (reqest, response) => { //funzione di callback che viene eseguita ogni volta che una richiesta GET arriva all'URL /.
  //REQUEST oggetto che contiene tutte le informazioni sulla richiesta HTTP in arrivo.
  //RESPONSE oggetto che usi per costruire e inviare la risposta HTTP al client.

  response.send('Hello World!') // invia la stringa "Hello World!" come corpo della risposta HTTP al client (il tuo browser, ad esempio).
  response.status(200);// imposta il codice di stato HTTP della risposta a 200. Il codice 200 OK è il codice standard che indica che la richiesta è andata a buon fine.
})

//avvia il server e lo mette in ascolto sulla porta specificata (port, che è 3000)
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost${port}`)
  // Stampa un messaggio nella console che ti informa che il server è in esecuzione e su quale indirizzo puoi accedervi.
})
