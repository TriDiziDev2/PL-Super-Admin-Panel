import React, { useState } from "react";
import { useRef } from "react";

import './productcreation.css';
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AiOutlineShop } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";
import { TbHammer } from "react-icons/tb";
import { FiHome } from "react-icons/fi";
import { LiaCarSideSolid } from "react-icons/lia";
import { MdDirectionsBike } from "react-icons/md";
import { RiSofaLine } from "react-icons/ri";
import { IoDiamondOutline } from "react-icons/io5";
import { PiDotsThreeBold } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { HiOutlineCube } from "react-icons/hi";
import { GiPaintBrush } from "react-icons/gi";
import { FiUpload } from "react-icons/fi";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";
import { LuWarehouse } from "react-icons/lu";
import { LuLandPlot } from "react-icons/lu";
import { LuBedDouble } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";



const ProductCreation = () => {

  const fileInputRef = useRef(null);

  const handleIconClick = () => { fileInputRef.current.click(); };

  const handleFileChange = (event) => { const files = event.target.files; console.log(files); };

    const [activeTab, setActiveTab] = useState("realestate");
    const [listingMode, setListingMode] = useState("marketplace");
    const navigate = useNavigate();

  return ( <div className='productcontainer1'>
    <div className='producthead1'>
        <div className='backbutton' onClick={() => navigate("/products")}><BiLeftArrowAlt /></div>
          <div className='productheadinfo'>
                <h1 className='productsheader'>Create New Product</h1>
                <span className='productheaddesc'>Add a new luxury item to the auction</span>
            </div>
     </div>
    <div className="productselection">

        <ul
  className={
    listingMode === "marketplace"
      ? "selectedcategory"
      : "selectedcategory1"
  }
  onClick={() => setListingMode("marketplace")}
>
        <li
            className={
            listingMode === "marketplace"
                ? "selectedcaticon"
                : "selectedcaticon1"
            }
        >
            <AiOutlineShop />
        </li>

        <li
            className={
            listingMode === "marketplace"
                ? "selectedcatname"
                : "selectedcatname1"
            }
        >
            Marketplace
        </li>

        <li className="selectedcatdesc">
            General listing for all products
        </li>

        {listingMode === "marketplace" && (
            <li className="selectedcattag">Selected</li>
        )}
        </ul>


        <ul
        className={
            listingMode === "buynow"
            ? "selectedcategory"
            : "selectedcategory1"
        }
        onClick={() => setListingMode("buynow")}
        >
        <li
            className={
            listingMode === "buynow"
                ? "selectedcaticon"
                : "selectedcaticon1"
            }
        >
            <BsLightningCharge />
        </li>

        <li
            className={
            listingMode === "buynow"
                ? "selectedcatname"
                : "selectedcatname1"
            }
        >
            Buy Now
        </li>

        <li className="selectedcatdesc">
            Instant purchase with fixed price
        </li>

        {listingMode === "buynow" && (
            <li className="selectedcattag">Selected</li>
        )}
        </ul>


        <ul
        className={
            listingMode === "auction"
            ? "selectedcategory"
            : "selectedcategory1"
        }
        onClick={() => setListingMode("auction")}
        >
        <li
            className={
            listingMode === "auction"
                ? "selectedcaticon"
                : "selectedcaticon1"
            }
        >
            <TbHammer />
        </li>

        <li
            className={
            listingMode === "auction"
                ? "selectedcatname"
                : "selectedcatname1"
            }
        >
            Auctions
        </li>

        <li className="selectedcatdesc">
            Bidding-based auction listing
        </li>

        {listingMode === "auction" && (
            <li className="selectedcattag">Selected</li>
        )}
        </ul>


        <ul
            className={
                listingMode === "tolet"
                ? "selectedcategory"
                : "selectedcategory1"
            }
            onClick={() => setListingMode("tolet")}
            >
            <li
                className={
                listingMode === "tolet"
                    ? "selectedcaticon"
                    : "selectedcaticon1"
                }
            >
                <FiHome />
            </li>

            <li
                className={
                listingMode === "tolet"
                    ? "selectedcatname"
                    : "selectedcatname1"
                }
            >
                To Let
            </li>

            <li className="selectedcatdesc">
                Rental property listing
            </li>

            {listingMode === "tolet" && (
                <li className="selectedcattag">Selected</li>
            )}
            </ul>


    </div>
    {listingMode === "marketplace" && <div>
    <div className="categoryfilter1">
        <div className='categoryselctionheader1'>
            <div className='productcategoryselector'><AiOutlineShop /></div>
          <div className='productheadinfo'>
                <h1 className='productcreatehead'>Select Product Category</h1>
                <span className='productheaddesc1'>Choose the type of product for marketplace</span>
            </div>
        </div>
        <ul className="categoryfilters1">
            <li
                className={`categoryselection4 ${activeTab === "realestate" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("realestate")}
            >
                <PiBuildingOfficeBold className="categoryicon" /> Real Estate
            </li>

            <li
                className={`categoryselection4 ${activeTab === "cars" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("cars")}
            >
                <LiaCarSideSolid className="categoryicon" /> Cars
            </li>

            <li
                className={`categoryselection4 ${activeTab === "bikes" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("bikes")}
            >
                <MdDirectionsBike className="categoryicon" /> Bikes
            </li>

            <li
                className={`categoryselection4 ${activeTab === "furniture" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("furniture")}
            >
                <RiSofaLine className="categoryicon" /> Furniture
            </li>

            <li
                className={`categoryselection4 ${activeTab === "jewellery" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("jewellery")}
            >
                <IoDiamondOutline className="categoryicon" /> Jewellery & Watches
            </li>

            <li
                className={`categoryselection4 ${activeTab === "arts" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("arts")}
            >
                <GiPaintBrush  className="categoryicon" /> Arts & Paintings
            </li>

            <li
                className={`categoryselection4 ${activeTab === "antiques" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("antiques")}
            >
                <BsStars className="categoryicon" /> Antiques
            </li>

            <li
                className={`categoryselection4 ${activeTab === "collectables" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("collectables")}
            >
                <HiOutlineCube className="categoryicon" /> Collectables
            </li>

            <li
                className={`categoryselection4 ${activeTab === "others" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("others")}
            >
                <PiDotsThreeBold  className="categoryicon" /> Others
            </li>
        </ul>

    </div>
    <div className='basicinfoform'>
        <h3 className='basicinfotitle'>Basic Information</h3>
        <span className='basicinfodesc'>Enter the basic details and upload media for the product</span>
        <h3 className='basicinfotitle'>Product Images / Video</h3>
        <ul className='selectedcategory2'>
                <li className='selectedcaticon2' onClick={handleIconClick} style={{ cursor: "pointer" }}><FiUpload /></li>
                <li className='selectedcatname1'>Click to upload or drag and drop</li>
                <li className='selectedcatdesc'>PNG, JPG, MP4 up to 10MB • Maximum 10 files</li>
        </ul>
        <input type="file" ref={fileInputRef} style={{ display: "none" }} multiple accept=".png,.jpg,.jpeg,.mp4" onChange={handleFileChange}/>
        <h3 className='basicinfotitle'>Title</h3>
        <input type="text" placeholder="e.g., Luxury 4BHK Penthouse in South Mumbai" className="basicinfoinput" />
        <div className='basicinforow'>
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Title</h3>
                <input type="text" placeholder="e.g., 5,50,00,000" className="basicinfoinput1" />
            </div>
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>City</h3>
                <input type="text" placeholder="Enter City" className="basicinfoinput1" />
            </div>
        </div>
        <h3 className='basicinfotitle'>Description</h3>
        <input type="text" placeholder="Provide a detailed description of the product..." className="basicinfoinput" />
    </div>
    {activeTab === "realestate" &&
        <div className='basiccatinputs'>
        <h3 className='basicinfotitle'>Real Estate Details</h3>
        <span className='basicinfodesc'>Enter property-specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Property Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>House</option>
                    <option>Villa</option>
                    <option>Apartment</option>
                    <option>Flat</option>
                    <option>Plot</option>
                    <option>Land</option>
                    <option>Commercial</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Area / Locality</h3>
                <input type="text" placeholder="e.g., Bandra West" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Landmark</h3>
                <input type="text" placeholder="e.g., Near City Mall" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Ownership Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Freehold</option>
                    <option>Leasehold</option>
                    <option>Co-Operative Society</option>
                    <option>Power of Attorney</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Approval Status</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type <FaChevronDown /></option>
                    <option>RERA Approved</option>
                    <option>Authority Approved</option>
                    <option>Not Approved</option>
                    <option>Under Process</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Availability</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type <FaChevronDown /></option>
                    <option>Immediate</option>
                    <option>Ready to Move</option>
                    <option>Under Construction</option>
                    <option>Within 3 Months</option>
                    <option>Within 6 MOnths</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Age of Property (Years)</h3>
                <input type="text" placeholder="e.g., 5" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Facing</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type <FaChevronDown /></option>
                    <option>North</option>
                    <option>East</option>
                    <option>West</option>
                    <option>South</option>
                    <option>North-East</option>
                    <option>North-West</option>
                    <option>South-East</option>
                    <option>South-West</option>
                </select>
            </div>  
        </div>
         <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>No of Car Parking</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
         </div> 
    </div>
    }
    {activeTab === "cars" && <div className='basiccarinputs'>
        <h3 className='basicinfotitle'>Car Details</h3>
        <span className='basicinfodesc'>Vehicle specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Brand</h3>
                <input type="text" placeholder="e.g., Mercedes-Benz" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Model</h3>
                <input type="text" placeholder="e.g., S-Class" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Year of Manufacture</h3>
                <input type="text" placeholder="e.g., 2020" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>KM Driven</h3>
                <input type="text" placeholder="e.g., 25000" className="basicinfoinput2" />
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>No of Owners</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>1st Owner</option>
                    <option>2nd Owner</option>
                    <option>3rd Owner</option>
                    <option>4th Owner</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Fuel Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>CNG</option>
                    <option>Electric</option>
                    <option>Hybrid</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Transmission</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Manual</option>
                    <option>Automatic</option>
                    <option>AMT</option>
                </select>
            </div>  
        </div>
         <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Tyres</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Brand New</option>
                    <option>Used / Part-Own</option>
                    <option>Worn Out</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Color</h3>
                <input type="text" placeholder="e.g., Silver" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Accident History</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Service History</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Available</option>
                    <option>Not Available</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Number of Keys</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>1</option>
                    <option>2</option>
                    <option>More</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Seller Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Owner</option>
                    <option>Dealer</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Negotiable</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Registration State</h3>
                <input type="text" placeholder="e.g., Maharashtra" className="basicinfoinput2" />
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Insurance Validity</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Active</option>
                    <option>Expired</option>    
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>RC Available</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes / Available</option>
                    <option>No / Missing</option>
                </select>
            </div>  
        </div>
    </div>}
    {activeTab === "bikes" && <div className='basicbikeinputs'>
        <h3 className='basicinfotitle'>Bike Details</h3>
        <span className='basicinfodesc'>Vehicle specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Brand</h3>
                <input type="text" placeholder="e.g., Royal Enfield" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Model</h3>
                <input type="text" placeholder="e.g., Classic 350" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Variant</h3>
                <input type="text" placeholder="e.g., Standard" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Year of Manufacture</h3>
                <input type="text" placeholder="e.g., 2020" className="basicinfoinput2" />
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>KM Driven</h3>
                <input type="text" placeholder="e.g., 25000" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>No of Owners</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>1st Owner</option>
                    <option>2nd Owner</option>
                    <option>3rd Owner</option>
                    <option>4th Owner</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Fuel Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>CNG</option>
                    <option>Electric</option>
                    <option>Hybrid</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
            </div>  
        </div>
         <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Seller Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Owner</option>
                    <option>Dealer</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Negotiable</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Registration State</h3>
                <input type="text" placeholder="Select" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Insurance Status</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Valid</option>
                    <option>Expired</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>RC Available</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes / Available</option>
                    <option>No / Missing</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>PUC</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Current</option>
                    <option>Not Available</option>
                </select>
            </div>  
        </div>
    </div>}
    {activeTab === "furniture" && <div className='basicbikeinputs'>
        <h3 className='basicinfotitle'>Furniture Details</h3>
        <span className='basicinfodesc'>Furniture specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Furniture Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Sofa</option>
                    <option>Sofa Set</option>
                    <option>Bed</option>
                    <option>Dining Table</option>
                    <option>Chair</option>
                    <option>Wardrobe</option>
                    <option>Study Table</option>
                    <option>TV Unit</option>
                    <option>Cabinet</option>
                    <option>Mattress</option>
                    <option>Office Furniture</option>
                    <option>Other</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Material</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Solid Wood</option>
                    <option>Engineered Wood</option>
                    <option>Metal</option>
                    <option>Plastic</option>
                    <option>Fabric</option>
                    <option>Leather</option>
                    <option>Cane</option>
                    <option>Rattan</option>
                    <option>Mixed</option>
                    <option>Others</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Brand New</option>
                    <option>Pre-Owned</option>
                    <option>Refurbished</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Usage Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Never Used</option>
                    <option>Lightly Used</option>
                    <option>Moderately Used</option>
                    <option>Heavily Used</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Brand</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Custom</option>
                    <option>Branded</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Dimensions (L × W × H)</h3>
                <input type="text" placeholder="e.g., 180 × 90 × 75 cm" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Color / Finish</h3>
                <input type="text" placeholder="Enter Color" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Seating Capacity (if applicable)</h3>
                <input type="text" placeholder="Enter Seating Capacity" className="basicinfoinput2" />
            </div>  
        </div>
         <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Age of Furniture</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Less than 1 Year</option>
                    <option>1-3 Years</option>
                    <option>3-5 Years</option>
                    <option>5+ Years</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Assembly Required</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Original Purchase Price (₹, Optional)</h3>
                <input type="text" placeholder="e.g., 45,000" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Reason for Selling</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Relocation</option>
                    <option>Upgrade</option>
                    <option>Not in Use</option>
                    <option>Closing Business</option>
                    <option>Other</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Seller Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Owner</option>
                    <option>Dealer</option>
                </select>
            </div>  
        </div>
    </div>}
    {activeTab === "jewellery" && <div className='basicjewelinputs'>
        <h3 className='basicinfotitle'>Jewellery & Watches Details</h3>
        <span className='basicinfodesc'>Item specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Item Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Jewellery</option>
                    <option>Watch</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Brand New</option>
                    <option>Pre-Owned</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Gender</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Male</option>
                    <option>Femal</option>
                    <option>Unisex</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Invoice Available</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>  
        </div>
    </div>}
    {activeTab === "arts" && <div className='basicjewelinputs'>
        <h3 className='basicinfotitle'>Arts & Paintings Details</h3>
        <span className='basicinfodesc'>Item specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Product Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Art</option>
                    <option>Painting</option>
                </select>
            </div> 
        </div>
    </div>}
    {activeTab === "antiques" && <div className='basicantiqueinputs'>
        <h3 className='basicinfotitle'>Antique Details</h3>
        <span className='basicinfodesc'>Antique specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Antique Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Furniture</option>
                    <option>Coins</option>
                    <option>Artefacts</option>
                    <option>Decor</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Approximate Age (years)</h3>
                <input type="text" placeholder="e.g., 150" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Origin</h3>
                <input type="text" placeholder="e.g., Indian, Japanese" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Material</h3>
                <input type="text" placeholder="e.g., Bronze, Wood" className="basicinfoinput2" />
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Restoration</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Documentation</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Available</option>
                    <option>Not Available</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Historical Period</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Colonial</option>
                    <option>Victorial</option>
                    <option>Mughal</option>
                    <option>Other</option>
                </select>
            </div>  
        </div>
    </div>}
    {activeTab === "collectables" && <div className='basicjewelinputs'>
        <h3 className='basicinfotitle'>Collectables Details</h3>
        <span className='basicinfodesc'>Collectable specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Product Type</h3>
                <input type="text" placeholder="Enter Type" className="basicinfoinput2" />
            </div> 
        </div>
    </div>}
    {activeTab === "others" && <div className='basicantiqueinputs'>
        <h3 className='basicinfotitle'>Item Details</h3>
        <span className='basicinfodesc'>General Item information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Item Category</h3>
                <input type="text" placeholder="e.g., Electronics, Books" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Brand</h3>
                <input type="text" placeholder="e.g., Sony, Apple" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>New</option>
                    <option>Used</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Usage</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Unused</option>
                    <option>Lightly Used</option>
                    <option>Heavily Used</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Warranty</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Available</option>
                    <option>Not Available</option>
                    <option>Refurbished</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Purchase Year</h3>
                <input type="text" placeholder="e.g., 2021" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Reason for Selling</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Upgrade</option>
                    <option>Not in Use</option>
                    <option>Financial</option>
                    <option>Other</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Additional Notes</h3>
                <input type="text" placeholder="Any additional information..." className="basicinfoinput2" />
            </div>  
        </div>
    </div>}
    <div className='formsubmissiontags'>
        <span>Status:</span>
        <input type="text" placeholder="Active" className="basicinfoinput3" />
        <button className='submittbutton'>Create Product</button>
        <button className='cancelbutton'>Cancel</button>
    </div>
    </div>}
    {listingMode === "buynow" && <div>
    <div className="categoryfilter1">
        <div className='categoryselctionheader1'>
            <div className='productcategoryselector'><AiOutlineShop /></div>
          <div className='productheadinfo'>
                <h1 className='productcreatehead'>Select Product Category</h1>
                <span className='productheaddesc1'>Choose the type of product for marketplace</span>
            </div>
        </div>
        <ul className="categoryfilters1">
            <li
                className={`categoryselection4 ${activeTab === "realestate" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("realestate")}
            >
                <PiBuildingOfficeBold className="categoryicon" /> Real Estate
            </li>

            <li
                className={`categoryselection4 ${activeTab === "cars" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("cars")}
            >
                <LiaCarSideSolid className="categoryicon" /> Cars
            </li>

            <li
                className={`categoryselection4 ${activeTab === "bikes" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("bikes")}
            >
                <MdDirectionsBike className="categoryicon" /> Bikes
            </li>

            <li
                className={`categoryselection4 ${activeTab === "furniture" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("furniture")}
            >
                <RiSofaLine className="categoryicon" /> Furniture
            </li>

            <li
                className={`categoryselection4 ${activeTab === "jewellery" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("jewellery")}
            >
                <IoDiamondOutline className="categoryicon" /> Jewellery & Watches
            </li>

            <li
                className={`categoryselection4 ${activeTab === "arts" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("arts")}
            >
                <GiPaintBrush  className="categoryicon" /> Arts & Paintings
            </li>

            <li
                className={`categoryselection4 ${activeTab === "antiques" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("antiques")}
            >
                <BsStars className="categoryicon" /> Antiques
            </li>

            <li
                className={`categoryselection4 ${activeTab === "collectables" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("collectables")}
            >
                <HiOutlineCube className="categoryicon" /> Collectables
            </li>

            <li
                className={`categoryselection4 ${activeTab === "others" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("others")}
            >
                <PiDotsThreeBold  className="categoryicon" /> Others
            </li>
        </ul>

    </div>
    <div className='basicinfoform'>
        <h3 className='basicinfotitle'>Basic Information</h3>
        <span className='basicinfodesc'>Enter the basic details and upload media for the product</span>
        <h3 className='basicinfotitle'>Product Images / Video</h3>
        <ul className='selectedcategory2'>
                <li className='selectedcaticon2' onClick={handleIconClick} style={{ cursor: "pointer" }}><FiUpload /></li>
                <li className='selectedcatname1'>Click to upload or drag and drop</li>
                <li className='selectedcatdesc'>PNG, JPG, MP4 up to 10MB • Maximum 10 files</li>
        </ul>
        <input type="file" ref={fileInputRef} style={{ display: "none" }} multiple accept=".png,.jpg,.jpeg,.mp4" onChange={handleFileChange}/>
        <h3 className='basicinfotitle'>Title</h3>
        <input type="text" placeholder="e.g., Luxury 4BHK Penthouse in South Mumbai" className="basicinfoinput" />
        <div className='basicinforow'>
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Title</h3>
                <input type="text" placeholder="e.g., 5,50,00,000" className="basicinfoinput1" />
            </div>
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>City</h3>
                <input type="text" placeholder="Enter City" className="basicinfoinput1" />
            </div>
        </div>
        <h3 className='basicinfotitle'>Description</h3>
        <input type="text" placeholder="Provide a detailed description of the product..." className="basicinfoinput" />
    </div>
    {activeTab === "realestate" &&
        <div className='basiccatinputs'>
        <h3 className='basicinfotitle'>Real Estate Details</h3>
        <span className='basicinfodesc'>Enter property-specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Property Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>House</option>
                    <option>Villa</option>
                    <option>Apartment</option>
                    <option>Flat</option>
                    <option>Plot</option>
                    <option>Land</option>
                    <option>Commercial</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Area / Locality</h3>
                <input type="text" placeholder="e.g., Bandra West" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Landmark</h3>
                <input type="text" placeholder="e.g., Near City Mall" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Ownership Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Freehold</option>
                    <option>Leasehold</option>
                    <option>Co-Operative Society</option>
                    <option>Power of Attorney</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Approval Status</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type <FaChevronDown /></option>
                    <option>RERA Approved</option>
                    <option>Authority Approved</option>
                    <option>Not Approved</option>
                    <option>Under Process</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Availability</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type <FaChevronDown /></option>
                    <option>Immediate</option>
                    <option>Ready to Move</option>
                    <option>Under Construction</option>
                    <option>Within 3 Months</option>
                    <option>Within 6 MOnths</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Age of Property (Years)</h3>
                <input type="text" placeholder="e.g., 5" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Facing</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type <FaChevronDown /></option>
                    <option>North</option>
                    <option>East</option>
                    <option>West</option>
                    <option>South</option>
                    <option>North-East</option>
                    <option>North-West</option>
                    <option>South-East</option>
                    <option>South-West</option>
                </select>
            </div>  
        </div>
         <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>No of Car Parking</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
         </div> 
    </div>
    }
    {activeTab === "cars" && <div className='basiccarinputs'>
        <h3 className='basicinfotitle'>Car Details</h3>
        <span className='basicinfodesc'>Vehicle specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Brand</h3>
                <input type="text" placeholder="e.g., Mercedes-Benz" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Model</h3>
                <input type="text" placeholder="e.g., S-Class" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Year of Manufacture</h3>
                <input type="text" placeholder="e.g., 2020" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>KM Driven</h3>
                <input type="text" placeholder="e.g., 25000" className="basicinfoinput2" />
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>No of Owners</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>1st Owner</option>
                    <option>2nd Owner</option>
                    <option>3rd Owner</option>
                    <option>4th Owner</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Fuel Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>CNG</option>
                    <option>Electric</option>
                    <option>Hybrid</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Transmission</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Manual</option>
                    <option>Automatic</option>
                    <option>AMT</option>
                </select>
            </div>  
        </div>
         <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Tyres</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Brand New</option>
                    <option>Used / Part-Own</option>
                    <option>Worn Out</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Color</h3>
                <input type="text" placeholder="e.g., Silver" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Accident History</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Service History</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Available</option>
                    <option>Not Available</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Number of Keys</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>1</option>
                    <option>2</option>
                    <option>More</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Seller Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Owner</option>
                    <option>Dealer</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Negotiable</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Registration State</h3>
                <input type="text" placeholder="e.g., Maharashtra" className="basicinfoinput2" />
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Insurance Validity</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Active</option>
                    <option>Expired</option>    
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>RC Available</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes / Available</option>
                    <option>No / Missing</option>
                </select>
            </div>  
        </div>
    </div>}
    {activeTab === "bikes" && <div className='basicbikeinputs'>
        <h3 className='basicinfotitle'>Bike Details</h3>
        <span className='basicinfodesc'>Vehicle specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Brand</h3>
                <input type="text" placeholder="e.g., Royal Enfield" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Model</h3>
                <input type="text" placeholder="e.g., Classic 350" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Variant</h3>
                <input type="text" placeholder="e.g., Standard" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Year of Manufacture</h3>
                <input type="text" placeholder="e.g., 2020" className="basicinfoinput2" />
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>KM Driven</h3>
                <input type="text" placeholder="e.g., 25000" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>No of Owners</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>1st Owner</option>
                    <option>2nd Owner</option>
                    <option>3rd Owner</option>
                    <option>4th Owner</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Fuel Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>CNG</option>
                    <option>Electric</option>
                    <option>Hybrid</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
            </div>  
        </div>
         <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Seller Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Owner</option>
                    <option>Dealer</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Negotiable</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Registration State</h3>
                <input type="text" placeholder="Select" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Insurance Status</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Valid</option>
                    <option>Expired</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>RC Available</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes / Available</option>
                    <option>No / Missing</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>PUC</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Current</option>
                    <option>Not Available</option>
                </select>
            </div>  
        </div>
    </div>}
    {activeTab === "furniture" && <div className='basicbikeinputs'>
        <h3 className='basicinfotitle'>Furniture Details</h3>
        <span className='basicinfodesc'>Furniture specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Furniture Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Sofa</option>
                    <option>Sofa Set</option>
                    <option>Bed</option>
                    <option>Dining Table</option>
                    <option>Chair</option>
                    <option>Wardrobe</option>
                    <option>Study Table</option>
                    <option>TV Unit</option>
                    <option>Cabinet</option>
                    <option>Mattress</option>
                    <option>Office Furniture</option>
                    <option>Other</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Material</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Solid Wood</option>
                    <option>Engineered Wood</option>
                    <option>Metal</option>
                    <option>Plastic</option>
                    <option>Fabric</option>
                    <option>Leather</option>
                    <option>Cane</option>
                    <option>Rattan</option>
                    <option>Mixed</option>
                    <option>Others</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Brand New</option>
                    <option>Pre-Owned</option>
                    <option>Refurbished</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Usage Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Never Used</option>
                    <option>Lightly Used</option>
                    <option>Moderately Used</option>
                    <option>Heavily Used</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Brand</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Custom</option>
                    <option>Branded</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Dimensions (L × W × H)</h3>
                <input type="text" placeholder="e.g., 180 × 90 × 75 cm" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Color / Finish</h3>
                <input type="text" placeholder="Enter Color" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Seating Capacity (if applicable)</h3>
                <input type="text" placeholder="Enter Seating Capacity" className="basicinfoinput2" />
            </div>  
        </div>
         <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Age of Furniture</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Less than 1 Year</option>
                    <option>1-3 Years</option>
                    <option>3-5 Years</option>
                    <option>5+ Years</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Assembly Required</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Original Purchase Price (₹, Optional)</h3>
                <input type="text" placeholder="e.g., 45,000" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Reason for Selling</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Relocation</option>
                    <option>Upgrade</option>
                    <option>Not in Use</option>
                    <option>Closing Business</option>
                    <option>Other</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Seller Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Owner</option>
                    <option>Dealer</option>
                </select>
            </div>  
        </div>
    </div>}
    {activeTab === "jewellery" && <div className='basicjewelinputs'>
        <h3 className='basicinfotitle'>Jewellery & Watches Details</h3>
        <span className='basicinfodesc'>Item specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Item Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Jewellery</option>
                    <option>Watch</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Brand New</option>
                    <option>Pre-Owned</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Gender</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Male</option>
                    <option>Femal</option>
                    <option>Unisex</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Invoice Available</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>  
        </div>
    </div>}
    {activeTab === "arts" && <div className='basicjewelinputs'>
        <h3 className='basicinfotitle'>Arts & Paintings Details</h3>
        <span className='basicinfodesc'>Item specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Product Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Art</option>
                    <option>Painting</option>
                </select>
            </div> 
        </div>
    </div>}
    {activeTab === "antiques" && <div className='basicantiqueinputs'>
        <h3 className='basicinfotitle'>Antique Details</h3>
        <span className='basicinfodesc'>Antique specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Antique Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Furniture</option>
                    <option>Coins</option>
                    <option>Artefacts</option>
                    <option>Decor</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Approximate Age (years)</h3>
                <input type="text" placeholder="e.g., 150" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Origin</h3>
                <input type="text" placeholder="e.g., Indian, Japanese" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Material</h3>
                <input type="text" placeholder="e.g., Bronze, Wood" className="basicinfoinput2" />
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Restoration</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Documentation</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Available</option>
                    <option>Not Available</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Historical Period</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Colonial</option>
                    <option>Victorial</option>
                    <option>Mughal</option>
                    <option>Other</option>
                </select>
            </div>  
        </div>
    </div>}
    {activeTab === "collectables" && <div className='basicjewelinputs'>
        <h3 className='basicinfotitle'>Collectables Details</h3>
        <span className='basicinfodesc'>Collectable specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Product Type</h3>
                <input type="text" placeholder="Enter Type" className="basicinfoinput2" />
            </div> 
        </div>
    </div>}
    {activeTab === "others" && <div className='basicantiqueinputs'>
        <h3 className='basicinfotitle'>Item Details</h3>
        <span className='basicinfodesc'>General Item information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Item Category</h3>
                <input type="text" placeholder="e.g., Electronics, Books" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Brand</h3>
                <input type="text" placeholder="e.g., Sony, Apple" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>New</option>
                    <option>Used</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Usage</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Unused</option>
                    <option>Lightly Used</option>
                    <option>Heavily Used</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Warranty</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Available</option>
                    <option>Not Available</option>
                    <option>Refurbished</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Purchase Year</h3>
                <input type="text" placeholder="e.g., 2021" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Reason for Selling</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Upgrade</option>
                    <option>Not in Use</option>
                    <option>Financial</option>
                    <option>Other</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Additional Notes</h3>
                <input type="text" placeholder="Any additional information..." className="basicinfoinput2" />
            </div>  
        </div>
    </div>}
    <div className='formsubmissiontags'>
        <span>Status:</span>
        <input type="text" placeholder="Active" className="basicinfoinput3" />
        <button className='submittbutton'>Create Product</button>
        <button className='cancelbutton'>Cancel</button>
    </div>
    </div>}
    {listingMode === "auction" && <div>
    <div className="categoryfilter1">
        <div className='categoryselctionheader1'>
            <div className='productcategoryselector'><AiOutlineShop /></div>
          <div className='productheadinfo'>
                <h1 className='productcreatehead'>Select Product Category</h1>
                <span className='productheaddesc1'>Choose the type of product for marketplace</span>
            </div>
        </div>
        <ul className="categoryfilters1">
            <li
                className={`categoryselection4 ${activeTab === "realestate" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("realestate")}
            >
                <PiBuildingOfficeBold className="categoryicon" /> Real Estate
            </li>

            <li
                className={`categoryselection4 ${activeTab === "cars" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("cars")}
            >
                <LiaCarSideSolid className="categoryicon" /> Cars
            </li>

            <li
                className={`categoryselection4 ${activeTab === "bikes" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("bikes")}
            >
                <MdDirectionsBike className="categoryicon" /> Bikes
            </li>

            <li
                className={`categoryselection4 ${activeTab === "furniture" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("furniture")}
            >
                <RiSofaLine className="categoryicon" /> Furniture
            </li>

            <li
                className={`categoryselection4 ${activeTab === "jewellery" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("jewellery")}
            >
                <IoDiamondOutline className="categoryicon" /> Jewellery & Watches
            </li>

            <li
                className={`categoryselection4 ${activeTab === "arts" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("arts")}
            >
                <GiPaintBrush  className="categoryicon" /> Arts & Paintings
            </li>

            <li
                className={`categoryselection4 ${activeTab === "antiques" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("antiques")}
            >
                <BsStars className="categoryicon" /> Antiques
            </li>

            <li
                className={`categoryselection4 ${activeTab === "collectables" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("collectables")}
            >
                <HiOutlineCube className="categoryicon" /> Collectables
            </li>

            <li
                className={`categoryselection4 ${activeTab === "others" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("others")}
            >
                <PiDotsThreeBold  className="categoryicon" /> Others
            </li>
        </ul>

    </div>
    <div className='basicinfoform'>
        <h3 className='basicinfotitle'>Basic Information</h3>
        <span className='basicinfodesc'>Enter the basic details and upload media for the product</span>
        <h3 className='basicinfotitle'>Product Images / Video</h3>
        <ul className='selectedcategory2'>
                <li className='selectedcaticon2'onClick={handleIconClick} style={{ cursor: "pointer" }}><FiUpload /></li>
                <li className='selectedcatname1'>Click to upload or drag and drop</li>
                <li className='selectedcatdesc'>PNG, JPG, MP4 up to 10MB • Maximum 10 files</li>
        </ul>
        <input type="file" ref={fileInputRef} style={{ display: "none" }} multiple accept=".png,.jpg,.jpeg,.mp4" onChange={handleFileChange}/>
        <h3 className='basicinfotitle'>Title</h3>
        <input type="text" placeholder="e.g., Luxury 4BHK Penthouse in South Mumbai" className="basicinfoinput" />
        <div className='basicinforow'>
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Title</h3>
                <input type="text" placeholder="e.g., 5,50,00,000" className="basicinfoinput1" />
            </div>
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>City</h3>
                <input type="text" placeholder="Enter City" className="basicinfoinput1" />
            </div>
        </div>
        <h3 className='basicinfotitle'>Description</h3>
        <input type="text" placeholder="Provide a detailed description of the product..." className="basicinfoinput" />
    </div>
    {activeTab === "realestate" &&
        <div className='basiccatinputs'>
        <h3 className='basicinfotitle'>Real Estate Details</h3>
        <span className='basicinfodesc'>Enter property-specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Property Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>House</option>
                    <option>Villa</option>
                    <option>Apartment</option>
                    <option>Flat</option>
                    <option>Plot</option>
                    <option>Land</option>
                    <option>Commercial</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Area / Locality</h3>
                <input type="text" placeholder="e.g., Bandra West" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Landmark</h3>
                <input type="text" placeholder="e.g., Near City Mall" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Ownership Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Freehold</option>
                    <option>Leasehold</option>
                    <option>Co-Operative Society</option>
                    <option>Power of Attorney</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Approval Status</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type <FaChevronDown /></option>
                    <option>RERA Approved</option>
                    <option>Authority Approved</option>
                    <option>Not Approved</option>
                    <option>Under Process</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Availability</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type <FaChevronDown /></option>
                    <option>Immediate</option>
                    <option>Ready to Move</option>
                    <option>Under Construction</option>
                    <option>Within 3 Months</option>
                    <option>Within 6 MOnths</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Age of Property (Years)</h3>
                <input type="text" placeholder="e.g., 5" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Facing</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type <FaChevronDown /></option>
                    <option>North</option>
                    <option>East</option>
                    <option>West</option>
                    <option>South</option>
                    <option>North-East</option>
                    <option>North-West</option>
                    <option>South-East</option>
                    <option>South-West</option>
                </select>
            </div>  
        </div>
         <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>No of Car Parking</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
         </div> 
    </div>
    }
    {activeTab === "cars" && <div className='basiccarinputs'>
        <h3 className='basicinfotitle'>Car Details</h3>
        <span className='basicinfodesc'>Vehicle specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Brand</h3>
                <input type="text" placeholder="e.g., Mercedes-Benz" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Model</h3>
                <input type="text" placeholder="e.g., S-Class" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Year of Manufacture</h3>
                <input type="text" placeholder="e.g., 2020" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>KM Driven</h3>
                <input type="text" placeholder="e.g., 25000" className="basicinfoinput2" />
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>No of Owners</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>1st Owner</option>
                    <option>2nd Owner</option>
                    <option>3rd Owner</option>
                    <option>4th Owner</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Fuel Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>CNG</option>
                    <option>Electric</option>
                    <option>Hybrid</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Transmission</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Manual</option>
                    <option>Automatic</option>
                    <option>AMT</option>
                </select>
            </div>  
        </div>
         <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Tyres</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Brand New</option>
                    <option>Used / Part-Own</option>
                    <option>Worn Out</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Color</h3>
                <input type="text" placeholder="e.g., Silver" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Accident History</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Service History</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Available</option>
                    <option>Not Available</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Number of Keys</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>1</option>
                    <option>2</option>
                    <option>More</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Seller Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Owner</option>
                    <option>Dealer</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Negotiable</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Registration State</h3>
                <input type="text" placeholder="e.g., Maharashtra" className="basicinfoinput2" />
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Insurance Validity</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Active</option>
                    <option>Expired</option>    
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>RC Available</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes / Available</option>
                    <option>No / Missing</option>
                </select>
            </div>  
        </div>
    </div>}
    {activeTab === "bikes" && <div className='basicbikeinputs'>
        <h3 className='basicinfotitle'>Bike Details</h3>
        <span className='basicinfodesc'>Vehicle specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Brand</h3>
                <input type="text" placeholder="e.g., Royal Enfield" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Model</h3>
                <input type="text" placeholder="e.g., Classic 350" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Variant</h3>
                <input type="text" placeholder="e.g., Standard" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Year of Manufacture</h3>
                <input type="text" placeholder="e.g., 2020" className="basicinfoinput2" />
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>KM Driven</h3>
                <input type="text" placeholder="e.g., 25000" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>No of Owners</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>1st Owner</option>
                    <option>2nd Owner</option>
                    <option>3rd Owner</option>
                    <option>4th Owner</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Fuel Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>CNG</option>
                    <option>Electric</option>
                    <option>Hybrid</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
            </div>  
        </div>
         <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Seller Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Owner</option>
                    <option>Dealer</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Negotiable</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Registration State</h3>
                <input type="text" placeholder="Select" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Insurance Status</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Valid</option>
                    <option>Expired</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>RC Available</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes / Available</option>
                    <option>No / Missing</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>PUC</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Current</option>
                    <option>Not Available</option>
                </select>
            </div>  
        </div>
    </div>}
    {activeTab === "furniture" && <div className='basicbikeinputs'>
        <h3 className='basicinfotitle'>Furniture Details</h3>
        <span className='basicinfodesc'>Furniture specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Furniture Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Sofa</option>
                    <option>Sofa Set</option>
                    <option>Bed</option>
                    <option>Dining Table</option>
                    <option>Chair</option>
                    <option>Wardrobe</option>
                    <option>Study Table</option>
                    <option>TV Unit</option>
                    <option>Cabinet</option>
                    <option>Mattress</option>
                    <option>Office Furniture</option>
                    <option>Other</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Material</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Solid Wood</option>
                    <option>Engineered Wood</option>
                    <option>Metal</option>
                    <option>Plastic</option>
                    <option>Fabric</option>
                    <option>Leather</option>
                    <option>Cane</option>
                    <option>Rattan</option>
                    <option>Mixed</option>
                    <option>Others</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Brand New</option>
                    <option>Pre-Owned</option>
                    <option>Refurbished</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Usage Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Never Used</option>
                    <option>Lightly Used</option>
                    <option>Moderately Used</option>
                    <option>Heavily Used</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Brand</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Custom</option>
                    <option>Branded</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Dimensions (L × W × H)</h3>
                <input type="text" placeholder="e.g., 180 × 90 × 75 cm" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Color / Finish</h3>
                <input type="text" placeholder="Enter Color" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Seating Capacity (if applicable)</h3>
                <input type="text" placeholder="Enter Seating Capacity" className="basicinfoinput2" />
            </div>  
        </div>
         <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Age of Furniture</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Less than 1 Year</option>
                    <option>1-3 Years</option>
                    <option>3-5 Years</option>
                    <option>5+ Years</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Assembly Required</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Original Purchase Price (₹, Optional)</h3>
                <input type="text" placeholder="e.g., 45,000" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Reason for Selling</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Relocation</option>
                    <option>Upgrade</option>
                    <option>Not in Use</option>
                    <option>Closing Business</option>
                    <option>Other</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Seller Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Owner</option>
                    <option>Dealer</option>
                </select>
            </div>  
        </div>
    </div>}
    {activeTab === "jewellery" && <div className='basicjewelinputs'>
        <h3 className='basicinfotitle'>Jewellery & Watches Details</h3>
        <span className='basicinfodesc'>Item specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Item Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Jewellery</option>
                    <option>Watch</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Brand New</option>
                    <option>Pre-Owned</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Gender</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Male</option>
                    <option>Femal</option>
                    <option>Unisex</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Invoice Available</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div>  
        </div>
    </div>}
    {activeTab === "arts" && <div className='basicjewelinputs'>
        <h3 className='basicinfotitle'>Arts & Paintings Details</h3>
        <span className='basicinfodesc'>Item specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Product Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Art</option>
                    <option>Painting</option>
                </select>
            </div> 
        </div>
    </div>}
    {activeTab === "antiques" && <div className='basicantiqueinputs'>
        <h3 className='basicinfotitle'>Antique Details</h3>
        <span className='basicinfodesc'>Antique specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Antique Type</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Furniture</option>
                    <option>Coins</option>
                    <option>Artefacts</option>
                    <option>Decor</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Approximate Age (years)</h3>
                <input type="text" placeholder="e.g., 150" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Origin</h3>
                <input type="text" placeholder="e.g., Indian, Japanese" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Material</h3>
                <input type="text" placeholder="e.g., Bronze, Wood" className="basicinfoinput2" />
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Restoration</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Documentation</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Available</option>
                    <option>Not Available</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Historical Period</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Colonial</option>
                    <option>Victorial</option>
                    <option>Mughal</option>
                    <option>Other</option>
                </select>
            </div>  
        </div>
    </div>}
    {activeTab === "collectables" && <div className='basicjewelinputs'>
        <h3 className='basicinfotitle'>Collectables Details</h3>
        <span className='basicinfodesc'>Collectable specific information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Product Type</h3>
                <input type="text" placeholder="Enter Type" className="basicinfoinput2" />
            </div> 
        </div>
    </div>}
    {activeTab === "others" && <div className='basicantiqueinputs'>
        <h3 className='basicinfotitle'>Item Details</h3>
        <span className='basicinfodesc'>General Item information</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Item Category</h3>
                <input type="text" placeholder="e.g., Electronics, Books" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Brand</h3>
                <input type="text" placeholder="e.g., Sony, Apple" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Condition</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>New</option>
                    <option>Used</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Usage</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Unused</option>
                    <option>Lightly Used</option>
                    <option>Heavily Used</option>
                </select>
            </div>  
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Warranty</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Available</option>
                    <option>Not Available</option>
                    <option>Refurbished</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Purchase Year</h3>
                <input type="text" placeholder="e.g., 2021" className="basicinfoinput2" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Reason for Selling</h3>
                <select className="basicinfoinput2">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Upgrade</option>
                    <option>Not in Use</option>
                    <option>Financial</option>
                    <option>Other</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Additional Notes</h3>
                <input type="text" placeholder="Any additional information..." className="basicinfoinput2" />
            </div>  
        </div>
    </div>}
    <div className='formsubmissiontags'>
        <span>Status:</span>
        <input type="text" placeholder="Active" className="basicinfoinput3" />
        <button className='submittbutton'>Create Product</button>
        <button className='cancelbutton'>Cancel</button>
    </div>
    </div>}
    {listingMode === "tolet" && <div>
    <div className="categoryfilter1">
        <div className='categoryselctionheader1'>
            <div className='productcategoryselector'><AiOutlineShop /></div>
          <div className='productheadinfo'>
                <h1 className='productcreatehead'>Select Product Category</h1>
                <span className='productheaddesc1'>Choose the type of product for marketplace</span>
            </div>
        </div>
        <ul className="categoryfilters1">
            <li
                className={`categoryselection5 ${activeTab === "residential" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("residential")}
            >
                <PiBuildingOfficeBold className="categoryicon" /> Residential
            </li>

            <li
                className={`categoryselection5 ${activeTab === "office" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("office")}
            >
                <FiBriefcase className="categoryicon" /> Office Space
            </li>

            <li
                className={`categoryselection5 ${activeTab === "shops" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("shops")}
            >
                <MdShoppingCart className="categoryicon" /> Shops
            </li>

            <li
                className={`categoryselection5 ${activeTab === "warehouses" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("warehouses")}
            >
                <LuWarehouse className="categoryicon" /> Godowns & Warehouses
            </li>

            <li
                className={`categoryselection5 ${activeTab === "plots" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("plots")}
            >
                <LuLandPlot className="categoryicon" /> Open Plots
            </li>

            <li
                className={`categoryselection5 ${activeTab === "hostels" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("hostels")}
            >
                <LuBedDouble  className="categoryicon" /> PG & Hostels
            </li>

            <li
                className={`categoryselection5 ${activeTab === "coliving" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("coliving")}
            >
                <LuUsers className="categoryicon" /> Luxury Coliving
            </li>

            <li
                className={`categoryselection5 ${activeTab === "others" ? "active-tab" : ""}`}
                onClick={() => setActiveTab("others")}
            >
                <PiDotsThreeBold  className="categoryicon" /> Others
            </li>
        </ul>
    </div>
    <div className='basicinfoform'>
        <h3 className='basicinfotitle'>Basic Information</h3>
        <span className='basicinfodesc'>Enter the basic details and upload media for the product</span>
        <h3 className='basicinfotitle'>Product Images / Video</h3>
        <ul className='selectedcategory2'>
                <li className='selectedcaticon2'onClick={handleIconClick} style={{ cursor: "pointer" }}><FiUpload /></li>
                <li className='selectedcatname1'>Click to upload or drag and drop</li>
                <li className='selectedcatdesc'>PNG, JPG, MP4 up to 10MB • Maximum 10 files</li>
        </ul>
        <input type="file" ref={fileInputRef} style={{ display: "none" }} multiple accept=".png,.jpg,.jpeg,.mp4" onChange={handleFileChange}/>
        <h3 className='basicinfotitle'>Title</h3>
        <input type="text" placeholder="e.g., Luxury 4BHK Penthouse in South Mumbai" className="basicinfoinput" />
        <div className='basicinforow'>
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Title</h3>
                <input type="text" placeholder="e.g., 5,50,00,000" className="basicinfoinput1" />
            </div>
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>City</h3>
                <input type="text" placeholder="Enter City" className="basicinfoinput1" />
            </div>
        </div>
        <h3 className='basicinfotitle'>Description</h3>
        <input type="text" placeholder="Provide a detailed description of the product..." className="basicinfoinput" />
    </div>
    {activeTab === "residential" &&
        <div className='basiccatinputs'>
        <h3 className='basicinfotitle'>Rental Settings</h3>
        <span className='basicinfodesc'>Property rental configuration</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Rent per Month (₹)</h3>
                <input type="text" placeholder="e.g., 2,50,000" className="basicinfoinput4" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Security Deposit (₹)</h3>
                <input type="text" placeholder="e.g., 5,00,000" className="basicinfoinput4" />
            </div> 
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Lease Duration</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>11 Months</option>
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Furnishing Status</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Furnished</option>
                    <option>Semi Furnished</option>
                    <option>Unfurnished</option>
                    <option>Other</option>
                </select>
            </div>  
        </div>
    </div>
    }
    {activeTab === "office" &&
        <div className='basiccatinputs'>
        <h3 className='basicinfotitle'>Rental Settings</h3>
        <span className='basicinfodesc'>Property rental configuration</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Rent per Month (₹)</h3>
                <input type="text" placeholder="e.g., 2,50,000" className="basicinfoinput4" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Security Deposit (₹)</h3>
                <input type="text" placeholder="e.g., 5,00,000" className="basicinfoinput4" />
            </div> 
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Lease Duration</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>11 Months</option>
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Furnishing Status</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Furnished</option>
                    <option>Semi Furnished</option>
                    <option>Unfurnished</option>
                    <option>Other</option>
                </select>
            </div> 
        </div>
    </div>
    }
    {activeTab === "shops" &&
        <div className='basiccatinputs'>
        <h3 className='basicinfotitle'>Rental Settings</h3>
        <span className='basicinfodesc'>Property rental configuration</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Rent per Month (₹)</h3>
                <input type="text" placeholder="e.g., 2,50,000" className="basicinfoinput4" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Security Deposit (₹)</h3>
                <input type="text" placeholder="e.g., 5,00,000" className="basicinfoinput4" />
            </div> 
        </div>
        <div className='basicinforow'>  
           <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Lease Duration</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>11 Months</option>
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Furnishing Status</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Furnished</option>
                    <option>Semi Furnished</option>
                    <option>Unfurnished</option>
                    <option>Other</option>
                </select>
            </div> 
        </div>
    </div>
    }
    {activeTab === "warehouses" &&
        <div className='basiccatinputs'>
        <h3 className='basicinfotitle'>Rental Settings</h3>
        <span className='basicinfodesc'>Property rental configuration</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Rent per Month (₹)</h3>
                <input type="text" placeholder="e.g., 2,50,000" className="basicinfoinput4" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Security Deposit (₹)</h3>
                <input type="text" placeholder="e.g., 5,00,000" className="basicinfoinput4" />
            </div> 
        </div>
        <div className='basicinforow'>  
           <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Lease Duration</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>11 Months</option>
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Furnishing Status</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Furnished</option>
                    <option>Semi Furnished</option>
                    <option>Unfurnished</option>
                    <option>Other</option>
                </select>
            </div>  
        </div>
    </div>
    }
    {activeTab === "plots" &&
       <div className='basiccatinputs'>
        <h3 className='basicinfotitle'>Rental Settings</h3>
        <span className='basicinfodesc'>Property rental configuration</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Rent per Month (₹)</h3>
                <input type="text" placeholder="e.g., 2,50,000" className="basicinfoinput4" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Security Deposit (₹)</h3>
                <input type="text" placeholder="e.g., 5,00,000" className="basicinfoinput4" />
            </div> 
        </div>
        <div className='basicinforow'>  
           <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Lease Duration</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>11 Months</option>
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Furnishing Status</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Furnished</option>
                    <option>Semi Furnished</option>
                    <option>Unfurnished</option>
                    <option>Other</option>
                </select>
            </div> 
        </div>
    </div>
    }
    {activeTab === "hostels" &&
        <div className='basiccatinputs'>
        <h3 className='basicinfotitle'>Rental Settings</h3>
        <span className='basicinfodesc'>Property rental configuration</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Rent per Month (₹)</h3>
                <input type="text" placeholder="e.g., 2,50,000" className="basicinfoinput4" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Security Deposit (₹)</h3>
                <input type="text" placeholder="e.g., 5,00,000" className="basicinfoinput4" />
            </div> 
        </div>
        <div className='basicinforow'>  
           <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Lease Duration</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>11 Months</option>
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Furnishing Status</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Furnished</option>
                    <option>Semi Furnished</option>
                    <option>Unfurnished</option>
                    <option>Other</option>
                </select>
            </div>  
        </div>
    </div>
    }
    {activeTab === "coliving" &&
        <div className='basiccatinputs'>
        <h3 className='basicinfotitle'>Rental Settings</h3>
        <span className='basicinfodesc'>Property rental configuration</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Rent per Month (₹)</h3>
                <input type="text" placeholder="e.g., 2,50,000" className="basicinfoinput4" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Security Deposit (₹)</h3>
                <input type="text" placeholder="e.g., 5,00,000" className="basicinfoinput4" />
            </div> 
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Lease Duration</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>11 Months</option>
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Furnishing Status</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Furnished</option>
                    <option>Semi Furnished</option>
                    <option>Unfurnished</option>
                    <option>Other</option>
                </select>
            </div>   
        </div>
    </div>
    }
    {activeTab === "others" &&
        <div className='basiccatinputs'>
        <h3 className='basicinfotitle'>Rental Settings</h3>
        <span className='basicinfodesc'>Property rental configuration</span>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Rent per Month (₹)</h3>
                <input type="text" placeholder="e.g., 2,50,000" className="basicinfoinput4" />
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Security Deposit (₹)</h3>
                <input type="text" placeholder="e.g., 5,00,000" className="basicinfoinput4" />
            </div> 
        </div>
        <div className='basicinforow'>  
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Lease Duration</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>11 Months</option>
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                </select>
            </div> 
            <div className='basicinfoinputdiv'>
                <h3 className='basicinfotitle'>Furnishing Status</h3>
                <select className="basicinfoinput4">
                    <option value="">Select type<FaChevronDown /></option>
                    <option>Furnished</option>
                    <option>Semi Furnished</option>
                    <option>Unfurnished</option>
                    <option>Other</option>
                </select>
            </div> 
        </div>
    </div>
    }
    <div className='formsubmissiontags'>
        <span>Status:</span>
        <input type="text" placeholder="Active" className="basicinfoinput3" />
        <button className='submittbutton'>Create Product</button>
        <button className='cancelbutton'>Cancel</button>
    </div>
    </div>}
  </div>);
};

export default ProductCreation;