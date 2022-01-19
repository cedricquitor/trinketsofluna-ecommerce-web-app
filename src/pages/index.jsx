import React from "react";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import Carousel from "../components/Carousel";
import Personalize from "../components/Personalize";

const Home = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="mt-28">
        <Hero />
        <Collections />
        <Carousel />
        <Personalize />
      </div>
    </div>
  );
};

export default Home;
