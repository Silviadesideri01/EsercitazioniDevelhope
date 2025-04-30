/*Crea un Containercomponente che esegua il rendering dei suoi elementi childern all'interno di un div.

Usate un div con uno sfondo bianco e un bordo rosso.

Aggiungere un title come props che conterrà il valore del titolo da visualizzare prima degli elementi figlio.

Rendi comprimibile il contenitore, in modo che quando si clicca sul titolo gli elementi secondari vengano nascosti o nuovamente mostrati.
Utilizzare useState per tenere traccia dello stato compresso.*/


import { useState } from 'react';

const Container = ({ title, children }) => { //children: qualsiasi contenuto JSX passato all'interno del componente quando lo uso
  
    // Stato per determinare se il contenuto è nascosto
  const [hidden, setHidden] = useState(true);
  //hidden: booleano che indica se il contenuto è visibile o nascosto inizializzato a true.


  // Gestione del click sul titolo
  const showContent = () => {
    setHidden(!hidden); 
    //Quando l'utente clicca sull’h2, questa funzione inverte lo stato (true diventa false e viceversa) e mostra o meno il contenuto children
    
  };

  return (
    <div className="div">
      <h2
        className="title"
        onClick={showContent}
      >
        {title}
      </h2>

      {/* Contenuto figlio visibile solo se non nascosto */}
      {!hidden && <div>{children}</div>}
    </div>
  );
};

export default Container;
