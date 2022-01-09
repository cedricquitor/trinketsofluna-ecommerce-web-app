import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-sky-50">
      <Navbar />
      <div className="container mx-auto py-20">
        <div className="mt-12">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
