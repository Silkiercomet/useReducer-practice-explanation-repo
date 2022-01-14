import "./styles.css";
import Counter from "./Counter";
import Todo from "./Todo";
import Cart from "./Cart";
export default function App() {
  return (
    <div className="App">
      <Counter />
      <div className="line" />
      <Todo />
      <div className="line" />
      <Cart />
    </div>
  );
}
