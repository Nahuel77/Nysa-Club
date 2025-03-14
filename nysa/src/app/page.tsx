import Separador_grande from "@/components/separador_grande/Separador_grande";
import Separator from "@/components/separator/Separator";
import Contacto from "@/sections/contacto/Contacto";
import Fechas from "@/sections/fechas/Fechas";
import Params from "@/sections/params/Params";
import Portada from "@/sections/portada/Portada";
import Quienes_somos from "@/sections/quienes_somos/Quienes_somos";
import Section_one from "@/sections/section_one/Section_one";
import styles from "./page.module.css";
import GaleriaCliente from "@/sections/galeria/Galeria";

export default function Home() {
  
  return (
    <div className={styles.page}>
        <Portada />
        <Separador_grande />
        <Separator />
        <Section_one />
        <Separator />
        <Quienes_somos />
        <Separator />
        {/* <GaleriaCliente /> */}
        <Separator />
        <Params />
        <Separator />
        <Fechas />
        <Separator />
        <Contacto />
    </div>
  );
}
