import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail"

const dress = {id: 1, title: "Vestido Afrodita", "price": 380, image: "https://res.cloudinary.com/adrastea/image/upload/v1657821290/EcommerceAdrastea/vestido1_ejqtbp.png", description: "Vestido talla XS hecho con microtul color rosa viejo, encaje de guipur y bordados. Las medidas son busto: 85 cm, cintura 65 cm, cadera 93 cm." }

const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(dress);
            }, 2000)
        });
        getData.then(res => setData(res));
    }, [])

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;