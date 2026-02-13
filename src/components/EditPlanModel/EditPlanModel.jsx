import React from "react";
import { FiX, FiEdit2 } from "react-icons/fi";
import "./EditPlanModel.css";

export default function EditPlanModel({ onClose }) {
  return (
    <div className="edit-overlay">
      <div className="edit-modal">

        {/* Header */}
        <div className="edit-header">
          <div className="header-left">
            <FiEdit2 className="header-icon" />
            <div>
              <h2>Edit BASIC Plan</h2>
              <p>Modify the pricing and features for this subscription plan</p>
            </div>
          </div>

          <FiX className="close-icon" onClick={onClose} />
        </div>

        {/* Body */}
        <div className="edit-body">
          <form className="edit-form">

            <div className="form-group">
              <label>Plan Name</label>
              <input type="text" defaultValue="BASIC" />
            </div>

            <div className="form-group">
              <label>Badge</label>
              <input type="text" defaultValue="FREE" />
            </div>

            <div className="form-group">
              <label>Price (₹)</label>
              <input type="number" defaultValue="0" />
            </div>

            <div className="form-group full-width">
              <label>Features</label>
              <textarea
                rows="6"
                placeholder="Enter features, one per line"
              ></textarea>
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="edit-footer">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="save-btn">
            💾 Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}
