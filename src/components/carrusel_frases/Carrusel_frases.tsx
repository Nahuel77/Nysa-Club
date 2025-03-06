import { useEffect, useState } from 'react';
import './Carrusel_frases.css';
//hoja de ejemplo:
//https://docs.google.com/spreadsheets/d/e/2PACX-1vRE9hPwqh_cIi9zht8y_-tKaY8pJEtFd6pKnRM3ymV9o9jl2tmmVtHaoR8LigRPIjd0t3bfcuP2DU1d/pub?gid=0&single=true&output=csv

const Carrusel_frases: React.FC = () => {
    const [frases, setFrases] = useState<string[][]>([]);
    const [frase, setFrase] = useState<string>("");

    useEffect(() => {
        fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRE9hPwqh_cIi9zht8y_-tKaY8pJEtFd6pKnRM3ymV9o9jl2tmmVtHaoR8LigRPIjd0t3bfcuP2DU1d/pub?gid=0&single=true&output=csv")
            .then(res => res.text())
            .then(csv => {
                const rows = csv.split("\n").map(row => [row.trim()]);
                setFrases(rows);
            })
            .catch(err => console.error("Error al cargar frases: ", err));
    }, []);

    useEffect(() => {
        if (frases.length > 0) {
            const randomIndex = Math.floor(Math.random() * frases.length);
            setFrase(frases[randomIndex][0]);
        }
    }, [frases]);

    const cleanText = (text: string) => text.trim().replace(/^"(.*)"$/, "$1");

    return (
        <>
            <div>
                <p className='frase-portada'>{cleanText(frase)}</p>
            </div>
        </>
    );
}

export default Carrusel_frases;