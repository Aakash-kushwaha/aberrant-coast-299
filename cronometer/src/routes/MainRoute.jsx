
import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About/About";

import Addfood from "../pages/Diarypage/Diary/Addfood/Addfood";
// import Addfood from "../pages/Diarypage/Diary/Addfood/Addfood";
// import Energysummaryprogressbar from "../pages/Diarypage/Diary/Energysummaryprogressbar";
// import Highlighted_container from "../pages/Diarypage/Diary/Highlighted_container";


import Homepage from "../pages/homepage/Homepage";
// import Plans from "../pages/plans/Plans";
// import Settings from "../pages/settings/Settings";
import Signup from "../pages/signup/Signup";

import { Support } from "../pages/Support/Support";
import Login from "../pages/Login/Login";
import Footer from "../components/footer/Footer";

import { Blog } from "../pages/Blogs/Blog"
import Navbar from "../components/header/Navbar";
import { Box, Progress } from "@chakra-ui/react";
import LoginHeader from "../components/header/LoginHeader";





const MainRoute = () => {
  return (
    <div>
       <LoginHeader></LoginHeader>
         {/* <Addfood></Addfood>     */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Addfood></Addfood>}></Route>
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<Blog />} /> 
        {/* <Route path="/plans" element={<Plans />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}
        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer></Footer> */}

    </div>
  );
};

export default MainRoute;
