import React from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { ContenedorPrincipal, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styles';
import '../styles/StylesEcommerce.css';


const Cart = () => {
    const {removeItem, clearCart } =useContext(CartContext)
    const test = useContext(CartContext)
    console.log(test.cartList)
    return (
        <ContenedorPrincipal>
            <TitleCart>TU CARRITO</TitleCart>
            {
                test.cartList.length > 0 && test.cartList.map(data => (
                    <ContentCart>
                    <Product>
                    <ProductDetail>
                        <ImageCart src={data.image} />
                        <Details>
                        <span>
                            <b>Producto:</b> {data.title}
                        </span>
                        <span>
                            <button type="button" onClick={() => removeItem(data.id)}  >eliminar</button>
                        </span>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                        <ProductAmount>{"UNIDADES: "+data.quantity}</ProductAmount>
                        </ProductAmountContainer>
                        <ProductPrice> {data.price+" USD"} </ProductPrice>
                    </PriceDetail>
                    </Product>
                   
            </ContentCart>
                ))
            }
            <button type="button" onClick={() => clearCart()}  >Vacíar carrito</button>
           
        </ContenedorPrincipal>
    );
}

export default Cart;