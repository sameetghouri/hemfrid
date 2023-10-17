import Navbar from "../../Gernal_Components/Navbar";
import Faq from "../WindowCleaning/section/faq";
import MFaq from "./sections/Faq";
import MHero from "./sections/Hero";
import Mlet from "./sections/Letus";
import MLet from "./sections/Letus";
import Movingtip from "./sections/Movingcleantips";
import Todo from "./sections/Todo";
import Include from "./sections/include";
import MWork from "./sections/work";

const MHome=()=>{

return (
    <div>
      <Navbar />
<MHero />
<Include />
<Todo />
<MWork />
<MFaq />
<Movingtip />
<Mlet />
    </div>
)


}

export default MHome;