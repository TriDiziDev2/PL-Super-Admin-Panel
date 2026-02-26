import './Users.css';
import { useState, useEffect } from "react";
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
import { getUsers } from "../../lib/users";

const Users = () => {

  const [selectedCat, setSelectedCat] = useState("marketplace");
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {setShowPopup(true);};
  const closePopup = () => {setShowPopup(false);};
  const navigate = useNavigate();
  const [showLeadsPopup, setShowLeadsPopup] = useState(false);
  const openLeadsPopup = () => setShowLeadsPopup(true);
  const closeLeadsPopup = () => setShowLeadsPopup(false);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getUsers({ search: searchQuery || undefined });
        if (!cancelled) setUsers(res.data || []);
      } catch (err) {
        if (!cancelled) setError(err.response?.data?.message || "Failed to load users");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [searchQuery]);

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.isActive).length;
  const inactiveUsers = totalUsers - activeUsers;
  const getInitials = (name) => (name || "").split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  const formatDate = (d) => d ? new Date(d).toLocaleDateString("en-IN", { month: "short", year: "numeric" }) : "";
  const tierLabel = (s) => (s === "ACTIVE" ? "Elite" : s === "INACTIVE" ? "Basic" : s === "EXPIRED" ? "Expired" : s === "CANCELLED" ? "Cancelled" : s || "Basic");
  const tierClass = (s) => (s === "ACTIVE" ? "userplantags1" : s === "INACTIVE" ? "userplantags" : "userplantags2");


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
        <div className='userstatvalue'>{loading ? "…" : totalUsers.toLocaleString()}</div>
      </li>
      <li className='userstat'>
        <div className='userstattitle'><span className='userdoticon'></span>Basic Users</div>
        <div className='userstatvalue'>{loading ? "…" : (users.filter((u) => u.subscriptionStatus === "INACTIVE").length).toLocaleString()}</div>
      </li>
      <li className='userstat'>
        <div className='userstattitle'><span className='userdoticon1'></span>Elite Users</div>
        <div className='userstatvalue'>{loading ? "…" : (users.filter((u) => u.subscriptionStatus === "ACTIVE").length).toLocaleString()}</div>
      </li>
      <li className='userstat'>
        <div className='userstattitle'><span className='userdoticon2'></span>Pro Users</div>
        <div className='userstatvalue'>{loading ? "…" : (users.filter((u) => u.subscriptionStatus === "EXPIRED" || u.subscriptionStatus === "CANCELLED").length).toLocaleString()}</div>
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
          placeholder="Search users by name or email..."
          className="searchInput1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
      </div>
      <ul  className='userscategory'>
        <li className='usercategoryname'>All Users</li>
        <li className='usercategoryname'>Basic</li>
        <li className='usercategoryname'>Elite</li>
        <li className='usercategoryname'>Pro</li>
      </ul>
      {error && <p className="userError">{error}</p>}
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
        {loading ? (
          <tr><td colSpan={7}>Loading users…</td></tr>
        ) : users.length === 0 ? (
          <tr><td colSpan={7}>No users found</td></tr>
        ) : (
          users.map((u) => (
            <tr key={u.id}>
              <td onClick={() => navigate(`/userprofile/${u.id}`)}>
                <div className='userrowdata'>
                  <div className={u.subscriptionStatus === "ACTIVE" ? "userprofile1" : u.subscriptionStatus === "INACTIVE" ? "userprofile" : "userprofile2"}>{getInitials(u.name)}</div>
                  <div className='userprofileinfo'>
                    <div className='userprofilename'>{u.name}</div>
                    <div className='userprofileemail'>{u.email}</div>
                  </div>
                </div>
              </td>
              <td><span className={tierClass(u.subscriptionStatus)}>{tierLabel(u.subscriptionStatus)}</span></td>
              <td><span className={u.isActive ? 'userstatustags' : 'userstatustags1'}>{u.isActive ? "active" : "inactive"}</span></td>
              <td><span onClick={() => setShowPopup(true)} className='userproductnum'>{u._count?.ownedProducts ?? 0}</span></td>
              <td><span onClick={openLeadsPopup} className='userleadsnum'>0</span></td>
              <td><span className='userdatenum'>{formatDate(u.createdAt)}</span></td>
              <td><BsThreeDotsVertical /></td>
            </tr>
          ))
        )}
      </tbody>
      </table>
      <PublishedProductsPopup open={showPopup} onClose={() => setShowPopup(false)}/>
      <LeadsPopup open={showLeadsPopup} onClose={closeLeadsPopup} />
      </div>
      }
      {selectedCat === "buynow" && <div> <div className="productcatmain2">
        <FiSearch className="searchIcon1" />
          <input type="text" placeholder="Search users by name or email..." className="searchInput1" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <ul className='userscategory'><li className='usercategoryname'>All Users</li><li className='usercategoryname'>Basic</li><li className='usercategoryname'>Elite</li><li className='usercategoryname'>Pro</li></ul>
      <table className="producttable">
      <thead><tr><th>User</th><th>Type</th><th>Status</th><th>Products</th><th>Leads</th><th>Joined</th><th>Actions</th></tr></thead>
      <tbody>
        {loading ? <tr><td colSpan={7}>Loading users…</td></tr> : users.length === 0 ? <tr><td colSpan={7}>No users found</td></tr> : users.map((u) => (
            <tr key={u.id}>
              <td onClick={() => navigate(`/userprofile/${u.id}`)}><div className='userrowdata'><div className={u.subscriptionStatus === "ACTIVE" ? "userprofile1" : u.subscriptionStatus === "INACTIVE" ? "userprofile" : "userprofile2"}>{getInitials(u.name)}</div><div className='userprofileinfo'><div className='userprofilename'>{u.name}</div><div className='userprofileemail'>{u.email}</div></div></div></td>
              <td><span className={tierClass(u.subscriptionStatus)}>{tierLabel(u.subscriptionStatus)}</span></td><td><span className={u.isActive ? 'userstatustags' : 'userstatustags1'}>{u.isActive ? "active" : "inactive"}</span></td><td><span onClick={() => setShowPopup(true)} className='userproductnum'>{u._count?.ownedProducts ?? 0}</span></td><td><span onClick={openLeadsPopup} className='userleadsnum'>0</span></td><td><span className='userdatenum'>{formatDate(u.createdAt)}</span></td><td><BsThreeDotsVertical /></td>
            </tr>
          ))}
      </tbody>
      </table>
      <PublishedProductsPopup open={showPopup} onClose={() => setShowPopup(false)}/><LeadsPopup open={showLeadsPopup} onClose={closeLeadsPopup} />
      </div>}
      {selectedCat === "auctions" && <div><div className="productcatmain2">
        <FiSearch className="searchIcon1" />
          <input type="text" placeholder="Search users by name or email..." className="searchInput1" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <ul className='userscategory'><li className='usercategoryname'>All Users</li><li className='usercategoryname'>Basic</li><li className='usercategoryname'>Elite</li><li className='usercategoryname'>Pro</li></ul>
      <table className="producttable">
      <thead><tr><th>User</th><th>Type</th><th>Status</th><th>Products</th><th>Leads</th><th>Joined</th><th>Actions</th></tr></thead>
      <tbody>
        {loading ? <tr><td colSpan={7}>Loading users…</td></tr> : users.length === 0 ? <tr><td colSpan={7}>No users found</td></tr> : users.map((u) => (
            <tr key={u.id}>
              <td onClick={() => navigate(`/userprofile/${u.id}`)}><div className='userrowdata'><div className={u.subscriptionStatus === "ACTIVE" ? "userprofile1" : u.subscriptionStatus === "INACTIVE" ? "userprofile" : "userprofile2"}>{getInitials(u.name)}</div><div className='userprofileinfo'><div className='userprofilename'>{u.name}</div><div className='userprofileemail'>{u.email}</div></div></div></td>
              <td><span className={tierClass(u.subscriptionStatus)}>{tierLabel(u.subscriptionStatus)}</span></td><td><span className={u.isActive ? 'userstatustags' : 'userstatustags1'}>{u.isActive ? "active" : "inactive"}</span></td><td><span onClick={() => setShowPopup(true)} className='userproductnum'>{u._count?.ownedProducts ?? 0}</span></td><td><span onClick={openLeadsPopup} className='userleadsnum'>0</span></td><td><span className='userdatenum'>{formatDate(u.createdAt)}</span></td><td><BsThreeDotsVertical /></td>
            </tr>
          ))}
      </tbody>
      </table>
      <PublishedProductsPopup open={showPopup} onClose={() => setShowPopup(false)}/><LeadsPopup open={showLeadsPopup} onClose={closeLeadsPopup} />
      </div>}
      {selectedCat === "tolet" && <div> <div className="productcatmain2">
        <FiSearch className="searchIcon1" />
          <input type="text" placeholder="Search users by name or email..." className="searchInput1" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <ul className='userscategory'><li className='usercategoryname'>All Users</li><li className='usercategoryname'>Basic</li><li className='usercategoryname'>Elite</li><li className='usercategoryname'>Pro</li></ul>
      <table className="producttable">
      <thead><tr><th>User</th><th>Type</th><th>Status</th><th>Products</th><th>Leads</th><th>Joined</th><th>Actions</th></tr></thead>
      <tbody>
        {loading ? <tr><td colSpan={7}>Loading users…</td></tr> : users.length === 0 ? <tr><td colSpan={7}>No users found</td></tr> : users.map((u) => (
            <tr key={u.id}>
              <td onClick={() => navigate(`/userprofile/${u.id}`)}><div className='userrowdata'><div className={u.subscriptionStatus === "ACTIVE" ? "userprofile1" : u.subscriptionStatus === "INACTIVE" ? "userprofile" : "userprofile2"}>{getInitials(u.name)}</div><div className='userprofileinfo'><div className='userprofilename'>{u.name}</div><div className='userprofileemail'>{u.email}</div></div></div></td>
              <td><span className={tierClass(u.subscriptionStatus)}>{tierLabel(u.subscriptionStatus)}</span></td><td><span className={u.isActive ? 'userstatustags' : 'userstatustags1'}>{u.isActive ? "active" : "inactive"}</span></td><td><span onClick={() => setShowPopup(true)} className='userproductnum'>{u._count?.ownedProducts ?? 0}</span></td><td><span onClick={openLeadsPopup} className='userleadsnum'>0</span></td><td><span className='userdatenum'>{formatDate(u.createdAt)}</span></td><td><BsThreeDotsVertical /></td>
            </tr>
          ))}
      </tbody>
      </table>
      <PublishedProductsPopup open={showPopup} onClose={() => setShowPopup(false)}/><LeadsPopup open={showLeadsPopup} onClose={closeLeadsPopup} />
      </div>}
  </div>;
};

export default Users;
