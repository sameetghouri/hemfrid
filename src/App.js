
import './App.css';
import Home from "../src/Components/pages/Home/Home";
import Home_Cleaning from './Components/pages/Home_cleaning/Home_cleaning';
import W_Home from './Components/pages/WindowCleaning/W_Home';
import D_Hero from './Components/pages/DeepCleaning/D_Hero';
import DHome from './Components/pages/DeepCleaning/D_Home';
import M_Home from './Components/pages/Moveout_Cleaning/M_Home';


import {

  
  Route,

  BrowserRouter,
  Router,
  Routes,
} from "react-router-dom";
import Navbar from './Components/Gernal_Components/Navbar';




function App() {
  
  return (

    <BrowserRouter>
    <div className="App ">
  
{/* 
<Navbar /> */}
<Routes>

  <Route path='/'  element={<Home /> } />
  <Route path='/Home_clean' inde element={<Home_Cleaning/> }/> 
  <Route path='/Window_clean' element={ <W_Home />} />
  <Route path='/Deep_Clean' element={ <DHome />} /> 
  <Route path='/Moving_Home' element={ <M_Home />} /> 

  <Route path='*' element={<div>It and error</div>}/>

</Routes>

</div>
</BrowserRouter>

 
  );
}

export default App;
