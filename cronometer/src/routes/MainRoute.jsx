
import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About/About";
import Addfood from "../pages/Diarypage/Diary/Addfood/Addfood";

import Homepage from "../pages/homepage/Homepage";
import Plans from "../pages/plans/Plans";
import Settings from "../pages/settings/Settings";
import Signup from "../pages/signup/Signup";

import { Support } from "../pages/Support/Support";
import Login from "../pages/Login/Login";
import Footer from "../components/footer/Footer";





const MainRoute = () => {
  return (
    <div>
         <Addfood></Addfood>
      <Routes>
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>

    </div>
  );
};

export default MainRoute;
