import React from 'react';
import { CartContext } from "./CartContext";
import { useContext } from "react";
import "../styles/StylesEcommerce.css";

const ItemCart = ({ data }) => {

    const {totalPrice} =useContext(CartContext)
    return (
        <div className='contenedor-resumen-compra'>
            <div>
                <h4>RESÚMEN DE COMPRA</h4>
                <p>Cantidad de productos: {data.quantity}</p>
                <p>Subtotal: {data.quantity * data.price}</p>
                <p>Impuestos: IVA 21%</p>
                <p>Total: {totalPrice()*1.21+" USD"}</p>
            </div>
        </div>
    )
}

export default ItemCart