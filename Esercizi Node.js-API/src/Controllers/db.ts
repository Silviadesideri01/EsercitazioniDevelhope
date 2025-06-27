import pgPromise from "pg-promise";
// pg-promise è una popolare libreria JavaScript per interagire con i database PostgreSQL in Node.js.


//CONNESSIONE TRA SERVER HTTP&DATABASE
const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");
// - "postgres://" = protocollo e il tipo di database.
// - "postgres:postgres@"= credenziali di accesso (username:password).
// - "localhost:5432" = l'indirizzo del server del database. 5432 = Porta di ascolto.
// - "/postgres" : È il nome del database a cui ci si vuole connettere(il mio)


// serverPlanets.js (o il tuo file di setup del DB)
const setupDB = async () => {
  try {
    await db.none(`
      CREATE TABLE IF NOT EXISTS planets ( 
        id SERIAL NOT NULL PRIMARY KEY, 
        name TEXT NOT NULL,
        imagePlanet TEXT
      );
    `);
    console.log("Tabella 'planets' creata o già esistente."); // Messaggio più chiaro

    // Dopo la creazione, puoi inserire dati iniziali se la tabella è nuova
    // O semplicemente selezionare i dati esistenti
    const planets = await db.manyOrNone(`SELECT * FROM planets;`) // Usare manyOrNone è più sicuro se la tabella può essere vuota
    console.log("Pianeti nel Database:", planets);
    

  } catch (error) {
    console.error("Errore irreversibile nel setup del database:", error); // Questo errore ora indica un problema serio, non solo che esiste già
  }
};
setupDB()
export {db}