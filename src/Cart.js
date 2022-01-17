import { useReducer } from "react";

const initial = {
  products: [
    { id: 1, content: "sweater", quantity: 3 },
    { id: 2, content: "dog food", quantity: 3 },
    { id: 3, content: "suit", quantity: 1 }
  ],
  cart: []
};
function func(state, action) {
  const reducer = {
    addToCart: () => {
      let cartContain = state.cart.find(
          (product) => product.id === action.payload.id
        ),
        newProduct = action.payload;

      return cartContain
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.id === newProduct.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            )
          }
        : { ...state, cart: [...state.cart, action.payload] };
    },
    removeAll: () => ({
      ...state,
      cart: state.cart.filter((product) => product.id !== action.payload)
    }),
    removeOne: () => {
      let cartContain = state.cart.find(
        (product) => product.id === action.payload
      );
      return cartContain.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.id === action.payload
                ? { ...product, quantity: product.quantity - 1 }
                : product
            )
          }
        : {
            ...state,
            cart: state.cart.filter((product) => product.id !== action.payload)
          };
    }
  };

  return reducer[action.type]?.() ?? "error";
}

function Cart() {
  const [state, dispatch] = useReducer(func, initial);

  return (
    <div className="bg-3">
      <h1>producs avalaibles</h1>
      <ul>
        {initial.products.map((item) => (
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
        {state.cart.map((item) => (
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
