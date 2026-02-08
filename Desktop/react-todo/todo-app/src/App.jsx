import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function removeitem(removedindex) {
    setTodos(todos.filter((_, index) => index !== removedindex));
  };



  return (
    <div className="app">
      <div className="input">
        <input
          type="text"
          onChange={(event) => setTodo(event.target.value)}
          placeholder="todoo..."
          value={todo}
        />
        <button onClick={() => setTodos([...todos, todo])}>addTodos</button>
      </div>

      <div className="display">
        <ul>
          {todos.map((item, index) => {
            return (
              <li key={index} className="li">
                {item}{" "}
                <span className="span">
                  <button onClick={() => removeitem(index)} className="dltbtn">
                    delete
                  </button>{" "}
                  <input type="checkbox" checked="item.done" className="checkbox"  />{" "}
                </span>{" "}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="completeditems">

      </div>

    </div>
  );
}

export default App;
