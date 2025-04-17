//Crea un componente non controllato chiamato UncontrolledLogin,
// contenente tre input: un input per il nome utente, uno per la password e una casella di controllo "Ricorda".
// Aggiungi un pulsante "Accedi" al componente Login.

export const UncontrolledLogin = ({ onLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const nomeUtente = form.nomeUtente.value;
    const password = form.password.value;
    const checkbox = form.checkbox.checked;

    // Esegui la funzione passata via prop con i dati
    onLogin({ nomeUtente, password, checkbox });
  };

  const loginWithFormData = (event) => {
    event.preventDefault();

    const form = event.target.form; // otteniamo il form associato al bottone
    const formData = new FormData(form);

    const nomeUtente = formData.get("nomeUtente");
    const password = formData.get("password");
    const checkbox = formData.get("checkbox") === "on";

    console.log("Dati da FormData:", { nomeUtente, password, checkbox });
  };
  return (
    <form onSubmit={handleSubmit}>
        <h1>Uncontrolled form</h1>
      <input type="text" name="nomeUtente" placeholder="Nome utente" />
      <input type="password" name="password" placeholder="Password" />
      <label>
        <input type="checkbox" name="checkbox" />
        Ricorda
      </label>
      <br />
      <button type="submit">Accedi</button>
      <button type="button" onClick={loginWithFormData}>
        Accedi con FormData
      </button>
    </form>
  );
};

