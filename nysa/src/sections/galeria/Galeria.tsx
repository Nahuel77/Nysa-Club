import './Galeria.css';
import Masonry from 'react-masonry-css';

const Galeria = () => {

    return (
        <>
            <div className="galeria-container">
                <Masonry
                    breakpointCols={3}
                    className="galeria-masonry"
                    columnClassName="galeria-masonry-column"
                ></Masonry>
            </div>
        </>
    );
}

export default Galeria;