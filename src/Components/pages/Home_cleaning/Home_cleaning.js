import Navbar from "../../Gernal_Components/Navbar";
import Footer from "../../Gernal_Components/Footer";
import Tipsinsp from "../Home/Sections/Tips&Insp";
import StepS from "./sections/3setps";
import Emma from "./sections/Emma";
import AskedSection from "./sections/FrequentlyAsked";
import Hero from "./sections/Hero_section";
import Includesection from "./sections/includesection";
import Premium from "./sections/premium";
import TNews from "./sections/tips&news";
import ZipeCode from "./sections/zipcode";


const Home_Cleaning=()=>{

    return (<div>
<Navbar/>
<Hero />
<Includesection />

<StepS />
<Premium />
<AskedSection />
<Emma />
<TNews />
<ZipeCode />
<Footer/>


    </div>);

}

export default Home_Cleaning;