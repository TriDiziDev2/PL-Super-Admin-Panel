import "./ProductPage.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BiLeftArrowAlt } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineCube } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";

import pageimageheader from "../../assets/productImageThree.png";
import pageimageone from "../../assets/productImageOne.png";
import pageimagetwo from "../../assets/productImageTwo.png";
import pageimagethree from "../../assets/Luxury Villa.png";
import pageimagefour from "../../assets/Beachfront.png";
import pageimagefive from "../../assets/Penthouse.png";

const ProductPage = () => {
  const navigate = useNavigate();

  const [imageQueue, setImageQueue] = useState([
    pageimageheader,
    pageimageone,
    pageimagetwo,
    pageimagethree,
    pageimagefour,
    pageimagefive,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageQueue((prev) => {
        const updated = [...prev];
        const first = updated.shift(); 
        updated.push(first);           
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="productpagecontainer">
      <div className="producthead1">
        <div className="backbutton" onClick={() => navigate("/products")}>
          <BiLeftArrowAlt />
        </div>
        <div className="producthead">
          <div className="productheadinfo">
            <h1 className="productsheader">Luxury 4BHK Penthouse</h1>
            <span className="productheaddesc1"><HiOutlineCube /> Properties</span>
            <span className="productheaddesc1"><IoLocationOutline /> Mumbai</span>
          </div>
          <button className="addproduct" onClick={() => navigate("/productcreation")}> <FaRegEdit /> Edit Product</button>
        </div>
      </div>
      <div className="productpagedetail">
        <div className="productpageleft">
          <div className="productpageimage">
                <img src={imageQueue[0]} alt="product" className="productheaderimage" />
                <ul className="productimagescroller">
                {imageQueue.slice(1, 4).map((img, index) => (
                    <li key={index}><img src={img} alt="product" className="productimageone"/></li>))}
                </ul>
          </div>
          <div className="productdescription">
            <h2 className="producttitle">Product Description</h2>
            <p className="productdescpara">Stunning penthouse with panoramic sea views in South Mumbai. Features include private elevator, infinity pool, smart home automation, Italian marble flooring, modular kitchen, and 24/7 concierge service.</p>
          </div>
          <div className="productdescription">
            <h2 className="producttitle">Key Features</h2>
            <div className="productfeatures">
                <ul className="productfeaturesleft">
                    <li className="productfeaturelist"><LuDot className="featuredoticon"/>4 Bedrooms + Study</li>
                    <li className="productfeaturelist"><LuDot className="featuredoticon"/>4500 sq ft</li>
                    <li className="productfeaturelist"><LuDot className="featuredoticon"/>Sea Facing</li>
                </ul>
                <ul className="productfeaturesright">
                    <li className="productfeaturelist"><LuDot className="featuredoticon"/>5 Bathrooms</li>
                    <li className="productfeaturelist"><LuDot className="featuredoticon"/>Private Terrace</li>
                    <li className="productfeaturelist"><LuDot className="featuredoticon"/>2 Parking Spaces</li>
                </ul>
            </div>
          </div>
          <div className="productowner">
            <h2 className="producttitle">Owner Information</h2>
            <div className="productownerinfo">
                <div className="productownericon"><FiUser /></div>
                <ul className="productownedetails">
                    <li className="productownerdata">Owner Name</li>
                    <li className="productownername">Rajesh Kumar</li>
                </ul>
            </div>
            <div className="productownerinfo">
                <div className="productownericon"><LuPhone /></div>
                <ul className="productownedetails">
                    <li className="productownerdata">Contact Number</li>
                    <li className="productownername">+91 98765 43210</li>
                </ul>
            </div>
            <div className="productownerinfo">
                <div className="productownericon"><MdOutlineEmail /></div>
                <ul className="productownedetails">
                    <li className="productownerdata">Email Address</li>
                    <li className="productownername">rajesh@example.com</li>
                </ul>
            </div>
          </div>
        </div>

        <div className="productpageright">
            <div className="productstatus">
                <h2 className="producttitle">Product Status</h2>
                <span className="currentstatus">Current Status</span>
                <p className="productpageactivetag">active</p>
                <div className="productbreakline"></div>
                <span className="currentstatus">Listed Price</span>
                <p className="productpagepricetag">₹5.5Cr</p>
                <span className="currentstatus">₹5,50,00,000</span>
            </div>
            <div className="productperformance">
                <h2 className="producttitle">Performance</h2>
                <div className="performanceviews">
                    <span className="currentstatus1"><IoEyeOutline />Total Views</span>
                    <span className="performancecount">1,245</span>
                </div>
                <div className="productbreakline"></div>
                <div className="performanceviews">
                    <span className="currentstatus1"><FiUser />Leads Generated</span>
                    <span className="performancecount">34</span>
                </div>
            </div>
            <div className="productowner1">
            <h2 className="producttitle">Timeline</h2>
            <div className="productownerinfo">
                <div className="productownericon"><CiCalendar /></div>
                <ul className="productownedetails">
                    <li className="productownerdata">Created</li>
                    <li className="productownername">15/1/2024</li>
                </ul>
            </div>
            <div className="productownerinfo">
                <div className="productownericon"><CiCalendar /></div>
                <ul className="productownedetails">
                    <li className="productownerdata">Last Updated</li>
                    <li className="productownername">25/1/2024</li>
                </ul>
            </div>
          </div>
          <div className="productpagebuttons">
                <button className="editproductbutton" onClick={() => navigate("/productcreation")}><FiEdit />Edit Product</button>
                <button className="productsbackbutton"onClick={() => navigate("/products")}>Back to Products</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
