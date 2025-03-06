import './App.css';
import Foot from './components/foot/Foot';
import Navbar from './components/navbar/Navbar';
import Separator from './components/separator/Separator';
import Contacto from './sections/contacto/Contacto';
import Fechas from './sections/fechas/Fechas';
import Params from './sections/params/Params';
import Portada from './sections/portada/Portada';
import Quienes_somos from './sections/quienes_somos/Quienes_somos';
import Section_one from './sections/section_one/Section_one';

function App() {

  return (
    <>
      <Navbar/>
      <Portada/>
      <Separator/>
      <Section_one/>
      <Separator/>
      <Quienes_somos/>
      <Separator/>
      <Params/>
      <Separator/>
      <Fechas/>
      <Separator/>
      <Contacto/>
      <Foot/>
    </>
  )
}

export default App;