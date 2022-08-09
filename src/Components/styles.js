import styled from 'styled-components';


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
    padding-top: 1rem;
    padding-bottom: 1.5rem;
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
  gap: 10rem;
`;

const ProductDetail = styled.div`
  display: flex;
`;

const ImageCart = styled.img`
  width: 200px;
  
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50rem;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const  ContenedorPadreOrdenCompra = styled.div`
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
ProductAmountContainer, ProductAmount, NombreCarrito, ContentCart, Product, 
ProductDetail, ImageCart, Details, PriceDetail, ProductPrice, ProductFinal} 