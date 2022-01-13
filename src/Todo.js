import { useReducer, useState } from "react";
const todos = [
  { id: 1, text: "lavar los platos" },
  { id: 2, text: "sentarme a coser" }
];
function todolist(state, action) {
  const todofunc = {
    delete: state.filter((todo) => todo.id !== action.id),
    update: state.map((todo) => {
      if (todo.id === action.id) {
        return { id: todo.id, text: action.text };
      }
      return todo;
    }),
    add: [...state, { id: new Date(), text: action.text }]
  };

  return todofunc[action.type] ?? "error";
}
export default function Todo() {
  const [todo, dispatch] = useReducer(todolist, todos);
  const [input, setInput] = useState("");

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <ul className="todo">
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button
          onClick={() => {
            dispatch({ type: "add", text: input });
            setInput("");
          }}
        >
          Add
        </button>
        {todo.map((todos) => (
          <li key={todos.id}>
            {todos.text}
            <button onClick={() => dispatch({ type: "delete", id: todos.id })}>
              delete
            </button>
            <button
              onClick={() =>
                dispatch({ type: "update", id: todos.id, text: input })
              }
            >
              update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
