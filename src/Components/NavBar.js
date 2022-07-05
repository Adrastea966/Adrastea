import React from "react";
import './NavBar.css';

const NavBar = ()=> {
    return(
        <div className="container-navbar">
            <div className="logo">
                <img src=" ../vestidoRojoLogoMomentaneo.png" />
                <h2>ADRASTEA</h2>
            </div>
            <div className="menu">
                <ul className="lista-menu">
                    <li className="item-menu">
                        <a href="#">HOME</a>
                    </li>
                    <li className="item-menu">
                        <a href="#">NOSOTROS</a>
                    </li>
                    <li className="item-menu">
                        <a href="#">CONTACTO</a>
                    </li>
                    <li className="item-menu">
                        <a href="#">TIENDA</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar