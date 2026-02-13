import React from "react";
import "./AddLead.css";
import { useNavigate } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";


const AddLead = () => {
  const navigate = useNavigate();

  return (
    <div className="addLead-container">

      <div className="addLead-header">
        <div className="back-btn" onClick={() => navigate("/leads")}><BiLeftArrowAlt /></div>
        <div>
          <h1>Create New Lead</h1>
          <p>Add a new potential customer to track and convert</p>
        </div>
      </div>

      <div className="card24 blue-card">
        <div className="card-header blue">
          <h3>Contact Information</h3>
          <span>Enter the lead's contact details</span>
        </div>

        <div className="card-body">
          <div className="form-group full">
            <label className="addleadlabel">Full Name *</label>
            <input className= "leadinputtext" type="text" placeholder="e.g., Rajesh Khanna" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="addleadlabel">Email Address *</label>
              <input className= "leadinputtext" type="email" placeholder="e.g., rajesh@example.com" />
            </div>

            <div className="form-group">
              <label className="addleadlabel">Phone Number *</label>
              <input className= "leadinputtext" type="text" placeholder="e.g., +91 98765 43210" />
            </div>

            <div className="form-group">
              <label className="addleadlabel">Company Name</label>
              <input className= "leadinputtext" type="text" placeholder="e.g., Luxury Estates Pvt Ltd" />
            </div>
          </div>
        </div>
      </div>

      <div className="card24 purple-card">
        <div className="card-header purple">
          <h3>Product Interest</h3>
          <span>What is the lead interested in?</span>
        </div>

        <div className="card-body">
          <div className="form-row">
            <div className="form-group">
              <label className="addleadlabel1">Core Category *</label>
              <select className= "leadinputtext" >
                <option>Select business mode</option>
                <option>Marketplace</option>
                <option>Buy Now</option>
                <option>Auctions</option>
                <option>Tolet</option>
                <option>Digital Advertise</option>
              </select>
            </div>

            <div className="form-group">
              <label className="addleadlabel1">Category *</label>
              <select className= "leadinputtext" >
                <option>Select category</option>
                <option>Properties</option>
                <option>Cars</option>
                <option>Bikes</option>
                <option>Arts & Collectables</option>
                <option>Furniture</option>
                <option>Antiques</option>
                <option>Jewellery & Watches</option>
              </select>
            </div>
          </div>

          <div className="form-group full">
            <label className="addleadlabel1">Product/Property Name</label>
            <input className= "leadinputtext" type="text" placeholder="e.g., Luxury Villa - Juhu Beach" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="addleadlabel1">Property/Vehicle Type</label>
              <input className= "leadinputtext" type="text" placeholder="e.g., Car, Property" />
            </div>

            <div className="form-group">
              <label className="budget-label">Budget (₹) *</label>
              <input className= "leadinputtext" type="text" placeholder="e.g., 5 Cr or 50 L" />
            </div>
          </div>
        </div>
      </div>

      <div className="card24 green-card">
        <div className="card-header green">
          <h3>Location Details</h3>
          <span>Preferred location or area</span>
        </div>

        <div className="card-body">
          <div className="form-row">
            <div className="form-group">
              <label className="addleadlabel2">Location/Area</label>
              <input className= "leadinputtext" type="text" placeholder="e.g., Juhu, Bandra, MG Road" />
            </div>

            <div className="form-group">
              <label className="addleadlabel2">City *</label>
              <input className= "leadinputtext" type="text" placeholder="e.g., Hyderabad, Mumbai" />
            </div>

            <div className="form-group">
              <label className="addleadlabel2">State</label>
              <input className= "leadinputtext" type="text" placeholder="e.g., Maharashtra, Delhi" />
            </div>
          </div>
        </div>
      </div>
      <div className="card24 orange-card">
        <div className="card-header orange">
          <h3>Additional Information</h3>
          <span>Notes and requirements from the lead</span>
        </div>

        <div className="card-body">
          <div className="form-group full">
            <label className="addleadlabel3">Message/Requirements</label>
            <textarea className= "leadinputtext" placeholder="Enter any specific requirements or notes about this lead..." />
          </div>
        </div>
      </div>

      <div className="card24 yellow-card">
        <div className="card-header yellow">
          <h3>Lead Management</h3>
          <span>Set status, priority, and source</span>
        </div>

        <div className="card-body">
          <div className="form-row">
            <div className="form-group">
              <label className="budget-label">Status *</label>
              <select className= "leadinputtext" >
                <option>New</option>
                <option>Contacted</option>
                <option>Qualified</option>
                <option>Proposal Sent</option>
                <option>Negotiation</option>
                <option>Won</option>
                <option>Lost</option>
              </select>
            </div>

            <div className="form-group">
              <label className="budget-label">Priority *</label>
              <select className= "leadinputtext" >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div className="form-group">
              <label className="budget-label">Lead Source *</label>
              <select className= "leadinputtext" >
                <option>Select source</option>
                <option>Website</option>
                <option>Referral</option>
                <option>Social Media</option>
                <option>Email Campiagn</option>
                <option>Phone Call</option>
                <option>Walk-in</option>
                <option>Advertisement</option>
                <option>Partner</option>
              </select>
            </div>
          </div>

          <div className="button-row">
            <button className="cancel-btn">Cancel</button>
            <button className="create-btn">Create Lead</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AddLead;
