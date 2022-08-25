import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { About } from '../pages/About/About';
import Addfood from '../pages/Diarypage/Diary/Addfood/Addfood';
import Energysummaryprogressbar from '../pages/Diarypage/Diary/Energysummaryprogressbar';
import Highlighted_container from '../pages/Diarypage/Diary/Highlighted_container';

import Homepage from '../pages/homepage/Homepage';



const MainRoute = () => {
  return (
    <div>
    <Addfood></Addfood>
     {/* <Energysummaryprogressbar></Energysummaryprogressbar>
     <Highlighted_container></Highlighted_container> */}
      <Routes>
        {/* <Route path='/a
          <Addfood>
        bout' element={<About/>}  />
        <Route path='/' element={<Homepage/>}  /> */}
      </Routes>
    </div>
  )
}

export default MainRoute