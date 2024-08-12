import React, { useState } from "react";
import "./Sidefilter.css";
import { filterData } from "../../utils/FilterData";
import downArrow from "../../assets/icons/down-arrow.png";
import upArrow from "../../assets/icons/up-arrow.png"

const Sidefilter = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    if (openCategory === categoryId) {
      setOpenCategory(null);
    } else {
      setOpenCategory(categoryId);
    }
  };

  return (
    <div className="side-filter-section">
      <div className="customizable">
        <input type="checkbox" />
        <p>Customizble</p>
      </div>

      {filterData.map((data) => (
        <div className="filter-item" key={data.id}>
          <div className="filter-header">
            <div
              className="filter-title"
              onClick={() => toggleCategory(data.id)}
            >
              <p>{data.title}</p>
              <img src={openCategory === data.id ? upArrow : downArrow} alt="arrow icon" />
            </div>
            <p className="filter-para">All</p>
          </div>

          {openCategory === data.id && (
            <div className="filter-item-categories">
              <p>Unselect all</p>
              {data.categories.map((category) => (
                <div className="filter-item-category" key={category}>
                  <input type="checkbox" id={category} />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidefilter;