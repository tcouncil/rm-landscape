import React from "react";
import "./Guide.css";
import "./Restoration.css";
import bgImage from "../images/Horticulture/IMG20240604183156.jpg"; // swap to any landscaping photo

const Guide = () => {
  return (
    <div className="restoration-page">
      <div
        className="restoration-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="restoration-overlay" />

      <div className="restoration-content">
        <h1 className="restoration-title">Wilderness Guiding</h1>
        <p className="restoration-subtitle">
          Do you know the way? Don't get lost without us, we'll find our way back together.
        </p>
      </div>
    </div>
  );
};

export default Guide;