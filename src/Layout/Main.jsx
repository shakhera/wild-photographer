import React from "react";
import Navbar from "../pages/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "@/components/molecules/Footer";
import MainNav from "@/components/molecules/MainNavbar";
import UpperNavbar from "@/components/molecules/UpperNavbar";

const Main = () => {
  return (
    <div>
      <UpperNavbar />
      <MainNav />
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
