
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
<Hero/>
<Includesection />
<Work />
<Faq />
<Anders />
<Cleaningtips />
<Letus />

   </div>
);

}

export default  W_Home;