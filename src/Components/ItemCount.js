import React, {useState} from "react";
import '../styles/StylesEcommerce.css';

// Función para añadir más cantidad de productos y agregar al carrito
const ItemCount = ({initial, stock, onAdd}) => {
    const  [counter, setCounter] = useState(initial)

    // Sumar productos al carro teniendo en cuenta el stock
    const add = () => {
       setCounter(counter +1)
    }

    // Restar productos al carro teniendo en cuenta la cantidad mínima de productos
    const subtract = () =>{
       setCounter(counter -1)
    }

    // Renderizar
    return(
        <div>
            <div className="counter">
                <button className="add-subtract" disabled={counter <=1} onClick={subtract}>-</button>
                <p className="counter-number"><strong>{counter}</strong></p>
                <button className="add-subtract" disabled={counter >=stock} onClick={add}>+</button>
            </div>
            <button className="add-to-cart" disabled={stock <=0} onClick={() => onAdd(counter)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;