import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/* 1.Puoi usare il componente Hello più di una volta nel componente App? 
1. Si, posso utilizzare il componente Hello, nel componente padre (App) infinite volte, cambiando anche il valore di ciò che contiene

2.Cosa succede se lo fai? 
2. Se andassi a richiamare più di una volta il componente Hello all'interno di app, in questo caso, in pagina vedrò stampato "Hello world",
tante volte quante le ripetizioni del componente che contiene appunto il messaggio.

es: <Hello/>  Hello world!
    <Hello/>  Hello world!   INPUT
    <Hello/>  Hello world!
    <Hello/>  Hello world!
    


3.Puoi eseguire il rendering del componente Message direttamente all'interno del componente App? 
Cosa succede se lo fai?
3.Certo, posso eseguire il rendering direttamente nel componente padre, senza passare da Hello(facendo diventare Message FIGLIO di hello,che è figlio di App.)
Posso semplicemente andare a importare il componente Message in App (import Message from....) e poi andarlo a richiamare dove preferisco
l'importante è che sia Message che Hello, siano racchiusi da un div padre, dato che il return di React accetta più elementi, ma ne figura solamente uno.
*/
