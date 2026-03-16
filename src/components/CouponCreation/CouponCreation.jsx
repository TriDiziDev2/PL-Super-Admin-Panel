import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import "./CouponCreation.css";
import { createCoupon, updateCoupon } from "../../lib/financials";

export default function CouponCreation({ onClose, onSaved, coupon }) {
  const isEditing = Boolean(coupon);

  const [form, setForm] = useState({
    code: coupon?.code || "",
    discountType: coupon?.discountType || "PERCENTAGE",
    discountValue: coupon?.discountValue || "",
    maxDiscount: coupon?.maxDiscount || "",
    usageLimit: coupon?.usageLimit || "",
    appliesTo: coupon?.appliesTo || "ALL",
    validFrom: coupon?.validFrom
      ? new Date(coupon.validFrom).toISOString().split("T")[0]
      : "",
    validTo: coupon?.validTo
      ? new Date(coupon.validTo).toISOString().split("T")[0]
      : "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !form.code ||
      !form.discountValue ||
      !form.validFrom ||
      !form.validTo
    ) {
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        code: form.code,
        discountType: form.discountType,
        discountValue: Number(form.discountValue),
        maxDiscount: form.maxDiscount ? Number(form.maxDiscount) : null,
        usageLimit: form.usageLimit ? Number(form.usageLimit) : 0,
        appliesTo: form.appliesTo,
        validFrom: form.validFrom,
        validTo: form.validTo,
      };

      if (isEditing) {
        await updateCoupon(coupon.id, payload);
      } else {
        await createCoupon(payload);
      }

      onSaved();
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Failed to save coupon.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="coupon-overlay">
      <div className="coupon-modal">
        <div className="coupon-header">
          <div>
            <h2>{isEditing ? "Edit Coupon" : "Create New Coupon"}</h2>
            <p>
              {isEditing
                ? "Update the coupon settings"
                : "Create a discount coupon for packages with custom settings"}
            </p>
          </div>
          <FiX className="close-icon" onClick={onClose} />
        </div>

        <div className="coupon-body">
          <form className="coupon-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Coupon Code</label>
              <input
                type="text"
                name="code"
                placeholder="e.g., ELITE25"
                value={form.code}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label>Discount Type</label>
              <select
                name="discountType"
                value={form.discountType}
                onChange={handleChange}
              >
                <option value="PERCENTAGE">Percentage (%)</option>
                <option value="FLAT">Flat Amount (₹)</option>
              </select>
            </div>

            <div className="form-row">
              <label>Discount Value</label>
              <input
                type="number"
                name="discountValue"
                placeholder="e.g., 25"
                value={form.discountValue}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label>Max Discount (₹)</label>
              <input
                type="number"
                name="maxDiscount"
                placeholder="e.g., 5000"
                value={form.maxDiscount}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label>Usage Limit</label>
              <input
                type="number"
                name="usageLimit"
                placeholder="e.g., 500 (0 = unlimited)"
                value={form.usageLimit}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label>Applies To</label>
              <select
                name="appliesTo"
                value={form.appliesTo}
                onChange={handleChange}
              >
                <option value="ALL">All Plans</option>
                <option value="BASIC">Basic</option>
                <option value="PRO">Pro</option>
                <option value="ELITE">Elite</option>
              </select>
            </div>

            <div className="form-row">
              <label>Valid From</label>
              <input
                type="date"
                name="validFrom"
                value={form.validFrom}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label>Valid To</label>
              <input
                type="date"
                name="validTo"
                value={form.validTo}
                onChange={handleChange}
              />
            </div>

            {error && (
              <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>
            )}

            <div className="coupon-footer">
              <button type="button" className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="create-btn" disabled={loading}>
                {loading
                  ? "Saving..."
                  : isEditing
                    ? "Update Coupon"
                    : "Create Coupon"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
