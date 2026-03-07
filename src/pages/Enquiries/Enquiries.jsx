import React, { useEffect, useState, useCallback } from "react";
import "./Enquiries.css";
import {
  FiMessageSquare,
  FiClock,
  FiSend,
  FiSearch,
} from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { getEnquiries, getEnquiryStats, updateEnquiry } from "../../lib/enquiries";
import { getEmployees } from "../../lib/employees";

const statusLabel = { NEW: "unread", IN_PROGRESS: "in progress", RESOLVED: "replied", CLOSED: "closed" };
const listingTypeLabel = { BUY_NOW: "Buy Now", MARKETPLACE: "Marketplace", AUCTIONS: "Auctions", TO_LET: "To-Let" };

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs} hour${hrs > 1 ? "s" : ""} ago`;
  const days = Math.floor(hrs / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

export default function Enquiries() {
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = useState([]);
  const [stats, setStats] = useState(null);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
  const [filters, setFilters] = useState({ listingType: "", status: "", search: "" });
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = { page: pagination.page, limit: 20 };
      if (filters.listingType) params.listingType = filters.listingType;
      if (filters.status) params.status = filters.status;
      if (filters.search) params.search = filters.search;

      const [enqRes, statsData] = await Promise.all([
        getEnquiries(params),
        stats ? Promise.resolve({ data: stats }) : getEnquiryStats(),
      ]);

      setEnquiries(enqRes.data || []);
      setPagination(enqRes.pagination || { page: 1, totalPages: 1, total: 0 });
      if (!stats) setStats(statsData.data || statsData);
    } catch (err) {
      console.error("Failed to fetch enquiries", err);
    } finally {
      setLoading(false);
    }
  }, [pagination.page, filters]);

  useEffect(() => { fetchData(); }, [fetchData]);

  useEffect(() => {
    getEmployees().then((res) => setEmployees((res.data || []).filter(e => e.isActive))).catch(() => {});
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateEnquiry(id, { status: newStatus });
      setEnquiries((prev) => prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e)));
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const handleAssignEmployee = async (id, employeeId) => {
    try {
      const res = await updateEnquiry(id, { assignedEmployeeId: employeeId || null });
      const updated = res.data || res;
      setEnquiries((prev) => prev.map((e) => (e.id === id ? { ...e, assignedEmployeeId: updated.assignedEmployeeId, assignedEmployee: updated.assignedEmployee } : e)));
    } catch (err) {
      console.error("Failed to assign employee", err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setFilters((f) => ({ ...f, search: searchInput }));
    setPagination((p) => ({ ...p, page: 1 }));
  };

  const byListing = stats?.byListingType || [];
  const getListingStat = (lt) => byListing.find((b) => b.listingType === lt) || { count: 0, newCount: 0 };

  return (
    <div className="enquiries-wrapper">
      <div className="enquiries-header">
        <h1>Enquiries</h1>
        <p>Chat and form enquiries across all business modes</p>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-top">
            <span>Total Enquiries</span>
            <FiMessageSquare className="stat-icon1" />
          </div>
          <h2>{stats?.total ?? "-"}</h2>
          <div className="stat-line blue"></div>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span className="statcardtext">New</span>
            <GoDotFill className="stat-icon2" />
          </div>
          <h2 className="blue-text">{stats?.new ?? "-"}</h2>
          <div className="stat-line blue"></div>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span className="statcardtext1">In Progress</span>
            <IoMdTime className="stat-icon1" />
          </div>
          <h2 className="orange-text">{stats?.inProgress ?? "-"}</h2>
          <div className="stat-line orange"></div>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span className="statcardtext2">Resolved</span>
            <FiSend className="stat-icon3" />
          </div>
          <h2 className="yellow-text">{stats?.resolved ?? "-"}</h2>
          <div className="stat-line yellow"></div>
        </div>
      </div>

      <div className="section-card">
        <h3>Enquiries by Business Mode</h3>
        <p>Distribution across different business categories</p>

        <div className="business-grid">
          {["BUY_NOW", "MARKETPLACE", "AUCTIONS", "TO_LET"].map((lt) => {
            const s = getListingStat(lt);
            const isActive = filters.listingType === lt;
            return (
              <div
                key={lt}
                className={`business-card ${isActive ? "active" : ""}`}
                onClick={() => {
                  setFilters((f) => ({ ...f, listingType: isActive ? "" : lt }));
                  setPagination((p) => ({ ...p, page: 1 }));
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="business-top">
                  <span>{listingTypeLabel[lt]}</span>
                  <BsChatDots className={`business-icon ${lt === "BUY_NOW" ? "yellow-bg" : lt === "MARKETPLACE" ? "blue-bg" : lt === "AUCTIONS" ? "purple-bg" : "green-bg"}`} />
                </div>
                <p className="gapspace">Total<b>{s.count}</b></p>
                <p className="gapspace">New <span className="badge1">{s.newCount}</span></p>
              </div>
            );
          })}
        </div>
      </div>

      <form className="search-box" onSubmit={handleSearch}>
        <FiSearch />
        <input placeholder="Search enquiries by user, product, message..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
      </form>

      <ul className="activitycat1">
        {["", "NEW", "IN_PROGRESS", "RESOLVED", "CLOSED"].map((s) => (
          <li
            key={s}
            className={`catmenu4 ${filters.status === s ? "active-allenquiries" : ""}`}
            onClick={() => { setFilters((f) => ({ ...f, status: s })); setPagination((p) => ({ ...p, page: 1 })); }}
          >
            {s === "" ? "All Enquiries" : statusLabel[s] ? statusLabel[s].charAt(0).toUpperCase() + statusLabel[s].slice(1) : s}
          </li>
        ))}
      </ul>

      {loading ? (
        <p style={{ padding: "20px", textAlign: "center" }}>Loading enquiries...</p>
      ) : enquiries.length === 0 ? (
        <p style={{ padding: "20px", textAlign: "center" }}>No enquiries found.</p>
      ) : (
        <div>
          {enquiries.map((enq) => (
            <div className="enquiry-card" key={enq.id}>
              <div className="enquiry-header">
                <div className="user-info">
                  <div className="avatar">{enq.visitorName?.slice(0, 2).toUpperCase()}</div>
                  <div>
                    <h4>
                      {enq.visitorName}
                      <span className={`status ${enq.status === "NEW" ? "unread" : ""}`}>{statusLabel[enq.status] || enq.status}</span>
                    </h4>
                    <p>{enq.product?.title || "Unknown Product"}</p>
                  </div>
                </div>

                <div className="agent-section">
                  <select
                    className="employee-dropdown"
                    value={enq.assignedEmployeeId || ""}
                    onChange={(e) => handleAssignEmployee(enq.id, e.target.value)}
                  >
                    <option value="">Unassigned</option>
                    {employees.map((emp) => (
                      <option key={emp.id} value={emp.id}>{emp.name}</option>
                    ))}
                  </select>
                  {enq.status === "NEW" && (
                    <button className="reply-btn" onClick={() => handleStatusChange(enq.id, "IN_PROGRESS")}>Mark In Progress</button>
                  )}
                  {enq.status === "IN_PROGRESS" && (
                    <button className="reply-btn" onClick={() => handleStatusChange(enq.id, "RESOLVED")}>Mark Resolved</button>
                  )}
                  <button className="reply-btn" onClick={() => navigate(`/enquirydetails/${enq.id}`)}>View</button>
                </div>
              </div>

              <div className="message-box">
                <strong>Message</strong>
                <p className="enquirymessage">{enq.message}</p>
              </div>

              <div className="enquiry-footer">
                <span><FiClock /> {timeAgo(enq.createdAt)}</span>
                <span className="type">{enq.visitorPhone || enq.visitorEmail}</span>
                <span className="type">{listingTypeLabel[enq.product?.listingType] || ""}</span>
              </div>
            </div>
          ))}

          {pagination.totalPages > 1 && (
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "20px" }}>
              <button disabled={pagination.page <= 1} onClick={() => setPagination((p) => ({ ...p, page: p.page - 1 }))} className="reply-btn">Prev</button>
              <span style={{ alignSelf: "center" }}>Page {pagination.page} of {pagination.totalPages}</span>
              <button disabled={pagination.page >= pagination.totalPages} onClick={() => setPagination((p) => ({ ...p, page: p.page + 1 }))} className="reply-btn">Next</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
