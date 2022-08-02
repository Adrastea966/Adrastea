import React from "react";
import '../styles/StylesEcommerce.css';
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Badge } from '@mui/material';

const CartWidget = ()=> {
    const {totalProducts} =useContext(CartContext)
    return(
        <div className="img-shop">
            <img src=" ../CarritoVestido.svg" />
            <Badge badgeContent={totalProducts() || ''}/>
        </div>
    );
}

export default CartWidget;