import React, { createContext, useEffect, useState } from "react";
import all_products from "../Components/Assets/all_products";

export const ShopContext = createContext(null);

function getDefaultCart() {
  let cart = {};
  all_products.forEach((_, i) => (cart[i] = 0));
  return cart;
}

function ShopContextProvider({ children }) {
  const [cartItems, setCartitems] = useState(
    JSON.parse(localStorage.getItem("items"))
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(itemId) {
    setCartitems((prevCart) => ({
      ...prevCart,
      [itemId]: prevCart[itemId] + 1,
    }));
  }

  function removeFromCart(itemId) {
    setCartitems((prevCart) => ({
      ...prevCart,
      [itemId]: prevCart[itemId] - 1,
    }));
  }

  function getTotalCartAmount() {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let cartInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }

  function getTotalCartItems() {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
