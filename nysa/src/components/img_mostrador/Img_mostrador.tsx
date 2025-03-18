"use client";
import { useEffect, useState } from 'react';
import './Img_mostrador.css';

interface geleriaProps {
    url: string;
    onClose: () => void;
}

const Img_mostrador: React.FC<geleriaProps> = ({ url, onClose }) => {
    // Cambiar de carpetas google a Claudinary

    return (
        <>
            <div className={`mostrador-container show`}>
                <img src={url? `https://lh3.googleusercontent.com/d/${url}=s880?authuser=0` : './img/loading.png'} alt="Imagen Nysa-Club" className="img-seleccionada" />
                <button className="close" onClick={onClose}>x</button>
            </div>
        </>
    );
}

export default Img_mostrador;