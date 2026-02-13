import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Products.css';
import { FaPlus } from "react-icons/fa6";
import { IoCubeOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { LuCrown } from "react-icons/lu";
import { AiOutlineShop } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";
import { TbHammer } from "react-icons/tb";
import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { LiaCarSideSolid } from "react-icons/lia";
import { MdDirectionsBike } from "react-icons/md";
import { RiSofaLine } from "react-icons/ri";
import { IoDiamondOutline } from "react-icons/io5";
import { PiPaintBrushFill } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { HiOutlineCube } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LiaCertificateSolid } from "react-icons/lia";
import { FiBriefcase } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";
import { LuWarehouse } from "react-icons/lu";
import { LuLandPlot } from "react-icons/lu";
import { LuBedDouble } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";








const Products = () => {

  const [selectedCat, setSelectedCat] = useState("marketplace");
  const navigate = useNavigate();

  return <div className='productscontainer'>
    <div className='producthead'>
      <div className='productheadinfo'>
        <h1 className='productsheader'>Product Management</h1>
        <span className='productheaddesc'>Manage products across Marketplace, Buy Now, Auctions & To-Let</span>
      </div>
      <button className='addproduct'onClick={() => navigate("/productcreation")}><FaPlus />Add Product</button>
    </div>
    <ul className='producthighlights'>
      <li className='producthighlight'>
        <div className='producthighlightinfo'>
          <span className='producthighlighttitle'>Total Products</span><br></br>
          <span className='producthighlightnum'>42</span>
        </div>
        <div className='producthighlighticon'><IoCubeOutline /></div>
      </li>
      <li className='producthighlight1'>
        <div className='producthighlightinfo'>
          <span className='producthighlighttitle'>Active Listings</span><br></br>
          <span className='producthighlightnum1'>42</span>
        </div>
        <div className='producthighlighticon1'><IoEyeOutline /></div>
      </li>
      <li className='producthighlight1'>
        <div className='producthighlightinfo'>
          <span className='producthighlighttitle'>Total Views</span><br></br>
          <span className='producthighlightnum1'>69,310</span>
        </div>
        <div className='producthighlighticon2'><IoEyeOutline /></div>
      </li>
      <li className='producthighlight1'>
        <div className='producthighlightinfo'>
          <span className='producthighlighttitle'>Total Value</span><br></br>
          <span className='producthighlightnum'>₹485Cr+</span>
        </div>
        <div className='producthighlighticon3'><LuCrown /></div>
      </li>
    </ul>
    <div className='productcatmain'>
    <ul className='productcat1'>
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
    </ul>
    </div>
    <div className="below-content">
      {selectedCat === "marketplace" && 
      <div>
        <div className="productcatmain1">
          <FiSearch className="searchIcon1" />
            <input
            type="text"
            placeholder="Search products by name, category, location, or price..."
            className="searchInput1"
            />
        </div>
        <div className="categoryfilter">
          <h2 className="filterheading">Filter by Category</h2>
          <ul className="categoryfilters">
            <li className="categoryselection"><CiFilter className="categoryicon" />All Categories</li>
            <li className="categoryselection"><PiBuildingOfficeBold className="categoryicon" />Real Estate</li>
            <li className="categoryselection"><LiaCarSideSolid className="categoryicon" />Cars</li>
            <li className="categoryselection"><MdDirectionsBike className="categoryicon"  />Bikes</li>
            <li className="categoryselection"><RiSofaLine className="categoryicon" />Furniture</li>
            <li className="categoryselection"><IoDiamondOutline className="categoryicon" />Jewellery & Watches</li>
            <li className="categoryselection"><PiPaintBrushFill className="categoryicon" />Arts & Paintings</li>
            <li className="categoryselection"><BsStars className="categoryicon" />Antiques</li>
            <li className="categoryselection"><HiOutlineCube className="categoryicon" />Collectables</li>
            <li className="categoryselection"><BsThreeDots className="categoryicon" />Others</li>
          </ul>
        </div>
        <div className="categoryproducts">
            <div className="categoryproductrow">
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Real Estate</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Luxury Sea View Villa</h2>
                <span className="productcatdesc">📍 Juhu, Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹45Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />1,234 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Cars</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Rolls-Royce Phantom 2023</h2>
                <span className="productcatdesc">📍 South Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹12Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />2,341 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Bikes</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Ducati Panigale V4R</h2>
                <span className="productcatdesc">📍 Bangalore</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹58L</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />876 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
            </div>
            <div className="categoryproductrow">
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Furniture</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Antique Rosewood Dining Set</h2>
                <span className="productcatdesc">📍 Delhi</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹18L</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />456 views</h3>
                  <span className="producttag2"><LiaCertificateSolid />Classic</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Jewellery & Watches</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Patek Philippe Nautilus</h2>
                <span className="productcatdesc">📍 Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹58L</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />1,567 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Arts & Paintings</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Contemporary Abstract Art</h2>
                <span className="productcatdesc">📍 Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹1.2Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />789 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
            </div>
            <div className="categoryproductrow">
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Antiques</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Mughal Era Artifacts Collection</h2>
                <span className="productcatdesc">📍 Delhi</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹3.5Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />1,234 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Collectables</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Rare Vintage Wine Collection</h2>
                <span className="productcatdesc">📍 Bangalore</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹1.5Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />890 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Others</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Private Yacht Charter Share</h2>
                <span className="productcatdesc">📍 Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹12Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />3,456 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
            </div>
          </div>
      </div>}
      {selectedCat === "buynow" && <div>
        <div className="productcatmain1">
          <FiSearch className="searchIcon1" />
            <input
            type="text"
            placeholder="Search products by name, category, location, or price..."
            className="searchInput1"
            />
        </div>
        <div className="categoryfilter">
          <h2 className="filterheading">Filter by Category</h2>
          <ul className="categoryfilters">
            <li className="categoryselection"><CiFilter className="categoryicon" />All Categories</li>
            <li className="categoryselection"><PiBuildingOfficeBold className="categoryicon" />Real Estate</li>
            <li className="categoryselection"><LiaCarSideSolid className="categoryicon" />Cars</li>
            <li className="categoryselection"><MdDirectionsBike className="categoryicon"  />Bikes</li>
            <li className="categoryselection"><RiSofaLine className="categoryicon" />Furniture</li>
            <li className="categoryselection"><IoDiamondOutline className="categoryicon" />Jewellery & Watches</li>
            <li className="categoryselection"><PiPaintBrushFill className="categoryicon" />Arts & Paintings</li>
            <li className="categoryselection"><BsStars className="categoryicon" />Antiques</li>
            <li className="categoryselection"><HiOutlineCube className="categoryicon" />Collectables</li>
            <li className="categoryselection"><BsThreeDots className="categoryicon" />Others</li>
          </ul>
        </div>
        <div className="categoryproducts">
            <div className="categoryproductrow">
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Real Estate</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Luxury Sea View Villa</h2>
                <span className="productcatdesc">📍 Juhu, Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹45Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />1,234 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Cars</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Rolls-Royce Phantom 2023</h2>
                <span className="productcatdesc">📍 South Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹12Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />2,341 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Bikes</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Ducati Panigale V4R</h2>
                <span className="productcatdesc">📍 Bangalore</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹58L</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />876 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
            </div>
            <div className="categoryproductrow">
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Furniture</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Antique Rosewood Dining Set</h2>
                <span className="productcatdesc">📍 Delhi</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹18L</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />456 views</h3>
                  <span className="producttag2"><LiaCertificateSolid />Classic</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Jewellery & Watches</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Patek Philippe Nautilus</h2>
                <span className="productcatdesc">📍 Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹58L</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />1,567 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Arts & Paintings</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Contemporary Abstract Art</h2>
                <span className="productcatdesc">📍 Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹1.2Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />789 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
            </div>
            <div className="categoryproductrow">
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Antiques</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Mughal Era Artifacts Collection</h2>
                <span className="productcatdesc">📍 Delhi</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹3.5Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />1,234 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Collectables</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Rare Vintage Wine Collection</h2>
                <span className="productcatdesc">📍 Bangalore</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹1.5Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />890 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Others</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Private Yacht Charter Share</h2>
                <span className="productcatdesc">📍 Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹12Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />3,456 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
            </div>
          </div>
      </div>}
      {selectedCat === "auctions" && <div>
        <div className="productcatmain1">
          <FiSearch className="searchIcon1" />
            <input
            type="text"
            placeholder="Search products by name, category, location, or price..."
            className="searchInput1"
            />
        </div>
        <div className="categoryfilter">
          <h2 className="filterheading">Filter by Category</h2>
          <ul className="categoryfilters">
            <li className="categoryselection"><CiFilter className="categoryicon" />All Categories</li>
            <li className="categoryselection"><PiBuildingOfficeBold className="categoryicon" />Real Estate</li>
            <li className="categoryselection"><LiaCarSideSolid className="categoryicon" />Cars</li>
            <li className="categoryselection"><MdDirectionsBike className="categoryicon"  />Bikes</li>
            <li className="categoryselection"><RiSofaLine className="categoryicon" />Furniture</li>
            <li className="categoryselection"><IoDiamondOutline className="categoryicon" />Jewellery & Watches</li>
            <li className="categoryselection"><PiPaintBrushFill className="categoryicon" />Arts & Paintings</li>
            <li className="categoryselection"><BsStars className="categoryicon" />Antiques</li>
            <li className="categoryselection"><HiOutlineCube className="categoryicon" />Collectables</li>
            <li className="categoryselection"><BsThreeDots className="categoryicon" />Others</li>
          </ul>
        </div>
        <div className="categoryproducts">
            <div className="categoryproductrow">
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Real Estate</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Luxury Sea View Villa</h2>
                <span className="productcatdesc">📍 Juhu, Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹45Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />1,234 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Cars</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Rolls-Royce Phantom 2023</h2>
                <span className="productcatdesc">📍 South Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹12Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />2,341 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Bikes</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Ducati Panigale V4R</h2>
                <span className="productcatdesc">📍 Bangalore</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹58L</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />876 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
            </div>
            <div className="categoryproductrow">
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Furniture</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Antique Rosewood Dining Set</h2>
                <span className="productcatdesc">📍 Delhi</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹18L</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />456 views</h3>
                  <span className="producttag2"><LiaCertificateSolid />Classic</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Jewellery & Watches</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Patek Philippe Nautilus</h2>
                <span className="productcatdesc">📍 Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹58L</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />1,567 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Arts & Paintings</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Contemporary Abstract Art</h2>
                <span className="productcatdesc">📍 Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹1.2Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />789 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
            </div>
            <div className="categoryproductrow">
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Antiques</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Mughal Era Artifacts Collection</h2>
                <span className="productcatdesc">📍 Delhi</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹3.5Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />1,234 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Collectables</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Rare Vintage Wine Collection</h2>
                <span className="productcatdesc">📍 Bangalore</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹1.5Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />890 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <span className="productbusinesstag">Marketplace</span>
                    <span className="productcattag">Others</span>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <h2 className="producattitle">Private Yacht Charter Share</h2>
                <span className="productcatdesc">📍 Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹12Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />3,456 views</h3>
                  <span className="producttag1"><LuCrown />Luxury</span>
                </div>
              </div>
            </div>
          </div>
      </div>}
      {selectedCat === "tolet" && <div>
        <div className="productcatmain1">
          <FiSearch className="searchIcon1" />
            <input
            type="text"
            placeholder="Search products by name, category, location, or price..."
            className="searchInput1"
            />
        </div>
        <div className="categoryfilter">
          <h2 className="filterheading">Filter by Category</h2>
          <ul className="categoryfilters">
            <li className="categoryselection1"><PiBuildingOfficeBold className="categoryicon" />Residential</li>
            <li className="categoryselection1"><FiBriefcase className="categoryicon" />Office Spaces</li>
            <li className="categoryselection1"><MdShoppingCart  className="categoryicon" />Shops</li>
            <li className="categoryselection1"><LuWarehouse  className="categoryicon"  />Godowns & Warehouses</li>
            <li className="categoryselection1"><LuLandPlot  className="categoryicon" />Open Plots</li>
            <li className="categoryselection1"><LuBedDouble  className="categoryicon" />PG & Hostels</li>
            <li className="categoryselection1"><LuUsers  className="categoryicon" />Luxury CoLiving</li>
            <li className="categoryselection1"><BsThreeDots className="categoryicon" />Others</li>
          </ul>
        </div>
        <div className="categoryproducts">
            <div className="categoryproductrow">
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <h2 className="producattitle">Luxury Sea View Villa</h2>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <span className="productcatdesc">📍 Juhu, Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹45Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />1,234 views</h3>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <h2 className="producattitle">Rolls-Royce Phantom 2023</h2>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <span className="productcatdesc">📍 South Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹12Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />2,341 views</h3>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <h2 className="producattitle">Ducati Panigale V4R</h2>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <span className="productcatdesc">📍 Bangalore</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹58L</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />876 views</h3>
                </div>
              </div>
            </div>
            <div className="categoryproductrow">
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <h2 className="producattitle">Antique Rosewood Dining Set</h2>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <span className="productcatdesc">📍 Delhi</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹18L</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />456 views</h3>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <h2 className="producattitle">Patek Philippe Nautilus</h2>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <span className="productcatdesc">📍 Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹58L</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />1,567 views</h3>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <h2 className="producattitle">Contemporary Abstract Art</h2>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <span className="productcatdesc">📍 Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹1.2Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />789 views</h3>
                </div>
              </div>
            </div>
            <div className="categoryproductrow">
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <h2 className="producattitle">Mughal Era Artifacts Collection</h2>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <span className="productcatdesc">📍 Delhi</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹3.5Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />1,234 views</h3>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <h2 className="producattitle">Rare Vintage Wine Collection</h2>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <span className="productcatdesc">📍 Bangalore</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹1.5Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />890 views</h3>
                </div>
              </div>
              <div className="categoryproduct" onClick={() => navigate("/Productpage")}>
                <div className="producttagrow">
                  <div className="producttagrow1">
                    <h2 className="producattitle">Private Yacht Charter Share</h2>
                  </div>
                  <div className="producttaggrow2"><BsThreeDotsVertical /></div>
                </div>
                <span className="productcatdesc">📍 Mumbai</span>
                <div className="productpricetag">
                  <h3 className="productprice">₹12Cr</h3>
                  <span className="productactivetag">active</span>
                </div>
                <div className="productviewtag">
                  <h3 className="productviews"><IoEyeOutline />3,456 views</h3>
                </div>
              </div>
            </div>
          </div>
      </div>}
    </div>
  </div>
};

export default Products;
