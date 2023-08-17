import Footer from "../components/Navigation/Footer";
import Navbar from "../components/Navigation/Navbar";
import Intro from "../components/Sobre_mi/Intro";
import Layout from "../hocs/layouts/Layout";

function Sobre_mi(){
    return(
    <Layout>
        <Navbar/>
            <Intro/>
        <Footer/>
    </Layout>
    )
}

export default Sobre_mi;