
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([]);        // State to hold the list of todos
  const [inputValue, setInputValue] = useState("");  // State to hold the input field value

  // Handler to add a new todo
  const addTodo = () => {
    if (inputValue.trim() !== "") {  // Ensuring the input is not empty
      setTodos([...todos, inputValue]);
      setInputValue("");  // Clear input after adding
    }
  };

  // Handler to delete a todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        // placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
