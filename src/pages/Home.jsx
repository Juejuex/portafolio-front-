import Info from "../components/Home/Info";
import Footer from "../components/Navigation/Footer";
import Navbar from "../components/Navigation/Navbar";
import Layout from "../hocs/layouts/Layout";

function Home(){
    return(
    <Layout>
        <Navbar/>
        <div className="pt-20 pb-10">
           <Info/>
        </div>
        <Footer/>
    </Layout>
    )
}

export default Home;