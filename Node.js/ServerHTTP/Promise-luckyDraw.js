/*La funzione luckyDraw restituisce una promessa. 

Crea una catena di promesse in cui la funzione viene chiamata per ciascuno dei giocatori: Joe, Caroline e Sabrina.

Disconnettere il valore risolto per ogni promessa e gestire eventuali rifiuti di promessa nella catena.*/

//console.log("The winner is...")
function luckyDraw(player) {
    
    return new Promise((resolve, reject) => {
        
      setTimeout(() => {
        const win = Boolean(Math.round(Math.random()));
  
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      }, 1000); 
    });
  }
  
  luckyDraw("Joe")
    .then((data) => {
      //console.log(data);
      return luckyDraw("Caroline"); // Passa alla prossima promessa
    })
    .then((data) => {
      //console.log(data);
      return luckyDraw("Sabrina"); // Passa all'ultima promessa
    })
    .then((data) => {
      //console.log(data);
    })
    .catch((error) => {
      //console.error(error.message); // Cattura qualsiasi errore nella catena
    });

    //MODIFICALO UTILIZZANDO ASYNC/AWAIT..
    function luckyDraw(player) {
        return new Promise((resolve, reject) => {
          const win = Boolean(Math.round(Math.random()));
          setTimeout(() => { 
            if (win) {
              resolve(`${player} won a prize in the draw!`);
            } else {
              reject(new Error(`${player} lost the draw.`));
            }
          }, 1000); 
        });
      }
      
      async function getResults() {
        console.log("Starting the lucky draw for Tina, Jorge, and Julien...");
      
        try {
          // Creiamo un array di Promesse.
          // Ognuna di queste promesse inizierà a essere eseguita quasi contemporaneamente.
          const playerDrawPromises = [
            luckyDraw("Tina"),
            luckyDraw("Jorge"),
            luckyDraw("Julien")
          ];
      
          // Aspettiamo che TUTTE le promesse nell'array si risolvano.
          // Se anche UNA sola promessa si rifiuta, Promise.all si rifiuterà immediatamente.
          const results = await Promise.all(playerDrawPromises);
      
          // Se arriviamo qui, significa che tutte le estrazioni sono state vinte.
          // I risultati sono un array contenente i valori risolti in ordine.
          results.forEach(result => {
            console.log(result);
          });
      
        } catch (error) {
          // Questo blocco catch verrà eseguito se QUALSIASI delle luckyDraw si rifiuta.
          // L'errore conterrà il messaggio del PRIMO giocatore che ha perso.
          console.error(error.message);
        }
      
        console.log("All draws processed."); // Questo messaggio appare dopo che Promise.all ha finito
      }
      
      // Chiamiamo la funzione per avviare le estrazioni
      getResults();