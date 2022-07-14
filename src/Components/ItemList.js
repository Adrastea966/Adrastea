import React from "react";
import Item from "./Item";
import { DressesContainer } from "./styles";

const ItemList = ({data = []}) => {
    return(
        <DressesContainer>
            {data.map(dress => <Item key={dress.id} info={dress} />)} 
        </DressesContainer>
    )
}

export default ItemList;