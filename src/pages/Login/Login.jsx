import React, { useState } from "react";
import { setAuth } from "../../lib/auth";
import "./Login.css";
import api from "../../lib/api";

export default function Login() {
  const [userType, setUserType] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password) {
      setError("Email and password are required.");
      return;
    }
    setLoading(true);
    try {
      const endpoint =
        userType === "admin" ? "/api/admin/login" : "/api/employee/login";
      const { data } = await api.post(endpoint, {
        email: email.trim(),
        password,
      });
      const token = data.token;
      if (!token) {
        setError("Login succeeded but no token received.");
        return;
      }
      setAuth(token, userType);
      window.location.href = "/";
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Admin Panel</h1>
        <p className="login-subtitle">Sign in to continue</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-radio-group">
            <label className="login-radio-label">Login as</label>
            <div className="login-radio-row">
              <label className="login-radio-option">
                <input
                  type="radio"
                  name="userType"
                  value="admin"
                  checked={userType === "admin"}
                  onChange={() => setUserType("admin")}
                />
                <span>Admin</span>
              </label>
              <label className="login-radio-option">
                <input
                  type="radio"
                  name="userType"
                  value="employee"
                  checked={userType === "employee"}
                  onChange={() => setUserType("employee")}
                />
                <span>Employee</span>
              </label>
            </div>
          </div>

          <div className="login-field">
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="login-field">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="login-error" role="alert">
              {error}
            </div>
          )}

          <button type="submit" className="login-submit" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
