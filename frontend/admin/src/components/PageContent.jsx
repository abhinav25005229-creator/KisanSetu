import { useEffect, useState } from "react";
import api from "../api";
import VoiceAccess from "../pages/VoiceAccess";
import CentreMap from "./CentreMap";
import CongestionPanel from "./CongestionPanel";
import ForecastChart from "./ForecastChart";
import AnalyticsPanel from "./AnalyticsPanel";
import CentreDetails from "./CentreDetails";

function PageContent({
  activePage,
  district = "All Districts",
  selectedDate = "",
}) {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==========================================
  // DEMO DATA
  // ==========================================

  const demoData = {
    totalCentres: 24,
    activeCentres: 21,
    farmersToday: 1240,
    farmersProcessed: 890,
    farmersWaiting: 350,
    averageWaitingTime: 42,
    averageProcessingTime: 8,
    utilization: 76,
  };

  // ==========================================
  // FETCH ADMIN DASHBOARD DATA
  // ==========================================

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        setLoading(true);

        const response = await api.get("/admin/dashboard");

        if (response?.data) {
          setDashboardData(response.data);
          setError("");
        } else {
          setDashboardData(null);
          setError(
            "No dashboard data received. Showing demo data."
          );
        }
      } catch (err) {
        console.error("Dashboard API Error:", err);

        setDashboardData(null);

        setError(
          "Backend unavailable. Showing demo data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  // ==========================================
  // VOICE ACCESS
  // ==========================================

  if (activePage === "voice") {
    return <VoiceAccess />;
  }

  // ==========================================
  // LOADING STATE
  // ==========================================

  if (loading) {
    return (
      <div className="state-message">
        <div style={{ fontSize: "40px" }}>
          ⏳
        </div>

        <h2>
          Loading Dashboard...
        </h2>

        <p>
          Fetching procurement data from server.
        </p>
      </div>
    );
  }

  // ==========================================
  // DATA SOURCE
  // ==========================================

  const data = dashboardData || demoData;

  // ==========================================
  // PROCUREMENT CENTRES
  // ==========================================

  if (activePage === "centres") {
    return (
      <div className="page-view">
        <div className="page-title">
          <h2>
            📍 Procurement Centres
          </h2>

          <p>
            Monitor all procurement centres
            and their current status.
          </p>
        </div>

        <CentreDetails />
      </div>
    );
  }

  // ==========================================
  // CONGESTION
  // ==========================================

  if (activePage === "congestion") {
    return (
      <div className="page-view">
        <div className="page-title">
          <h2>
            🚦 Congestion Monitoring
          </h2>

          <p>
            Identify overloaded centres
            and queue pressure.
          </p>
        </div>

        <CongestionPanel />
      </div>
    );
  }

  // ==========================================
  // FORECAST
  // ==========================================

  if (activePage === "forecast") {
    return (
      <div className="page-view">
        <div className="page-title">
          <h2>
            📈 Demand Forecast
          </h2>

          <p>
            AI-powered farmer arrival
            prediction.
          </p>
        </div>

        <ForecastChart />
      </div>
    );
  }

  // ==========================================
  // AI RECOMMENDATIONS
  // ==========================================

  if (activePage === "ai") {
    return (
      <div className="page-view">
        <div className="page-title">
          <h2>
            🤖 AI Recommendations
          </h2>

          <p>
            Smart recommendations for
            reducing centre congestion.
          </p>
        </div>

        {/* AI Decision Support */}

        <div className="ai-recommendation-card">
          <div className="ai-card-header">
            <div>
              <h2>
                🤖 AI Decision Support
              </h2>

              <p>
                Predictive insights based on
                queue pressure and centre load.
              </p>
            </div>

            <span className="demo-badge">
              PROTOTYPE
            </span>
          </div>

          <div className="ai-alert high">
            <div className="ai-alert-icon">
              ⚠️
            </div>

            <div>
              <h3>
                High Congestion Risk
              </h3>

              <p>
                Benipur Procurement Centre
                is experiencing high queue
                pressure.
              </p>

              <strong>
                Current queue: 41 farmers
                · Estimated wait: 96 min
              </strong>
            </div>
          </div>

          <div className="ai-action-box">
            <h3>
              Recommended Actions
            </h3>

            <ul>
              <li>
                ➜ Activate an additional
                procurement counter.
              </li>

              <li>
                ➜ Redirect new bookings
                towards lower-load centres.
              </li>

              <li>
                ➜ Notify affected farmers
                about expected waiting time.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // PROCUREMENT ANALYTICS
  // ==========================================

  if (activePage === "procurement") {
    return (
      <div className="page-view">
        <div className="page-title">
          <h2>
            🌾 Procurement Analytics
          </h2>

          <p>
            Track procurement activity
            across centres.
          </p>
        </div>

        <AnalyticsPanel />
      </div>
    );
  }

  // ==========================================
  // PAYMENT ANALYTICS
  // ==========================================

  if (activePage === "payments") {
    return (
      <div className="page-view">
        <div className="page-title">
          <h2>
            💰 Payment Analytics
          </h2>

          <p>
            Monitor procurement payment
            status.
          </p>
        </div>

        <AnalyticsPanel />
      </div>
    );
  }

  // ==========================================
  // MAIN DASHBOARD
  // ==========================================

  return (
    <>
      {/* =====================================
          API STATUS
          ===================================== */}

      {error && (
        <div className="api-warning">
          ⚠️ {error}
        </div>
      )}

      {/* =====================================
          WELCOME
          ===================================== */}

      <div className="welcome">
        <div>
          <h2>
            Welcome back, Admin 👋
          </h2>

          <p>
            Here's today's procurement
            overview.
          </p>

          {(district !== "All Districts" ||
            selectedDate) && (
            <small>
              Showing data for{" "}
              <strong>
                {district}
              </strong>

              {selectedDate && (
                <>
                  {" "}
                  · {selectedDate}
                </>
              )}
            </small>
          )}
        </div>

        <span className="demo-badge">
          {dashboardData
            ? "LIVE DATA"
            : "DEMO DATA"}
        </span>
      </div>

      {/* =====================================
          KPI CARDS
          ===================================== */}

      <div className="kpi-grid">

        {/* TOTAL CENTRES */}

        <div className="kpi-card">
          <span>
            🏢
          </span>

          <p>
            Total Centres
          </p>

          <h2>
            {data.totalCentres}
          </h2>

          <small>
            Across districts
          </small>
        </div>

        {/* ACTIVE CENTRES */}

        <div className="kpi-card">
          <span>
            🟢
          </span>

          <p>
            Active Centres
          </p>

          <h2>
            {data.activeCentres}
          </h2>

          <small>
            {Math.round(
              (data.activeCentres /
                data.totalCentres) *
                100
            )}
            % operational
          </small>
        </div>

        {/* FARMERS TODAY */}

        <div className="kpi-card">
          <span>
            👨‍🌾
          </span>

          <p>
            Farmers Today
          </p>

          <h2>
            {data.farmersToday.toLocaleString()}
          </h2>

          <small>
            +12% from yesterday
          </small>
        </div>

        {/* FARMERS PROCESSED */}

        <div className="kpi-card">
          <span>
            ✅
          </span>

          <p>
            Farmers Processed
          </p>

          <h2>
            {data.farmersProcessed.toLocaleString()}
          </h2>

          <small>
            {Math.round(
              (data.farmersProcessed /
                data.farmersToday) *
                100
            )}
            % completed
          </small>
        </div>

        {/* FARMERS WAITING */}

        <div className="kpi-card">
          <span>
            ⏳
          </span>

          <p>
            Farmers Waiting
          </p>

          <h2>
            {data.farmersWaiting}
          </h2>

          <small>
            Need attention
          </small>
        </div>

        {/* AVG WAITING TIME */}

        <div className="kpi-card">
          <span>
            🕐
          </span>

          <p>
            Avg Waiting Time
          </p>

          <h2>
            {data.averageWaitingTime} min
          </h2>

          <small>
            Current estimate
          </small>
        </div>

        {/* AVG PROCESSING */}

        <div className="kpi-card">
          <span>
            ⚙️
          </span>

          <p>
            Avg Processing
          </p>

          <h2>
            {data.averageProcessingTime} min
          </h2>

          <small>
            Per farmer
          </small>
        </div>

        {/* UTILIZATION */}

        <div className="kpi-card">
          <span>
            📊
          </span>

          <p>
            Utilization
          </p>

          <h2>
            {data.utilization}%
          </h2>

          <small>
            Centre capacity
          </small>
        </div>

      </div>

      {/* =====================================
          CENTRE NETWORK
          ===================================== */}

      <div className="map-section">
        <CentreMap />
      </div>

      {/* =====================================
          CONGESTION
          ===================================== */}

      <CongestionPanel />

      {/* =====================================
          FORECAST
          ===================================== */}

      <ForecastChart />

      {/* =====================================
          ANALYTICS
          ===================================== */}

      <AnalyticsPanel />
    </>
  );
}

export default PageContent;