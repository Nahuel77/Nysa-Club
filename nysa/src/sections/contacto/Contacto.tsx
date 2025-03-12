'use client';
import Form from '../../components/form/Form';
import Redes from '../../components/redes/Redes';
import { AnimatePresence, motion } from 'framer-motion';
import './Contacto.css';

const Contacto: React.FC = () => {
    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className='contacto-container' id='contacto'>
                    <h2>Contacto</h2>
                    <div className='contacto'>
                        <div className='contacto-info'>
                            <p className="info">Luciana Ambrosio</p>
                            <p className="info">Fundadora - Sommelier</p>
                            <p className="info">Cel: +54 9 2236 81-4668</p>
                            <p className="info">nysaclub@gmail.com</p>
                            <div className='city'>
                                <p className="info info-city">Mar del Plata</p>
                                <p className="info info-city">Buenos Aires - Argentina</p>
                            </div>
                            <Redes />
                        </div>
                        <div className='contacto-form'>
                            <Form />
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export default Contacto;