import React from "react"
import './App.css';
import Counter from "./Counter";
import Todo from "./Todo";

function App() {
  return (
      <div className = 'app'>
          <Counter/>
          <Todo/>
      </div>
  );
}

export default App;
