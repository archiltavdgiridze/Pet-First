import React from 'react'
import arrowR from "../../assets/ArrowRight.png";

const Sub_right = () => {
  return (
    <div className="subscribe__right">
      <h3>Subscribe & Get Pet Updates and news!</h3>
      <input type="email" placeholder="Mail" />
      <button type="submit">
        <img src={arrowR} />
      </button>
      <hr />
    </div>
  );
}

export default Sub_right;
