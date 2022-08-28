import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About/About";
import Addfood from "../pages/Diarypage/Diary/Addfood/Addfood";
import Homepage from "../pages/homepage/Homepage";
import Signup from "../pages/signup/Signup";
import { Support } from "../pages/Support/Support";
import { Blog } from "../pages/Blogs/Blog";
import Navbar from "../components/header/Navbar";
import Login from "../pages/Login/Login";
import { Box, Progress } from "@chakra-ui/react";
import LoginHeader from "../components/header/LoginHeader";
import Footer from "../components/footer/footer";
import Forget from "../pages/ForgetPassword/forget";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";


const MainRoute = () => {
  let token = JSON.parse(localStorage.getItem("token"))
  console.log(token,"token")
  return (
    <div>

{token?<LoginHeader></LoginHeader>:<Navbar></Navbar>}
    
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<PrivateRoute><Addfood></Addfood></PrivateRoute>}></Route>
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Forget />} />
         <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
      {/* <Footer /> */}

    </div>
  );
};

export default MainRoute;
