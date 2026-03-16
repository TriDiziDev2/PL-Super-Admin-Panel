import api from "./api";

// --- Revenue ---
export async function getRevenueStats(period) {
  const res = await api.get("/api/revenue/stats", {
    params: period ? { period } : {},
  });
  return res.data;
}

// --- Coupons ---
export async function getCoupons() {
  const res = await api.get("/api/coupon");
  return res.data;
}

export async function getCouponStats() {
  const res = await api.get("/api/coupon/stats");
  return res.data;
}

export async function createCoupon(data) {
  const res = await api.post("/api/coupon", data);
  return res.data;
}

export async function updateCoupon(id, data) {
  const res = await api.put(`/api/coupon/${id}`, data);
  return res.data;
}

export async function deleteCoupon(id) {
  const res = await api.delete(`/api/coupon/${id}`);
  return res.data;
}

// --- Packages ---
export async function getPackages(category) {
  const res = await api.get("/api/package", {
    params: category ? { category } : {},
  });
  return res.data;
}

export async function createPackage(data) {
  const res = await api.post("/api/package", data);
  return res.data;
}

export async function updatePackage(id, data) {
  const res = await api.put(`/api/package/${id}`, data);
  return res.data;
}

export async function deletePackage(id) {
  const res = await api.delete(`/api/package/${id}`);
  return res.data;
}
