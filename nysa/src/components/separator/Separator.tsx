'use client';
import React, { useEffect, useState } from "react";
import './Separator.css';
import { useTheme } from "../../context/ThemeContext";

const Separator: React.FC = () => {
    const [ themeMode, setThemeMode] = useState<boolean>(false);
    const { theme } = useTheme();

    useEffect(()=>{
        if(theme=='dark'){
            setThemeMode(true);
        }else{
            setThemeMode(false);
        }
    }, [theme]);

    return (
        <>
            <div className="separator-content">
                <img className={`separator ${ themeMode ? 'dark' : ''}`} src="./img/separator.png" alt="separator" />
            </div>
        </>
    );
}

export default Separator;