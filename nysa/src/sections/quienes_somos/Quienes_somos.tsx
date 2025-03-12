'use client';
import './Quienes_somos.css';
import { AnimatePresence, motion } from 'framer-motion';

const Quienes_somos: React.FC = () => {

    return (
            <AnimatePresence><motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className='quienes_container' id='quienes_somos'>
                    <h2>Quienes Somos</h2>
                    <div className='quienes_content'>
                        <div className='elegant-frame'><img className='nymphes_de_Nysa' src="./img/elegant_frame.png" alt="frame" /></div>
                        <p className='quienes_text'>En Nysa Club ®, nos apasiona el arte de disfrutar el vino y compartirlo con quienes buscan vivir experiencias únicas. Somos un espacio dedicado a los amantes del vino, donde cada cata y evento se convierte en una experiencia inolvidable.</p>
                        <p className='quienes_text'>Guiados por nuestra experiencia como Sommelier, ofrecemos una propuesta exclusiva y personalizada que une la naturaleza, la cultura y el arte del buen vino.</p>
                        <p className='quienes_text'>Ya sea en colaboración con The Wine Plan, donde organizamos eventos de catas únicas, o de manera independiente, nuestro objetivo es crear momentos especiales para aquellos que desean explorar y disfrutar del fascinante mundo vinícola.</p>
                        <p className='quienes_text'>Además, como Embajadora de Wine on Challenge, brindamos una nueva forma de interactuar con el vino a través de un innovador juego que permite adivinar el tipo de vino basándose en los gustos y preferencias de cada participante.</p>
                        <p className='quienes_text'>En Nysa Club ®, cada encuentro es una invitación a vivir y saborear el vino de una manera auténtica, divertida y educativa. Te invitamos a ser parte de esta experiencia exclusiva, ¡donde cada copa cuenta una historia!</p>
                    </div>
                </motion.div>
            </AnimatePresence>
    );
}

export default Quienes_somos;