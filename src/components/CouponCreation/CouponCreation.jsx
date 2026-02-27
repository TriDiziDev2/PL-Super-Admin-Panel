import React from "react";
import { FiX } from "react-icons/fi";
import "./CouponCreation.css";

export default function CouponCreation({ onClose }) {
  return (
    <div className="coupon-overlay">
      <div className="coupon-modal">
        
        <div className="coupon-header">
          <div>
            <h2>Create New Coupon</h2>
            <p>Create a discount coupon for packages with custom settings</p>
          </div>
          <FiX className="close-icon" onClick={onClose} />
        </div>

        <div className="coupon-body">
          <form className="coupon-form">
            
            <div className="form-row">
              <label>Coupon Code</label>
              <input type="text" placeholder="e.g., ELITE25" />
            </div>

            <div className="form-row">
              <label>Discount Type</label>
              <select>
                <option>Percentage (%)</option>
                <option>Flat Amount (₹)</option>
              </select>
            </div>

            <div className="form-row">
              <label>Discount Value</label>
              <input type="number" placeholder="e.g., 25" />
            </div>

            <div className="form-row">
              <label>Max Discount (₹)</label>
              <input type="number" placeholder="e.g., 5000" />
            </div>

            <div className="form-row">
              <label>Usage Limit</label>
              <input type="number" placeholder="e.g., 500" />
            </div>

            <div className="form-row">
              <label>Applies To</label>
              <select>
                <option>All Plans</option>
                <option>Basic</option>
                <option>Premium</option>
                <option>Enterprise</option>
              </select>
            </div>

            <div className="form-row">
              <label>Valid From</label>
              <input type="date" />
            </div>

            <div className="form-row">
              <label>Valid To</label>
              <input type="date" />
            </div>

          </form>
        </div>

        <div className="coupon-footer">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="create-btn">
            Create Coupon
          </button>
        </div>

      </div>
    </div>
  );
}
