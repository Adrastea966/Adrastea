import React from "react";
import './StylesEcommerce.css';
import ItemCount from "./ItemCount";

// Función para renderizar los productos
export const ItemListContainer = ({ greating }) => {

    const onAdd = () => {console.log("Se agregó al carrito correctamente")}

    return(
        <>
        <div>{greating}</div>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </>
    );
}

