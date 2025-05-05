/*Crea un nuovo componente GithubUsers con un modulo con un campo di testo e un pulsante di invio.
 Il campo di testo verrà utilizzato per cercare un utente specificandone il nome utente.
 Ogni utente verrà visualizzato in un elenco, in cui ogni elemento dell'elenco è un componente GithubUser.
 Questi componenti utilizzeranno il nome utente come prop.*/

 import { useState } from 'react';
 import { GithubUser } from './GithubUser';

const GithubUsers = () => {
  const [inputUsername, setInputUsername] = useState('');
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputUsername.trim()) return;
    setUsernames([...usernames, inputUsername.trim()]);
    setInputUsername('');
  };

  return (
    <div>
      <h2>Ricerca Utenti GitHub</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          placeholder="Inserisci username"
        />
        <button className="bg-blue-500  text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600" type="submit">Cerca</button>
      </form>

      <div>
        {usernames.map((username, index) => (
          <GithubUser key={index} username={username} />
        ))}
      </div>
    </div>
  );
};

export default GithubUsers;
