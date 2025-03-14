import { useTheme } from '@/context/ThemeContext';
import { useState, useEffect } from 'react';
import './Redes.css';

const Redes: React.FC = () => {
    const [themeMode, setThemeMode] = useState<boolean>(false);
    const { theme } = useTheme();

    useEffect(() => {
        if (theme == 'dark') {
            setThemeMode(true);
        } else {
            setThemeMode(false);
        }
    }, [theme]);

    return (

        <>
            <div className='redes'>
                <div className={`redlnk ${themeMode ? 'dark' : ''}`}>
                    <a href="https://www.youtube.com/nysaclub" target="_blank" rel="noopener noreferrer">
                        <img className='red-img' src="./img/youtb.png" alt="" />
                    </a>
                </div>
                <div className={`redlnk ${themeMode ? 'dark' : ''}`}>
                    <a href="https://www.facebook.com/nysaclubmdq" target="_blank" rel="noopener noreferrer">
                        <img className='red-img' src="./img/face.png" alt="" />
                    </a >
                </div>
                <div className={`redlnk ${themeMode ? 'dark' : ''}`}>
                    <a href="https://www.instagram.com/nysaclub/" target="_blank" rel="noopener noreferrer">
                        <img className='red-img' src="./img/insta.png" alt="" />
                    </a >
                </div>
            </div >
        </>
    );
}

export default Redes;