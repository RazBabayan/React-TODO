import { useEffect, useState } from "react";
import "./App.css";
import AddBlock from "./components/AddBlock";
import TodoList from "./components/TodoList";

function App() {
  const [items, setItems] = useState([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("todoItems"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  const onItemsUpdate = (arr) => {
    localStorage.setItem("todoItems", JSON.stringify(arr));
    setItems(arr);
  };

  const handleClick = (value) => {
    onItemsUpdate([
      ...items,
      { value, isChecked: false, id: new Date().valueOf() },
    ]);
  };

  const handleCheck = (id) => {
    const updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((el) => el.id === id);
    updatedItems[itemIndex].isChecked = true;
    onItemsUpdate(updatedItems);
  };
  const handleDelete = (id) => {
    onItemsUpdate([...items.filter((element) => element.id !== id)]);
  };

  return (
    <div className="App">
      {items.length ? (
        <div className="hide-block">
          <input
            type="checkbox"
            className="hide-check"
            onChange={() => setCompleted(!completed)}
            checked={completed}
          />
          <span className="hide-text">Hide completed</span>
        </div>
      ) : <div className="hidden-div"> </div>}
      <AddBlock handleClick={handleClick} />

      {items.length ? (
        <TodoList
          items={items}
          onCheck={handleCheck}
          onDelete={handleDelete}
          filter={completed}
        />
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
