import axios from "axios";

// Backend URL
// Abhi FastAPI backend ready nahi hai.
// Backend ready hone ke baad sirf ye URL change karna hoga.
const API_BASE_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ================================
// AUTH APIs
// ================================

export const loginFarmer = (data) => {
  return api.post("/auth/login", data);
};

export const registerFarmer = (data) => {
  return api.post("/auth/register", data);
};


// ================================
// CENTRE APIs
// ================================

export const getNearbyCentres = (params) => {
  return api.get("/centres/nearby", {
    params,
  });
};

export const getCentreSlots = (centreId) => {
  return api.get(`/centres/${centreId}/slots`);
};


// ================================
// BOOKING APIs
// ================================

export const createBooking = (data) => {
  return api.post("/bookings", data);
};

export const getBooking = (bookingId) => {
  return api.get(`/bookings/${bookingId}`);
};


// ================================
// QUEUE API
// ================================

export const getQueue = (token) => {
  return api.get(`/queue/${token}`);
};


// ================================
// PROCUREMENT API
// ================================

export const getProcurement = (procurementId) => {
  return api.get(`/procurement/${procurementId}`);
};


// ================================
// PAYMENT API
// ================================

export const getPayment = (paymentId) => {
  return api.get(`/payments/${paymentId}`);
};


// ================================
// AI APIs
// ================================

export const getWaitTime = (data) => {
  return api.get("/ai/wait-time", {
    params: data,
  });
};

export const getRecommendedSlot = (data) => {
  return api.get("/ai/recommend-slot", {
    params: data,
  });
};

export default api;