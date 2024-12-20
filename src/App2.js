// import logo from './logo.svg';
// import './App.css';
import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App2() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App2;

