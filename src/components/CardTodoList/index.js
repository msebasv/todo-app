import React, { useState } from "react";

import TodoForm from "../TodoForm";
import Todo from "../Todo";

import { AnimatePresence, Reorder } from "framer-motion";

import data from "../../data.json";

import "./index.scss";

const CardTodoList = () => {
  const [todoList, setTodoList] = useState(data);

  const newTodoList = (todo) => {
    let id = 1;
    if (todoList.length > 0) {
      id = todoList.length + 1;
    }
    let newTodo = { id: id, task: todo };
    setTodoList([newTodo, ...todoList]);
  };

  const updateTodoList = (id, todo) => {
    const todoListUpdate = todoList.map((todoElement, index) => {
      if (todoElement.id === id) {
        todoElement = { id: todoElement.id, task: todo };
      }
      return todoElement;
    });

    setTodoList(todoListUpdate);
  };

  const deleteTodoList = (id) => {
    setTodoList([...todoList].filter((todo) => todo.id !== id));
  };

  console.log(todoList.length);
  return (
    <div className="container-card">
      <TodoForm newTodoList={newTodoList} />
      <Reorder.Group axis="y" values={todoList} onReorder={setTodoList}>
        {todoList.map((todo) => (
          <Reorder.Item key={todo.id} value={todo}>
            <Todo
              id={todo.id}
              task={todo.task}
              edit={updateTodoList}
              deleteTodoList={deleteTodoList}
            />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default CardTodoList;
