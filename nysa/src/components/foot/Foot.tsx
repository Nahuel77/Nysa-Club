import React from 'react';
import './Foot.css';

const Foot: React.FC = () => {
    return (
        <>
            <div className='foot'>
                <p className='foot-info'>Desarrollado por <a className='foot-lnk' href="https://nahuel77.github.io/" target="_blank">Nahuel Calcara</a></p>
                <p className='foot-info'>© {new Date().getFullYear()} Nysa Club. Todos los derechos reservados.</p>
            </div>
        </>
    );
}

export default Foot;