import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About/About";
import Addfood from "../pages/Diarypage/Diary/Addfood/Addfood";
import Homepage from "../pages/homepage/Homepage";
import Signup from "../pages/signup/Signup";
import { Support } from "../pages/Support/Support";
import { Blog } from "../pages/Blogs/Blog";
import Login from "../pages/Login/Login";
import Forget from "../pages/ForgetPassword/forget";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import InnerNav from "../pages/Diarypage/Diary/InnerNavbar";
import InnerRoutes from "./InnerRoutes";
import Plans from "../pages/plans/Plans";
import Settings from "../pages/settings/Settings";
import Footer from "../components/footer/Footer";


const MainRoute = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  console.log(token, "token");
  return (
    <div>
    {/* <InnerNav></InnerNav> */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<PrivateRoute><Addfood></Addfood></PrivateRoute>}></Route>
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plans" element={<Plans></Plans>}></Route>
        <Route path="/settings" element={<Settings></Settings>}></Route>
        {/* <Route path="/forgotpassword" element={<Forget />} /> */}
        {/* <Route path="/profile" element={<Profile></Profile>}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRoute;
