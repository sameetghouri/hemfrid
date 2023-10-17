import Navbar from "../../Gernal_Components/Navbar";
import Dhero from "./D_Hero";
import DHero from "./D_Hero";
import Zipcode from "./D_zipcode";
import FAQ from "./Faq";
import Sabina from "./Sabina";
import Included from "./included";
import Tips from "./tips&news";
import Work from "./work";

const DHome=()=>{


    return (
        <div>
<Navbar />
<Dhero />
<Included />
<Work />
<FAQ />
<Sabina />
<Tips />
<Zipcode />
        </div>
    );

}

export default  DHome;