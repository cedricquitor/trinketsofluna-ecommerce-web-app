import React from "react";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import Slider from "../components/Slider";
import Personalize from "../components/Personalize";

const Home = () => {
  return (
    <div className="mt-28">
      <Hero />
      <Collections />
      <Slider />
      <Personalize />
    </div>
  );
};

export default Home;
