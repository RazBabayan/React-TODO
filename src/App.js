import { useState } from "react";
import "./App.css";
import AddBlock from "./components/AddBlock";
import TodoList from "./components/TodoList";

function App() {
  const [items, setItems] = useState([]);
  const handleClick = (value) => {
    setItems([...items, { value, isChecked: false, id: new Date().valueOf() }]);
  };

  const handleCheck = (id) => {
    const updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((el) => el.id === id);
    updatedItems[itemIndex].isChecked = true;
    setItems(updatedItems);
  };
  const handleDelete = (id) => {
    setItems([...items.filter(element => element.id !== id )])
  }

  return (
    <div className="App">
      <AddBlock handleClick={handleClick} />

      {items.length ? (
        <TodoList items={items} onCheck={handleCheck}  onDelete={handleDelete }/>
      ) : (
        <div className="text-contain">
          <p className="first-text">
            Your life is a blank page. You write on it.
          </p>

          <p className="second-text">So start by adding your tasks here.</p>
        </div>
      )}
    </div>
  );
}

export default App;
