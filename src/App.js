import "./styles.css";
import { useReducer } from "react";
import Counter from "./Counter";
import Todo from "./Todo";
export default function App() {
  return (
    <div className="App">
      <Counter />
      <div className="line" />
      <Todo />
      <div className="line" />
    </div>
  );
}
