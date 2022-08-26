import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Footer from '../components/footer/Footer';
import { About } from '../pages/About/About';
import Addfood from '../pages/Diarypage/Diary/Addfood/Addfood';
import Energysummaryprogressbar from '../pages/Diarypage/Diary/Energysummaryprogressbar';
import Highlighted_container from '../pages/Diarypage/Diary/Highlighted_container';

import Homepage from '../pages/homepage/Homepage';
import { Support } from '../pages/Support/Support';
import Plans from '../pages/plans/Plans';
import Settings from '../pages/settings/Settings';


const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About/>}  />
        <Route path='/' element={<Homepage/>}  />
        <Route path='/support' element={<Support/>} />
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default MainRoute