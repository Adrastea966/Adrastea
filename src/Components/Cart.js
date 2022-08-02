import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import {Link} from "react-router-dom";
import { ContenedorPrincipal,  NombreCarrito, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount } from './styles';
import '../styles/StylesEcommerce.css';


const Cart = () => {
    const {removeItem, clearCart, cartList, totalPrice } =useContext(CartContext)
    const test = useContext(CartContext)
    console.log(test.cartList)


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
            <button type="button" onClick={() => clearCart()}>Vacíar carrito</button>

            {
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
                                    <span>
                                        <button type="button" onClick={() => removeItem(data.id)}>eliminar</button>
                                    </span>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                                <ProductAmountContainer>
                                    <ProductAmount>{data.quantity + " UNIDADES"}</ProductAmount>
                                    <ProductAmount><p>Precio unitario: {data.price + " USD"} </p> </ProductAmount>
                                    <ProductAmount><p>Subtotal: {data.quantity * data.price+" USD"}</p> </ProductAmount>
                                </ProductAmountContainer>
                        </PriceDetail>
                    </Product>
                </ContentCart>
                
                </>
                ))
                
            }
            <ProductAmount><p>Impuestos: IVA 21%</p> </ProductAmount>
            <hr></hr>
            <ProductAmount><p>TOTAL:{totalPrice()*1.21+" USD"}</p> </ProductAmount>
            <button type="button" >Confirmar compra</button>
            
           
        </ContenedorPrincipal>
    );
}

export default Cart;