"use client";
import './Galeria.css';
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from 'react';
// import { getImages } from '@/api/apiService';

// type ImageType = {
//     id: string;
//     name: string;
//     url: string;
// };

const Galeria = () => {
    const [images, setImages] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -800, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 800, behavior: "smooth" });
        }
    };

    ////////////////////////////// Para conectar con las imagenes desde la API
    // useEffect(() => {
    //     const fetchImages = async () => {
    //         try {
    //             const res = await getImages();
    //             setImages(res.data);
    //         } catch (err) {
    //             console.error("Error al cargar imagenes: ", err);
    //         }
    //     };

    //     fetchImages();
    // }, []);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetch(
                    `https://www.googleapis.com/drive/v3/files?q='${process.env.NEXT_PUBLIC_FOLDER_ID}'+in+parents&key=${process.env.NEXT_PUBLIC_API_PASS}`
                );
                const data = await res.json();

                const imageUrls = data.files.map((file: any) =>
                    `https://drive.google.com/thumbnail?id=${file.id}`
                );

                setImages(imageUrls);
            } catch (error) {
                console.error("Error al obtener imágenes:", error);
            }
        };

        fetchImages();
    }, []);

    return (
        <>
            <h2 className='galeria-titulo'>Galería</h2>
            <div className="galeria-container">
                <button className="scroll-btn left" onClick={scrollLeft}>◀</button>
                <div className="galeria" ref={scrollRef}>
                    {images.map((url, index) => (
                        <img key={index} src={`${url}`} alt={`Imagen ${index}`} className="galeria-img" />
                    ))}
                </div>
                <button className="scroll-btn right" onClick={scrollRight}>▶</button>
            </div>
        </>
    );
}

const GaleriaCliente = dynamic(() => Promise.resolve(Galeria), {
    ssr: false
});

export default GaleriaCliente;