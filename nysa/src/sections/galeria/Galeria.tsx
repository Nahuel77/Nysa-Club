"use client";
import './Galeria.css';
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';


// import { getImages } from '@/api/apiService';

// type ImageType = {
//     id: string;
//     name: string;
//     url: string;
// };

const Galeria = () => {
    const [images, setImages] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollAmount, setScrollAmount] = useState(0);

    useEffect(()=>{
        const handleResize = () => {
            setScrollAmount(window.innerWidth * 0.7);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
            <AnimatePresence><motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                id="galeria"
            >
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
            </motion.div></AnimatePresence>
        </>
    );
}

const GaleriaCliente = dynamic(() => Promise.resolve(Galeria), {
    ssr: false
});

export default GaleriaCliente;