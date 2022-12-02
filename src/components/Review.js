import React from 'react'
import guy from "../assets/avatar.png";
import arrows from "../assets/arrows.png";
import slider from "../assets/slider.png";
// import quote from "../assets/quote.png";
// import quoteStar from "../assets/quote-star.png";

const Review = () => {
  return (
    <div className="review">
      <div className="container">
        <div className="review__content">
          <div className="review__left">
            <img src={guy} />

            {/* <div className="review__left-quote">
              
              <img className='review__left-quote-img' src={quote} />
            
            </div> */}

            <div className="review__left-slider">
              <img className="review__left-slider-img" src={slider} />
            </div>
          </div>
          <div className="review__right">
            <h1>Customer Reviews</h1>
            <div className="review__p-text">
              <p>
                As we continue to push for better regulation in the Australian
                pet food industry it can be hard to trust many pet food brands.
                Our 2021 Best Cat Food in Australia list will offer you a great
                starting point in deciding what to feed your cat.
              </p>
            </div>
            <div className="review-arrows">
              <img src={arrows} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review
