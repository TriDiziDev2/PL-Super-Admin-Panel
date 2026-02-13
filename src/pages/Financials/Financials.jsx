import React from "react";
import "./Financials.css";
import {
  FiCalendar,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiCopy,
  FiCheck,
  FiX,
  FiStar
} from "react-icons/fi";
import { RiCoupon3Line } from "react-icons/ri";
import { MdCurrencyRupee } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { LuTarget } from "react-icons/lu";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import CouponCreation from "../../components/CouponCreation/CouponCreation";








export default function FinancialDashboard() {

  const [showModal, setShowModal] = useState(false);

  const [activeTab, setActiveTab] = useState("approvals");

  return (
    <div className="finance-page">
      <div className="finance-header">
        <div>
          <h1>Financials & Packages</h1>
          <p>Manage pricing, monitor revenue & track financial performance</p>
        </div>

          <select className="today-btn" ><FiCalendar /> Today
          <option>Today</option>
          <option>This Week</option>
          <option>Last Week</option>
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Quarter</option>
          <option>Custom Range</option>
          </select>

      </div>

      <div className="stats-grid">
        <StatCard title="Total Revenue" value="₹5.47L" growth="+6.3%" />
        <StatCard title="Total Sales" value="184" growth="+9.2%" />
        <StatCard title="Avg Transaction" value="₹2,972" />
        <StatCard title="Monthly Recurring" value="₹28.45L" highlight />
      </div>

      <div className="coupon-wrapper">

        <div className="coupon-header">
          <div>
            <h3> <RiCoupon3Line className="couponicon" />Coupon Management</h3>
            <p>Create and manage discount coupons for packages</p>
          </div>
          <button className="create-btn" onClick={() => setShowModal(true)} >
            <FiPlus /> Create Coupon
          </button>
          {showModal && (<CouponCreation onClose={() => setShowModal(false)} />)}
        </div>

        <div className="coupon-grid">

          <CouponCard active code="ELITE25" discount="25% OFF" />
          <CouponCard active code="NEWUSER2K" discount="₹2,000 OFF" />
          <CouponCard active code="DIWALI50" discount="50% OFF" />
          <CouponCard expired code="NEWYEAR30" discount="30% OFF" />
          <CouponStats />

        </div>
      </div>
      <ul className='activitycat2'>
        <li className={`catmenu5 ${activeTab === "subscriptionplans" ? "active-subscriptionplans" : ""}`}onClick={() => setActiveTab("subscriptionplans")}>Subscription Plans</li>
        <li className={`catmenu5 ${activeTab === "bannerads" ? "active-bannerads" : ""}`}onClick={() => setActiveTab("bannerads")}>Banner Ads</li>
        <li className={`catmenu5 ${activeTab === "featuredlistings" ? "active-featuredlistings" : ""}`}onClick={() => setActiveTab("featuredlistings")}>Featured Listings</li>
        <li className={`catmenu5 ${activeTab === "leadunlocks" ? "active-leadunlocks" : ""}`}onClick={() => setActiveTab("leadunlocks")}>Lead Unlocks</li>
        <li className={`catmenu5 ${activeTab === "digitalmedia" ? "active-digitalmedia" : ""}`}onClick={() => setActiveTab("digitalmedia")}>Digital Media</li>
      </ul>

      {activeTab === "subscriptionplans" && (<div>
        <div className="subscription-wrapper">

        <div className="subscription-header">
          <h3>Subscription Plans</h3>
          <button className="add-plan-btn">+ Add Plan</button>
        </div>

        <div className="plans-grid">
          <PlanCard title="BASIC" price="₹ 0" />
          <PlanCard title="PREMIUM" price="₹ 2,499" popular />
          <PlanCard title="RECOMMENDED" price="₹ 6,999" recommended />
          <PlanCard title="ENTERPRISE" price="₹ 14,999" ultimate />
        </div>
      </div>
      </div>)}
      {activeTab === "bannerads" && (<div><div className="subscription-wrapper">

        <div className="subscription-header">
          <h3>Subscription Plans</h3>
          <button className="add-plan-btn">+ Add Plan</button>
        </div>

        <div className="plans-grid1">
          <PlanCard title="HomePage Banner" price="₹ 9,999" />
          <PlanCard title="In Listings Banner" price="₹ 5,999" popular />
          <PlanCard title="Pop-up Banner" price="₹ 8,999" recommended />
        </div>
      </div></div>)}
      {activeTab === "featuredlistings" && (<div><div className="subscription-wrapper">

        <div className="subscription-header">
          <h3>Subscription Plans</h3>
          <button className="add-plan-btn">+ Add Plan</button>
        </div>

        <div className="plans-grid1">
          <PlanCard title="1 Week Package" price="₹ 2,500" />
          <PlanCard title="2 Weeks Package" price="₹ 4,500" popular />
          <PlanCard title="1 Month Package" price="₹ 7,999" recommended />
        </div>
      </div></div>)}
      {activeTab === "leadunlocks" && (<div><div className="subscription-wrapper">

        <div className="subscription-header">
          <h3>Subscription Plans</h3>
          <button className="add-plan-btn">+ Add Plan</button>
        </div>

        <div className="plans-grid">
          <PlanCard title="BASIC" price="₹ 0" />
          <PlanCard title="Extra Pack 1" price="₹ 299" popular />
          <PlanCard title="Extra Pack 2" price="₹ 499" recommended />
          <PlanCard title="Extra Pack 3" price="₹ 999" ultimate />
        </div>
      </div></div>)}
      {activeTab === "digitalmedia" && (<div><div className="subscription-wrapper">

        <div className="subscription-header">
          <h3>Subscription Plans</h3>
          <button className="add-plan-btn">+ Add Plan</button>
        </div>

        <div className="plans-grid1">
          <PlanCard title="Digital Media" price="₹ 3,499" recommended  />

        </div>
      </div></div>)}

      

    </div>
  );
}

