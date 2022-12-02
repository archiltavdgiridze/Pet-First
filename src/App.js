import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Service from "./components/Service";
import Comment from "./components/Comment";
import Review from "./components/Review";
import Subscribe from "./components/Subscribe";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Banner />
      <Service />
      <Comment />
      <Review />
      <Subscribe />
    </div>
  );
};

export default App;
