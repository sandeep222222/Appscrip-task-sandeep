import React from "react";
import "./ShimmerUI.css";

const Shimmerui = () => {
  return (
    <>
      {Array(20)
        .fill("")
        .map((item, i) => {
          return (
            <div className="product-item shimmer-item" key={"shimmer-item" + i}>
              <div className="shimmer-img"></div>
              <div className="shimmer-title"></div>
              <div className="shimmer-price"></div>
            </div>
          );
        })}
    </>
  );
};

export default Shimmerui;