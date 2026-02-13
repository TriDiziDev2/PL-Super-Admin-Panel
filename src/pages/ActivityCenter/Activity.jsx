import { useState } from "react";
import './Activity.css';
import { FiActivity } from "react-icons/fi"
import { MdAccessTime } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import luxuryVilla from '../../assets/Luxury Villa.png';
import rollsRoice from '../../assets/Rolls Royce.png';
import pentHouse from '../../assets/Penthouse.png';
import mercedes from '../../assets/Mercedes.png';
import beachfront from '../../assets/Beachfront.png';
import { AiOutlineShop } from "react-icons/ai";
import { LuCrown } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TbHammer } from "react-icons/tb";
import { BsLightningCharge } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";






const Activitypage = () => {
    const [activeTab, setActiveTab] = useState("approvals");
    const [isEnabled, setIsEnabled] = useState(false);
    const [activeSwitch, setActiveSwitch] = useState(null); 
    const handleToggle = () => {setIsEnabled(!isEnabled);};
    const [verified, setVerified] = useState(false);
    const [activeType, setActiveType] = useState(null);



  return <div className='activitycontainer'>
    <div className='activityheader'>
        <h1 className='activityheadline'><FiActivity className="activityicon" /><span className="gradient-text">Activity Center</span></h1>
        <p className='activitydesc'>Manage product approvals, advertisements, and featured listings</p>
    </div>
    <div className='activityanalytics'>
        <div className='activityanalytic'>
            <div className='analyticheader'>
                <h2>Pending Approvals</h2>
                <span className='analyticsicon'><MdAccessTime /></span>
            </div>
            <h2 className='analyticnum'>5</h2>
            <span className='analyticdesc'>Products awaiting review</span>
        </div>
        <div className='activityanalytic1'>
            <div className='analyticheader1'>
                <h2>Active Ads</h2>
                <span className='analyticsicon'><FaArrowTrendUp /></span>
            </div>
            <h2 className='analyticnum1'>3</h2>
            <span className='analyticdesc1'>Currently running campaigns</span>
        </div>
        <div className='activityanalytic2'>
            <div className='analyticheader2'>
                <h2>Featured Items</h2>
                <span className='analyticsicon'><FaRegStar /></span>
            </div>
            <h2 className='analyticnum2'>5</h2>
            <span className='analyticdesc2'>Premium highlighted products</span>
        </div>
    </div>
    <ul className='activitycat'>
        <li className={`catmenu2 ${activeTab === "approvals" ? "active-approvals" : ""}`}onClick={() => setActiveTab("approvals")}><IoCheckmarkCircleOutline />Product Approvals <span className='catnum'>5</span> </li>
        <li className={`catmenu2 ${activeTab === "ads" ? "active-ads" : ""}`}onClick={() => setActiveTab("ads")}><FaArrowTrendUp />Advertisements <span className='catnum'>3</span> </li>
        <li className={`catmenu2 ${activeTab === "featured" ? "active-featured" : ""}`}onClick={() => setActiveTab("featured")}><FaRegStar />Featured & Recommended <span className='catnum'>5</span> </li>
    </ul>
    {activeTab === "approvals" && (
    <div className='activitydetail'>
        <div className='detailheader'>
            <h2 className='detailheading'>Pending Product Approvals</h2>
            <span className='detaildesc'>Review and approve products for Marketplace, Buy Now, and Auctions as General, Luxury, or Classic tier</span>
        </div>
        <div className='activityinfo'>
            <img src={luxuryVilla} alt='career image' className='activityimg'/>
            <div className='activityinfodiv'>
                <div className='activityinfoheader'>
                    <div className='activityinfohead'>
                        <h2 className='activityinfoheading'>Luxury Villa - Juhu Beach</h2>
                        <h3 className='activityinfoprice'>₹15 Cr</h3>
                    </div>
                    <ul className='activityinfotags'>
                        <li className='businesscat'><AiOutlineShop />Marketplace</li>
                        <li className='productcat'>Properties</li>
                        <li className='plancat'><LuCrown />Elite</li>
                    </ul>
                </div>
                <div className='activityinfodetails'>
                    <div className='activityinfodetailrow'>
                        <span className='activityinfoicon'><CiLocationOn />Mumbai, Maharshatra</span>
                        <span className='activityinfoicon'><MdAccessTime />Submitted: 2024-02-05</span>
                    </div>
                    <div className='activityinfodetailrow'>
                        <span className='activityinfoicon'>By: Rajesh Sharma</span>
                    </div>
                </div>
                <div className='activityapprovedtags'>
                    <h2 className='activityapprovedtitle'>Approve as Tier:</h2>
                    <ul className='activityapprovedtag'>
                        <li className='generaltag'><SlBadge />General</li>
                        <li className='luxurytag'><LuCrown />Luxury</li>
                        <li className='classictag'><BsStars />Classic</li>
                        <li className='rejecttag'><IoIosCloseCircleOutline />Reject</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='activityinfo'>
            <img src={rollsRoice} alt='career image' className='activityimg'/>
            <div className='activityinfodiv'>
                <div className='activityinfoheader'>
                    <div className='activityinfohead'>
                        <h2 className='activityinfoheading'>Vintage Rolls Royce Phantom</h2>
                        <h3 className='activityinfoprice'>₹8.5 Cr</h3>
                    </div>
                    <ul className='activityinfotags'>
                        <li className='businesscat1'><TbHammer />Auctions</li>
                        <li className='productcat'>Cars</li>
                        <li className='plancat'><LuCrown />Pro</li>
                    </ul>
                </div>
                <div className='activityinfodetails'>
                    <div className='activityinfodetailrow'>
                        <span className='activityinfoicon'><CiLocationOn />Delhi, Delhi</span>
                        <span className='activityinfoicon'><MdAccessTime />Submitted: 2024-02-04</span>
                    </div>
                    <div className='activityinfodetailrow'>
                        <span className='activityinfoicon'>By: Priya Malhotra</span>
                    </div>
                </div>
                <div className='activityapprovedtags'>
                    <h2 className='activityapprovedtitle'>Approve as Tier:</h2>
                    <ul className='activityapprovedtag'>
                        <li className='generaltag'><SlBadge />General</li>
                        <li className='luxurytag'><LuCrown />Luxury</li>
                        <li className='classictag'><BsStars />Classic</li>
                        <li className='rejecttag'><IoIosCloseCircleOutline />Reject</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='activityinfo'>
            <img src={pentHouse} alt='career image' className='activityimg'/>
            <div className='activityinfodiv'>
                <div className='activityinfoheader'>
                    <div className='activityinfohead'>
                        <h2 className='activityinfoheading'>Duplex Penthouse - Whitefield</h2>
                        <h3 className='activityinfoprice'>₹6.2 Cr</h3>
                    </div>
                    <ul className='activityinfotags'>
                        <li className='businesscat1'><BsLightningCharge />Buy Now</li>
                        <li className='productcat'>Properties</li>
                        <li className='plancat'><LuCrown />Elite</li>
                    </ul>
                </div>
                <div className='activityinfodetails'>
                    <div className='activityinfodetailrow'>
                        <span className='activityinfoicon'><CiLocationOn />Bangalore, Karnataka</span>
                        <span className='activityinfoicon'><MdAccessTime />Submitted: 2024-02-04</span>
                    </div>
                    <div className='activityinfodetailrow'>
                        <span className='activityinfoicon'>By: Vikram Patel</span>
                    </div>
                </div>
                <div className='activityapprovedtags'>
                    <h2 className='activityapprovedtitle'>Approve as Tier:</h2>
                    <ul className='activityapprovedtag'>
                        <li className='generaltag'><SlBadge />General</li>
                        <li className='luxurytag'><LuCrown />Luxury</li>
                        <li className='classictag'><BsStars />Classic</li>
                        <li className='rejecttag'><IoIosCloseCircleOutline />Reject</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='activityinfo'>
            <img src={mercedes} alt='career image' className='activityimg'/>
            <div className='activityinfodiv'>
                <div className='activityinfoheader'>
                    <div className='activityinfohead'>
                        <h2 className='activityinfoheading'>Mercedes-Benz S-Class 2023</h2>
                        <h3 className='activityinfoprice'>₹1.8 Cr</h3>
                    </div>
                    <ul className='activityinfotags'>
                        <li className='businesscat1'><AiOutlineShop />Marketplace</li>
                        <li className='productcat'>Cars</li>
                        <li className='plancat'><LuCrown />Basic</li>
                    </ul>
                </div>
                <div className='activityinfodetails'>
                    <div className='activityinfodetailrow'>
                        <span className='activityinfoicon'><CiLocationOn />Hyderabad, Telangana</span>
                        <span className='activityinfoicon'><MdAccessTime />Submitted: 2024-02-03</span>
                    </div>
                    <div className='activityinfodetailrow'>
                        <span className='activityinfoicon'>By: Ananya Reddy</span>
                    </div>
                </div>
                <div className='activityapprovedtags'>
                    <h2 className='activityapprovedtitle'>Approve as Tier:</h2>
                    <ul className='activityapprovedtag'>
                        <li className='generaltag'><SlBadge />General</li>
                        <li className='luxurytag'><LuCrown />Luxury</li>
                        <li className='classictag'><BsStars />Classic</li>
                        <li className='rejecttag'><IoIosCloseCircleOutline />Reject</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='activityinfo'>
            <img src={beachfront} alt='career image' className='activityimg'/>
            <div className='activityinfodiv'>
                <div className='activityinfoheader'>
                    <div className='activityinfohead'>
                        <h2 className='activityinfoheading'>Beachfront Villa - Goa</h2>
                        <h3 className='activityinfoprice'>₹12 Cr</h3>
                    </div>
                    <ul className='activityinfotags'>
                        <li className='businesscat1'><TbHammer />Auctions</li>
                        <li className='productcat'>Properties</li>
                        <li className='plancat'><LuCrown />Pro</li>
                    </ul>
                </div>
                <div className='activityinfodetails'>
                    <div className='activityinfodetailrow'>
                        <span className='activityinfoicon'><CiLocationOn />Goa, Goa</span>
                        <span className='activityinfoicon'><MdAccessTime />Submitted: 2024-02-03</span>
                    </div>
                    <div className='activityinfodetailrow'>
                        <span className='activityinfoicon'>By: Arjun Khanna</span>
                    </div>
                </div>
                <div className='activityapprovedtags'>
                    <h2 className='activityapprovedtitle'>Approve as Tier:</h2>
                    <ul className='activityapprovedtag'>
                        <li className='generaltag'><SlBadge />General</li>
                        <li className='luxurytag'><LuCrown />Luxury</li>
                        <li className='classictag'><BsStars />Classic</li>
                        <li className='rejecttag'><IoIosCloseCircleOutline />Reject</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )}
    {activeTab === "ads" && (
    <div className="activitydetail">
        <div className='detailheader1'>
            <h2 className='detailheading1'>Advertisement Management</h2>
            <span className='detaildesc1'>Manage product advertisements across Home Page Top, Home Page Bottom, and Product Pages</span>
        </div>
        <div className="advertcreate">
            <h2 className="advertheader"><FaArrowTrendUp />Create New Advertisement</h2>
            <div className="adverttitlediv">
                <h3 className="adverttitle"><BsStars />Title of Advertisement  </h3>
                <input type="text" placeholder="Enter advertisement title..." className="advertinputitle" />
            </div>
            <div className="adverttitlediv">
                <h3 className="adverttitle">Description</h3>
                <input type="text" placeholder="Enter advertisement title..." className="advertinputdesc" />
            </div>
            <div className="advertinputrow">
                <div className="adverttitlediv">
                    <h3 className="adverttitle"><SlBadge />Button Text</h3>
                    <input type="text" placeholder="Enter advertisement title..." className="advertinputtext" />
                </div>
                <div className="adverttitlediv">
                    <h3 className="adverttitle"><FaLink />Button Link</h3>
                    <input type="text" placeholder="Enter advertisement title..." className="advertinputtext" />
                </div>
            </div>
            <div className="advertinputrow">
                <div className="adverttitlediv">
                    <h3 className="adverttitle"><MdOutlineFileUpload />Banner / Image Upload</h3>
                    <input type="file" className="advertinputtext" />
                </div>
                <div className="adverttitlediv">
                    <h3 className="adverttitle">Ad Placement</h3>
                    <select className="advertinputtext">
                        <option>Home Page Banner</option>
                        <option>Popup Ad</option>
                        <option>Product Listing</option>
                    </select>
                </div>
            </div>
            <span className="formdesclaimer">⚠️ Select Ad Placement first to see recommended dimensions</span>
            <button className="adcreatebutton">Create Advertisement</button>
        </div>
        <h2 className="detailheading3"><FaRegEye />Active Advertisements</h2>
        <div className="advertdiv">
            <div className="advertinfo">
                <h2 className="advertheading">Luxury Villa - Bandra West<span className="adverttag">Active</span></h2>
                <ul className="advertinputs">
                    <li className="advertinput">
                        <span className="advertinputtitle">Placement</span><br></br>
                        <span className="advertproductname">Home Page Top</span>
                    </li>
                    <li className="advertinput">
                        <span className="advertinputtitle">Impressions</span><br></br>
                        <span className="advertinputinfo">45,234</span>
                    </li>
                    <li className="advertinput">
                        <span className="advertinputtitle">Clicks</span><br></br>
                        <span className="advertinputinfo">2,156</span>
                    </li>
                    <li className="advertinput">
                        <span className="advertinputtitle">Duration</span><br></br>
                        <span className="advertinputinfo">2024-02-01 - 2024-02-15</span>
                    </li>
                </ul>
            </div>
            <div className="toggleContainer"><label className="switch">
                <input
                type="checkbox"
                checked={isEnabled}
                onChange={handleToggle}
                />
                <span className="slider"></span>
            </label>
                <span className="toggleStatus">{isEnabled ? "Active" : "Inactive"}</span>
            </div>
        </div>
        <div className="advertdiv">
            <div className="advertinfo">
                <h2 className="advertheading">Lamborghini Aventador<span className="adverttag">Active</span></h2>
                <ul className="advertinputs">
                    <li className="advertinput">
                        <span className="advertinputtitle">Placement</span><br></br>
                        <span className="advertproductname">Product Page</span>
                    </li>
                    <li className="advertinput">
                        <span className="advertinputtitle">Impressions</span><br></br>
                        <span className="advertinputinfo">28,567</span>
                    </li>
                    <li className="advertinput">
                        <span className="advertinputtitle">Clicks</span><br></br>
                        <span className="advertinputinfo">1,423</span>
                    </li>
                    <li className="advertinput">
                        <span className="advertinputtitle">Duration</span><br></br>
                        <span className="advertinputinfo">2024-01-28 - 2024-02-12</span>
                    </li>
                </ul>
            </div>
            <div className="toggleContainer"><label className="switch">
                <input
                type="checkbox"
                checked={isEnabled}
                onChange={handleToggle}
                />
                <span className="slider"></span>
            </label>
                <span className="toggleStatus">{isEnabled ? "Active" : "Inactive"}</span>
            </div>
        </div>
        <div className="advertdiv">
            <div className="advertinfo">
                <h2 className="advertheading">Rolex Daytona - Limited Edition<span className="adverttag">Active</span></h2>
                <ul className="advertinputs">
                    <li className="advertinput">
                        <span className="advertinputtitle">Placement</span><br></br>
                        <span className="advertproductname">Home Page Bottom</span>
                    </li>
                    <li className="advertinput">
                        <span className="advertinputtitle">Impressions</span><br></br>
                        <span className="advertinputinfo">18,234</span>
                    </li>
                    <li className="advertinput">
                        <span className="advertinputtitle">Clicks</span><br></br>
                        <span className="advertinputinfo">892</span>
                    </li>
                    <li className="advertinput">
                        <span className="advertinputtitle">Duration</span><br></br>
                        <span className="advertinputinfo">2024-02-03 - 2024-02-17</span>
                    </li>
                </ul>
            </div>
            <div className="toggleContainer"><label className="switch">
                <input
                type="checkbox"
                checked={isEnabled}
                onChange={handleToggle}
                />
                <span className="slider"></span>
            </label>
                <span className="toggleStatus">{isEnabled ? "Active" : "Inactive"}</span>
            </div>
        </div>
    </div>
    )}
    {activeTab === "featured" && (
    <div className="activitydetail">
      <div className='detailheader2'>
            <h2 className='detailheading2'>Featured & Recommended Products</h2>
            <span className='detaildesc2'>Mark products as Featured or Recommended to highlight them across the platform</span>
        </div>
        <div className="searchBox">
            <FiSearch className="searchIcon" />
            <input
                type="text"
                placeholder="Search products by name, category, location, or price..."
                className="searchInput"
            />
        </div>
        <span className="searchdesc">5 products found</span>
        <div className='activityinfo1'>
            <img src={luxuryVilla} alt='career image' className='activityimg1'/>
            <div className='activityinfodiv'>
                <div className='activityinfoheader'>
                    <div className='activityinfohead'>
                        <h2 className='activityinfoheading'>Sea-Facing Penthouse - Marine Drive</h2>
                        <h3 className='activityinfoprice'>₹25 Cr</h3>
                    </div>
                    <ul className='activityinfotags'>
                        <li className='businesscat'><AiOutlineShop />Marketplace</li>
                        <li className='productcat'>Properties</li>
                        <li className='viewcat'><FaRegEye />12,345 views</li>
                    </ul>
                </div>
                <span className='activityinfoicon'><CiLocationOn />Mumbai, Maharshatra</span>
            <div className='activityapprovedtags1'>
                <div>
                    <label className="switcher">
                        <input
                            type="checkbox"
                            checked={activeType === "featured"}
                            onChange={() =>
                                setActiveType(activeType === "featured" ? null : "featured")
                            }
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="switchedtag">⭐ Featured</span>
                </div>
                <div>
                    <label className="switcher">
                        <input
                            type="checkbox"
                            checked={activeType === "recommended"}
                            onChange={() =>
                                setActiveType(activeType === "recommended" ? null : "recommended")
                            }
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="switchedtag">
                        <FaArrowTrendUp /> Recommended
                    </span>
                </div>
                <div>
                    <label className="switcher">
                        <input
                            type="checkbox"
                            checked={verified}
                            onChange={() => setVerified(!verified)}
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="switchedtag">✔️ Verified</span>
                </div>

            </div>

            </div>
        </div>
        <div className='activityinfo1'>
            <img src={mercedes} alt='career image' className='activityimg1'/>
            <div className='activityinfodiv'>
                <div className='activityinfoheader'>
                    <div className='activityinfohead'>
                        <h2 className='activityinfoheading'>Ferrari F8 Tributo 2022</h2>
                        <h3 className='activityinfoprice'>₹5.8 Cr</h3>
                    </div>
                    <ul className='activityinfotags'>
                        <li className='businesscat1'><BsLightningCharge />Buy Now</li>
                        <li className='productcat'>Cars</li>
                        <li className='viewcat'><FaRegEye />8,756 views</li>
                    </ul>
                </div>
                <span className='activityinfoicon'><CiLocationOn />Bangalore, Karnataka</span>
                <div className='activityapprovedtags1'>
                <div>
                    <label className="switcher">
                        <input
                            type="checkbox"
                            checked={activeType === "featured"}
                            onChange={() =>
                                setActiveType(activeType === "featured" ? null : "featured")
                            }
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="switchedtag">⭐ Featured</span>
                </div>
                <div>
                    <label className="switcher">
                        <input
                            type="checkbox"
                            checked={activeType === "recommended"}
                            onChange={() =>
                                setActiveType(activeType === "recommended" ? null : "recommended")
                            }
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="switchedtag">
                        <FaArrowTrendUp /> Recommended
                    </span>
                </div>
                <div>
                    <label className="switcher">
                        <input
                            type="checkbox"
                            checked={verified}
                            onChange={() => setVerified(!verified)}
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="switchedtag">✔️ Verified</span>
                </div>

            </div>
            </div>
        </div>
        <div className='activityinfo1'>
            <img src={beachfront} alt='career image' className='activityimg1'/>
            <div className='activityinfodiv'>
                <div className='activityinfoheader'>
                    <div className='activityinfohead'>
                        <h2 className='activityinfoheading'>Private Yacht - 80ft Luxury</h2>
                        <h3 className='activityinfoprice'>₹18 Cr</h3>
                    </div>
                    <ul className='activityinfotags'>
                        <li className='businesscat1'><TbHammer />Auctions</li>
                        <li className='productcat'>Yachts</li>
                        <li className='viewcat'><FaRegEye />15,234 views</li>
                    </ul>
                </div>
                <span className='activityinfoicon'><CiLocationOn />Goa, Goa</span>
                <div className='activityapprovedtags1'>
                <div>
                    <label className="switcher">
                        <input
                            type="checkbox"
                            checked={activeType === "featured"}
                            onChange={() =>
                                setActiveType(activeType === "featured" ? null : "featured")
                            }
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="switchedtag">⭐ Featured</span>
                </div>
                <div>
                    <label className="switcher">
                        <input
                            type="checkbox"
                            checked={activeType === "recommended"}
                            onChange={() =>
                                setActiveType(activeType === "recommended" ? null : "recommended")
                            }
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="switchedtag">
                        <FaArrowTrendUp /> Recommended
                    </span>
                </div>
                <div>
                    <label className="switcher">
                        <input
                            type="checkbox"
                            checked={verified}
                            onChange={() => setVerified(!verified)}
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="switchedtag">✔️ Verified</span>
                </div>

            </div>
            </div>
        </div>
        <div className='activityinfo1'>
            <img src={pentHouse} alt='career image' className='activityimg1'/>
            <div className='activityinfodiv'>
                <div className='activityinfoheader'>
                    <div className='activityinfohead'>
                        <h2 className='activityinfoheading'>Luxury Farmhouse - Lonavala</h2>
                        <h3 className='activityinfoprice'>₹9.5 Cr</h3>
                    </div>
                    <ul className='activityinfotags'>
                        <li className='businesscat'><AiOutlineShop />Marketplace</li>
                        <li className='productcat'>Properties</li>
                        <li className='viewcat'><FaRegEye />6,432 views</li>
                    </ul>
                </div>
                <span className='activityinfoicon'><CiLocationOn />Pune, Maharshatra</span>
                <div className='activityapprovedtags1'>
                <div>
                    <label className="switcher">
                        <input
                            type="checkbox"
                            checked={activeType === "featured"}
                            onChange={() =>
                                setActiveType(activeType === "featured" ? null : "featured")
                            }
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="switchedtag">⭐ Featured</span>
                </div>
                <div>
                    <label className="switcher">
                        <input
                            type="checkbox"
                            checked={activeType === "recommended"}
                            onChange={() =>
                                setActiveType(activeType === "recommended" ? null : "recommended")
                            }
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="switchedtag">
                        <FaArrowTrendUp /> Recommended
                    </span>
                </div>
                <div>
                    <label className="switcher">
                        <input
                            type="checkbox"
                            checked={verified}
                            onChange={() => setVerified(!verified)}
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="switchedtag">✔️ Verified</span>
                </div>

            </div>
            </div>
        </div>
        <div className='activityinfo1'>
            <img src={rollsRoice} alt='career image' className='activityimg1'/>
            <div className='activityinfodiv'>
                <div className='activityinfoheader'>
                    <div className='activityinfohead'>
                        <h2 className='activityinfoheading'>Patek Philippe Nautilus</h2>
                        <h3 className='activityinfoprice'>₹25 Cr</h3>
                    </div>
                    <ul className='activityinfotags'>
                        <li className='businesscat1'><BsLightningCharge />Buy Now</li>
                        <li className='productcat'>Watches</li>
                        <li className='viewcat'><FaRegEye />9,123 views</li>
                    </ul>
                </div>
                <span className='activityinfoicon'><CiLocationOn />Delhi, Delhi</span>
                <div className='activityapprovedtags1'>
                <div>
                    <label className="switcher">
                        <input
                            type="checkbox"
                            checked={activeType === "featured"}
                            onChange={() =>
                                setActiveType(activeType === "featured" ? null : "featured")
                            }
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="switchedtag">⭐ Featured</span>
                </div>
                <div>
                    <label className="switcher">
                        <input
                            type="checkbox"
                            checked={activeType === "recommended"}
                            onChange={() =>
                                setActiveType(activeType === "recommended" ? null : "recommended")
                            }
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="switchedtag">
                        <FaArrowTrendUp /> Recommended
                    </span>
                </div>
                <div>
                    <label className="switcher">
                        <input
                            type="checkbox"
                            checked={verified}
                            onChange={() => setVerified(!verified)}
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="switchedtag">✔️ Verified</span>
                </div>

            </div>
            </div>
        </div>
    </div>
    )}
  </div>;
};

export default Activitypage;