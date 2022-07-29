import React, {useState, useContext} from "react";
import '../styles/StylesEcommerce.css';
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetail = ({data}) => {

    const [cart, setCart] = useState(false);
    const test = useContext(CartContext)
    const { addToCart  } = useContext(CartContext);

    const onAdd = (quantity) => {
        setCart(true);
        addToCart(data, quantity)
        test.addToCart(data)
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
                    {   cart
                        ? <button className="div-cart-detail-btn" type="button" ><Link to="/cart">Finalizar compra</Link></button>
                        : <ItemCount initial={1} stock={10} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default ItemDetail;