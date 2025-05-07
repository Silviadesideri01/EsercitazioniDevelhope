import { Link } from "react-router-dom";

export function Welcome({name="Utente"}){
    return(
        <>
        <h1>Benvenuto, {name}</h1>
        <Link to="/Home">Home</Link> <br />
        <Link to="/Contacts">Contatti</Link> <br />
        <Link to="/notfound">Ritenta</Link> <br />
        <Link to="/users">UsersGithub</Link>
        </>

    )
   
}