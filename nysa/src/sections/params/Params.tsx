'use client';
import './Params.css';
import { AnimatePresence, motion } from 'framer-motion';

const Params: React.FC = () => {
    return (
        <>
            <div className='params-container'>
                <AnimatePresence><motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                        className='params-row'>
                        <div><img className='param-corona' src="./img/corona_prix.png" alt="param" /></div>
                        <div><img className='param-corona' src="./img/corona_prix.png" alt="param" /></div>
                        <div><img className='param-corona' src="./img/corona_prix.png" alt="param" /></div>
                    </motion.div>
                </AnimatePresence>
                <AnimatePresence><motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: false }}
                        className='params-row'>
                        <div><img className='param-corona' src="./img/corona_prix.png" alt="param" /></div>
                        <div><img className='param-corona' src="./img/corona_prix.png" alt="param" /></div>
                        <div><img className='param-corona' src="./img/corona_prix.png" alt="param" /></div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    );
};

export default Params;