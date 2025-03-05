import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div className='desk-navbar'>
                <div className='menu-toggle' onClick={handleMenu}>
                    <img src="/menu_wax.png" alt="menu" />
                </div>
                <div className='content-fold'>
                    <ul className='opciones'>
                        <li className='opcion'><a href="#">Quienes Somos</a></li>
                        <li className='opcion'><a href="#">Próximos Eventos</a></li>
                        <li className='opcion'><a href="#">Contacto</a></li>
                    </ul>
                    <div className='nysa_black_logo'>
                        <a href="#">
                            <img className='nysa_black' src="/nysa_logo_black.png" alt="Nysa Club" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;