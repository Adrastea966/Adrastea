import React from "react";
import '../styles/StylesEcommerce.css';
import { InfoContainer, Info, Contenido, ContenidoNombreVestido} from "./styles";
import {Link} from "react-router-dom";


const Item = ({info}) => {

    return(
        <InfoContainer style={{cursor: "pointer"}}>
            <div>
                <img className="img-dress" src={info.image} alt="" />
            </div>
            <Info>
                <div>
                   <Link to={`/item/${info.id}`}><button className="btn-detail" type="button">Detalle</button></Link> 
                </div>
                <ContenidoNombreVestido>
                    <img src={info.img} />
                </ContenidoNombreVestido>
                <Contenido>
                    <p><strong>{"Precio: "+info.price+" USD"}</strong></p>
                </Contenido>
                <Contenido>
                    <p>{info.description}</p>
                </Contenido>
                <div className="container-button">
                    <button className="btn"type="button">AGREGAR AL CARRITO</button>
                </div>
            </Info>
        </InfoContainer>
    );
}

export default Item;
    