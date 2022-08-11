import React, { useState } from "react";

import "./index.scss";

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const [validation, setValidation] = useState(true);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (todo.trim() !== "") {
      //trim elimina espacios
      props.newTodoList(todo);
      setTodo("");
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Create a new todo"
          value={todo}
          onChange={handleChange}
        />
        <button>+</button>
      </form>
      {!validation && <div>Add Todo first</div>}
    </div>
  );
};

export default TodoForm;
