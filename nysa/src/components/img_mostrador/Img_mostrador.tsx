"use client";
import { useEffect, useState } from 'react';
import './Img_mostrador.css';

interface geleriaProps {
    url: string;
    onClose: () => void;
}

const Img_mostrador: React.FC<geleriaProps> = ({ url, onClose }) => {

    return (
        <>
            <div className={`mostrador-container show`}>
                <button className="close" onClick={onClose}>x</button>
                <img src={`https://lh3.googleusercontent.com/d/${url}=s880?authuser=0`} alt="Imagen Nysa-Club" className="img-seleccionada" />
            </div>
        </>
    );
}

export default Img_mostrador;