import Footer from "../components/Navigation/Footer";
import Navbar from "../components/Navigation/Navbar";
import Layout from "../hocs/layouts/Layout";

function Error404(){
    return(
        <Layout>
        <Navbar/>
        <div className="pt-20 pb-10">
            Error404
        </div>
        <Footer/>
    </Layout>
    )
}

export default Error404;