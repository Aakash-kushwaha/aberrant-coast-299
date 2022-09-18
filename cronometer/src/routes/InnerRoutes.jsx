import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Addfood from '../pages/Diarypage/Diary/Addfood/Addfood'
import InnerNav from '../pages/Diarypage/Diary/InnerNavbar'
import Plans from '../pages/plans/Plans'
import Settings from '../pages/settings/Settings'

const InnerRoutes = () => {
  return (
    <div>
    <InnerNav></InnerNav>
    
        <Routes>
            <Route path="/" element={<Addfood></Addfood>}></Route>
        </Routes>
    </div>
  )
}

export default InnerRoutes