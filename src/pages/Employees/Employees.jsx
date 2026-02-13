import React from "react";
import "./Employees.css";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { FiBriefcase } from "react-icons/fi";
import { MdOutlineShield } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";







const Employees = () => {
  const navigate = useNavigate();

  const employees = [
    {
      initials: "AS",
      name: "Aisha Sharma",
      role: "Admin",
      email: "aisha.s@billionaire.com",
      access: "Full Access",
      joined: "Joined Jan 2023",
      department: "Management",
      status: "active",
    },
    {
      initials: "VM",
      name: "Vikas Mehta",
      role: "Sales Manager",
      email: "vikas.m@billionaire.com",
      access: "Sales & Leads",
      joined: "Joined Mar 2023",
      department: "Sales",
      status: "active",
    },
    {
      initials: "DK",
      name: "Divya Krishnan",
      role: "Product Manager",
      email: "divya.k@billionaire.com",
      access: "Products & Inventory",
      joined: "Joined Feb 2023",
      department: "Product",
      status: "active",
    },
    {
      initials: "SP",
      name: "Sanjay Pandey",
      role: "Customer Support",
      email: "sanjay.p@billionaire.com",
      access: "Enquiries & Users",
      joined: "Joined Apr 2023",
      department: "Support",
      status: "active",
    },
    {
      initials: "MJ",
      name: "Meera Joshi",
      role: "Finance Manager",
      email: "meera.j@billionaire.com",
      access: "Financials",
      joined: "Joined Jan 2023",
      department: "Finance",
      status: "active",
    },
    {
      initials: "KS",
      name: "Kunal Shah",
      role: "Marketing Lead",
      email: "kunal.s@billionaire.com",
      access: "Marketing",
      joined: "Joined May 2023",
      department: "Marketing",
      status: "inactive",
    },
  ];

  return (
    <div className="employees-container">

      <div className="employees-header">
        <div>
          <h1>Employees</h1>
          <p>In-house employee management</p>
        </div>

        <button
          className="add-employee-btn"
          onClick={() => navigate("/createemployee")}
        >
          + Add Employee
        </button>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="statcardheader">
          <p className="statcardname" >TOTAL EMPLOYEES</p> <FiUser className="statcardicon"/>
          </div>
          <h2>47</h2>
          <div className="statcardline orange"></div>
        </div>

        <div className="stat-card">
          <div className="statcardheader">
          <p className="statcardname" >Active</p> <GoDotFill  className="statcardicon1"/>
          </div>
          <h2 className="statcardicon1">43</h2>
          <div className="statcardline green"></div>
        </div>

        <div className="stat-card">
          <div className="statcardheader">
          <p className="statcardname" >DEPARTMENTS</p> <FiBriefcase   className="statcardicon2"/>
          </div>
          <h2>8</h2>
          <div className="statcardline blue"></div>
        </div>

        <div className="stat-card1 highlight">
          <div className="statcardheader">
          <p className="statcardicon3" >ADMIN USERS</p> <MdOutlineShield className="statcardicon3"/>
          </div>
          <h2 className="statcardicon3">3</h2>
          <div className="statcardline gold1"></div>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search employees by name, email, department..."
        />
      </div>
      <div className="employee-grid">
        {employees.map((emp, index) => (
          <div onClick={() => navigate("/employeedetails")} className="employee-card" key={index}>
            <div className="employee-top">
              <div className="avatar">{emp.initials}</div>
              <div>
                <h3 className="empname">{emp.name}</h3>
                <span className="role">{emp.role}</span>
              </div>
              <div className="employeeediticon"><HiDotsVertical /></div>
            </div>

            <div className="employee-info">
              <p className="empdatainfo"><MdOutlineEmail className="empemail"/>{emp.email}</p>
              <p className="empdatainfo"><FiBriefcase className="empcase"/>{emp.access}</p>
              <p className="empdatainfo"><CiCalendar className="empjoin"/>{emp.joined}</p>
            </div>

            <div className="employee-footer">
              <span className="dept">{emp.department}</span>
              <span
                className={
                  emp.status === "active"
                    ? "status active"
                    : "status inactive"
                }
              >
                {emp.status}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Employees;

