import React, {useState, useContext} from "react";
import "../styles/StylesEcommerce.css";
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";
import Swal from "sweetalert2"
import { CartContext } from "./CartContext";

const ItemDetail = ({data}) => {

    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext)

    const onAdd = (quantity) => {
        quantity > 0
            ? Swal.fire("Éxito", `Agregaste ${quantity} unidades a tu carrito. Presiona 'ok' para continuar con tu compra.`, "success")
            : Swal.fire("Error!", `Debe agregar un producto para poder continuar.`, "error");
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
                            <div className="item-checkout-container">
                                <button className="item-checkout">Ver carrito</button>
                            </div>
                         </Link>)}
                </div>
            </div>
        </div>
        </div>  
    );
}

export default ItemDetail;