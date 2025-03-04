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
                        <p className="info">Cel: +54 9 2234 78-4642</p>
                        <p className="info">nysaclub@nysa.com</p>
                        <p className="info">Mar del Plata</p>
                        <p className="info">Buenos Aires - Argentina</p>
                        <div className='redes'>
                            <div className="redlnk"><img className='red-img' src="youtb.png" alt="" /></div>
                            <div className="redlnk"><img className='red-img' src="face.png" alt="" /></div>
                            <div className="redlnk"><img className='red-img' src="insta.png" alt="" /></div>
                        </div>
                    </div>
                    <div className='contacto-form'>
                        <Form/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contacto;