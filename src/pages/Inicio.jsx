import Hero from "../components/Hero";
import Seccion from "../components/Seccion";
import Productos from "../components/Productos";
import Footer from "../components/Footer";

// 👇 Importá las imágenes correctamente
import bolsas2 from "../assets/bolsas2.jpg";
import bolsas3 from "../assets/bolsas3.jpg";

export default function Inicio() {
    return (
    <>
        <Hero />
        <Seccion
        fondo={bolsas2} // 👈 ahora sí se pasa la variable, no un string
        titulo="Compromiso ecológico"
        texto="Nuestras bolsas están hechas con materiales reutilizables y resistentes, ideales para cuidar el planeta."
        />
        <Seccion
        fondo={bolsas3}
        titulo="Diseño y estilo"
        texto="Cada modelo está pensado para combinar funcionalidad con una estética moderna y amigable."
        />
        <Productos />
        <Footer />
    </>
    );
}
