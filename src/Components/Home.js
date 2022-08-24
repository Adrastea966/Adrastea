import React, {useState, useEffect} from "react";
import "../styles/StylesEcommerce.css";
import banner from "../BannerEcommerce.svg";
import favoritos from "../Favoritos.svg";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs} from "firebase/firestore";

//Función para mostrar el inicio de la página
const Home = () => {

    const [data, setData]  = useState([]);
   
    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');

        getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))))

    }, []);

    return(
        <>
            <div>
                <img className="banner" src={banner} />
            </div>
            <img className="favoritos" src={favoritos} />
            <ItemList data={data} />
        </>
    );
}

export default Home;