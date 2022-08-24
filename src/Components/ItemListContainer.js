import React, {useState, useEffect} from "react";
import "../styles/StylesEcommerce.css";
import ItemList from "./ItemList";
import {useParams} from "react-router";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

// Función para renderizar los productos
export const ItemListContainer = () => {

    const [data, setData]  = useState([]);
    const {id} = useParams();

    useEffect(() => {
        
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (id) {
            const queryFilter = query(queryCollection, where('category', '==', id))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))
        }
        
    }, [id]);

    return(
        <>
        <ItemList data={data} />
        </>
    );
}


