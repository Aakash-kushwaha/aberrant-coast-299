
import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About/About";
import Addfood from "../pages/Diarypage/Diary/Addfood/Addfood";
import Energysummaryprogressbar from "../pages/Diarypage/Diary/Energysummaryprogressbar";
import Highlighted_container from "../pages/Diarypage/Diary/Highlighted_container";

import Homepage from "../pages/homepage/Homepage";
import Plans from "../pages/plans/Plans";
import Settings from "../pages/settings/Settings";
import Signup from "../pages/signup/Signup";
import Footer from "../components/footer/footer";
import { Support } from "../pages/Support/Support";
import Login from "../pages/Login/Login";
import Footer from '../components/footer/Footer';
import { Support } from '../pages/Support/Support';



const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRoute;
