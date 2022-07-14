import React, {useState, useEffect} from "react";
import '../styles/StylesEcommerce.css';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const dressesEvents= [
    { id: 1, title: "Vestido Afrodita", "price": 380, image: "./vestido1.png", description: "Vestido Afrodita. Hecho con microtul, encaje de guipur y bordados." , img: "./afroditaName.svg"}, 
    { id: 2, title: "Vestido Harmonía", "price": 300, image: "./vestido2.png", description: "Vestido Harmonía. Hecho con gasa cristal, tajo frontal, corset con detalles bordados y posee mangas desmontables." , img: "./harmoníaName.svg"}, 
    { id: 3, title: "<Vestido Rea>", "price": 350, image: "./vestido3.png", description: "Vestido Rea. Hecho con 3 capas de microtul. Posee corset corte princesa y bordados." , img: "./reaName.svg"},
    { id: 4, title: "<Vestido Selene>", "price": 350, image: "./vestido4.png", description: "Vestido Selene. Hecho con saten y microtul. Posee un hermoso encaje de guipur." , img: "./seleneName.svg"},
    { id: 5, title: "<Vestido Nyx>", "price": 200, image: "./vestido5.png", description: "Vestido Nyx. Hecho con saten plisado, estilo Marilyn Monroe con mucho vuelo y aberturas en los laterales." , img: "./nyxName.svg"},
    { id: 6, title: "<Vestido Irene>", "price": 450, image: "./vestido6.png", description: "Vestido Irene. Hecho con tul, posee encaje y bordados en el corset y en las mangas desmontables, con volados." , img: "./ireneName.svg"},
    { id: 7, title: "<Vestido Idalia>", "price": 300, image: "./vestido7.png", description: "Vestido Idalia. Hecho con gasa cristal y tul, con corset bordado y tul." , img: "./idaliaName.svg"},
    { id: 8, title: "<Vestido Artemisa>", "price": 600, image:  "./vestido8.png", description: "Vestido Artemisa. Hecho con saten y gasa cristal. Posee piedras con un bordado delicado." , img: "./artemisaName.svg"},
    { id: 9, title: "<Vestido Peito>", "price": 550, image:  "./vestido9.png", description: "Vestido Peito. Hecho con saten y gasa de cristal estampada. Estilo juvenil." , img: "./peitoName.svg"},
    { id: 10, title: "<Vestido Anfítrite>", "price": 500, image:  "./vestido10.png", description: "Vestido Anfítrite. Hecho con saten y tul con glitter. Posee mangas tipo campana desmontables y corset bordado con abertura V en el pecho." , img: "./anfítriteName.svg"},
    { id: 11, title: "<Vestido >", "price": 580, image:  "./vestido11.png", description: "Vestido Venus. Hecho con saten y gasa cristal. Posee corset strapless con bordado delicado y mangas desmontables." , img: "./venusName.svg"},
    { id: 12, title: "<Vestido >", "price": 600, image:  "./vestido12.png", description: "Vestido Minerva. Hecho con gasa y tul. Posee corset con encaje y decoraciones delicadas bordadas, incluyendo piedras." , img: "./minervaName.svg"}
];


// Función para renderizar los productos
export const ItemListContainer = () => {

    const [data, setData]  = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(dressesEvents);
            }, 2000)
        });
        getData.then(res => setData(res));
    }, [])

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`);
    }

    return(
        <>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        <ItemList data={data} />
        </>
    );
}


