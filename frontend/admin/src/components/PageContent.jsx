import { useEffect, useState } from "react";
import api from "../api";

import CentreMap from "./CentreMap";
import CongestionPanel from "./CongestionPanel";
import ForecastChart from "./ForecastChart";
import AnalyticsPanel from "./AnalyticsPanel";
import CentreDetails from "./CentreDetails";

function PageContent({ activePage }) {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================================
  // FETCH ADMIN DASHBOARD DATA
  // ================================
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        setLoading(true);

        const response = await api.get("/admin/dashboard");

        setDashboardData(response.data);
        setError("");
      } catch (err) {
        console.error("Dashboard API Error:", err);

        setError("Backend unavailable. Showing demo data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  // ================================
  // COMMON LOADING STATE
  // ================================
  if (loading) {
    return (
      <div className="state-message">
        <h2>Loading Dashboard...</h2>
        <p>Fetching procurement data from server.</p>
      </div>
    );
  }

  // ================================
  // PROCUREMENT CENTRES
  // ================================
  if (activePage === "centres") {
    return (
      <div className="page-view">
        <div className="page-title">
          <h2>📍 Procurement Centres</h2>
          <p>
            Monitor all procurement centres and their current status.
          </p>
        </div>

        <CentreDetails />
      </div>
    );
  }

  // ================================
  // CONGESTION
  // ================================
  if (activePage === "congestion") {
    return (
      <div className="page-view">
        <div className="page-title">
          <h2>🚦 Congestion Monitoring</h2>
          <p>
            Identify overloaded centres and queue pressure.
          </p>
        </div>

        <CongestionPanel />
      </div>
    );
  }

  // ================================
  // FORECAST
  // ================================
  if (activePage === "forecast") {
    return (
      <div className="page-view">
        <div className="page-title">
          <h2>📈 Demand Forecast</h2>
          <p>
            AI-powered farmer arrival prediction.
          </p>
        </div>

        <ForecastChart />
      </div>
    );
  }

  // ================================
  // AI RECOMMENDATIONS
  // ================================
  if (activePage === "ai") {
    return (
      <div className="page-view">
        <div className="page-title">
          <h2>🤖 AI Recommendations</h2>
          <p>
            Smart recommendations for reducing centre congestion.
          </p>
        </div>

        <CongestionPanel />
      </div>
    );
  }

  // ================================
  // PROCUREMENT ANALYTICS
  // ================================
  if (activePage === "procurement") {
    return (
      <div className="page-view">
        <div className="page-title">
          <h2>🌾 Procurement Analytics</h2>
          <p>
            Track procurement activity across centres.
          </p>
        </div>

        <AnalyticsPanel />
      </div>
    );
  }

  // ================================
  // PAYMENT ANALYTICS
  // ================================
  if (activePage === "payments") {
    return (
      <div className="page-view">
        <div className="page-title">
          <h2>💰 Payment Analytics</h2>
          <p>
            Monitor procurement payment status.
          </p>
        </div>

        <AnalyticsPanel />
      </div>
    );
  }

  // ================================
  // MAIN DASHBOARD
  // ================================
  return (
    <>
      {/* API ERROR / DEMO FALLBACK */}
      {error && (
        <div className="api-warning">
          ⚠️ {error}
        </div>
      )}

      {/* WELCOME SECTION */}
      <div className="welcome">
        <div>
          <h2>Welcome back, Admin 👋</h2>
          <p>Here's today's procurement overview.</p>
        </div>

        <span className="demo-badge">
          {dashboardData ? "LIVE DATA" : "DEMO DATA"}
        </span>
      </div>

      {/* ================================
          KPI CARDS
          ================================ */}
      <div className="kpi-grid">

        {/* TOTAL CENTRES */}
        <div className="kpi-card">
          <span>🏢</span>
          <p>Total Centres</p>
          <h2>24</h2>
          <small>Across districts</small>
        </div>

        {/* ACTIVE CENTRES */}
        <div className="kpi-card">
          <span>🟢</span>
          <p>Active Centres</p>
          <h2>21</h2>
          <small>87.5% operational</small>
        </div>

        {/* FARMERS TODAY */}
        <div className="kpi-card">
          <span>👨‍🌾</span>
          <p>Farmers Today</p>
          <h2>1,240</h2>
          <small>+12% from yesterday</small>
        </div>

        {/* FARMERS PROCESSED */}
        <div className="kpi-card">
          <span>✅</span>
          <p>Farmers Processed</p>
          <h2>890</h2>
          <small>71.8% completed</small>
        </div>

        {/* FARMERS WAITING */}
        <div className="kpi-card">
          <span>⏳</span>
          <p>Farmers Waiting</p>
          <h2>350</h2>
          <small>Need attention</small>
        </div>

        {/* AVG WAITING TIME */}
        <div className="kpi-card">
          <span>🕐</span>
          <p>Avg Waiting Time</p>
          <h2>42 min</h2>
          <small>Current estimate</small>
        </div>

        {/* AVG PROCESSING */}
        <div className="kpi-card">
          <span>⚙️</span>
          <p>Avg Processing</p>
          <h2>8 min</h2>
          <small>Per farmer</small>
        </div>

        {/* UTILIZATION */}
        <div className="kpi-card">
          <span>📊</span>
          <p>Utilization</p>
          <h2>76%</h2>
          <small>Centre capacity</small>
        </div>

      </div>

      {/* ================================
          CENTRE MAP
          ================================ */}
      <div className="map-section">
        <CentreMap />
      </div>

      {/* ================================
          CONGESTION
          ================================ */}
      <CongestionPanel />

      {/* ================================
          FORECAST
          ================================ */}
      <ForecastChart />

      {/* ================================
          ANALYTICS
          ================================ */}
      <AnalyticsPanel />
    </>
  );
}

export default PageContent;