import { useReducer } from "react";
const valorInicial = 0;
const TYPE_COUNTER = {
  increase: "increase",
  decrease: "decrease",
  reset: "reset"
};
function reducer(state, action) {
  const counter = {
    increase: state + 1,
    decrease: state - 1,
    reset: (state = valorInicial)
  };

  return counter[action.type] ?? "error";
}
export default function Counter() {
  const [counter, dispatch] = useReducer(reducer, valorInicial);
  return (
    <div className="counter">
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button className="btn" onClick={() => dispatch({ type: "increase" })}>
        increase
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: TYPE_COUNTER["decrease"] })}
      >
        decrease
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: TYPE_COUNTER["reset"] })}
      >
        reset
      </button>
    </div>
  );
}
