//Crea un componente InteractiveWelcome che esegue il rendering di un tag di input

import { useState } from "react";
import { WelcomeUser } from "./WelcomeUser";

export function InteractiveWelcome() {
  const [value, setValue] = useState();

  const onChangeinput = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Controlled form</h1>
      <WelcomeUser name={value} />
      <input
        type="text"
        name="name"
        required
        placeholder="name"
        onChange={onChangeinput}
        value={value}
      />
    </div>
  );
}
