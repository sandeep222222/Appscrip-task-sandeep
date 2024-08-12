import React from "react";
import announcement_bar_icon from "../../assets/icons/announcement_bar_logo.png";
import "./AnnouncementBar.css";

const AnnouncementBar = () => {
  const announcementItems = [
    { text: "Lorem ipsum dolor" },
    { text: "Lorem ipsum dolor" },
    { text: "Lorem ipsum dolor" },
  ];

  return (
    <div className="announcement-bar">
      {announcementItems.map((item, index) => (
        <div
          key={index}
          className={`announcement-bar-item ${
            index > 0 ? "m-hide-announcement-item" : ""
          }`}
        >
          <img src={announcement_bar_icon} alt="announcement bar icon" />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementBar;