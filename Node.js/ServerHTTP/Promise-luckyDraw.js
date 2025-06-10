/*La funzione luckyDraw restituisce una promessa. 

Crea una catena di promesse in cui la funzione viene chiamata per ciascuno dei giocatori: Joe, Caroline e Sabrina.

Disconnettere il valore risolto per ogni promessa e gestire eventuali rifiuti di promessa nella catena.*/

console.log("The winner is...")
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
      console.log(data);
      return luckyDraw("Caroline"); // Passa alla prossima promessa
    })
    .then((data) => {
      console.log(data);
      return luckyDraw("Sabrina"); // Passa all'ultima promessa
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error.message); // Cattura qualsiasi errore nella catena
    });