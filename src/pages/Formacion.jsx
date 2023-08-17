import Carrusel from "../components/Formacion/Carrusel";
import Formacion_tarjeta from "../components/Formacion/Formaciontarjeta";
import Footer from "../components/Navigation/Footer";
import Navbar from "../components/Navigation/Navbar";
import Layout from "../hocs/layouts/Layout";

function Formacion(){
    return(
    <Layout>
        <Navbar/>
            <Formacion_tarjeta/>
            <Carrusel/>
        <Footer/>
    </Layout>
    )
}

export default Formacion;