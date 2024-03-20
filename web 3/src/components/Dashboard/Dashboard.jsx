import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Level from "./Level";
import "./dashboard.css";

const Dashboard = () => {
  const pLevel = [
    { day: "Monday", level: 4 },
    { day: "Tuesday", level: 92 },
    { day: "Wednesday", level: 122 },
    { day: "Thursday", level: 93 },
    { day: "Friday", level: 89 },
    { day: "Saturday", level: 98 },
  ];

  const location = useLocation();

  return (
    <>
      <div>
        <h2>Employee Productivity Dashboard</h2>
        {pLevel.map((item) => (
          <Level key={item.day} day={item.day} level={item.level} />
        ))}
      </div>
      <nav className="nav">
        <NavLink
          exact
          to="/dashboard"
          style={({ isActive }) => {
            return isActive ? { color: "red" } : {};
          }}
        >
          Home
        </NavLink>
        <NavLink to="/list">Emp List</NavLink>
      </nav>
    </>
  );
};

export default Dashboard;
