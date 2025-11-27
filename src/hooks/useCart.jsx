// src/hooks/useCart.jsx
import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(product) {
    setItems((prev) => [...prev, product]);
  }

  function clearCart() {
    setItems([]);
  }

  const value = {
    items,
    count: items.length,
    addItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart skal bruges inde i <CartProvider>");
  }
  return ctx;
}
