import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { About } from '../pages/About/About';
import Energysummaryprogressbar from '../pages/Diarypage/Diary/Energysummaryprogressbar';
import Homepage from '../pages/homepage/Homepage';



const MainRoute = () => {
  return (
    <div>


      <Routes>
        <Route path='/about' element={<About/>}  />
        <Route path='/' element={<Homepage/>}  />
      </Routes>
    </div>
  )
}

export default MainRoute