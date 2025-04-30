import { useState, useEffect } from "react";
import ContactList from "./ContactList";

const ContactForm = () => {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });
  //contacts: array di oggetti { name, phone }
  //Appena si carica il componente, proviamo a leggere contacts da localStorage.
  //Se esistono contatti salvati li usiamo, altrimenti partiamo con un array vuoto [].

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  //name e phone gestiscono i valori degli <input>.
  //Sono controllati: il valore viene aggiornato a ogni digitazione.

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  //Ogni volta che contacts cambia, salviamo l'array aggiornato su localStorage.
  //Così, anche se aggiorni o chiudi il browser, i contatti rimangono salvati.

  const handleSubmit = (e) => { //Quando premi "Aggiungi":
    e.preventDefault();
    if (!name || !phone) return; //Se name o phone sono vuoti (!name || !phone) non facciamo nulla
    setContacts((prev) => [...prev, { name, phone }]); //Altrimenti aggiungiamo il nuovo contatto all'array contacts
    setName("");
    setPhone("");
  };
  
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Telefono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Aggiungi</button>
      </form>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactForm;
