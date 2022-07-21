import React from "react";
import '../styles/StylesEcommerce.css';
import ItemCount from "./ItemCount";

const ItemDetail = ({data}) => {

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`);
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
                <div>
                    <ItemCount initial={1} stock={10} onAdd={onAdd} />
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default ItemDetail;