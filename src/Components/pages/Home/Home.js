import Navbar from "../../Gernal_Components/Navbar";
import Footer from "../../Gernal_Components/footer";
import Hero from "../Home/Sections/Hero";
import Appsection from "./Sections/Appsection";
import WhyHermified from "./Sections/WhyHermfid";
import HelpWith from "./Sections/help_with";
import Review from "./Sections/review";

const Home=()=>{

return(
    <>
    <div >

    
    <Navbar />
    <Hero />
    <HelpWith />
    <WhyHermified />
    <Review />
    <Appsection />
    <Footer />
    </div>
    </>
);

};

export default Home;