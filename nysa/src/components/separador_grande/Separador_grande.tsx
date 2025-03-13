import Carrusel_frases from '../carrusel_frases/Carrusel_frases';
import './Separador_grande.css';

const Separador_grande: React.FC = () => {

    return (
        <>
            <div className="separador_grande">
                <img className='nysa_wax' src="./img/nysa_wax_seal.png" alt="" />
            </div>
            <div className='frases_'><Carrusel_frases/></div>
        </>
    );
}

export default Separador_grande;