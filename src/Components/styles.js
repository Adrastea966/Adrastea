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


export {DressesContainer, Info, InfoContainer, Contenido, ContenidoNombreVestido } 