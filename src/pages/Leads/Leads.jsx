import './Leads.css';
import { useState } from "react";
import React from "react";
import { AiOutlineShop } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";
import { TbHammer } from "react-icons/tb";
import { FiHome } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { RiComputerLine } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import { MdPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineVilla } from "react-icons/md";
import { FiMail } from "react-icons/fi";







const Leads = () => {

  const [selectedCat, setSelectedCat] = useState("marketplace");
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("approvals");

  return <div className='leadscontainer'>
    <div className='producthead'>
              <div className='productheadinfo'>
                <h1 className='productsheader'>Leads</h1>
                <span className='productheaddesc'>Product and Package Enquiries</span>
              </div>
              <button onClick={() => navigate("/addlead")} className='addproduct'><FiUserPlus />Add Lead</button>
        </div>
        <ul className='userstats'>
          <li className='userstat'>
            <div className='userstattitle'>Total Leads</div>
            <div className='userstatvalue'>1,234</div>
          </li>
          <li className='userstat'>
            <div className='userstattitle'><span className='userdoticon'></span>New Leads</div>
            <div className='userstatvalue'>156</div>
          </li>
          <li className='userstat'>
            <div className='userstattitle'><span className='userdoticon1'></span>Qaulified</div>
            <div className='userstatvalue'>342</div>
          </li>
          <li className='userstat'>
            <div className='userstattitle'><span className='userdoticon2'></span>Conversion Rate</div>
            <div className='userstatvalue'>28%</div>
          </li>
        </ul>
        <div className='userproductstats'>
          <ul className='productcat2'>
              <li
                className={`productcatname ${selectedCat === "marketplace" ? "active" : ""}`}
                onClick={() => setSelectedCat("marketplace")}
              >
                <AiOutlineShop /> Marketplace
              </li>
        
              <li
                className={`productcatname ${selectedCat === "buynow" ? "active" : ""}`}
                onClick={() => setSelectedCat("buynow")}
              >
                <BsLightningCharge /> Buy Now
              </li>
        
              <li
                className={`productcatname ${selectedCat === "auctions" ? "active" : ""}`}
                onClick={() => setSelectedCat("auctions")}
              >
                <TbHammer /> Auctions
              </li>
        
              <li
                className={`productcatname ${selectedCat === "tolet" ? "active" : ""}`}
                onClick={() => setSelectedCat("tolet")}
              >
                <FiHome /> To-let
              </li>

              <li
                className={`productcatname ${selectedCat === "advertise" ? "active" : ""}`}
                onClick={() => setSelectedCat("advertise")}
              >
                <RiComputerLine /> Advertise
              </li>
          </ul>
      {selectedCat === "marketplace" && <div>
      <ul className='userstats1'>
        <li className='userstat1'>
          <div className='userstattitle'>Total Leads</div>
          <div className='userstatvalue'>456</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle'>New Enquiries</div>
          <div className='userstatvalue'>87</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle'>Avg Lead Value</div>
          <div className='userstatvalue'>₹32L</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle'>Conversion Rate</div>
          <div className='userstatvalue'>24%</div>
        </li>
      </ul>
      </div>}
      {selectedCat === "buynow" && <div>
      <ul className='userstats1'>
        <li className='userstat1'>
          <div className='userstattitle1'>Total Leads</div>
          <div className='userstatvalue1'>456</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle1'>New Enquiries</div>
          <div className='userstatvalue1'>87</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle1'>Avg Lead Value</div>
          <div className='userstatvalue1'>₹32L</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle1'>Conversion Rate</div>
          <div className='userstatvalue1'>24%</div>
        </li>
      </ul>
      </div>}
      {selectedCat === "auctions" && <div>
      <ul className='userstats1'>
        <li className='userstat1'>
          <div className='userstattitle2'>Total Leads</div>
          <div className='userstatvalue2'>456</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle2'>New Enquiries</div>
          <div className='userstatvalue2'>87</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle2'>Avg Lead Value</div>
          <div className='userstatvalue2'>₹32L</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle2'>Conversion Rate</div>
          <div className='userstatvalue2'>24%</div>
        </li>
      </ul>
      </div>}
      {selectedCat === "tolet" && <div>
      <ul className='userstats1'>
        <li className='userstat1'>
          <div className='userstattitle3'>Total Leads</div>
          <div className='userstatvalue3'>456</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle3'>New Enquiries</div>
          <div className='userstatvalue3'>87</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle3'>Avg Lead Value</div>
          <div className='userstatvalue3'>₹32L</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle3'>Conversion Rate</div>
          <div className='userstatvalue3'>24%</div>
        </li>
      </ul>
      </div>}
      {selectedCat === "advertise" && <div>
      <ul className='userstats1'>
        <li className='userstat1'>
          <div className='userstattitle4'>Total Leads</div>
          <div className='userstatvalue4'>456</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle4'>New Enquiries</div>
          <div className='userstatvalue4'>87</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle4'>Avg Lead Value</div>
          <div className='userstatvalue4'>₹32L</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle4'>Conversion Rate</div>
          <div className='userstatvalue4'>24%</div>
        </li>
      </ul>
      </div>}
      </div>
      <div className="productcatmain2">
          <input
          type="text"
          placeholder="Search products by name, category, location, or price..."
          className="searchInput1"
          />
      </div>
      <ul className='activitycat4'>
        <li className={`catmenu3 ${activeTab === "allleads" ? "active-allleads" : ""}`}onClick={() => setActiveTab("allleads")}>All Leads</li>
        <li className={`catmenu3 ${activeTab === "productenquiries" ? "active-productenquiries" : ""}`}onClick={() => setActiveTab("productenquiries")}>Product Enquiries</li>
        <li className={`catmenu3 ${activeTab === "packageleads" ? "active-packageleads" : ""}`}onClick={() => setActiveTab("packageleads")}>Package Leads</li>
      </ul>
       {activeTab === "allleads" && ( <div>
      <div className="leadCard">

      <div className="leadTop">
        <div>
          <div className="leadNameRow">
            <h3>Rahul Verma</h3>
            <span className="statusBadge">New</span>
          </div>

          <div className="leadDate">
            <span className="dot"></span>
            2024-01-28
          </div>
        </div>

        <div className="leadActions">
          <button className="viewBtn" onClick={() => navigate("/leaddetails")}>
            <FiEye /> View Details
          </button>
          <button className="contactBtn">
            <FiPhone /> Contact
          </button>
        </div>
      </div>

      <div className="leadBottom">

        <div className="infoBox2">
          <div className="iconCircle">
            <MdOutlineVilla />
          </div>
          <div>
            <p className="propertyTitle">Luxury Villa - Juhu</p>
            <p className="propertyCat">Properties</p>
          </div>
        </div>

        <div className="infoBox1">
          <p className="label">EMAIL</p>
          <p className="valueRow">
            <FiMail className="smallIcon" />
            rahul.v@email.com
          </p>
        </div>

        <div className="infoBox1">
          <p className="label">PHONE</p>
          <p className="valueRow">
            <FiPhone className="smallIcon" />
            +91 98765 43210
          </p>
        </div>

        <div className="infoBox1 highlightValueBox">
          <p className="label1">LEAD VALUE</p>
          <p className="leadValue">₹45Cr</p>
        </div>

      </div>
    </div>
        <div className="leadCard">

      <div className="leadTop">
        <div>
          <div className="leadNameRow">
            <h3>Pooja Gupta</h3>
            <span className="statusBadge">New</span>
          </div>

          <div className="leadDate">
            <span className="dot"></span>
            2024-01-28
          </div>
        </div>

        <div className="leadActions">
          <button className="viewBtn" onClick={() => navigate("/leaddetails")}>
            <FiEye /> View Details
          </button>
          <button className="contactBtn">
            <FiPhone /> Contact
          </button>
        </div>
      </div>

      <div className="leadBottom">

        <div className="infoBox2">
          <div className="iconCircle">
            <MdOutlineVilla />
          </div>
          <div>
            <p className="propertyTitle">Elite Package</p>
            <p className="propertyCat">Package Enquiry</p>
          </div>
        </div>

        <div className="infoBox1">
          <p className="label">EMAIL</p>
          <p className="valueRow">
            <FiMail className="smallIcon" />
            pooja.g@email.com
          </p>
        </div>

        <div className="infoBox1">
          <p className="label">PHONE</p>
          <p className="valueRow">
            <FiPhone className="smallIcon" />
            +91 98765 11111
          </p>
        </div>

        <div className="infoBox1 highlightValueBox">
          <p className="label1">LEAD VALUE</p>
          <p className="leadValue">₹12L/year</p>
        </div>

      </div>
    </div>
    </div>)}
       {activeTab === "productenquiries" && ( <div><div className="leadCard">

      <div className="leadTop">
        <div>
          <div className="leadNameRow">
            <h3>Pooja Gupta</h3>
            <span className="statusBadge">New</span>
          </div>

          <div className="leadDate">
            <span className="dot"></span>
            2024-01-28
          </div>
        </div>

        <div className="leadActions">
          <button className="viewBtn" onClick={() => navigate("/leaddetails")}>
            <FiEye /> View Details
          </button>
          <button className="contactBtn">
            <FiPhone /> Contact
          </button>
        </div>
      </div>

      <div className="leadBottom">

        <div className="infoBox2">
          <div className="iconCircle">
            <MdOutlineVilla />
          </div>
          <div>
            <p className="propertyTitle">Elite Package</p>
            <p className="propertyCat">Package Enquiry</p>
          </div>
        </div>

        <div className="infoBox1">
          <p className="label">EMAIL</p>
          <p className="valueRow">
            <FiMail className="smallIcon" />
            pooja.g@email.com
          </p>
        </div>

        <div className="infoBox1">
          <p className="label">PHONE</p>
          <p className="valueRow">
            <FiPhone className="smallIcon" />
            +91 98765 11111
          </p>
        </div>

        <div className="infoBox1 highlightValueBox">
          <p className="label1">LEAD VALUE</p>
          <p className="leadValue">₹12L/year</p>
        </div>

      </div>
    </div>
        <div className="leadCard">

      <div className="leadTop">
        <div>
          <div className="leadNameRow">
            <h3>Rahul Verma</h3>
            <span className="statusBadge">New</span>
          </div>

          <div className="leadDate">
            <span className="dot"></span>
            2024-01-28
          </div>
        </div>

        <div className="leadActions">
          <button className="viewBtn" onClick={() => navigate("/leaddetails")}>
            <FiEye /> View Details
          </button>
          <button className="contactBtn">
            <FiPhone /> Contact
          </button>
        </div>
      </div>

      <div className="leadBottom">

        <div className="infoBox2">
          <div className="iconCircle">
            <MdOutlineVilla />
          </div>
          <div>
            <p className="propertyTitle">Luxury Villa - Juhu</p>
            <p className="propertyCat">Properties</p>
          </div>
        </div>

        <div className="infoBox1">
          <p className="label">EMAIL</p>
          <p className="valueRow">
            <FiMail className="smallIcon" />
            rahul.v@email.com
          </p>
        </div>

        <div className="infoBox1">
          <p className="label">PHONE</p>
          <p className="valueRow">
            <FiPhone className="smallIcon" />
            +91 98765 43210
          </p>
        </div>

        <div className="infoBox1 highlightValueBox">
          <p className="label1">LEAD VALUE</p>
          <p className="leadValue">₹45Cr</p>
        </div>

      </div>
    </div></div>)}
       {activeTab === "packageleads" && ( <div><div className="leadCard">

      <div className="leadTop">
        <div>
          <div className="leadNameRow">
            <h3>Rahul Verma</h3>
            <span className="statusBadge">New</span>
          </div>

          <div className="leadDate">
            <span className="dot"></span>
            2024-01-28
          </div>
        </div>

        <div className="leadActions">
          <button className="viewBtn" onClick={() => navigate("/leaddetails")}>
            <FiEye /> View Details
          </button>
          <button className="contactBtn">
            <FiPhone /> Contact
          </button>
        </div>
      </div>

      <div className="leadBottom">

        <div className="infoBox2">
          <div className="iconCircle">
            <MdOutlineVilla />
          </div>
          <div>
            <p className="propertyTitle">Luxury Villa - Juhu</p>
            <p className="propertyCat">Properties</p>
          </div>
        </div>

        <div className="infoBox1">
          <p className="label">EMAIL</p>
          <p className="valueRow">
            <FiMail className="smallIcon" />
            rahul.v@email.com
          </p>
        </div>

        <div className="infoBox1">
          <p className="label">PHONE</p>
          <p className="valueRow">
            <FiPhone className="smallIcon" />
            +91 98765 43210
          </p>
        </div>

        <div className="infoBox1 highlightValueBox">
          <p className="label1">LEAD VALUE</p>
          <p className="leadValue">₹45Cr</p>
        </div>

      </div>
    </div>
       <div className="leadCard">

      <div className="leadTop">
        <div>
          <div className="leadNameRow">
            <h3>Pooja Gupta</h3>
            <span className="statusBadge">New</span>
          </div>

          <div className="leadDate">
            <span className="dot"></span>
            2024-01-28
          </div>
        </div>

        <div className="leadActions">
          <button className="viewBtn" onClick={() => navigate("/leaddetails")}>
            <FiEye /> View Details
          </button>
          <button className="contactBtn">
            <FiPhone /> Contact
          </button>
        </div>
      </div>

      <div className="leadBottom">

        <div className="infoBox2">
          <div className="iconCircle">
            <MdOutlineVilla />
          </div>
          <div>
            <p className="propertyTitle">Elite Package</p>
            <p className="propertyCat">Package Enquiry</p>
          </div>
        </div>

        <div className="infoBox1">
          <p className="label">EMAIL</p>
          <p className="valueRow">
            <FiMail className="smallIcon" />
            pooja.g@email.com
          </p>
        </div>

        <div className="infoBox1">
          <p className="label">PHONE</p>
          <p className="valueRow">
            <FiPhone className="smallIcon" />
            +91 98765 11111
          </p>
        </div>

        <div className="infoBox1 highlightValueBox">
          <p className="label1">LEAD VALUE</p>
          <p className="leadValue">₹12L/year</p>
        </div>

      </div>
    </div></div>)}
  </div>;
};

export default Leads;
