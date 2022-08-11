import React, { useState } from "react";

import TodoForm from "../TodoForm";
import Todo from "../Todo";

import "./index.scss";

const CardTodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const newTodoList = (todo) => {
    setTodoList([todo, ...todoList]);
  };

  const updateTodoList = (id, todo) => {
    const todoListUpdate = todoList.map((todoElement, index) => {
      if (index === id) {
        todoElement = todo;
      }
      return todoElement;
    });

    setTodoList(todoListUpdate);
  };

  const deleteTodoList = (id) => {
    const todoListFilter = todoList.filter((todo, index) => index !== id);
    setTodoList(todoListFilter);
  };
  return (
    <div className="container-card">
      <TodoForm newTodoList={newTodoList} />
      {todoList.map((todo, index) => (
        <Todo
          key={index}
          id={index}
          todo={todo}
          edit={updateTodoList}
          deleteTodoList={deleteTodoList}
        />
      ))}
    </div>
  );
};

export default CardTodoList;
