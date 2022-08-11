import React, { useState } from "react";

import { AiFillEdit, AiTwotoneDelete, AiFillSave } from "react-icons/ai";

import { motion } from "framer-motion";

import "./index.scss";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Todo = (props) => {
  const [editTodo, setEditTodo] = useState(false);
  const [editTextTodo, setEditTextTodo] = useState("");

  const handleEdit = () => {
    setEditTodo(true);
  };

  const handleChangeEdit = (event) => {
    setEditTextTodo(event.target.value);
  };

  const handleSaveTodoEdit = (event) => {
    event.preventDefault();
    props.edit(props.id, editTextTodo);
    setEditTextTodo("");
    setEditTodo(false);
  };

  const handleDelete = () => {
    props.deleteTodoList(props.id);
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      layoutId={props.id}
    >
      {!editTodo ? (
        <div className="card-todo">
          <h4>{props.task}</h4>
          <div className="container-buttons">
            <button className="edit-button" onClick={handleEdit}>
              <AiFillEdit />
            </button>
            <button onClick={handleDelete}>
              <AiTwotoneDelete />
            </button>
          </div>
        </div>
      ) : (
        <form className="form-todo" onSubmit={handleSaveTodoEdit}>
          <input value={editTextTodo} onChange={handleChangeEdit} />
          <button>
            <AiFillSave />
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default Todo;
