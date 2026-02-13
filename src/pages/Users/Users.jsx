import './Users.css';
import { useState } from "react";
import PublishedProductsPopup from "../../components/ProductPopup/productpopup";
import LeadsPopup from "../../components/LeadsPopup/LeadsPopup";
import { useNavigate } from "react-router-dom";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineShop } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";
import { TbHammer } from "react-icons/tb";
import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";



const Users = () => {

  const [selectedCat, setSelectedCat] = useState("marketplace");
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {setShowPopup(true);};
  const closePopup = () => {setShowPopup(false);};
  const navigate = useNavigate();
  const [showLeadsPopup, setShowLeadsPopup] = useState(false);
  const openLeadsPopup = () => setShowLeadsPopup(true);
  const closeLeadsPopup = () => setShowLeadsPopup(false);


  return <div className='userscontainer'>
    <div className='producthead'>
          <div className='productheadinfo'>
            <h1 className='productsheader'>Users</h1>
            <span className='productheaddesc'>Complete User Management</span>
          </div>
          <button  onClick={() => navigate("/create-user")} className='addproduct'><FiUserPlus />Add User</button>
    </div>
    <ul className='userstats'>
      <li className='userstat'>
        <div className='userstattitle'>Total Users</div>
        <div className='userstatvalue'>8,542</div>
      </li>
      <li className='userstat'>
        <div className='userstattitle'><span className='userdoticon'></span>Basic Users</div>
        <div className='userstatvalue'>5,234</div>
      </li>
      <li className='userstat'>
        <div className='userstattitle'><span className='userdoticon1'></span>Elite Users</div>
        <div className='userstatvalue'>2,456</div>
      </li>
      <li className='userstat'>
        <div className='userstattitle'><span className='userdoticon2'></span>Pro Users</div>
        <div className='userstatvalue'>852</div>
      </li>
    </ul>
    <div className='userproductstats'>
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
      
      {selectedCat === "marketplace" && <div>
      <ul className='userstats1'>
        <li className='userstat1'>
          <div className='userstattitle'>Users Selling</div>
          <div className='userstatvalue'>2,345</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle'>Active Listings</div>
          <div className='userstatvalue'>8,932</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle'>Avg Price</div>
          <div className='userstatvalue'>₹45L</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle'>Total Value</div>
          <div className='userstatvalue'>₹165Cr</div>
        </li>
      </ul>
      </div>}
      {selectedCat === "buynow" && <div>
      <ul className='userstats1'>
        <li className='userstat1'>
          <div className='userstattitle1'>Users Selling</div>
          <div className='userstatvalue1'>2,345</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle1'>Active Listings</div>
          <div className='userstatvalue1'>8,932</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle1'>Avg Price</div>
          <div className='userstatvalue1'>₹45L</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle1'>Total Value</div>
          <div className='userstatvalue1'>₹165Cr</div>
        </li>
      </ul>
      </div>}
      {selectedCat === "auctions" && <div>
      <ul className='userstats1'>
        <li className='userstat1'>
          <div className='userstattitle2'>Users Selling</div>
          <div className='userstatvalue2'>2,345</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle2'>Active Listings</div>
          <div className='userstatvalue2'>8,932</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle2'>Avg Price</div>
          <div className='userstatvalue2'>₹45L</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle2'>Total Value</div>
          <div className='userstatvalue2'>₹165Cr</div>
        </li>
      </ul>
      </div>}
      {selectedCat === "tolet" && <div>
      <ul className='userstats1'>
        <li className='userstat1'>
          <div className='userstattitle3'>Users Selling</div>
          <div className='userstatvalue3'>2,345</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle3'>Active Listings</div>
          <div className='userstatvalue3'>8,932</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle3'>Avg Price</div>
          <div className='userstatvalue3'>₹45L</div>
        </li>
        <li className='userstat1'>
          <div className='userstattitle3'>Total Value</div>
          <div className='userstatvalue3'>₹165Cr</div>
        </li>
      </ul>
      </div>}
      </div>
      {selectedCat === "marketplace" && <div>
      <div className="productcatmain2">
          <input
          type="text"
          placeholder="Search products by name, category, location, or price..."
          className="searchInput1"
          />
      </div>
      <ul  className='userscategory'>
        <li className='usercategoryname'>All Users</li>
        <li className='usercategoryname'>Basic</li>
        <li className='usercategoryname'>Elite</li>
        <li className='usercategoryname'>Pro</li>
      </ul> 
      <table className="producttable">
      <thead>
        <tr>
          <th>User</th>
          <th>Type</th>
          <th>Status</th>
          <th>Products</th>
          <th>Leads</th>
          <th>Joined</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile'>RK</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Rajesh Kumar</div>
                <div className='userprofileemail'>rajesh.k@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags'>Basic</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>3</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>12</span></td>
          <td><span className='userdatenum'>Jan 2024</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile'>PS</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Priya Sharma</div>
                <div className='userprofileemail'>priya.s@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags'>Basic</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>3</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>23</span></td>
          <td><span className='userdatenum'>Dec 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile'>AP</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Amit Patel</div>
                <div className='userprofileemail'>amit.p@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags'>Basic</span></td>
          <td><span className='userstatustags1'>inactive</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>2</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>8</span></td>
          <td><span className='userdatenum'>Nov 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile1'>VS</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Vikram Singh</div>
                <div className='userprofileemail'>vikram.s@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags1'>Elite</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>12</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>87</span></td>
          <td><span className='userdatenum'>Oct 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile1'>AD</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Anjali Desai</div>
                <div className='userprofileemail'>anjali.d@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags1'>Elite</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>18</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>134</span></td>
          <td><span className='userdatenum'>Sep 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile1'>KR</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Kavita Reddy</div>
                <div className='userprofileemail'>kavita.r@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags1'>Elite</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>15</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>102</span></td>
          <td><span className='userdatenum'>Aug 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile2'>AM</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Arjun Malhotra</div>
                <div className='userprofileemail'>arjun.m@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags2'>Pro</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>34</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>298</span></td>
          <td><span className='userdatenum'>Jul 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile2'>NK</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Neha Kapoor</div>
                <div className='userprofileemail'>neha.k@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags2'>Pro</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>28</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>241</span></td>
          <td><span className='userdatenum'>Jun 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile2'>RM</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Rohan Mehta</div>
                <div className='userprofileemail'>rohan.m@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags2'>Pro</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>41</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>356</span></td>
          <td><span className='userdatenum'>May 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>
      </tbody>
      </table>
      <PublishedProductsPopup open={showPopup} onClose={() => setShowPopup(false)}/>
      <LeadsPopup open={showLeadsPopup} onClose={closeLeadsPopup} />
      </div>
      }
      {selectedCat === "buynow" && <div> <div className="productcatmain2">
        <FiSearch className="searchIcon1" />
          <input
          type="text"
          placeholder="Search products by name, category, location, or price..."
          className="searchInput1"
          />
      </div>
      <ul  className='userscategory'>
        <li className='usercategoryname'>All Users</li>
        <li className='usercategoryname'>Basic</li>
        <li className='usercategoryname'>Elite</li>
        <li className='usercategoryname'>Pro</li>
      </ul> 
      <table className="producttable">
      <thead>
        <tr>
          <th>User</th>
          <th>Type</th>
          <th>Status</th>
          <th>Products</th>
          <th>Leads</th>
          <th>Joined</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile'>RK</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Rajesh Kumar</div>
                <div className='userprofileemail'>rajesh.k@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags'>Basic</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>3</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>12</span></td>
          <td><span className='userdatenum'>Jan 2024</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile'>PS</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Priya Sharma</div>
                <div className='userprofileemail'>priya.s@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags'>Basic</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>3</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>23</span></td>
          <td><span className='userdatenum'>Dec 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile'>AP</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Amit Patel</div>
                <div className='userprofileemail'>amit.p@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags'>Basic</span></td>
          <td><span className='userstatustags1'>inactive</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>2</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>8</span></td>
          <td><span className='userdatenum'>Nov 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile1'>VS</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Vikram Singh</div>
                <div className='userprofileemail'>vikram.s@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags1'>Elite</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>12</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>87</span></td>
          <td><span className='userdatenum'>Oct 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile1'>AD</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Anjali Desai</div>
                <div className='userprofileemail'>anjali.d@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags1'>Elite</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>18</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>134</span></td>
          <td><span className='userdatenum'>Sep 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile1'>KR</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Kavita Reddy</div>
                <div className='userprofileemail'>kavita.r@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags1'>Elite</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>15</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>102</span></td>
          <td><span className='userdatenum'>Aug 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile2'>AM</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Arjun Malhotra</div>
                <div className='userprofileemail'>arjun.m@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags2'>Pro</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>34</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>298</span></td>
          <td><span className='userdatenum'>Jul 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile2'>NK</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Neha Kapoor</div>
                <div className='userprofileemail'>neha.k@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags2'>Pro</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>28</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>241</span></td>
          <td><span className='userdatenum'>Jun 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile2'>RM</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Rohan Mehta</div>
                <div className='userprofileemail'>rohan.m@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags2'>Pro</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>41</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>356</span></td>
          <td><span className='userdatenum'>May 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>
      </tbody>
      </table>
      <PublishedProductsPopup open={showPopup} onClose={() => setShowPopup(false)}/>
      <LeadsPopup open={showLeadsPopup} onClose={closeLeadsPopup} />
      </div>}
      {selectedCat === "auctions" && <div><div className="productcatmain2">
        <FiSearch className="searchIcon1" />
          <input
          type="text"
          placeholder="Search products by name, category, location, or price..."
          className="searchInput1"
          />
      </div>
      <ul  className='userscategory'>
        <li className='usercategoryname'>All Users</li>
        <li className='usercategoryname'>Basic</li>
        <li className='usercategoryname'>Elite</li>
        <li className='usercategoryname'>Pro</li>
      </ul> 
      <table className="producttable">
      <thead>
        <tr>
          <th>User</th>
          <th>Type</th>
          <th>Status</th>
          <th>Products</th>
          <th>Leads</th>
          <th>Joined</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile'>RK</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Rajesh Kumar</div>
                <div className='userprofileemail'>rajesh.k@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags'>Basic</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>3</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>12</span></td>
          <td><span className='userdatenum'>Jan 2024</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile'>PS</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Priya Sharma</div>
                <div className='userprofileemail'>priya.s@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags'>Basic</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>3</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>23</span></td>
          <td><span className='userdatenum'>Dec 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile'>AP</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Amit Patel</div>
                <div className='userprofileemail'>amit.p@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags'>Basic</span></td>
          <td><span className='userstatustags1'>inactive</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>2</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>8</span></td>
          <td><span className='userdatenum'>Nov 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile1'>VS</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Vikram Singh</div>
                <div className='userprofileemail'>vikram.s@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags1'>Elite</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>12</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>87</span></td>
          <td><span className='userdatenum'>Oct 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile1'>AD</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Anjali Desai</div>
                <div className='userprofileemail'>anjali.d@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags1'>Elite</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>18</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>134</span></td>
          <td><span className='userdatenum'>Sep 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile1'>KR</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Kavita Reddy</div>
                <div className='userprofileemail'>kavita.r@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags1'>Elite</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>15</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>102</span></td>
          <td><span className='userdatenum'>Aug 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile2'>AM</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Arjun Malhotra</div>
                <div className='userprofileemail'>arjun.m@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags2'>Pro</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>34</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>298</span></td>
          <td><span className='userdatenum'>Jul 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile2'>NK</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Neha Kapoor</div>
                <div className='userprofileemail'>neha.k@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags2'>Pro</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>28</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>241</span></td>
          <td><span className='userdatenum'>Jun 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile2'>RM</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Rohan Mehta</div>
                <div className='userprofileemail'>rohan.m@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags2'>Pro</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>41</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>356</span></td>
          <td><span className='userdatenum'>May 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>
      </tbody>
      </table>
      <PublishedProductsPopup open={showPopup} onClose={() => setShowPopup(false)}/>
      <LeadsPopup open={showLeadsPopup} onClose={closeLeadsPopup} />
      </div>}
      {selectedCat === "tolet" && <div> <div className="productcatmain2">
        <FiSearch className="searchIcon1" />
          <input
          type="text"
          placeholder="Search products by name, category, location, or price..."
          className="searchInput1"
          />
      </div>
      <ul  className='userscategory'>
        <li className='usercategoryname'>All Users</li>
        <li className='usercategoryname'>Basic</li>
        <li className='usercategoryname'>Elite</li>
        <li className='usercategoryname'>Pro</li>
      </ul> 
      <table className="producttable">
      <thead>
        <tr>
          <th>User</th>
          <th>Type</th>
          <th>Status</th>
          <th>Products</th>
          <th>Leads</th>
          <th>Joined</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile'>RK</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Rajesh Kumar</div>
                <div className='userprofileemail'>rajesh.k@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags'>Basic</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>3</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>12</span></td>
          <td><span className='userdatenum'>Jan 2024</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile'>PS</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Priya Sharma</div>
                <div className='userprofileemail'>priya.s@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags'>Basic</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>3</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>23</span></td>
          <td><span className='userdatenum'>Dec 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile'>AP</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Amit Patel</div>
                <div className='userprofileemail'>amit.p@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags'>Basic</span></td>
          <td><span className='userstatustags1'>inactive</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>2</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>8</span></td>
          <td><span className='userdatenum'>Nov 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile1'>VS</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Vikram Singh</div>
                <div className='userprofileemail'>vikram.s@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags1'>Elite</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>12</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>87</span></td>
          <td><span className='userdatenum'>Oct 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile1'>AD</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Anjali Desai</div>
                <div className='userprofileemail'>anjali.d@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags1'>Elite</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>18</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>134</span></td>
          <td><span className='userdatenum'>Sep 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile1'>KR</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Kavita Reddy</div>
                <div className='userprofileemail'>kavita.r@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags1'>Elite</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>15</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>102</span></td>
          <td><span className='userdatenum'>Aug 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile2'>AM</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Arjun Malhotra</div>
                <div className='userprofileemail'>arjun.m@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags2'>Pro</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>34</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>298</span></td>
          <td><span className='userdatenum'>Jul 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile2'>NK</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Neha Kapoor</div>
                <div className='userprofileemail'>neha.k@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags2'>Pro</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>28</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>241</span></td>
          <td><span className='userdatenum'>Jun 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>

        <tr>
          <td onClick={() => navigate("/userprofile")}>
            <div className='userrowdata'>
              <div className='userprofile2'>RM</div>
              <div className='userprofileinfo'>
                <div className='userprofilename'>Rohan Mehta</div>
                <div className='userprofileemail'>rohan.m@email.com</div>
              </div>
            </div>
          </td>
          <td><span className='userplantags2'>Pro</span></td>
          <td><span className='userstatustags'>active</span></td>
          <td><span onClick={() => setShowPopup(true)} className='userproductnum'>41</span></td>
          <td><span onClick={openLeadsPopup} className='userleadsnum'>356</span></td>
          <td><span className='userdatenum'>May 2023</span></td>
          <td><BsThreeDotsVertical /></td>
        </tr>
      </tbody>
      </table>
      <PublishedProductsPopup open={showPopup} onClose={() => setShowPopup(false)}/>
      <LeadsPopup open={showLeadsPopup} onClose={closeLeadsPopup} />
      </div>}
  </div>;
};

export default Users;
