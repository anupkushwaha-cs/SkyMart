import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyStore.Provider
      value={{
        products,
        setProducts,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};