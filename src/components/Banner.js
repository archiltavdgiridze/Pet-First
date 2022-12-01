import React from 'react'
import Pets from "./mini/Pets"
import DiffCat from "../assets/differentCategory.png"

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__content">
          <div className="banner__left">
            <img src={DiffCat} />

          </div>
          <div className="banner__right">
            <Pets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
