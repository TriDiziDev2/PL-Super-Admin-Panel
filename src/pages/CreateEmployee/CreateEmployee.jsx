import React from "react";
import "./CreateEmployee.css";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function CreateEmployee() {

    const navigate = useNavigate();

  return (
    <div className="create-employee-wrapper">

      <div className="page-header">
        <div className="back-btn" onClick={() => navigate("/employees")}>
          <FiArrowLeft />
        </div>
        <div>
          <h1>Create New Employee</h1>
          <p>Add a new team member to your organization</p>
        </div>
      </div>

      <div className="card-section">
        <div className="card-header">
          <h2>Employee Information</h2>
          <span>Enter the basic details of the employee</span>
        </div>

        <div className="form-grid">

          <div className="form-group full">
            <label>Full Name *</label>
            <input type="text" placeholder="Sayyad Basheer Ahamad" />
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input type="email" placeholder="example@gmail.com" />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input type="text" placeholder="+91 98765 43210" />
          </div>

          <div className="form-group">
            <label>Date of Birth *</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Gender *</label>
            <select className="inputtextoption">
              <option>Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Blood Group</label>
            <select  className="inputtextoption">
              <option>Select blood group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>

          <div className="form-group">
            <label>Joining Date *</label>
            <input type="date" />
          </div>

          <div className="form-group full">
            <label>Address *</label>
            <input type="text" placeholder="e.g., 123, MG Road, Sector 5" />
          </div>

          <div className="form-group">
            <label>City *</label>
            <input type="text" placeholder="e.g., Hyderabad" />
          </div>

          <div className="form-group">
            <label>State *</label>
            <input type="text" placeholder="e.g., Telangana" />
          </div>

          <div className="form-group">
            <label>Postal Code *</label>
            <input type="text" placeholder="e.g., 400001" />
          </div>

          <div className="form-group">
            <label>Aadhar Number</label>
            <input type="text" placeholder="e.g., 1234 5678 9012" />
          </div>

          <div className="form-group">
            <label>PAN Number</label>
            <input type="text" placeholder="e.g., ABCDE1234F" />
          </div>

          <div className="form-group">
            <label>Emergency Contact Name</label>
            <input type="text" placeholder="e.g., Priya Verma" />
          </div>

          <div className="form-group">
            <label>Emergency Contact Phone</label>
            <input type="text" placeholder="+91 98765 12345" />
          </div>

          <div className="form-group">
            <label>Role *</label>
            <select  className="inputtextoption">
              <option>Select role</option>
              <option>Admin</option>
              <option>Employee</option>
            </select>
          </div>

          <div className="form-group">
            <label>Monthly Salary (₹) *</label>
            <input type="text" placeholder="e.g., 75,000" />
          </div>

          <div className="form-group">
            <label>Bank Account Number</label>
            <input type="text" placeholder="1234567890123456" />
          </div>

          <div className="form-group">
            <label>IFSC Code</label>
            <input type="text" placeholder="HDFC0001234" />
          </div>

        </div>
      </div>

      <div className="card-section yellow">
        <div className="card-header">
          <h2>Account Credentials</h2>
          <span>Create login credentials for admin panel access</span>
        </div>

        <div className="form-grid three">
          <div className="form-group">
            <label>Username *</label>
            <input type="text" placeholder="e.g., amit.verma" />
          </div>

          <div className="form-group">
            <label>Password *</label>
            <input type="password" placeholder="Enter strong password" />
          </div>

          <div className="form-group">
            <label>Confirm Password *</label>
            <input type="password" placeholder="Re-enter password" />
          </div>
        </div>
      </div>

      <div className="card-section">
        <div className="card-header">
          <h2>Employment Status</h2>
          <span>Set the initial account status for this employee</span>
        </div>

        <div className="form-group status-width">
          <label>Status *</label>
          <select className="inputtextoption">
            <option>Active</option>
            <option>In Active</option>
          </select>
        </div>

        <div className="form-footer">
          <button className="btn cancel">Cancel</button>
          <button className="btn primary">Create Employee</button>
        </div>
      </div>

    </div>
  );
}
