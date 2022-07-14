import styled from 'styled-components';


const DressesContainer = styled.div`
    padding: 5rem;
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
`;

const Contenido = styled.div`
    display: flex;
    justify-content: center;
    aling-items: center;
    font-size: 1.4em;
    width: 22rem;
    margin-bottom: 1.5rem;
    margin-left:6rem;
    color: white;
    transition: all 0.6s ease;
`;

const ContenidoNombreVestido = styled.div`
    padding-top: 5rem;
    padding-bottom: 3rem;
`

export {DressesContainer, Info, InfoContainer, Contenido, ContenidoNombreVestido } 