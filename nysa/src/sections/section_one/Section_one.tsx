'use client';
import './Section_one.css';
import { motion, AnimatePresence } from 'framer-motion';

const Section_one: React.FC = () => {

    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className='container_s_one'>
                    <div className='head_s_one'>
                        <h3>Experiencia | Catas Guiadas | Eventos</h3>
                    </div>
                    <div className='content_s_one'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti numquam exercitationem quia officia error, deleniti dicta accusantium consequuntur quo harum, aliquam ab omnis neque delectus, veritatis aperiam! Recusandae.
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export default Section_one;