import { useState } from 'react'
import './App.css'
import { Routes, Route , useLocation} from 'react-router-dom'
import Home from './webbsite/pages/Home'
import Nav from  './webbsite/compunents/Nav'
import Mec from './webbsite/pages/Mec'
import W from './webbsite/pages/W'
import C  from './webbsite/pages/C'
import F from './webbsite/pages/F'
import Auh from './webbsite/pages/A'
import J from './webbsite/pages/J'
import Mb from './webbsite/pages/Mb'
import Lih from './webbsite/pages/Lih'
import Spw from './webbsite/pages/Spw'
import B from './webbsite/pages/B'
import Foter from './webbsite/compunents/Foter'
import Login from './webbsite/pages/Login'
import Res from './webbsite/pages/Res'
import Msingle from './webbsite/singles/Msingle'
import Wsingle from './webbsite/singles/Wsingle'
import Ksingle from './webbsite/singles/Ksingle'
import Fsingle from './webbsite/singles/Fsingle'
import Asingle from './webbsite/singles/Asingle'
import Bsingle from './webbsite/singles/Bsingle'
import Jsingle from './webbsite/singles/Jsingle'
import Spsingle from './webbsite/singles/Spsingle'
import Phsingle from './webbsite/singles/Phsingle'
import Lsingle from './webbsite/singles/Lsingle'
import About from './webbsite/pages/About'
import Contact from "./webbsite/pages/Contact";
import Payment from './webbsite/singles/Payment'
import Place from './webbsite/singles/Place'




import Product from './webbsite/compunents/Product'
function App() {

   const location = useLocation();
  const hideNavFooter = location.pathname === '/' || location.pathname === '/res';

  return (
    <>
    <div style={{overflow:"hidden"}}>
         {!hideNavFooter && <Nav />}
    <Routes>
    <Route path="/home" element={<Home  />} />
      <Route path='/mec' element={<Mec/>}/>
      <Route path='/w' element={<W/>}/>
      <Route path='/c' element={<C/>}/>
      <Route path='/f' element={<F/>}/>
      <Route path='/a' element={<Auh/>}/>
      <Route path='/j' element={<J/>}/>
      <Route path='/mb' element={<Mb/>}/>
      <Route path='/lih' element={<Lih/>}/>
      <Route path='/spw' element={<Spw/>}/>
      <Route path='/b' element={<B/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/res' element={<Res/>}/>
      <Route path='/msingle/:id' element={<Msingle/>}/>
      <Route path='/wsingle/:id' element={<Wsingle/>}/>
      <Route path='/ksingle/:id' element={<Ksingle/>}/>  
      <Route path='/fsingle/:id' element={<Fsingle/>}/>
      <Route path='/asingle/:id' element={<Asingle/>}/>
      <Route path='/bsingle/:id' element={<Bsingle/>}/>
      <Route path='/jsingle/:id' element={<Jsingle/>}/>
      <Route path='/spsingle/:id' element={<Spsingle/>}/>
      <Route path='/phsingle/:id' element={<Phsingle/>}/>
      <Route path='/lsingle/:id' element={<Lsingle/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/conn' element={<Contact/>}/>
      <Route path='/pay' element={<Payment/>}/>
      <Route path='/place' element={<Place/>}/>
    
  
      
    </Routes>
   {!hideNavFooter && <Foter />} 
    </div>

      
    </>
  )
}

export default App
