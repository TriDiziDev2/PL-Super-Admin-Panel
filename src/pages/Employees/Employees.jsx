import React, { useState, useEffect } from "react";
import "./Employees.css";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { FiBriefcase } from "react-icons/fi";
import { MdOutlineShield } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { getEmployees } from "../../lib/employees";

const getInitials = (name) => {
  return name
    .trim()
    .split(/\s+/)
    .map((s) => s[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const formatJoined = (dateStr) => {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return `Joined ${d.toLocaleDateString("en-IN", { month: "short", year: "numeric" })}`;
};

const Employees = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError("");
      try {
        const { data } = await getEmployees();
        if (!cancelled) setEmployees(data || []);
      } catch (err) {
        if (!cancelled) {
          setError(err.response?.data?.message || err.message || "Failed to load employees.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const filtered = employees.filter((emp) => {
    const q = search.toLowerCase();
    return (
      (emp.name || "").toLowerCase().includes(q) ||
      (emp.email || "").toLowerCase().includes(q) ||
      (emp.department || "").toLowerCase().includes(q) ||
      (emp.designation || "").toLowerCase().includes(q)
    );
  });

  const activeCount = employees.filter((e) => e.isActive).length;
  const departments = [...new Set(employees.map((e) => e.department).filter(Boolean))];
  const adminCount = employees.filter((e) => (e.designation || "").toLowerCase() === "admin").length;

  return (
    <div className="employees-container">

      <div className="employees-header">
        <div>
          <h1>Employees</h1>
          <p>In-house employee management</p>
        </div>
        <button
          className="add-employee-btn"
          onClick={() => navigate("/createemployee")}
        >
          + Add Employee
        </button>
      </div>

      {error && (
        <div className="employees-error" role="alert">
          {error}
        </div>
      )}

      <div className="stats-row">
        <div className="stat-card">
          <div className="statcardheader">
            <p className="statcardname">TOTAL EMPLOYEES</p>
            <FiUser className="statcardicon" />
          </div>
          <h2>{loading ? "—" : employees.length}</h2>
          <div className="statcardline orange"></div>
        </div>
        <div className="stat-card">
          <div className="statcardheader">
            <p className="statcardname">Active</p>
            <GoDotFill className="statcardicon1" />
          </div>
          <h2 className="statcardicon1">{loading ? "—" : activeCount}</h2>
          <div className="statcardline green"></div>
        </div>
        <div className="stat-card">
          <div className="statcardheader">
            <p className="statcardname">DEPARTMENTS</p>
            <FiBriefcase className="statcardicon2" />
          </div>
          <h2>{loading ? "—" : departments.length}</h2>
          <div className="statcardline blue"></div>
        </div>
        <div className="stat-card1 highlight">
          <div className="statcardheader">
            <p className="statcardicon3">ADMIN USERS</p>
            <MdOutlineShield className="statcardicon3" />
          </div>
          <h2 className="statcardicon3">{loading ? "—" : adminCount}</h2>
          <div className="statcardline gold1"></div>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search employees by name, email, department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="employees-loading">Loading employees…</div>
      ) : (
        <div className="employee-grid">
          {filtered.map((emp) => (
            <div
              onClick={() => navigate(`/employeedetails/${emp.id}`)}
              className="employee-card"
              key={emp.id}
            >
              <div className="employee-top">
                <div className="avatar">{getInitials(emp.name)}</div>
                <div>
                  <h3 className="empname">{emp.name}</h3>
                  <span className="role">{emp.designation || "—"}</span>
                </div>
                <div className="employeeediticon"><HiDotsVertical /></div>
              </div>
              <div className="employee-info">
                <p className="empdatainfo">
                  <MdOutlineEmail className="empemail" />
                  {emp.email}
                </p>
                <p className="empdatainfo">
                  <FiBriefcase className="empcase" />
                  {emp.department || "—"}
                </p>
                <p className="empdatainfo">
                  <CiCalendar className="empjoin" />
                  {formatJoined(emp.createdAt)}
                </p>
              </div>
              <div className="employee-footer">
                <span className="dept">{emp.department || "—"}</span>
                <span className={emp.isActive ? "status active" : "status inactive"}>
                  {emp.isActive ? "active" : "inactive"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="employees-empty">
          {search ? "No employees match your search." : "No employees yet."}
        </div>
      )}
    </div>
  );
};

export default Employees;
