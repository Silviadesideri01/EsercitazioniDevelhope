/*Crea un componente GithubUserList che, recuperando questo URL API, https://api.github.com/users ,
 mostri un elenco di link di nomi utente Github.*/

 import  { useEffect, useState } from 'react';
 import { Link, useLocation } from 'react-router-dom';
 
 const GithubUserList = () => {
   const [users, setUsers] = useState([]);
   const location = useLocation(); // ci serve per sapere se siamo su "/users"
 
   useEffect(() => {
     fetch('https://api.github.com/users')
       .then((res) => res.json())
       .then((data) => setUsers(data));
   }, []);
 
   return (
     <div style={{ padding: '20px' }}>
       <h2>Utenti GitHub</h2>
       <ul>
         {users.map((user) => (
           <li key={user.login}>
             <Link to={`/users/${user.login}`}>{user.login}</Link>
           </li>
         ))}
       </ul>
 
       {location.pathname === '/users' && (
         <p style={{ marginTop: '20px' }}>Aggiungi un utente e selezionalo</p>
       )}
     </div>
   );
 };
 
 export default GithubUserList;
 