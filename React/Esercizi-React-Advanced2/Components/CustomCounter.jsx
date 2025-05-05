import { UseCounter } from "../CustomHooks/UseCounter"; //importo il mio hook personalizzato
export function CustomCounter() {
  const { count, increment, decrement, reset } = UseCounter(0); //estraggo dal return(oggetto) le proprietà che mi interessa utilizzare

  return (
    //Assegno alla logica del componente le funzioni che già ho implementato nell'hook.
    <>
       <h1>the count is: {count}</h1>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
          onClick={increment}
        >
          Incrementa
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
          onClick={decrement}
        >
          Decrementa
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </>
  );
}
