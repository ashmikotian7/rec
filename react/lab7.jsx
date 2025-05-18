import React, { useState } from "react";
import "./App.css";
import steveJobsImage from "./assets/image.png"; 
 // Import the image

const ProfileCard = ({ name, bio, initialBgColor }) => {
  const [bgColor, setBgColor] = useState(initialBgColor);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setBgColor("linear-gradient(135deg, #FFD700, #FFA07A)");
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setBgColor(initialBgColor);
  };

  return (
    <div
      className={profile-card ${hovered ? "hovered" : ""}}
      style={{ background: bgColor, color: hovered ? "#000000" : "#000000" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={steveJobsImage} alt={name} className="profile-picture" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <ProfileCard
        name="Ashmitha"
        bio="Innovator, entrepreneur, and Student @SMVITM."
        initialBgColor="linear-gradient(135deg, #ADD8E6, rgb(146, 23, 23))" // Light Blue to Lavender Gradient
      />
    </div>
  );
};

export default App;


.profile-picture {
  width: 120px;         /* Adjust size as needed */
  height: 120px;
  border-radius: 50%;   /* Makes it a circle */
  object-fit: cover;    /* Ensures the image covers the area without distortion */
  border: 2px solid #ccc; /* Optional: adds a border */
}