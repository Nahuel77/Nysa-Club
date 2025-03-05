import React, { useEffect, useState } from 'react';
import './Navbar.css';

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
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
                    <img src="/menu_wax.png" alt="menu" />
                </div>
                <div className='content-fold' style={{ display: menuVisibility }}>
                    <h2 className='menu-title'>Menu</h2>
                    <ul className='opciones'>
                        <li className='opcion'>
                            <a href="#">Quienes Somos</a>
                            <img className='underline' src="under-line-menu.png" alt="underline" />
                        </li>
                        <li className='opcion'>
                            <a href="#">Próximos Eventos</a>
                            <img className='underline' src="under-line-menu.png" alt="underline" />
                        </li>
                        <li className='opcion'>
                            <a href="#">Contacto</a>
                            <img className='underline' src="under-line-menu.png" alt="underline" />
                        </li>
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