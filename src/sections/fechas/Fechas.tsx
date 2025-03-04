import './Fechas.css';

const Fechas: React.FC = () => {
    return (
        <>
            <div className='fechas-container'>
                <h2>Próximos Eventos</h2>
                <div className='fechas-content'>
                    <div className='fechas-caratulas'>
                        <img className='ninfa_caratula' src="ninfa_caratula.png" alt="Nysa" />
                    </div>
                    <ul className='fechas'>
                        <li className="fecha">12/3 Blue Note - Mar del Plata</li>
                        <li className="fecha">16/3 Tylor Bar - Miramar</li>
                        <li className="fecha">25/3 Ruffini - Mar del Plata</li>
                        <li className="fecha">5/4 Almaloba Café - Montmartre, Francia</li>
                        <li className="fecha">15/4 Avalon - Batan</li>
                        <li className="fecha">18/4 Blue Note - Mar del Plata</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Fechas;