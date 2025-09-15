import React from "react";

const Employee = ({ employee }) => {
  return (
    employee.isActive && (
      <div className="employee-list">
        <span>{employee.id}</span>
        <span>{employee.name}</span>
        <span>${employee.salary}</span>
        <span>{employee.isActive.toString()}</span>
      </div>
    )
  );
};

export default Employee;
