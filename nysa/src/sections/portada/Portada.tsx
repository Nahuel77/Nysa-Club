'use client';
import { useState, useEffect } from 'react';
import Carrusel_frases from '../../components/carrusel_frases/Carrusel_frases';
import { useTheme } from '../../context/ThemeContext';
import './Portada.css';
import { motion } from 'framer-motion';

const Portada: React.FC = () => {
    const [themeMode, setThemeMode] = useState<boolean>(false);
    const { theme } = useTheme();

    useEffect(() => {
        if (theme == 'dark') {
            setThemeMode(true);
        } else {
            setThemeMode(false);
        }
    }, [theme]);

    return (
        <>
            <div className={`pattern ${themeMode ? 'dark' : ''}`}></div>
            <motion.div className="portada"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
            >
                <div className={`caratula-portada ${themeMode ? 'dark' : ''}`}></div>
                <div className={`portada-content ${themeMode ? 'dark' : ''}`}>
                    <div className='logo'><img className='nysa-logo' src="./img/nysa_logo.png" alt="Nysa" /></div>
                    <h1 className='marca'>Nysa Club</h1>
                    <div className='frases'><Carrusel_frases /></div>
                </div>
            </motion.div>
        </>
    );
}

export default Portada;