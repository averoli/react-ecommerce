import React, { useState } from "react";

export const shoppingBagContext = React.createContext({});

export const CartContext = ({ children }) => {
  const carts = JSON.parse(localStorage.getItem("cart")) || [];

  let num = 0;
  let totalPrice = 0;
  for (let i = 0; i < carts.length; i++) {
    num += carts[i].quantity;
  }

  const [cart, setCart] = useState(num);

  return (
    <div>
      <shoppingBagContext.Provider value={{ cart, setCart }}>
        {children}
      </shoppingBagContext.Provider>
    </div>
  );
};
