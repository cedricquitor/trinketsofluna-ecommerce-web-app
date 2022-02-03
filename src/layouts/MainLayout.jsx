import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = (props) => {
  return (
    <div className="bg-sky-50 flex flex-col justify-between transition duration-500 dark:bg-gray-800">
      <Navbar />
      <div className="my-20">{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
