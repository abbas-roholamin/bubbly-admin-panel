import { Outlet } from "react-router-dom";
import React from "react";

import { SideBarContextProdiver } from "../../context/SideBarContext";
import Broadcast from "../../components/broadcast/Broadcast";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import SideBar from "./sidebar/SideBar";

import "./layout.css";

const Layout = () => {
  return (
    <>
      <SideBarContextProdiver>
        <Navbar />
        <div className=" main_container">
          <SideBar />
          <div className="page_holder">
            <div className="px-lg-4 px-xl-5 container-fluid">
              <Broadcast />
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </SideBarContextProdiver>
    </>
  );
};

export default Layout;
