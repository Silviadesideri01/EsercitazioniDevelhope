/*L' newsEventoggetto emette continuamente tre eventi diversi: newsEvent, breakingNews e error

Associare listener di eventi per ciascun evento e disconnettere i relativi dati.*/

const { EventEmitter } = require("node:events");
//EventEmitter serve per la gestione degli eventi.
//Tutti gli eventi sono custom, sono generati in autonomia.

function createNewsFeed() {
  const emitter = new EventEmitter(); //genera eventi, in questo caso gli eventi sono: "newsEvent", "breackingNews", "Error".


  /*con il metodo .on diciamo : Siamo in ascolto dell'evento!, accetta 2 parametri:
  "nome dell'evento da ascoltare" e la funzione callback da eseguire ogni volta che l'evento accade.*/
  emitter.on("newsEvent", (data) => {
    console.log(data); //in questo caso, ascoltiamo l'evento, quando viene chiamato, stampiamo i relativi dati.
  });

  emitter.on("breakingNews", (data) => {
    console.log(data); //ascoltiamo l'evento "breackingNews" e stampiamo i relativi dati.
  });

  emitter.on("error", (data) => {
    console.log(data);
  });
  

  setInterval(() => {
    //Il metodo .emit() serve a scatenare (o "emettere") un evento specifico.
    //Il primo argomento è sempre una stringa che rappresenta il nome dell'evento che vuoi emetere (es. "newsEvent", "breakingNews", "error").
    //Gli argomenti successivi sono i dati che vuoi passare a tutti i listener che sono in ascolto per quel particolare nomeEvento. Questi dati verranno ricevuti come argomenti dalla funzione di callback del listener.
    emitter.emit("newsEvent", "News: A thing happened in a place.");
  }, 1000);

  setInterval(() => {
    emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
  }, 4000);

  setTimeout(() => {
    emitter.emit("error", new Error("News feed connection error"));
  }, 5000);

  return emitter;
}

const newsFeed = createNewsFeed();
