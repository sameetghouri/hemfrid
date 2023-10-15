import Navbar from "../../Gernal_Components/Navbar";
import Footer from "../../Gernal_Components/footer";
import Includesection from "../Home_cleaning/sections/includesection";
import Anders from "./section/Anderstaby";
import Hero from "./section/Hero";
import Work from "./section/How_Does_it_work";
import Letus from "./section/Letus_everyday";
import Cleaningtips from "./section/cleaningtips";
import Faq from "./section/faq";

const W_Home=()=>{

return (
   <div>
<Navbar />
<Hero/>
<Includesection />
<Work />
<Faq />
<Anders />
<Cleaningtips />
<Letus />

<Footer />
   </div>
);

}

export default  W_Home;