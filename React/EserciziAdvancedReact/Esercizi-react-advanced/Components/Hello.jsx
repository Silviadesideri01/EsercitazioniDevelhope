import { useContext } from "react";
import { LanguageContext } from "../src/App";

const Hello = () => {
  const language = useContext(LanguageContext);
  return (
    <h1>
      {language === "ita" ? "Ciao!" : language === "fr" ? "Salut" : "Hello"}
    </h1>
  );
};

export default Hello;
