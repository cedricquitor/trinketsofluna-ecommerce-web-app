import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Collections from "../components/Collections";
import Carousel from "../components/Carousel";
import Personalize from "../components/Personalize";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-sky-50">
      <Navbar />
      <div className="container mx-auto py-20">
        <div className="mt-28">
          <Hero />
          <Collections />
          <Carousel />
          <Personalize />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
