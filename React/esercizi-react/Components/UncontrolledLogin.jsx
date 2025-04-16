//Crea un componente non controllato chiamato UncontrolledLogin,
// contenente tre input: un input per il nome utente, uno per la password e una casella di controllo "Ricorda".
// Aggiungi un pulsante "Accedi" al componente Login.

export function UncontrolledLogin() {
  const onLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const checkbox = form.elements.checkbox.checked;

    const data = {
      username,
      password,
      checkbox,
    };

    console.log("Dati dal submit (DOM):", data);
  };

  return (
    <div>
      <form onSubmit={onLogin}>
        <h1>Uncontrolled form</h1>
        <input
          type="text"
          name="username"
          placeholder="inserisci il tuo nome"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="inserisci la tua pw"
          required
        />
        <label htmlFor="checkbox">Ricordami</label>
        <input type="checkbox" name="checkbox" /> <br />
        <button type="submit" onSubmit={onLogin}>
          Accedi
        </button>
      </form>
    </div>
  );
}
