import Carrusel_frases from '../../components/carrusel_frases/Carrusel_frases';
import './Portada.css';

const Portada: React.FC = () => {

    return (
        <>
            <div className='portada'>
                <div className='tono-portada'>
                    <div className='logo'><img className='nysa-logo' src="./nysa_logo.png" alt="Nysa" /></div>
                    <h1 className='marca'>Nysa Club</h1>
                    <div><Carrusel_frases /></div>
                </div>
            </div>
        </>
    );
}

export default Portada;