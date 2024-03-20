import React from "react";
import "./employeeList.css";
const EmployeeList = ({ ...args }) => {
  return (
    <div>
      <p>EMP ID : {args.EMP_ID}</p>
      <p>Name : {args.Name}</p>
      <p>DOB : {args.DOB}</p>
      <p>Role : {args.Role}</p>
    </div>
  );
};

export default EmployeeList;
