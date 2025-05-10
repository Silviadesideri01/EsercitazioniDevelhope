import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { Counter } from "./components/Counter";
import { ShowGithubUser } from "./components/ShowGithubUser";
import Home from "./PagesComponents/Home";
import Contatti from "./PagesComponents/Contatti";
import GithubUserList from "./components/GithubUsersList";

function App() {
  return (
    <>
      {/*Modifica il componente App che racchiude un componente Routes. */}
      <Routes>
        {/*aggiungi una Route al percorso / che esegue il rendering del componente Welcome, passandogli una proprietà name */}
        <Route path="/" element={<Welcome name="Silvia" />} />


        {/*Aggiungi una nuova Route al percorso /counter che esegue il rendering del componente Counter */}
        <Route path="/counter" element={<Counter />} />


        {/*Aggiungere una nuova Route al percorso users/:username che esegue il rendering di un componente ShowGithubUser 
        che riceve il nome utente come parametro di percorso ed esegue il rendering di un componente GithubUser passandogli il nome utente ricevuto. */}
        {/* <Route path="/users/:username" element={<ShowGithubUser />} /> */}


        {/*Aggiungi tre link nel componente App principale e usali per navigare verso tutti e tre i percorsi.*/}
        <Route path="/Home" element={<Home />} />
        <Route path="/Contacts" element={<Contatti />} />
        

        
        <Route path="/users" element={<GithubUserList />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="users" element={<useGithubUser/>} />

        {/*Aggiungi un percorso Non trovato che viene visualizzato quando un utente naviga verso un percorso che non esiste. */}
        <Route
          path="*"
          element={
            <p>
              Link non trovato torna alla <Link to="/Home">Home</Link>
            </p>
          }
        />
      </Routes>
    </>
  );
}

export default App;
