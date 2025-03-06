import Form from '../../components/form/Form';
import Redes from '../../components/redes/Redes';
import './Contacto.css';

const Contacto: React.FC = () => {
    return (
        <>
            <div className='contacto-container' id='contacto'>
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
                        <Redes/>
                    </div>
                    <div className='contacto-form'>
                        <Form />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacto;