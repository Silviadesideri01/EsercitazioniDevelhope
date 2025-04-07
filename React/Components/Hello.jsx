import Message from "./Message"; //esecuzione del rendering all'interno del componente Hello
function Hello() {
  return (
    <div>
      <h2>Hello World!</h2>
      <Message /> {/*Chiamata del componente per visualizzarlo in pagina*/}
    </div>
  );
}
export default Hello;
//esportazione del componente figlio per poterlo utilizzare e importare nell'App.jsx (componente padre)
