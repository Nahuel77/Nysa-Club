'use client';
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Redes from '../redes/Redes';
import Theme_toggle from '../theme_toggle/Theme_toggle';

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mediaQuery = window.matchMedia(query);
            const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);

            mediaQuery.addEventListener("change", handleChange);
            setMatches(mediaQuery.matches);

            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, [query]);

    return matches;
}

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [menuVisibility, setMenuVisivility] = useState<string>('none');
    const isMobile = useMediaQuery("(max-width: 768px)");

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        if (menuOpen) {
            setMenuVisivility('flex');
        } else {
            setMenuVisivility('none');
        }
    }, [menuOpen]);

    useEffect(() => {
        if (!isMobile) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
    }, [isMobile]);

    return (
        <>
            <div className='desk-navbar'>
                <div className='menu-toggle' onClick={handleMenu}>
                    <img src="./img/menu_wax.png" alt="menu" />
                </div>
                <div className='content-fold' style={{ display: menuVisibility }}>
                    <h2 className='menu-title'>Menu</h2>
                    <ul className='opciones'>
                        <li className='opcion'>
                            <a href="#quienes_somos">Quienes Somos</a>
                            <img className='underline' src="./img/under-line-menu.png" alt="underline" />
                        </li>
                        <li className='opcion'>
                            <a href="#fechas">Próximos Eventos</a>
                            <img className='underline' src="./img/under-line-menu.png" alt="underline" />
                        </li>
                        <li className='opcion'>
                            <a href="#contacto">Contacto</a>
                            <img className='underline' src="./img/under-line-menu.png" alt="underline" />
                        </li>
                    </ul>
                    <div className='redes-content'>
                        <Redes />
                    </div>
                    <div className='theme'>
                        <Theme_toggle />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;