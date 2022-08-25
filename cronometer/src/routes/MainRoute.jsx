import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { About } from '../pages/About/About';
import Homepage from '../pages/homepage/Homepage';
import Plans from '../pages/plans/Plans';
import Settings from '../pages/settings/Settings';

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About/>}  />
        <Route path='/' element={<Homepage/>}  />
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </div>
  )
}

export default MainRoute