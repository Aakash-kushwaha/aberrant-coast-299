import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { About } from '../pages/About/About';



const RoutePage = () => {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About/>}  />
      </Routes>
    </div>
  )
}

export default RoutePage