// ==========================================
// KisanSetu Farmer Mock Data
// ==========================================

// ------------------------------------------
// Nearby Procurement Centres
// ------------------------------------------

export const mockCentres = [
  {
    id: 1,
    name: "Bahadurpur Procurement Centre",
    distance: "2.4 km",
    queue: 18,
    wait: 42,
    load: "Medium",
  },
  {
    id: 2,
    name: "Darbhanga Main Centre",
    distance: "4.1 km",
    queue: 8,
    wait: 21,
    load: "Low",
  },
  {
    id: 3,
    name: "Benipur Procurement Centre",
    distance: "6.2 km",
    queue: 41,
    wait: 96,
    load: "High",
  },
];


// ------------------------------------------
// AI Recommendation
// ------------------------------------------

export const mockRecommendation = {
  centreName: "Darbhanga Main Centre",
  distance: "4.1 km",
  queue: 8,
  wait: 21,
  load: "Low",
  slot: "11:00 AM - 12:00 PM",
  date: "Tomorrow",
};


// ------------------------------------------
// Available Slots
// ------------------------------------------

export const mockSlots = [
  {
    id: 1,
    time: "09:00 AM - 10:00 AM",
    available: 12,
  },
  {
    id: 2,
    time: "10:00 AM - 11:00 AM",
    available: 8,
  },
  {
    id: 3,
    time: "11:00 AM - 12:00 PM",
    available: 18,
  },
  {
    id: 4,
    time: "12:00 PM - 01:00 PM",
    available: 5,
  },
];


// ------------------------------------------
// Digital Token
// ------------------------------------------

export const mockToken = {
  token: "WHT1024",
  centre: "Darbhanga Main Centre",
  date: "Tomorrow",
  slot: "11:00 AM - 12:00 PM",
  queuePosition: 16,
  farmersAhead: 15,
  estimatedWait: 42,
  status: "Confirmed",
};


// ------------------------------------------
// Live Queue
// ------------------------------------------

export const mockQueue = {
  centre: "Darbhanga Main Centre",
  token: "WHT1024",
  currentToken: "WHT1009",
  farmersAhead: 15,
  estimatedWait: 42,
  status: "Moving Normally",
  lastUpdated: "Just now",
};


// ------------------------------------------
// Procurement
// ------------------------------------------

export const mockProcurement = {
  token: "WHT1024",
  centre: "Darbhanga Main Centre",
  produce: "Wheat",
  quantity: "500 KG",
  currentStage: "Quality Check",
};


// ------------------------------------------
// Payment
// ------------------------------------------

export const mockPayment = {
  token: "WHT1024",
  centre: "Darbhanga Main Centre",
  produce: "Wheat",
  quantity: "500 KG",
  rate: "₹23.50 / KG",
  amount: "₹11,750",
  status: "Processing",
  transactionId: "KSN20260905001",
  expectedDate: "Within 2 working days",
};