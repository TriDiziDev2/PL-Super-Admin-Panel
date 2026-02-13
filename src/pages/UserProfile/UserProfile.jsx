import "./UserProfile.css";
import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { HiOutlineCube } from "react-icons/hi2";
import { BsEye } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { PiCube } from "react-icons/pi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { IoTimeOutline } from "react-icons/io5";






const UserProfile = () => {

     const [activeTab, setActiveTab] = useState("approvals");
  const navigate = useNavigate();

  return (
    <div className="userProfileContainer">
      <div className="userTopBar">
        <div className="backUsers" onClick={() => navigate("/users")}><BiLeftArrowAlt /> Back to Users</div>
        <button className="editUserBtn"><FaRegEdit /> Edit User</button>
      </div>
      <div className="userMainCard">
        <div className="usermainleft">
        <div className="avatarCircle">RK</div>
        <p className="userplantag">Basic User</p></div>
        <div className="userInfoSection">
          <h2 className="userprofilenameheader">
            Rajesh Kumar <span className="activeBadge">active</span>
          </h2>
          <p className="memberSince">Member since Jan 15, 2024</p>
          <div className="infoGrid">
            <div className="infoBox blue"><MdOutlineEmail  className="useremailicon blue1" /> rajesh.k@email.com</div>
            <div className="infoBox green"><FiPhone className="useremailicon green1"/> +91 98765 12345</div>
            <div className="infoBox purple"><IoLocationOutline className="useremailicon purple1"/> Andheri, Mumbai</div>
            <div className="infoBox yellow"><CiCalendar className="useremailicon yellow1"/>Last active: 2 hours ago</div>
          </div>
        </div>
      </div>

      <div className="statsGrid">

        <div className="statCard">
            <div className="statcardrow">
          <HiOutlineCube className="useremailicon blue1" />
          <p className="statcardname blue2">PRODUCTS</p></div>
          <h3 className="statcardvalue">3</h3>
        </div>

        <div className="statCard">
            <div className="statcardrow">
          <LuUsers className="useremailicon green1" />
          <p className="statcardname green2">LEADS</p></div>
          <h3 className="statcardvalue">12</h3>
        </div>

        <div className="statCard">
            <div className="statcardrow">
          <LuUsers className="useremailicon yellow1" />
          <p className="statcardname yellow2">REVENUE</p></div>
          <h3 className="statcardvalue gold">₹1.35Cr</h3>
        </div>

        <div className="statCard">
            <div className="statcardrow">
          <BsEye className="useremailicon purple1" />
          <p className="statcardname purple2">VIEWS</p></div>
          <h3 className="statcardvalue">234</h3>
        </div>

      </div>

       <ul className='activitycat'>
              <li className={`catmenu3 ${activeTab === "products" ? "active-products" : ""}`}onClick={() => setActiveTab("products")}><PiCube />Products <span className='catnum1'>(5)</span> </li>
              <li className={`catmenu3 ${activeTab === "leads" ? "active-leads" : ""}`}onClick={() => setActiveTab("leads")}><LuUsers />Leads <span className='catnum1'>(3)</span> </li>
              <li className={`catmenu3 ${activeTab === "activity" ? "active-activity" : ""}`}onClick={() => setActiveTab("activity")}><FaArrowTrendUp />Activity</li>
        </ul>
        {activeTab === "products" && (<div className="productTable">

        <h3 className="publishedproducts"> <PiCube className="publishedicon"/>Published Products</h3>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Tier</th>
              <th>Status</th>
              <th>Views</th>
              <th>Leads</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>
                <b>2BHK Apartment</b>
                <div className="sub"><IoLocationOutline />Andheri, Mumbai</div>
              </td>
              <td><span className="tag">Properties</span></td>
              <td className="price">₹1.2Cr</td>
              <td className="pricetier">Classic</td>
              <td><span className="status active">active</span></td>
              <td className="userviews"><MdOutlineRemoveRedEye className="userviewsicon"/>456</td>
              <td className="userleads" >8</td>
            </tr>

            <tr>
              <td>
                <b>Vintage Watch</b>
                <div className="sub"><IoLocationOutline />Mumbai</div>
              </td>
              <td><span className="tag">Jewellery & Watches</span></td>
              <td className="price">₹15L</td>
              <td className="pricetier">Classic</td>
              <td><span className="status active">active</span></td>
              <td className="userviews"><MdOutlineRemoveRedEye className="userviewsicon"/>123</td>
              <td className="userleads" >3</td>
            </tr>

            <tr>
              <td>
                <b>Antique Chair</b>
                <div className="sub"><IoLocationOutline />Mumbai</div>
              </td>
              <td><span className="tag">Furniture</span></td>
              <td className="price">₹8L</td>
              <td className="pricetier" >Classic</td>
              <td><span className="status sold">sold</span></td>
              <td className="userviews"><MdOutlineRemoveRedEye className="userviewsicon"/>89</td>
              <td className="userleads">1</td>
            </tr>

          </tbody>
        </table>

      </div>)}
        {activeTab === "leads" && (<div className="leadsWrapper">
      <div className="leadsHeader">
        <h3 className="userleadsheader"><LuUsers className="userleadsheadericon"/>Leads Received</h3>
      </div>

      <table className="leadsTable">
        <thead>
          <tr>
            <th>Lead</th>
            <th>Contact</th>
            <th>Product Interest</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className="leadInfo">
                <div className="avatar">SN</div>
                <span>Suresh Nair</span>
              </div>
            </td>

            <td>
              <div className="contactBox email">
                <MdEmail className="icon" /> suresh@example.com
              </div>
              <div className="contactBox phone">
                <FiPhone className="icon" /> +91 98765 12345
              </div>
            </td>

            <td className="productinterest">2BHK Apartment</td>

            <td>
              <div className="dateBox">
                <IoCalendarOutline className="dateIcon" /> 28 Jan 2024
              </div>
            </td>

            <td>
              <span className="status new">new</span>
            </td>
          </tr>

          <tr>
            <td>
              <div className="leadInfo">
                <div className="avatar">MS</div>
                <span>Meera Shah</span>
              </div>
            </td>

            <td>
              <div className="contactBox email">
                <MdEmail className="icon" /> meera@example.com
              </div>
              <div className="contactBox phone">
                <FiPhone className="icon" /> +91 98765 12346
              </div>
            </td>

            <td className="productinterest">Vintage Watch</td>

            <td>
              <div className="dateBox">
                <IoCalendarOutline className="dateIcon" /> 27 Jan 2024
              </div>
            </td>

            <td>
              <span className="status contacted">contacted</span>
            </td>
          </tr>

          <tr>
            <td>
              <div className="leadInfo">
                <div className="avatar">KJ</div>
                <span>Karan Johar</span>
              </div>
            </td>

            <td>
              <div className="contactBox email">
                <MdEmail className="icon" /> karan@example.com
              </div>
              <div className="contactBox phone">
                <FiPhone className="icon" /> +91 98765 12347
              </div>
            </td>

            <td className="productinterest">2BHK Apartment</td>

            <td>
              <div className="dateBox">
                <IoCalendarOutline className="dateIcon" /> 26 Jan 2024
              </div>
            </td>

            <td>
              <span className="status qualified">qualified</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>)}
        {activeTab === "activity" && (<div className="activityWrapper">
      <div className="activityHeader">
        <HiOutlineTrendingUp className="activityHeaderIcon" />
        <h3>Recent Activity</h3>
      </div>

      <div className="timeline">

        <div className="timelineItem">
          <div className="timelineLeft">
            <div className="circle">1</div>
            <div className="verticalLine"></div>
          </div>

          <div className="timelineContent">
            <div>
              <h4>Listed a new product</h4>
              <p>2BHK Apartment</p>
            </div>

            <span className="timeBadge">
              <IoTimeOutline /> 2 days ago
            </span>
          </div>
        </div>

        <div className="timelineItem">
          <div className="timelineLeft">
            <div className="circle">2</div>
            <div className="verticalLine"></div>
          </div>

          <div className="timelineContent">
            <div>
              <h4>Received a lead</h4>
              <p>From Suresh Nair</p>
            </div>

            <span className="timeBadge">
              <IoTimeOutline /> 3 days ago
            </span>
          </div>
        </div>

        <div className="timelineItem">
          <div className="timelineLeft">
            <div className="circle">3</div>
            <div className="verticalLine"></div>
          </div>

          <div className="timelineContent">
            <div>
              <h4>Updated product</h4>
              <p>Vintage Watch</p>
            </div>

            <span className="timeBadge">
              <IoTimeOutline /> 5 days ago
            </span>
          </div>
        </div>

        <div className="timelineItem">
          <div className="timelineLeft">
            <div className="circle">4</div>
          </div>

          <div className="timelineContent">
            <div>
              <h4>Product sold</h4>
              <p>Antique Chair</p>
            </div>

            <span className="timeBadge">
              <IoTimeOutline /> 1 week ago
            </span>
          </div>
        </div>

      </div>
    </div>)}

    </div>
  );
};

export default UserProfile;
