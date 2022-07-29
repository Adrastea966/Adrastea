import React, {createContext, useState} from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] =useState([]);

    const addToCart = (data, quantity) => {
        isInCart(data.id)
        ?
        setCartList(cartList.map((prod) => {
            if (prod.id === data.id){
                prod.quantity += quantity;
            }
            return prod
        }))
        :
        setCartList([...cartList, data])
    }

    const removeItem = (id) => setCartList(cartList.filter(producto =>producto.id !==id))

    const clearCart = () => setCartList([])

    const isInCart = (id) => cartList.find(producto =>producto.id === id) ? true : false;

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, clearCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;



