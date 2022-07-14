import React from "react";
import '../styles/StylesEcommerce.css';
import { InfoContainer, Info, Contenido, ContenidoNombreVestido } from "./styles";

const Item = ({info}) => {
    return(
        
        <InfoContainer style={{cursor: "pointer"}}>
            <img className="img-dress" src={info.image} alt="" />
            <Info>
                <ContenidoNombreVestido>
                    <img src={info.img} />
                </ContenidoNombreVestido>
                <Contenido>
                    <p><strong>{"Precio: "+info.price+" USD"}</strong></p>
                </Contenido>
                <Contenido>
                    <p>{info.description}</p>
                </Contenido>
            </Info>
        </InfoContainer>
        
    );
}

export default Item;
    