// src/hooks/useCart.jsx
import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

// lille helper så vi kan håndtere både id og _id fra API'et
function getProductId(product) {
  return product.id ?? product._id;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // 🔹 Læg i kurv (med quantity)
  function add(product) {
    const id = getProductId(product);

    setItems((prev) => {
      const existing = prev.find((item) => item.id === id);

      if (existing) {
        // allerede i kurv → øg quantity
        return prev.map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity ?? 1) + 1 }
            : item
        );
      }

      // nyt produkt i kurven
      return [...prev, { ...product, id, quantity: 1 }];
    });
  }

  // 🔹 Fjern et produkt helt fra kurven
  function remove(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  // 🔹 Tøm hele kurven
  function clearCart() {
    setItems([]);
  }

  // 🔹 Samlet antal varer (bruges til badge i navigationen)
  const itemsCount = items.reduce(
    (sum, item) => sum + (item.quantity ?? 1),
    0
  );

  const value = {
    items,
    // gamle navn (så eksisterende kode stadig virker)
    count: itemsCount,
    // nyt mere sigende navn
    itemsCount,

    // gamle og nye navne peger på samme funktioner:
    addItem: add,
    addToCart: add,

    removeItem: remove,
    removeFromCart: remove,

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
