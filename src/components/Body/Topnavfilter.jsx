import React, { useState } from "react";
import leftArrow from "../../assets/icons/arrow-left.png";
import downArrow from "../../assets/icons/down-arrow.png";
import tick from "../../assets/icons/tick.png";
import rightArrow from "../../assets/icons/arrow-right.png"
import "./Topnavfilter.css";

const Topnavfilter = ({ sideFilterValue, setShowSideFilter, sortProducts }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Recommended");

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? selectedItem : item);
    setIsDropdownVisible(false); // Close dropdown after item is clicked
    sortProducts(item);
  };

  const handleShowFilter = () => {
    setShowSideFilter();
  };

  return (
    <div>
      <div className="top-filter-bar">
        <div className="left-filter-bar">
          <p className="item-count">3425 ITEMS</p>
          <div className="show-hide-filter">
            {sideFilterValue === true ? (
              <>
                <img src={leftArrow} alt="left-arrow-icon" />
                <p onClick={handleShowFilter}>HIDE FILTER</p>{" "}
              </>
            ) : (
              <>
                <img src={rightArrow} alt="right-arrow-icon" />
                <p onClick={handleShowFilter}>SHOW FILTER</p>{" "}
              </>
            )}
          </div>
          <div onClick={handleShowFilter} className="m-filter">
            <p>FILTER</p>
          </div>
        </div>
        <div
          className="right-filter-bar"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <div className="recommended-head" onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
            <p>{selectedItem}</p>
            <img src={downArrow} alt="down-arrow-icon" />
          </div>

          {isDropdownVisible && (
            <div className="recommended-filter-dropdown">
              <ul>
                {[
                  "Recommended",
                  "Newest First",
                  "Popular",
                  "Price : High to Low",
                  "Price : Low to High",
                ].map((item) => (
                  <li key={item} onClick={() => handleItemClick(item)}>
                    <div className="filter-item">
                      {selectedItem === item && (
                        <img src={tick} alt="tick-mark-icon" />
                      )}
                      <p>{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topnavfilter;
