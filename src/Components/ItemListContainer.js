import React, {useState, useEffect} from "react";
import '../styles/StylesEcommerce.css';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const dressesEvents= [
    { id: 1, title: "Vestido Afrodita", "price": 120, image: "./vestido1.png", description: "Vestido de alta costura, Afrodita. Hecho con microtul, encaje de guipur y bordados." , img: "./afroditaName.svg"}, 
    { id: 2, title: "Vestido Harmonía", "price": 100, image: "./vestido2.png", description: "Vestido de alta costura, Harmonía. Hecho con gasa cristal y corset con detalles bordados." , img: "./harmoníaName.svg"}, 
    { id: 3, title: "<Vestido Rea>", "price": 100, image: "./vestido3.png", description: "x" , img: "./reaName.svg"},
    { id: 4, title: "<Vestido Selene>", "price": 100, image: "./vestido4.png", description: "x" , img: "./seleneName.svg"},
    { id: 5, title: "<Vestido Nyx>", "price": 100, image: "./vestido5.png", description: "x" , img: "./nyxName.svg"},
    { id: 6, title: "<Vestido Irene>", "price": 100, image: "./vestido6.png", description: "x" , img: "./ireneName.svg"},
    { id: 7, title: "<Vestido Idalia>", "price": 100, image: "./vestido7.png", description: "x" , img: "./idaliaName.svg"},
    { id: 8, title: "<Vestido Artemisa>", "price": 100, image:  "./vestido8.png", description: "x" , img: "./artemisaName.svg"},
    { id: 9, title: "<Vestido Peito>", "price": 100, image:  "./vestido9.png", description: "x" , img: "./peitoName.svg"},
    { id: 10, title: "<Vestido Anfítrite>", "price": 100, image:  "./vestido10.png", description: "x" , img: "./anfítriteName.svg"},
    { id: 11, title: "<Vestido >", "price": 100, image:  "./vestido11.png", description: "x" , img: "./venusName.svg"},
    { id: 12, title: "<Vestido >", "price": 100, image:  "./vestido12.png", description: "x" , img: "./minervaName.svg"}
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


