import React from "react";
import Hero from "../components/Hero";
import Incentives from "../components/Incentives";
import Collections from "../components/Collections";
import Slider from "../components/Slider";
import Personalize from "../components/Personalize";
import FrequentlyAskedQuestions from "../components/FrequenlyAskedQuestions";

const Home = () => {
  return (
    <div className="mt-28">
      <Hero />
      <Incentives />
      <Collections />
      <Slider />
      <Personalize />
      <FrequentlyAskedQuestions />
    </div>
  );
};

export default Home;
