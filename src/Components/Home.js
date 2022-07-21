import React, {useState, useEffect} from "react";
import '../styles/StylesEcommerce.css';
import banner from '../BannerEcommerce.svg';
import favoritos from '../Favoritos.svg';
import ItemList from "./ItemList";

const dressesEvents= [
    { id: 1, title: "Vestido Afrodita", category:"Eventos", price: 380, image: "https://res.cloudinary.com/adrastea/image/upload/v1657821290/EcommerceAdrastea/vestido1_ejqtbp.png", description: "Vestido Afrodita. Hecho con microtul, encaje de guipur y bordados." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658355249/EcommerceAdrastea/afroditaName_vpofci.svg"}, 
    { id: 2, title: "Vestido Harmonía", category:"Eventos", price: 300, image: "https://res.cloudinary.com/adrastea/image/upload/v1657821293/EcommerceAdrastea/vestido2_orbil8.png", description: "Vestido Harmonía. Hecho con gasa cristal, tajo frontal, corset con detalles bordados y posee mangas desmontables." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658355249/EcommerceAdrastea/harmon%C3%ADaName_kksajo.svg"}, 
    { id: 3, title: "Vestido Rea", category:"Eventos", price: 350, image: "https://res.cloudinary.com/adrastea/image/upload/v1657821295/EcommerceAdrastea/vestido3_pcdqcw.png", description: "Vestido Rea. Hecho con 3 capas de microtul. Posee corset corte princesa y bordados." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658355253/EcommerceAdrastea/reaName_xbesel.svg"},
    { id: 4, title: "Vestido Selene", category:"Eventos", price: 350, image: "https://res.cloudinary.com/adrastea/image/upload/v1657821295/EcommerceAdrastea/vestido4_byqqak.png", description: "Vestido Selene. Hecho con saten y microtul. Posee un hermoso encaje de guipur." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658355251/EcommerceAdrastea/seleneName_r8zcn3.svg"},
    { id: 5, title: "Vestido Nyx", category:"Eventos", price: 200, image: "https://res.cloudinary.com/adrastea/image/upload/v1657821297/EcommerceAdrastea/vestido5_sqeu2m.png", description: "Vestido Nyx. Hecho con saten plisado, estilo Marilyn Monroe con mucho vuelo y aberturas en los laterales." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658355251/EcommerceAdrastea/nyxName_m6c8jf.svg"},
    { id: 6, title: "Vestido Irene", category:"Eventos", price: 450, image: "https://res.cloudinary.com/adrastea/image/upload/v1657821297/EcommerceAdrastea/vestido6_keu90r.png", description: "Vestido Irene. Hecho con tul, posee encaje y bordados en el corset y en las mangas desmontables, con volados." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658355251/EcommerceAdrastea/ireneName_hu775a.svg"},
    { id: 7, title: "Vestido Idalia", category:"Eventos", price: 300, image: "https://res.cloudinary.com/adrastea/image/upload/v1657821296/EcommerceAdrastea/vestido7_rxlr4e.png", description: "Vestido Idalia. Hecho con gasa cristal y tul, con corset bordado y tul." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658355249/EcommerceAdrastea/idaliaName_bq2k1s.svg"},
    { id: 8, title: "Vestido Artemisa", category:"Eventos", price: 600, image:  "https://res.cloudinary.com/adrastea/image/upload/v1657821289/EcommerceAdrastea/vestido8_xglyiz.png", description: "Vestido Artemisa. Hecho con saten y gasa cristal. Posee piedras con un bordado delicado." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658355249/EcommerceAdrastea/artemisaName_vy6mmg.svg"},
    { id: 9, title: "Vestido Peito", category:"Eventos", price: 550, image:  "https://res.cloudinary.com/adrastea/image/upload/v1657821291/EcommerceAdrastea/vestido9_e5sh6w.png", description: "Vestido Peito. Hecho con saten y gasa de cristal estampada. Estilo juvenil." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658355251/EcommerceAdrastea/peitoName_wb19yc.svg"},
    { id: 10, title: "Vestido Anfítrite", category:"Eventos", price: 500, image:  "https://res.cloudinary.com/adrastea/image/upload/v1657821291/EcommerceAdrastea/vestido10_xu82vf.png", description: "Vestido Anfítrite. Hecho con saten y tul con glitter. Posee mangas tipo campana desmontables y corset bordado con abertura V en el pecho." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658355249/EcommerceAdrastea/anf%C3%ADtriteName_npfyou.svg"},
    { id: 11, title: "Vestido Venus", category:"Eventos", price: 580, image:  "https://res.cloudinary.com/adrastea/image/upload/v1657821290/EcommerceAdrastea/vestido11_jxthqy.png", description: "Vestido Venus. Hecho con saten y gasa cristal. Posee corset strapless con bordado delicado y mangas desmontables." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658355249/EcommerceAdrastea/venusName_mqtjm1.svg"},
    { id: 12, title: "Vestido Minerva", category:"Eventos", price: 600, image:  "https://res.cloudinary.com/adrastea/image/upload/v1657821291/EcommerceAdrastea/vestido12_amhtc0.png", description: "Vestido Minerva. Hecho con gasa y tul. Posee corset con encaje y decoraciones delicadas bordadas, incluyendo piedras." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658355251/EcommerceAdrastea/minervaName_pcusyd.svg"},
    { id: 13, title: "Vestido Lily", category:"Bodas", price: 380, image: "https://res.cloudinary.com/adrastea/image/upload/v1658345792/EcommerceAdrastea/vestido13_aqvzf2.png", description: "Vestido Lily." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658373387/EcommerceAdrastea/lilyName_ksyxnt.svg"}, 
    { id: 14, title: "Vestido Jara", category:"Bodas", price: 300, image: "https://res.cloudinary.com/adrastea/image/upload/v1658345792/EcommerceAdrastea/vestido14_lpr971.png", description: "Vestido Jara." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658373389/EcommerceAdrastea/jaraName_nyftfg.svg"}, 
    { id: 15, title: "Vestido Pensamiento", category:"Bodas", price: 350, image: "https://res.cloudinary.com/adrastea/image/upload/v1658345792/EcommerceAdrastea/vestido15_ridgzr.png", description: "Vestido Pensamiento." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658373389/EcommerceAdrastea/pensamientoName_qvmfem.svg"},
    { id: 16, title: "Vestido Peony", category:"Bodas", price: 350, image: "https://res.cloudinary.com/adrastea/image/upload/v1658345791/EcommerceAdrastea/vestido16_h4sh7s.png", description: "Vestido Peony." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658373389/EcommerceAdrastea/peonyName_err9ql.svg"},
    { id: 17, title: "Vestido Narciso", category:"Bodas", price: 200, image: "https://res.cloudinary.com/adrastea/image/upload/v1658345791/EcommerceAdrastea/vestido17_hdnamn.png", description: "Vestido Narciso." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658373389/EcommerceAdrastea/narcisoName_ioyyyd.svg"},
    { id: 18, title: "Vestido Hydrangea", category:"Bodas", price: 450, image: "https://res.cloudinary.com/adrastea/image/upload/v1658345796/EcommerceAdrastea/vestido18_uroykj.png", description: "Vestido Hydrangea." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658373387/EcommerceAdrastea/hydrangeaName_qoay0g.svg"},
    { id: 19, title: "Vestido Gardenia", category:"Bodas", price: 300, image: "https://res.cloudinary.com/adrastea/image/upload/v1658345795/EcommerceAdrastea/vestido19_sb7xza.png", description: "Vestido Gardenia" , img: "https://res.cloudinary.com/adrastea/image/upload/v1658373387/EcommerceAdrastea/gardeniaName_wmxjdk.svg"},
    { id: 20, title: "Vestido Jasmine", category:"Bodas", price: 600, image: "https://res.cloudinary.com/adrastea/image/upload/v1658345795/EcommerceAdrastea/vestido20_qzn80l.png", description: "Vestido Jasmine." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658373387/EcommerceAdrastea/jasmineName_prvemy.svg"},
    { id: 21, title: "Vestido Dahlia", category:"Bodas", price: 550, image: "https://res.cloudinary.com/adrastea/image/upload/v1658345798/EcommerceAdrastea/vestido21_nnkqlo.png", description: "Vestido Dahlia." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658373387/EcommerceAdrastea/dahliaName_vhqorp.svg"},
    { id: 22, title: "Vestido Margarita", category:"Bodas", price: 500, image: "https://res.cloudinary.com/adrastea/image/upload/v1658345798/EcommerceAdrastea/vestido22_ktfqmg.png", description: "Vestido Margarita." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658373388/EcommerceAdrastea/margaritaName_a6k08b.svg"},
    { id: 23, title: "Vestido Orquídea", category:"Bodas", price: 580, image: "https://res.cloudinary.com/adrastea/image/upload/v1658345796/EcommerceAdrastea/vestido23_jhhqun.png", description: "Vestido Orquídea." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658373388/EcommerceAdrastea/orquideaName_pveidl.svg"},
    { id: 24, title: "Vestido Bell", category:"Bodas", price: 600, image: "https://res.cloudinary.com/adrastea/image/upload/v1658345791/EcommerceAdrastea/vestido24_fsb4hw.png", description: "Vestido Bell." , img: "https://res.cloudinary.com/adrastea/image/upload/v1658373387/EcommerceAdrastea/bellName_ydmgm0.svg"}
];


const Home = () => {

    const [data, setData]  = useState([]);
   
    useEffect(() => {
        const getData = new Promise(resolve => {
                setTimeout(() => {
                    resolve(dressesEvents);
                }, 2000)
            });
            getData.then(res => setData(res));
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