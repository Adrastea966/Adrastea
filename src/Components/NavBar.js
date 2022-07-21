import React from "react";
import '../styles/StylesEcommerce.css';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";

// Función para renderizar el navbar 
const NavBar = ()=> {
    return(
        <div className="container-navbar">
            <div className="logo">
                <Link to="/"><h2>ADRASTEA</h2></Link>
            </div>
            <div className="menu">
                <ul className="lista-menu">
                    <li className="item-menu item-menu-li">
                        <Link to="/">HOME</Link>
                    </li>
                    <li className="item-menu item-menu-li">
                        <Link to="/category/Bodas">BODAS</Link>
                    </li>
                    <li className="item-menu item-menu-li">
                        <Link to="/category/Eventos">EVENTOS</Link>
                    </li>
                    <li className="item-menu item-menu-li">
                        <a href="#footer">CONTACTO</a>
                    </li>
                    <li className="item-menu">
                        <Link to="/cart">
                        <CartWidget />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;