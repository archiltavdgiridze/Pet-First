import React from "react";
import Slider from "./mini/Slider.js";
import Blueornament from "../assets/blueOrnament1.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__left">
            <div className="arrow_text">
              <div>
                <img src={Blueornament} />
              </div>
              <p>Available in select states</p>
            </div>
            <h1>
              A PET-FIRST <span> APPROACH TO</span> WELLNESS
            </h1>
            <button>Learn More</button>
          </div>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
