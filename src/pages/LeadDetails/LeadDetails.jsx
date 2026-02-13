import React from "react";
import "./LeadDetails.css";
import {
  FaArrowLeft,
  FaBox,
  FaCalendarAlt,
} from "react-icons/fa";
import { FiUser, FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";



const LeadDetails = () => {

    const navigate = useNavigate();

  return (
    <div className="lead-page">

      <div className="lead-header">
        <div className="lead-header-left">
          <button className="back-btn" onClick={() => navigate("/leads")}>
            <FaArrowLeft />
          </button>

          <div>
            <h1 className="leadnameheader">Vikram Malhotra</h1>
            <div className="lead-meta">
              <span className="badge">new</span>
              <span className="lead-id">Lead #1</span>
            </div>
          </div>
        </div>
      </div>

      <div className="lead-container">

        <div className="lead-left">

          <div className="card">
            <div className="card-header">
              <FiUser  className="header-icon" />
              Contact Information
            </div>

            <div className="info-item highlight">
              <div className="icon yellow">
                <FiUser  />
              </div>
              <div>
                <p className="label1">FULL NAME</p>
                <p className="value1">Vikram Malhotra</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon blue">
                <MdOutlineEmail  />
              </div>
              <div>
                <p className="label">EMAIL ADDRESS</p>
                <p className="value">vikram@example.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon green">
                <FiPhone  />
              </div>
              <div>
                <p className="label">PHONE NUMBER</p>
                <p className="value">+91 98765 43210</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon purple">
                <IoLocationOutline  />
              </div>
              <div>
                <p className="label">LOCATION</p>
                <p className="value">Mumbai</p>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="card-header">
              <FaBox className="header-icon" />
              Product Interest
            </div>

            <div className="info-item highlight">
              <div className="icon yellow">
                <FaBox />
              </div>
              <div>
                <p className="label1">PRODUCT</p>
                <p className="value1">Luxury 4BHK Penthouse</p>
              </div>
            </div>

            <div className="info-item highlight">
              <div className="icon yellow">
                ₹
              </div>
              <div>
                <p className="label">PRODUCT PRICE</p>
                <p className="value price1">₹5.5Cr</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              Notes & Comments
            </div>

            <p className="subtext">Internal notes about this lead</p>

            <div
              className="card-header"
            /> Lead Notes <input
                type="text"
                placeholder="Add notes about this lead ..."
                className="searchInput2" />


            <button className="primary-btn">Save Notes</button>
          </div>

          <div className="card">
            <div className="card-header">
              <FaCalendarAlt className="header-icon" />
              Activity History
            </div>

            <p className="subtext">Timeline of lead interactions</p>

            <div className="activity">
              <span className="dot"></span>
              <div>
                <p className="value">Lead created from website form</p>
                <p className="date">2024-01-28 10:30 AM</p>
              </div>
            </div>

            <div className="activity">
              <span className="dot"></span>
              <div>
                <p className="value">Initial contact email sent</p>
                <p className="date">2024-01-28 02:15 PM</p>
              </div>
            </div>

          </div>

        </div>

        <div className="lead-right">

          <div className="card12 status-card">
            <div className="card-header">
              Lead Status
            </div>

            <p className="subtext link">Update lead progress</p>

            <label className="value1">Current Status</label>
            <select className="status-select">
              <option>New</option>
              <option>Contacted</option>
              <option>Closed</option>
            </select>

            <button className="primary-btn full">
              Update Status
            </button>
          </div>

          <div className="card12 status-card">
            <div className="card-header">
              Lead Details
            </div>

            <div className="info-box">
              <p className="label1">SOURCE</p>
              <p className="value">Website</p>
            </div>

            <div className="info-box">
              <p className="label1">CREATED</p>
              <p className="value">28/1/2024</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LeadDetails;
