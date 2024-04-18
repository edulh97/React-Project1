import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>

            <div class='header-container'>
                <div class="header-logo">
                    <Link to="/Home">
                        <img src="/src/images/logo.png" alt="logo" />
                    </Link>
                </div>
                <div class="header-list">
                    <ul class="header-nav-menu">
                    <li><Link to="/Home">Inicio</Link></li>
                    <li><Link to="/Nosotros">Nosotros</Link></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;