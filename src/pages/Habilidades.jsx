import Tarjetas from "../components/Habilidades/Tarjetas";
import Footer from "../components/Navigation/Footer";
import Navbar from "../components/Navigation/Navbar";
import Layout from "../hocs/layouts/Layout";

function Habilidades(){
    return(
    <Layout>
        <Navbar/>
            <Tarjetas/>
        <Footer/>
    </Layout>
    )
}

export default Habilidades;