import React from "react";
import './StylesEcommerce.css';

const ItemListContainer = ({greeting}) => {
    return(
        <span className="container-span">{greeting}</span>
    );
}

export default ItemListContainer;