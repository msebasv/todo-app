import React from "react";

import Navbar from "./components/Navbar";
import CardTodoList from "./components/CardTodoList";

import { motion } from "framer-motion";

import "./App.scss";

const App = () => {
  return (
    <div className="container-app">
      <header>
        <Navbar />
      </header>
      <main>
        <motion.h2
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: "0.2" }}
        >
          Make your todo list
        </motion.h2>
        <CardTodoList />
      </main>
      <footer>
        <p>Made todo list with ❤️</p>
      </footer>
    </div>
  );
};

export default App;
