import React, {useState} from "react";
import '../styles/StylesEcommerce.css';


// Función para añadir más cantidad de productos y agregar al carrito
const ItemCount = ({initial, stock, onAdd}) => {
    const  [counter, setCounter] = useState(initial)

    // Sumar productos al carro teniendo en cuenta el stock
    const add = () => {
        if (counter < stock) {
          const aux = counter + 1;
          setCounter(aux);
        } else {
          console.log("No hay mas stock");
        }
      };
    
    // Restar productos al carro teniendo en cuenta la cantidad mínima de productos
    const subtract = () =>{
       setCounter(counter -1)
    }

    // Renderizar
    return(
        <div>
            <div className="counter">
                <button className="add-subtract" disabled={counter <=0} onClick={subtract}>-</button>
                <p className="counter-number"><strong>{counter}</strong></p>
                <button className="add-subtract" disabled={counter >=stock} onClick={add}>+</button>
            </div>
            <div className="add-to-cart" >
                <button className="add-to-cart-btn" type="button" disabled={stock <=0} onClick={() => onAdd(counter)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;



  
   