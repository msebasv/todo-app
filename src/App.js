import React from "react";

import CardTodoList from "./components/CardTodoList";

import Navbar from "./components/Navbar";

import "./App.scss";

const App = () => {
  return (
    <div className="container-app">
      <header>
        <Navbar />
      </header>
      <main>
        <h2>Make your todo list</h2>
        <CardTodoList />
      </main>
      <footer>
        <p>Made todo list with ❤️</p>
      </footer>
    </div>
  );
};

export default App;
