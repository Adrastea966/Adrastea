import React, {useState} from "react";
import './StylesEcommerce.css';

// Función para añadir más cantidad de productos y agregar al carrito
const ItemCount = ({initial, stock, onAdd}) => {
    const  [counter, setCounter] = useState(initial)

    // Sumar productos al carro teniendo en cuenta el stock
    const add = () => {
        if (counter < stock){
            setCounter(counter +1)
        }else{
            console.log("No hay más stock disponible")
        }
    }

    // Restar productos al carro teniendo en cuenta la cantidad mínima de productos
    const subtract = () =>{
        if (counter > initial){
            setCounter(counter -1)
        }else{
            console.log("Esta es la unidad mínima")
        }
    }

    // Renderizar
    return(
        <div>
            <div className="counter">
                <button className="add-subtract" onClick={subtract}>-</button>
                <p className="counter-number"><strong>{counter}</strong></p>
                <button className="add-subtract" onClick={add}>+</button>
            </div>
            <button className="add-to-cart"onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;