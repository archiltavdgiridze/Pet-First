import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner from "./components/Banner"
import Service from "./components/Service"
import Comment from "./components/Comment";

const App = () => {
  const [counter, setCounter] = useState(1);
  const clickHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <Header />
      <Hero />
      <Banner />
      <Service />
      {/* <Comment /> */}
    </div>
  );
};

export default App;
