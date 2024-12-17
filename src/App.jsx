import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Ingredients from './Pages/Ingredients'
import Navbar from './Components/Navbar'
import { useState } from 'react'

function App() {
  const [food,setFood]= useState([]);
return (
    <div>

    <Navbar setFood= {setFood}/>
    
  <Routes>
    <Route path='/' element={<Home food={food} />}/>
    <Route path='/About' element={<About />}/>
    <Route path='/Ingredients' element={<Ingredients/>}/> 
  </Routes>

    </div>
  );
}

export default App;
