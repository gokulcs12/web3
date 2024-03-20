import React from "react";

const Level = ({ day, level }) => {
  return (
    <div>
      <h3>Productivity on {day}</h3>
      <p>{level}%</p>
    </div>
  );
};

export default Level;
