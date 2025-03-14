"use client";
import './Galeria.css';
import Masonry from 'react-masonry-css';
import dynamic from "next/dynamic";
import { useEffect, useState } from 'react';
import { getImages } from '@/api/apiService';

type ImageType = {
    id: string;
    name: string;
    url: string;
};

const Galeria = () => {
    const [images, setImages] = useState<ImageType[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await getImages();
                setImages(res.data);
            } catch (err) {
                console.error("Error al cargar imagenes: ", err);
            }
        };

        fetchImages();
    }, []);

    return (
        <>
            <div className="galeria-container">
                <Masonry
                    breakpointCols={{ default: 3, 768: 2, 500: 1 }}
                    className="galeria-masonry"
                    columnClassName="galeria-masonry-column"
                >
                    {images.map((img) => (
                        <img key={img.id} src={img.url} alt={img.name} className="galeria-img" />
                    ))}
                </Masonry>
            </div>
        </>
    );
}

const GaleriaCliente = dynamic(() => Promise.resolve(Galeria), {
    ssr: false
});

export default GaleriaCliente;