import Navbar from "../../Gernal_Components/Navbar";
import Footer from "../../Gernal_Components/footer";
import Hero from "../Home/Sections/Hero";
import TimeforSimple from "./Sections/TimeforSimpler";
import Tipsinsp from "./Sections/Tips&Insp";

// import Appsection from "./Sections/Appsection";
import WhyHermified from "./Sections/WhyHermfid";
import Cleaningtoloc from "./Sections/cleaning_to_loc";
import HelpWith from "./Sections/help_with";
import Review from "./Sections/review";
import WorkAtHemfird from "./Sections/workatHemfird";

const Home=()=>{

return(
    <>
    <div >

    
    <Navbar />
    <Hero />
    <HelpWith />
    <WhyHermified />
    <Review />
    {/* <Appsection /> */}
    <Tipsinsp />
    <WorkAtHemfird />
    <Cleaningtoloc />
    <TimeforSimple />
    <Footer />
    </div>
    </>
);

};

export default Home;