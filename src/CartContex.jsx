import React, { useState } from "react";

export const shoppingBagContext = React.createContext({});

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState({});
  console.log(cart);
  return (
    <div>
      <shoppingBagContext.Provider value={{ cart, setCart }}>
        {children}
      </shoppingBagContext.Provider>
    </div>
  );
};
