import Carrusel_frases from '../../components/carrusel_frases/Carrusel_frases';
import './Portada.css';
import { motion } from 'framer-motion';

const Portada: React.FC = () => {

    return (
        <>
            <motion.div className='portada'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                >
                <div className='tono-portada'>
                    <div className='logo'><img className='nysa-logo' src="./img/nysa_logo.png" alt="Nysa" /></div>
                    <h1 className='marca'>Nysa Club</h1>
                    <div><Carrusel_frases /></div>
                </div>
            </motion.div>
        </>
    );
}

export default Portada;