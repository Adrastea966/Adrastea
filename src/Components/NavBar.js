import React from "react";
import '../styles/StylesEcommerce.css';
import CartWidget from './CartWidget';

// Función para renderizar el navbar 
const NavBar = ()=> {
    return(
        <div className="container-navbar">
            <div className="logo">
                <h2>ADRASTEA</h2>
            </div>
            <div className="menu">
                <ul className="lista-menu">
                    <li className="item-menu item-menu-li">
                        <a href="#">HOME</a>
                    </li>
                    <li className="item-menu item-menu-li">
                        <a href="#">BODAS</a>
                    </li>
                    <li className="item-menu item-menu-li">
                        <a href="#">EVENTOS</a>
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