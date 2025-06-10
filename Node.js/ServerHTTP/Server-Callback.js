const writeFile = require("node:fs").writeFile; //importiamo writeFile da node

writeFile(
  "./file.txt",
  "Ciao, sono il contenuto del file che hai creato!",
  { encoding: "utf-8" },
  (error, result) => {
    if (error) {
      console.error(
        "si è verificato un errore nella creazione del file:",
        error
      );
      return;
    }

    console.log("file creato con successo!", result);
  }
);
