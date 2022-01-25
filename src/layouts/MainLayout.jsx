import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = (props) => {
  return (
    <div className="bg-sky-50 flex flex-col flex-between">
      <Navbar />
      <div className="container mx-auto py-20">{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
