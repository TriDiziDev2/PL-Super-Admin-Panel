import axios from "axios";

// const token = localStorage.getItem("token");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjYyYWQ4OTItZGZjNS00NzQ5LWE0MTItMWM1Njc1NjZiMjRiIiwiZW1haWwiOiJhZG1pbkBiaWxsaW9uYWlyZWF1Y3Rpb24uY29tIiwiaWF0IjoxNzcxMjI5NTMwLCJleHAiOjQzNjMyMjk1MzB9.oxQFohQbne-7mJr2O3R9J799AHrTgCyGT4GEER2y-gI";

const api = axios.create({
  // baseURL: "http://localhost:5001",
  baseURL: "https://3nkfewwusk.ap-south-1.awsapprunner.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default api;
