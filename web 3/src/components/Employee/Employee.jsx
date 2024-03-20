import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import { useNavigate } from "react-router-dom";
import "./employee.css";
import { NavLink, useLocation } from "react-router-dom";

const Employee = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const employees = [
    {
      EMP_ID: 1,
      Name: "Arjun",
      DOB: "16-11-2000",
      Role: "Software Engineer",
    },
    {
      EMP_ID: 2,
      Name: "Mahesh",
      DOB: "25-05-1995",
      Role: "Data Analyst",
    },
    {
      EMP_ID: 3,
      Name: "Navia",
      DOB: "08-09-1989",
      Role: "Project Manager",
    },
    {
      EMP_ID: 4,
      Name: "Adithya",
      DOB: "12-07-1992",
      Role: "Marketing Specialist",
    },
  ];
  const navigate = useNavigate();
  const onClickHandle = () => {
    navigate("/dashboard");
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search with Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {filteredEmployees.map((person) => (
          <EmployeeList key={person.EMP_ID} {...person} />
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
        <NavLink
          to="/list"
          style={({ isActive }) => {
            return isActive ? { color: "red" } : {};
          }}
        >
          Emp List
        </NavLink>
      </nav>
    </>
  );
};

export default Employee;
