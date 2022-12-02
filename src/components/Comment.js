import React from "react";
import dogGirl from "../assets/dogWithGirl.png";
const Comment = () => {
  return (
    <div className="comment">
      <div className="container">
        <div className="comment__content">
          <div className="comment__left">
            <div className="comment__left-img">
              <img src={dogGirl} />
            </div>
          </div>

          <div className="comment__right">
            <h1>Making pet parenting easy for everyone</h1>
            <p>
              Could this be the dog with the longest tail? The Rampur Greyhound
              - shy, sensitive, alert, and faithful. This is a breed that has
              climbed its way to being top dog because of its intelligence.
            </p>
            <ul>
              <li>Adoption</li>
              <li>Frozen Raw</li>
              <li>Next Day Delivery</li>
            </ul>
            <button>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
