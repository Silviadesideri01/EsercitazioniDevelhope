/*Il nostro server HTTP invia un corpo di risposta HTML. 

Sostituisci il testo nell'HTML con il tuo messaggio. 

Esegui il server e usa il tuo browser web per testare le modifiche.

Importa il modulo http core di Node.js (o con node:http).
Crea un server HTTP con il metodo http.createServer.
Imposta il codice di stato della risposta su 200
Imposta l'intestazione della risposta: Content-Type: text/html
Invia un corpo di risposta HTML contenente un messaggio.
Fai in modo che il server ascolti la porta 3000*/

const createServer = require("node:http").createServer

const server = createServer((request, response)=>{
    console.log(` request received: ${request}`) 
    //request: oggetto che contiene tutte le informazioni relative alla richiesta HTTP in arrivo dal client (es. URL richiesto, metodi HTTP come GET/POST, intestazioni della richiesta, dati del corpo della richiesta).
    //response: oggetto che ti permette di costruire e inviare la risposta HTTP al client. Attraverso questo oggetto, puoi impostare il codice di stato, le intestazioni e il corpo della risposta.

    response.statusCode= 200; //risposta positiva

    response.setHeader("Content-Type", "text/html")
    //Content-Type è un'intestazione cruciale che indica al client (il browser) il tipo di media del contenuto del corpo della risposta.
    //"text/html": Questo è il valore dell'intestazione. Indica che il corpo della risposta sarà testo formattato come HTML. Questo è fondamentale perché il browser sappia come interpretare e renderizzare il contenuto che riceverà.
    response.end(`<html><body><h1>Sono un titolo del server </h1><body></html>`)
})

server.listen(3000, () => {
    console.log('Listening http://localhost:3000');
  });