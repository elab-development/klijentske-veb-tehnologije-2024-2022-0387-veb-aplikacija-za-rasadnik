import React, { createContext, useState, ReactNode } from 'react';
import { PRODUCTS } from './../Products';

interface ShopContextProps {
  cartItems: { [key: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
}

export const ShopContext = createContext<ShopContextProps | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

const getDefaultCart = () => {
  let cart: { [key: number]: number } = {};
  for (let i = 1; i <= PRODUCTS.length; i++) { // Changed to `<=` to include the last product
    cart[i] = 0;
  }
  return cart;
}

export const ShopContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>(getDefaultCart());

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
  };

  const contextValue: ShopContextProps = {
    cartItems,
    addToCart,
    removeFromCart
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}
