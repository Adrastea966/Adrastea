import React from "react";
import '../styles/StylesEcommerce.css';
import CartWidget from './CartWidget';

// Función para renderizar el navbar 
const NavBar = ()=> {
    return(
        <div className="container-navbar">
            <div className="logo">
                <img className="img-logo" src=" ../vestidoRojoLogoMomentaneo.png" />
                <h2>ADRASTEA</h2>
            </div>
            <div className="menu">
                <ul className="lista-menu">
                    <li className="item-menu item-menu-li">
                        <a href="#">HOME</a>
                    </li>
                    <li className="item-menu item-menu-li">
                        <a href="#">PORTFOLIO</a>
                    </li>
                    <li className="item-menu item-menu-li">
                        <a href="#">CONTACTO</a>
                    </li>
                    <li className="item-menu">
                        <a href="#">
                        <CartWidget />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;