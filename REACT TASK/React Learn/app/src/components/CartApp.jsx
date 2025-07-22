import React, { useReducer } from "react";
import { cartReducer, initialState } from "./cartReducer";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
  { id: 3, name: "Headphones" }
];

function CartApp() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_ITEM", payload: product });
  };

  return (
    <>
    <br/>
    <hr/>
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          {product.name}{" "}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
        
      ))}

      <h2> Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            {item.name}{" "}

            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default CartApp;