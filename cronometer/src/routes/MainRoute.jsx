import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { About } from '../pages/About/About';
import Homepage from '../pages/homepage/Homepage';
import { Support } from '../pages/Support/Support';



const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About/>}  />
        <Route path='/' element={<Homepage/>}  />
        <Route path='/support' element={<Support/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default MainRoute