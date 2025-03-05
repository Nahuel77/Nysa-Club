import Form from '../../components/form/Form';
import './Contacto.css';

const Contacto: React.FC = () => {
    return (
        <>
            <div className='contacto-container'>
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
                        <div className='redes'>
                            <div className="redlnk"><img className='red-img' src="youtb.png" alt="" /></div>
                            <div className="redlnk"><img className='red-img' src="face.png" alt="" /></div>
                            <div className="redlnk"><img className='red-img' src="insta.png" alt="" /></div>
                        </div>
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