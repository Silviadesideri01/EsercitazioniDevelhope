//Crea un componente MouseClicker che contenga un pulsante con un attributo name impostato sulla stringa "one".
//Collegare un gestore eventi al pulsante che, quando cliccato, visualizza l'attributo name sulla console leggendo la proprietà event.target.name.
function handleButtonClick(event) {
  console.log(event.target.name); //target.name visualizza l'attributo name del bottone "two\one"
  console.log("target", event.target); //visualizza l’elemento reale su cui è avvenuto l’evento! l'elemento stesso che ha scatenato l’evento.(l'immagine o il bottone)
  console.log("currentTarget", event.currentTarget); //visualizza l’elemento su cui è stato agganciato il listener, quindi normalmente il componente React a cui hai assegnato l’evento,
}

export function MouseClicker() {
  return (
    <div>
      <button name="One" onClick={handleButtonClick}>
        One button
      </button>
      <button name="Two" onClick={handleButtonClick}>
        Two button{" "}
        <img
          src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img floreale"
          height={30}
          width={30}
        />
      </button>
    </div>
  );
}
//Come è possibile evitare che l'attributo name del pulsante venga visualizzato sulla console quando si fa clic sull'immagine?
//Per evitare che l'attributo name del pulsante si visualizzi in colsole quando clicchiamo sull'immagine, basta stampare semplicemente event.target,
//in questo modo visualizziamo solo l'elemento effettivo sul quale abbiamo cliccato e che ha scatenato l'evento, mentre se utilizziamo event.currentTarget
//È l’elemento su cui è stato agganciato il listener, quindi normalmente il componente React a cui hai assegnato l’evento, per questo, visualizziamo in console
//il bottone e non l'immagine stessa.
