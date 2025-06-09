/*Il nostro server HTTP ora invia un corpo di risposta JSON.

Cambia la posizione nella risposta a "Marte".
Esegui il server ed effettua una richiesta con curl utilizzando il flag --verbose.
Qual è il valore dell'intestazione di risposta Content-Length?
Dovrebbe esserci un unico script che:

Importa il modulo http core di Node.js (o con node:http).
Crea un server HTTP con il metodo http.createServer.
Imposta l'intestazione della risposta: Content-Type: application/json
Invia il corpo della risposta JSON: { location: "Mars" }
Il valore dell'intestazione di risposta Content-Length è 19.*/

const createServer = require("node:http").createServer;

const serverJson = createServer((request, response) => {
  response.statusCode = 200;

  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  response.setHeader("Content-Type", "application/json");
  response.setHeader("Content-Length", jsonResponseBody.length);

  response.end(jsonResponseBody);
});

serverJson.listen(3000, () => {
  console.log("Listening http://localhost:3000");
});
