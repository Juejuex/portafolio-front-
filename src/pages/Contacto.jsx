import ContactForm from "../components/Contacto/Formulario";
import Footer from "../components/Navigation/Footer";
import Navbar from "../components/Navigation/Navbar";
import Layout from "../hocs/layouts/Layout";

function Contacto(){
    return(
    <Layout>
        <Navbar/>
        <ContactForm/>
        <Footer/>
    </Layout>
    )
}

export default Contacto;