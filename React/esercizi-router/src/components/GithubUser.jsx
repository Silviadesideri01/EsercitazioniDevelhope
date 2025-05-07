import { useEffect, useState } from "react";



export function GithubUser({ username }) {

  

  const [data, setData] = useState(null); //usestate per salvare la risposta json e poterla utilizzare

  async function fetchGithubData(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setData(data); //assegno alla funzione usestate la risposta con i dati della risposta oggetto.
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchGithubData(username); //Ogni volta che username cambia, chiama la funzione fetchGithubData passando username come argomento
  }, [username]); //ogni volta che cambia la prop del nome utente si aggiornerà useffect (Update)

  return (
    <div>
      Name: {data?.name} <br />
      Login name: {data?.login} <br />
      Avatar utente: <br />{" "}
      <img src={data?.avatar_url} alt="avatar" width={100} />
      
    </div>
  );
}
