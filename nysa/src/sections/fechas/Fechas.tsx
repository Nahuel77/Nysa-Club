'use client';
import { useEffect, useState } from 'react';
import './Fechas.css';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

//hoja de ejemplo:
//https://docs.google.com/spreadsheets/d/e/2PACX-1vSq-v8K-lSSxo6XSSGBQiHaha3VZqnw0boPljrEmP1_rxZJy-h9Cw_C6LyjV8b_kVfLWkYLpUlQN6jA/pub?gid=0&single=true&output=csv

const Fechas: React.FC = () => {
    const [fechas, setFechas] = useState<string[][]>([]);
    const [themeMode, setThemeMode] = useState<boolean>(false);
    const { theme } = useTheme();

    useEffect(() => {
        if (theme == 'dark') {
            setThemeMode(true);
        } else {
            setThemeMode(false);
        }
    }, [theme]);

    useEffect(() => {
        fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSq-v8K-lSSxo6XSSGBQiHaha3VZqnw0boPljrEmP1_rxZJy-h9Cw_C6LyjV8b_kVfLWkYLpUlQN6jA/pub?gid=0&single=true&output=csv")
            .then(res => res.text())
            .then(csv => {
                const rows = csv.split("\n").map(row => row.split(","));
                setFechas(rows);
            })
            .catch(err => console.error("Error al cargar las fechas: ", err));
    }, []);

    const cleanText = (text: string) => text.trim().replace(/^"(.*)"$/, "$1");

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className='fechas-container' id='fechas'>
                <h2>Próximos Eventos</h2>
                <div className='fechas-content'>
                    <div className='fechas-caratulas'>
                        <img className={`ninfa_caratula ${themeMode ? 'dark' : ''}`} src="./img/ninfa_caratula.png" alt="Nysa" />
                    </div>
                    <ul className='fechas'>
                        {fechas.map((row, index) => (
                            <li className="fecha" key={index}>
                                {cleanText(row.join(" - "))}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </>
    );
}

export default Fechas;