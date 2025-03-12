'use client';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Theme_toggle.css';

const Theme_toggle: React.FC = () => {
    const { toggleTheme } = useTheme();
    const [ themeMode, setThemeMode ] = useState<boolean>(false);

    const handleTheme = () => {
        toggleTheme();
        setThemeMode(!themeMode);
    }


    return (
        <>
            <div className="theme-toggle" onClick={handleTheme}>
                <svg
                    className={`icon ${themeMode ? 'light' : ''}`}
                    height="2.5rem"
                    width="2.5rem"
                    viewBox="0 0 495.281 495.281"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        id="wine-glass"
                        d="M264.082,433.09V263.641c79.75-9.133,136.491-75.908,136.491-152.08
            c0-28.795-7.996-64.61-21.854-99.33C375.775,4.847,368.617,0,360.671,0H134.481
            c-7.951,0-15.108,4.847-18.049,12.232C103.92,43.581,94.199,80.534,94.728,114.633
            c1.54,75.125,57.814,140.143,136.323,148.913V433.09c-51.979,4.254-91.823,27.358-91.823,38.974
            c0,12.834,48.501,23.217,108.341,23.217c59.839,0,108.345-10.383,108.345-23.217
            C355.923,460.448,316.066,437.339,264.082,433.09z M143.823,33.021h207.502c10.361,28.255,16.227,56.47,16.227,78.541
            c0,5.359-0.476,10.61-1.16,15.792c-10.324-2.573-21.025-2.913-32.504,1.173
            c-29.977,10.673-49.411,17.509-79.909,5.549c-30.325-11.901-49.488-65.96-85.852-61.847
            c-14.447,1.626-26.842,6.378-38.031,12.979C132.692,68.828,137.222,51.028,143.823,33.021z"
                    />
                </svg>
            </div>
        </>
    );
}

export default Theme_toggle;