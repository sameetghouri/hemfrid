
import './App.css';
import Home from "../src/Components/pages/Home/Home";
import Home_Cleaning from './Components/pages/Homecleaning/Home_cleaning';
import Window_Clean from './Components/pages/WindowCleaning/Window_Clean';
import DHome from './Components/pages/DeepCleaning/D_Home';
import Moveout_cleaning from './Components/pages/MoveoutCleaning/Moveout_cleaning';

import {Route,BrowserRouter,Routes,} from "react-router-dom";
import Navbar from './Components/Gernal_Components/Navbar';
import Footer from './Components/Gernal_Components/Footer';
import { ChakraProvider } from '@chakra-ui/react'





function App() {
  
  return (
<ChakraProvider>
    <BrowserRouter>
    <div className="App text-center text-black "> 

<Navbar /> 
<Routes>

  <Route path='/'  element={<Home /> } />
  <Route path='/Home_clean' inde element={<Home_Cleaning/> }/> 
  <Route path='/Window_clean' element={ <Window_Clean />} />
  <Route path='/Deep_Clean' element={ <DHome />} /> 
  <Route path='/Moving_Home' element={ <Moveout_cleaning />} /> 

  <Route path='*' element={<div>It and error</div>}/>

</Routes>
<Footer/>

</div>
</BrowserRouter>
</ChakraProvider>
 
  );
}

export default App;
