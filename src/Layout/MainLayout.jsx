import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Page/Shared/Navbar/Navbar";
import Footer from "../Page/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto w-full flex-1">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
