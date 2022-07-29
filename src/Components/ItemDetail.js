import React, {useState, useContext} from "react";
import '../styles/StylesEcommerce.css';
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetail = ({data}) => {

    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext)


    const onAdd = (quantity) => {
        quantity > 0
            ? console.log(`Compraste ${quantity} unidades`)
            : console.log(`Agregue un producto para poder agregar al carrito`);
            setItemCount(quantity);
        test.addToCart(data, quantity);
    }

    return(
        
        <div className="container-details-page">
        <div className="container-detail">
            <div className="img-detail-container">
                <img className="img-detail" src={data.image}/>
            </div>
            <div className="container-info-agregar">
                <div className="div-title">
                    <h1>{data.title}</h1>
                </div>
                <div className="div-description">
                    <p>{data.description}</p>
                </div>
                <div className="div-price">
                    <p><strong>{"Precio: "+data.price+" USD"}</strong></p>
                </div>
                <div className="div-cart-button">
                    {itemCount === 0 ? (
                        <ItemCount initial={itemCount} stock={10} onAdd={onAdd} />
                        )
                        : 
                        (<Link to="/cart">
                             <button className="itemCheckout">Finalizar compra</button>
                         </Link>)}
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default ItemDetail;