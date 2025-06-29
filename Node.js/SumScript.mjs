// server.mjs
import { createServer } from "node:http";

const somma = (a, b) => a + b;

const server = createServer((req, res) => { //req (request - richiesta): Un oggetto che contiene tutte le informazioni sulla richiesta HTTP in arrivo (URL, header, metodo, ecc.).
  const result = somma(5, 6); //res (response - risposta): Un oggetto che ti permette di costruire e inviare la risposta HTTP al client che ha fatto la richiesta.
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(`La somma di 5 e 6 è: ${result}`);
});
//createServer accetta come argomento una funzione di callback. 
//Questa funzione viene eseguita ogni volta che il server riceve una richiesta HTTP.

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
