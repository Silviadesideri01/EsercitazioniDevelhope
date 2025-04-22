import "./App.css";
import { Color } from "../Components/Color";
import { Colors } from "../Components/Colors";
import { TodoList } from "../Components/ToDoList";

function App() {
  return (
    <>
      <Color color={{ id: 1, name: "Red" }} />

      <Colors
        colorList={[
          { id: 2, name: "Red" },
          { id: 3, name: "Blue" },
          { id: 4, name: "Yellow" },
          { id: 5, name: "Pink" },
          { id: 6, name: "Green" },
          { id: 7, name: "Violet" },
        ]}
      />
      <TodoList />
    </>
  );
}

export default App;
