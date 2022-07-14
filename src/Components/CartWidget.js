import React from "react";
import '../styles/StylesEcommerce.css';
import { Badge } from '@mui/material';

const CartWidget = ()=> {
    return(
        <div className="img-shop">
            <img src=" ../CarritoVestido.svg" />
            <Badge badgeContent={2} color="secondary" />
        </div>
    );
}

export default CartWidget;