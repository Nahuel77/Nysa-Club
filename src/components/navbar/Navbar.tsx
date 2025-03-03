import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {

    return (
        <>
            <div className='navbar'>
                <div className='menu-toggle'>
                    <img src="/menu_wax.png" alt="menu" />
                </div>
                <div className='opciones'>
                    <div className='opcion'><Link to="/">Quienes Somos</Link></div>
                    <div className='opcion'><Link to="/">Próximos Eventos</Link></div>
                    <div className='opcion'><Link to="/">Contacto</Link></div>
                </div>
                <div>
                    <Link to="/">
                        <img className='nysa_black' src="/nysa_logo_black.png" alt="Nysa Club" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;