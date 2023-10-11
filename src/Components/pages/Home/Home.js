import Navbar from "../../Gernal_Components/Navbar";
import Footer from "../../Gernal_Components/footer";
import Hero from "../Home/Sections/Hero";
import WhyHermified from "./Sections/WhyHermfid";
import HelpWith from "./Sections/help_with";

const Home=()=>{

return(
    <>
    <div >

    
    <Navbar />
    <Hero />
    <HelpWith />
    <WhyHermified />
    <Footer />
    </div>
    </>
);

};

export default Home;