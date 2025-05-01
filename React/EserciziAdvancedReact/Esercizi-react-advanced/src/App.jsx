import "./App.css";
import { TodoList } from "../Components/ToDoList";
import { ClickCounter } from "../Components/ClickCounter";
import { NameList } from "../Components/NameList";
import { Form } from "../Components/Form";
import { FetchList } from "../Components/FetchList";
import { Timer } from "../Components/Timer";
import ContactForm from "../Components/ContactForm";
import Container from "../Components/Container";
import { createContext, useState } from "react";
import Hello from "../Components/Hello";

export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState("ita");

  return (
    <>
      <LanguageContext.Provider value={language}>
        <Hello/>
        <div>
          {" "}
          <select
            onChange={(event) => {
              setLanguage(event.target.value);
            }}
            name="language"
            id="language"
          >
            <option value="ita">Italiano</option>
            <option value="eng">Inglese</option>
            <option value="fr">Francese</option>
          </select>
        </div>
        <TodoList />
        <ClickCounter />
        <NameList names={["Sara", "Lucia", "Lisa", "Mario", "Edorardo"]} />
        <Form />
        <FetchList />
        <Timer />
        <ContactForm />
        <Container title="Mostra contenuto">
          <p>Questo contenuto è visibile o non, cliccando sul titolo.</p>
          <img
            style={{ width: "300px" }}
            src="https://plus.unsplash.com/premium_photo-1669725687150-15c603ac6a73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="tigre"
          />
        </Container>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
