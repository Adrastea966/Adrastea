import styled from 'styled-components';

//Home - contenido productos
const DressesContainer = styled.div`
    padding: 5rem;
    margin-top: 10rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2.6rem;
`;

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: absolute;
    transition: all 0.5s ease;
    background-color: rgba(2, 2, 2, 0.538);
    display:flex;
    flex-direction:column-reverse;
    justify-content:center;
    align-items:center;
`;

const InfoContainer = styled.div`
    display: flex;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
    transition: all 500ms ease;
`;

const Contenido = styled.div`
    display: flex;
    justify-content: center;
    aling-items: center;
    font-size: 1.4em;
    width: 22rem;
    margin-bottom: 0.5rem;
    margin-left:4rem;
    color: white;
    transition: all 0.6s ease;
`;

const ContenidoNombreVestido = styled.div`  
    width:30rem;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
    order:1;
`

//Carrito
const ContenedorPrincipal = styled.div`
    padding: 10rem;
    margin: 0 auto;
    height: 300rem;
`;

const NombreCarrito = styled.h1`
    font-weight: 500;
    text-align: center;
    margin-bottom: 10rem;
    font-size: 3em;
`;

const ContentCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  display: flex;
  font-size: 1.3em;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;

const ImageCart = styled.img`
  width: 20rem;
`;

const Details = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PrecioDetalle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductoDetalle = styled.div`
  font-size: 3em;
  font-weight: 200;
`;

const DatosProductoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50rem;
`;

const DatosProducto = styled.div`
    font-size: 2.4em;
    margin: 0.5rem;
`;

const ContenedorPadreOrdenCompra = styled.div`
    display:flex;
    justify-content: space-between;
`;

const ProductFinal = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 2.5em;
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-right: 8.7rem;
`

export {DressesContainer,  ContenedorPadreOrdenCompra, Info, 
InfoContainer, Contenido, ContenidoNombreVestido, ContenedorPrincipal, 
DatosProductoContainer, DatosProducto, NombreCarrito, ContentCart, Product, 
ProductDetail, ImageCart, Details, PrecioDetalle, ProductoDetalle, ProductFinal} 