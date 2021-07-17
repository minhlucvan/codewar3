import React from "react";

import "./Card1.css";

const Card = () => {
  return (
    <div className="business-card-1">
      <div className="content">
        <div className="top">
          <div className="name">Joe Hastings</div>
          <div className="profession">Front end developer</div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="email">joehastings1991@gmail.com</div>
            <div className="phone">+447795123456</div>
            <div className="website">joehastings.co.uk</div>
          </div>
          <div className="right">
            <div className="location">Cambridge, UK</div>
          </div>
        </div>
      </div>
      <div className="background">
        <div className="slice"></div>
      </div>
    </div>
  );
};

export default Card;
