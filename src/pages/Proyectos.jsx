import Footer from "../components/Navigation/Footer";
import Navbar from "../components/Navigation/Navbar";
import Galeria from "../components/Proyectos/Galeria";
import Layout from "../hocs/layouts/Layout";

function Proyectos(){
    return(
    <Layout>
        <Navbar/>
            <Galeria/>
        <Footer/>
    </Layout>
    )
}

export default Proyectos;