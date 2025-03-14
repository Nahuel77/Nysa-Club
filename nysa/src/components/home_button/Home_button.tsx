'use client';
import { useEffect, useState } from 'react';
import './Home_button.css';
import { useTheme } from '@/context/ThemeContext';

const Home_button = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleHomeBtn = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            <div className={`home-button ${isVisible ? "show" : "hide"}`} onClick={handleHomeBtn}>
                <img className={`top ${theme}`} src="./img/top.png" alt="to top" />
            </div>
        </>
    );
}

export default Home_button;