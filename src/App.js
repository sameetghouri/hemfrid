
import './App.css';
import Home from "../src/Components/pages/Home/Home";
import Home_Cleaning from './Components/pages/Home_cleaning/Home_cleaning';
import W_Home from './Components/pages/WindowCleaning/W_Home';
import D_Hero from './Components/pages/DeepCleaning/D_Hero';
import DHome from './Components/pages/DeepCleaning/D_Home';
import M_Home from './Components/pages/Moveout_Cleaning/M_Home';

function App() {
  return (
    <div className="App ">
      <Home /> 
    {/* <Home_Cleaning />
   <W_Home /> */}
  {/* <DHome />
<M_Home /> */}
    </div>
  );
}

export default App;
