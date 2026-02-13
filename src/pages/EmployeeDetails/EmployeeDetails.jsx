import React from "react";
import "./EmployeeDetails.css";
import { useNavigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { GoLock } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FiCreditCard } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiDroplet } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";






const EmployeeDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="employeeDetails-container">

      <div className="details-header">
        <div className="header-left">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ←
          </button>

          <div>
            <h1>Amit Verma</h1>
            <div className="role-row">
              <span className="role-badge">Sales Executive</span>
              <span className="status-badge active">active</span>
            </div>
          </div>
        </div>

        <button className="edit-btn"><FiEdit />Edit Employee</button>
      </div>

      <div className="details-grid">

        <div className="left-column">

          <div className="card">
            <h3 className="empdatainfo"><FiPhone className="statcardicon" />Contact Information</h3>
            <div className="info-box">
                <div className="empinfoicon color1"><MdOutlineEmail /></div>
                <div>
              <label>Email Address</label>
              <p>amit@billionaireauction.com</p></div>
            </div>
            <div className="info-box">
              <div className="empinfoicon color2"><FiPhone /></div>
                <div>
              <label>Phone Number</label>
              <p>+91 98765 43210</p></div>
            </div>
          </div>

          <div className="card">
            <h3 className="empdatainfo"><GoLock className="statcardicon" />Account Credentials</h3>
            <div className="info-box highlight">
              <div className="empinfoicon color3"><FiUser /></div>
                <div>
              <label>USERNAME</label>
              <p>amit.verma</p></div>
            </div>
            <div className="info-box">
            <div className="empinfoicon color4"><GoLock /></div>
                <div>
              <label>Password</label>
              <p>••••••••</p></div>
            </div>
            <button className="outline-btn">🔒 Reset Password</button>
          </div>

          <div className="card">
            <h3 className="empdatainfo"><FiUser className="statcardicon" />Personal Information</h3>
            <div className="row">
              <div className="info-box2">
                <label>Date of Birth</label>
                <p>15/5/1990</p>
              </div>
              <div className="info-box2">
                <label>Gender</label>
                <p>Male</p>
              </div>
            </div>
            <div className="info-box colored red">
              <div className="empinfoicon color4"><CiDroplet /></div>
                <div>
              <label>BLOOD GROUP</label>
              <p>O+</p></div>
            </div>
          </div>

          <div className="card">
            <h3 className="empdatainfo"><IoLocationOutline  className="statcardicon" />Address Information</h3>
            <div className="info-box highlight">
            <div className="empinfoicon color5"><IoLocationOutline /></div>
            <div>
              <label>Complete Address</label>
              <p>
                123, MG Road, Sector 5 <br />
                Mumbai, Maharashtra - 400001
              </p></div>
            </div>
          </div>

          <div className="card">
            <h3 className="empdatainfo"><FiCreditCard   className="statcardicon" />Government IDs</h3>
            <div className="info-box">
              <div className="empinfoicon color6"><FiCreditCard /></div>
                <div>
              <label>AADHAR NUMBER</label>
              <p>1234 5678 9012</p></div>
            </div>
            <div className="info-box">
              <div className="empinfoicon color7"><FiCreditCard /></div>
                <div>
              <label>PAN NUMBER</label>
              <p>ABCDE1234F</p></div>
            </div>
          </div>

          <div className="card red-border">
            <h3 className="empdatainfo"><LuUsers className="statcardicon" />Emergency Contact</h3>
            <div className="info-box colored light-red">
              <div className="empinfoicon color4"><LuUsers /></div>
                <div>
              <label>CONTACT NAME</label>
              <p>Priya Verma</p></div>
            </div>
            <div className="info-box colored light-orange">
              <div className="empinfoicon color8"><FiPhone /></div>
                <div>
              <label>CONTACT PHONE</label>
              <p>+91 98765 12345</p></div>
            </div>
          </div>

          <div className="card">
            <h3 className="empdatainfo"><LuBuilding2 className="statcardicon" />Banking Information</h3>
            <div className="info-box">
              <div className="empinfoicon color9"><LuBuilding2 /></div>
                <div>
              <label>ACCOUNT NUMBER</label>
              <p>1234567890123456</p></div>
            </div>
            <div className="info-box">
              <div className="empinfoicon color10"><LuBuilding2 /></div>
                <div>
              <label>IFSC CODE</label>
              <p>HDFC0001234</p></div>
            </div>
          </div>

          <div className="bottom-stats">
            <div className="stat-card blue">
              <h4>Leads Handled</h4>
              <h2>156</h2>
              <span>This quarter</span>
            </div>

            <div className="stat-card yellow">
              <h4>Conversions</h4>
              <h2>42</h2>
              <span>27% conversion rate</span>
            </div>

            <div className="stat-card green">
              <h4>Performance</h4>
              <h2>🏅 Excellent</h2>
            </div>
          </div>

        </div>

        <div className="right-column">

          <div className="card1">
            <h3 className="empdatainfo"><MdWorkOutline className="statcardicon" />Employment Details</h3>
            <div className="info-box1 highlight">
              <label>Role</label>
              <p>Sales Executive</p>
            </div>
            <div className="info-box1 highlight-yellow">
              <label>Monthly Salary</label>
              <p className="salary">₹ 75,000</p>
            </div>
          </div>

          <div className="card1">
            <h3 className="empdatainfo"><CiCalendar className="statcardicon" />Timeline</h3>
            <div className="timeline joined">
              <div className="empinfoicon color2"><CiCalendar /></div>
                <div>
              <label>JOINED</label>
              <p>15/3/2023</p></div>
            </div>
            <div className="timeline active">
              <div className="empinfoicon"><CiCalendar /></div>
                <div>
              <label>LAST ACTIVE</label>
              <p>29/1/2024</p></div>
            </div>
            <div className="timeline tenure">
              <div className="empinfoicon color5"><CiCalendar /></div>
                <div>
              <label>TENURE</label>
              <p>35 Months</p></div>
            </div>
          </div>

          <div className="card1">
            <button className="edit-btn full"><FiEdit />Edit Employee</button>
            <button
              className="outline-btn full"
              onClick={() => navigate("/employees")}
            >
              <GoArrowLeft />  Back to Employees
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default EmployeeDetails;
