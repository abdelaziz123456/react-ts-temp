import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Dummy } from "Utiles";
import Hello from "Store/hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Dummy />
          <Hello />
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
