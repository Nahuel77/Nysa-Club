import { useState, useEffect } from 'react';
import './App.css';
import Foot from './components/foot/Foot';
import Navbar from './components/navbar/Navbar';
import Separador_grande from './components/separador_grande/Separador_grande';
import Separator from './components/separator/Separator';
import { useTheme } from './context/ThemeContext';
import Contacto from './sections/contacto/Contacto';
import Fechas from './sections/fechas/Fechas';
import Params from './sections/params/Params';
import Portada from './sections/portada/Portada';
import Quienes_somos from './sections/quienes_somos/Quienes_somos';
import Section_one from './sections/section_one/Section_one';

function App() {
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
      <div className={`pattern ${themeMode ? 'dark' : ''}`}>
      </div>
      <Navbar />
      <Portada />
      <Separador_grande />
      <Separator />
      <Section_one />
      <Separator />
      <Quienes_somos />
      <Separator />
      <Params />
      <Separator />
      <Fechas />
      <Separator />
      <Contacto />
      <Foot />
    </>
  )
}

export default App;