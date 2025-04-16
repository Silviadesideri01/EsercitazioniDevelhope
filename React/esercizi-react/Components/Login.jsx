import { useState } from "react";

export function Login({ onLogin }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    checkbox: "",
  });

  const hadleInputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const reset = () => {
    setData({ username: "", password: "", checkbox: false });
  };
  //gestisce l'invio del form
  const handleLogin = (event) => {
    event.preventDefault(); // blocca il comportamento di default del form
    onLogin(data); // passa i dati al componente genitore
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          required
          onChange={hadleInputChange}
          value={data.username}
        />
        <input
          type="password"
          name="password"
          required
          onChange={hadleInputChange}
          value={data.password}
        />
        <label htmlFor="checkbox">Ricordami</label>
        <input
          type="checkbox"
          name="checkbox"
          onChange={hadleInputChange}
          checked={data.checkbox}
        />{" "}
        <br />
        <button
          type="submit"
          disabled={data.password && data.username ? false : true}
        >
          Login
        </button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </form>
    </div>
  );
}