function StatCard({ title, value, growth, highlight }) {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <div className="stat-row">
        <h2 className={highlight ? "highlight-text" : ""}>{value}</h2>
        {growth && <span className="growth-badge">{growth}</span>}
      </div>
    </div>
  );
}


function CouponCard({ active, expired, code, discount }) {
  return (
    <div className={`coupon-card ${active ? "active" : ""} ${expired ? "expired" : ""}`}>
      <div className="coupon-top">
        <span className={`status ${active ? "green" : "gray"}`}>
          {active ? "ACTIVE" : "EXPIRED"}
        </span>
        <span className="discount-tag">{discount}</span>
      </div>

      <div className="coupon-code">
        {code}
        <FiCopy size={14} />
      </div>

      <ul className="coupon-details">
        <li className="couponrow"> <MdCurrencyRupee className="couponicon1" /> Max Discount: ₹5,000</li>
        <li className="couponrow"> <LuUsers className="couponicon1" /> Used: 147 / 500</li>
        <li className="couponrow"><CiCalendar className="couponicon1" /> Valid till: 31 Mar 2026</li>
        <li className="couponrow"><LuTarget className="couponicon1" />Applies to: Elite Plans</li>
      </ul>

      <div className="coupon-actions">
        {active ? (
          <>
            <button className="coupedit-btn" ><FiEdit2 /> Edit</button>
            <button className="coupdelete-btn"><FiTrash2 /> Delete</button>
          </>
        ) : (
          <button className="archive-btn">Archive</button>
        )}
      </div>
    </div>
  );
}

function CouponStats() {
  return (
    <div className="coupon-stats">
      <h4>Coupon Statistics</h4>

      <div className="stat-line">
        <span>Active Coupons</span>
        <b className="green-text">3</b>
      </div>
      <div className="stat-line">
        <span>Expired Coupons</span>
        <b>1</b>
      </div>
      <div className="stat-line">
        <span>Total Uses</span>
        <b className="blue-text2">926</b>
      </div>
      <div className="stat-line">
        <span>Total Discount Given</span>
        <b className="gold-text">₹4.2L</b>
      </div>
    </div>
  );
}

function PlanCard({ title, price, popular, recommended, ultimate }) {
  return (
    <div className={`plan-card ${popular ? "popular" : ""} ${recommended ? "recommended" : ""} ${ultimate ? "ultimate" : ""}`}>
      {popular && <span className="plan-tag blue">POPULAR</span>}
      {recommended && <span className="plan-tag yellow">RECOMMENDED</span>}
      {ultimate && <span className="plan-tag dark">ULTIMATE</span>}
      <p className="planediticon"><FaRegEdit /></p>
      <h4>{title}</h4>
      <h2>{price}</h2>
      <p className="gst">+ GST per month</p>

      <ul>
        <li><FiCheck className="noteicon"/> Unlimited till Sep 2026</li>
        <li><FiCheck className="noteicon"/> 3/month after Mar 2027</li>
        <li><FiX className="noteicon1"/> No Featured Listings</li>
      </ul>
    </div>
  );
}
