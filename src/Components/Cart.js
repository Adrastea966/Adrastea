import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import {Link} from "react-router-dom";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2"
import { ContenedorPrincipal,  NombreCarrito, ContentCart, Product, ProductDetail, ImageCart, Details, PrecioDetalle, DatosProductoContainer, DatosProducto, ProductFinal } from './styles';
import "../styles/StylesEcommerce.css";

const Cart = () => {
    const {removeItem, clearCart, cartList, totalPrice } =useContext(CartContext)
    const test = useContext(CartContext)
    console.log(test.cartList)

    const order = {
        buyer: {
            name: 'Eliana',
            email: 'elianamaiu@yahoo.com',
            phone: '1124013978',
            age: '21'
        },
        items: cartList.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick =() => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
            .then(({id}) => Swal.fire("¡Listo! su compra se efectuó correctamente. Su número de orden es: ",id, "success"))
        
        test.clearCart()
    }

    if (cartList.length === 0){
        return (
            <div className="contenedor-carrito-vacio">No hay elementos en tu carrito.
            <p className="link-seguir-comprando"><Link to ='/'>Seguir comprando</Link></p> 
            </div>
        )
    }

    return (
        <ContenedorPrincipal>
            <NombreCarrito>TU CARRITO</NombreCarrito>
            <p className="seguir-comprando-carrito-lleno"><Link to ='/'>Seguir comprando</Link></p> 
            <div className="container-btn-vaciar">
                <button className="btn-vaciar" type="button" onClick={() => clearCart()}>Vacíar carrito</button>
            </div>
           
            {   
            
            //Mapeo para mostrar los productos del carrito  
                test.cartList.length > 0 && test.cartList.map(data => (
            <> 
                <ContentCart>
                    <Product>
                        <ProductDetail>
                            <ImageCart src={data.image} />
                            <Details>
                                <span>
                                    <b>Producto:</b> {data.title}
                                </span>
                                <div className="btn-eliminar-carrito-contain">
                                    <button className="btn-eliminar-carrito" type="button" onClick={() => removeItem(data.id)}>Eliminar</button>
                                </div>
                            </Details>
                        </ProductDetail>
                        <PrecioDetalle>
                                <DatosProductoContainer>
                                    <DatosProducto>{data.quantity + " UNIDADES"}</DatosProducto>
                                    <DatosProducto><p>Precio unitario: {data.price + " USD"} </p> </DatosProducto>
                                    <DatosProducto><p>Subtotal: {data.quantity * data.price+" USD"}</p> </DatosProducto>
                                </DatosProductoContainer>
                        </PrecioDetalle>
                    </Product>
                </ContentCart>
                </>
                ))
            }
            <ProductFinal><p>Impuestos: IVA 21%</p> </ProductFinal>
            <hr></hr>
            <ProductFinal><p>TOTAL: {totalPrice()*1.21+" USD"}</p> </ProductFinal>
            <div className="container-confirmar"><button onClick={handleClick} className="btn-confirmar-compra" type="button" >Confirmar compra</button></div>
        </ContenedorPrincipal>
    ); 
}

export default Cart;