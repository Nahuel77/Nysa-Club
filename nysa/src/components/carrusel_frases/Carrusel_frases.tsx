'use client';
import { useEffect, useState } from 'react';
import './Carrusel_frases.css';
//hoja de ejemplo:
//https://docs.google.com/spreadsheets/d/e/2PACX-1vRE9hPwqh_cIi9zht8y_-tKaY8pJEtFd6pKnRM3ymV9o9jl2tmmVtHaoR8LigRPIjd0t3bfcuP2DU1d/pub?gid=0&single=true&output=csv

const Carrusel_frases: React.FC = () => {
    const [frases, setFrases] = useState<string[][]>([]);
    const [fraseActual, setFraseActual] = useState<string>("");
    const [fade, setFade] = useState<boolean>(false);

    useEffect(() => {
        fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRE9hPwqh_cIi9zht8y_-tKaY8pJEtFd6pKnRM3ymV9o9jl2tmmVtHaoR8LigRPIjd0t3bfcuP2DU1d/pub?gid=0&single=true&output=csv")
            .then(res => res.text())
            .then(csv => {
                const rows = csv.split("\n").map(row => [row.trim()]);
                setFrases(rows);
                setFraseActual(rows[0][0]);
            })
            .catch(err => console.error("Error al cargar frases: ", err));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setFraseActual((prevFrase) => {
                    const currentIndex = frases.findIndex((item) => item[0] === prevFrase);
                    const nextIndex = (currentIndex + 1) % frases.length;
                    return frases[nextIndex][0];
                });
                setFade(false);
            }, 500);
        }, 8000);
        return () => clearInterval(interval);
    }, [frases]);

    const cleanText = (text: string) => text.trim().replace(/^"(.*)"$/, "$1");

    return (
        <>
            <div className='carrusel'>
                <p className={`frase-portada ${fade ? "fade" : ""}`}>{cleanText(fraseActual)}</p>
            </div>
        </>
    );
}

export default Carrusel_frases;