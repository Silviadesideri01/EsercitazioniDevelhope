import { useInput } from "../CustomHooks/UseInput";


export function CustomInput() {
  const { inputValue, handleInputChange, handleSubmit } = useInput({
    name:"",
    password:""
  });
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Inserisci il nome"
        onChange={handleInputChange}
        value={inputValue.name}
      />
      <input
        type="password"
        name="password"
        placeholder="Inserisci la pw"
        onChange={handleInputChange}
        value={inputValue.password}
      />
      <button type="submit" onClick={handleSubmit}>invio</button>
    </div>
  );
}
