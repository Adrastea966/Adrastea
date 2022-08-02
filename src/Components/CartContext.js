import React, {createContext, useState} from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] =useState([]);

  const addToCart = (data, quantity) => {

      let newCart = [];
      let isInCart = cartList.find((isInCart) => isInCart.id === data.id);
    
      if (isInCart) {
        isInCart.quantity += quantity;
        newCart = [...cartList];
      } else {
        isInCart = { ...data, quantity: quantity };
        newCart = [...cartList, isInCart];
      }
      setCartList(newCart);
    };

    const removeItem = (id) => setCartList(cartList.filter(producto =>producto.id !==id))

    const clearCart = () => setCartList([])

    const isInCart = (id) => cartList.find(producto =>producto.id === id) ? true : false;

    const totalPrice = () => {
      return cartList.reduce((prev, act) => prev + act.quantity * act.price, 0)
    } 

    const totalProducts = () => cartList.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clearCart, isInCart, totalPrice, totalProducts,}}>
            {children}
        </CartContext.Provider>
    )
  }

export default CartContextProvider;



