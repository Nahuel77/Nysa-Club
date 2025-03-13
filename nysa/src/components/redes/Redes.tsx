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
                <div className={`redlnk ${themeMode ? 'dark' : ''}`}><img className='red-img' src="./img/youtb.png" alt="" /></div>
                <div className={`redlnk ${themeMode ? 'dark' : ''}`}><img className='red-img' src="./img/face.png" alt="" /></div>
                <div className={`redlnk ${themeMode ? 'dark' : ''}`}><img className='red-img' src="./img/insta.png" alt="" /></div>
            </div>
        </>
    );
}

export default Redes;