import { useReducer } from "react";
//need to change the initial to an object
//with the avalaible content and the cart
//as separate dependencies
const initial = [
  { id: 1, content: "sweater", quantity: 3 },
  { id: 2, content: "dog food", quantity: 3 },
  { id: 3, content: "suit", quantity: 1 }
];
function func(cart, action) {
  function findElement(id) {
    return id !== action.payload;
  }
  function deleteQuantity(id) {
    return cart.find((item) => findElement(item.id));
  }

  const reducer = {
    addToCart: [...cart, action.payload],
    removeAll: cart.filter((item) => findElement(item.id))
  };
  console.log(deleteQuantity(action.payload).quantity);
  return reducer[action.type];
}

function Cart() {
  const [cart, dispatch] = useReducer(func, initial);

  return (
    <div>
      <h1>produtcs avalaibles</h1>
      <ul>
        {initial.map((item) => (
          <li key={item.id}>
            {item.content}
            <button
              onClick={() => dispatch({ type: "addToCart", payload: item })}
            >
              add to cart
            </button>
          </li>
        ))}
      </ul>
      <h1>cart preview</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.content}, amount: #{item["quantity"]}
            <button
              onClick={() => dispatch({ type: "removeAll", payload: item.id })}
            >
              remove all
            </button>
            <button
              onClick={() => dispatch({ type: "removeOne", payload: item.id })}
            >
              remove one
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cart;
