import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = (props) => {
  return (
    <div className="bg-sky-50">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
