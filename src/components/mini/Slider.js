import React, { useState } from "react";
import dog from "../../assets/doginHoody.png";
import dog2 from "../../assets/2.png";
import dog3 from "../../assets/3.png";
import arrowLeft from "../../assets/ArrowLeft.png";
import arrowRight from "../../assets/ArrowRight.png";

const Slider = () => {
  const [image, setImage] = useState([dog, dog2, dog3]);
  const [counter, setCounter] = useState(0);
  const clickedLeft = () => {
    if (counter == 0) setCounter(image.length - 1);
    else setCounter(counter - 1);
  };
  const clickedRight = () => {
    if (counter == image.length - 1) setCounter(0);
    else setCounter(counter + 1);
  };

  return (
    <div className="hero__right">
      <div className="hero__right-img">
        <img src={image[counter]} />
      </div>
      <div className="hero__right-slider">
        <img src={arrowLeft} onClick={clickedLeft} />
        <div className="hero__right-counter">
          <span className={counter == 0 ? "active" : null}></span>
          <span className={counter == 1 ? "active" : null}></span>
          <span className={counter == 2 ? "active" : null}></span>
        </div>
        <img src={arrowRight} onClick={clickedRight} />
      </div>
    </div>
  );
};

export default Slider;
