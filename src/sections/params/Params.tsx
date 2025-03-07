import './Params.css';
import { motion } from 'framer-motion';

const Params: React.FC = () => {
    return (
        <>
            <div className='params-container'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className='params-row'>
                    <div><img className='param-corona' src="corona_prix.png" alt="" /></div>
                    <div><img className='param-corona' src="corona_prix.png" alt="" /></div>
                    <div><img className='param-corona' src="corona_prix.png" alt="" /></div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className='params-row'>
                    <div><img className='param-corona' src="corona_prix.png" alt="" /></div>
                    <div><img className='param-corona' src="corona_prix.png" alt="" /></div>
                    <div><img className='param-corona' src="corona_prix.png" alt="" /></div>
                </motion.div>
            </div>
        </>
    );
};

export default Params;