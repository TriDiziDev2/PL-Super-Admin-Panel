import "./CreateNewUser.css";
import { BiLeftArrowAlt } from "react-icons/bi";
import { AiOutlineShop } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";
import { TbHammer } from "react-icons/tb";
import { FiHome } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateNewUser = () => {

  const [category, setCategory] = useState("marketplace");
  const navigate = useNavigate();

  return (
    <div className="createUserContainer">

      <div className="createUserHeader">
        <div className="backBtn" onClick={() => navigate("/users")}><BiLeftArrowAlt/></div>
        <div>
          <h2 className="createuserheading">Create New User</h2>
          <p className="createuserdesc">Add a new user to the Billionaire Auction platform</p>
        </div>
      </div>

      <div className="businessCard">

        <div className="cardTitle">
          <h3 className="usercreatecategory"> <AiOutlineShop className="businesscategoryicon"/> Business Category</h3>
          <span userinfoheader>Select the primary business mode for this user</span>
        </div>

        <p className="primaryLabel">Primary Category</p>

        <div className="categoryRow">

          <div 
            className={`categoryBox ${category==="marketplace"?"activeCat":""}`}
            onClick={()=>setCategory("marketplace")}
          >
            <AiOutlineShop/>
            <span>Marketplace</span>
          </div>

          <div 
            className={`categoryBox ${category==="buynow"?"activeCat":""}`}
            onClick={()=>setCategory("buynow")}
          >
            <BsLightningCharge/>
            <span>Buy Now</span>
          </div>

          <div 
            className={`categoryBox ${category==="auction"?"activeCat":""}`}
            onClick={()=>setCategory("auction")}
          >
            <TbHammer/>
            <span>Auctions</span>
          </div>

          <div 
            className={`categoryBox ${category==="tolet"?"activeCat":""}`}
            onClick={()=>setCategory("tolet")}
          >
            <FiHome/>
            <span>To-Let</span>
          </div>

        </div>
      </div>

      <div className="bottomGrid">

        <div className="userInfoCard">

          <div className="cardTitle1">
            <h3 className="usercardtitle">User Information</h3>
            <span className="userinfoheader">Enter the basic details of the user</span>
          </div>

          <div className="formGroup">
              <label className="userinfotitle">Full Name</label>
              <input className="userforminput" placeholder="e.g., Priya Sharma"/>
            </div>

          <div className="formGrid">

            <div className="formGroup">
              <label className="userinfotitle">Email Address</label>
              <input className="userforminput" placeholder="e.g., priya@example.com"/>
            </div>

            <div className="formGroup">
              <label className="userinfotitle">Phone Number</label>
              <input className="userforminput" placeholder="e.g., +91 98765 43210"/>
            </div>

            <div className="formGroup">
              <label className="userinfotitle">User Tier</label>
              <select className="userforminput" >
                <option>Basic</option>
                <option>Pro</option>
                <option>Elite</option>
              </select>
            </div>

            <div className="formGroup">
              <label className="userinfotitle">Location</label>
              <select className="userforminput" >
                <option>Select city</option>
              </select>
            </div>

          </div>

        </div>

        <div className="accountCard">

          <div className="cardTitle1">
            <h3 className="usercardtitle">Account Settings</h3>
            <span className="userinfoheader">User account status</span>
          </div>

          <div className="formGroup">
            <label>Status</label>
            <select className="userforminput" >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        
          <button className="createBtn">Create User</button>
          <button className="cancelBtn">Cancel</button>

        </div>

      </div>

    </div>
  );
};

export default CreateNewUser;
