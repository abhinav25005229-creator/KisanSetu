import { useState } from "react";
import "./index.css";
import PageContent from "./components/PageContent";
import Login from "./pages/Login";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Government filters
  const [district, setDistrict] = useState("All Districts");

  // Demo date
  const [selectedDate, setSelectedDate] = useState("2026-09-08");

  // ================================
  // LOGIN
  // ================================

  if (!isLoggedIn) {
    return (
      <Login
        onLogin={() => {
          setIsLoggedIn(true);
          setActivePage("dashboard");
        }}
      />
    );
  }

  // ================================
  // NAVIGATION
  // ================================

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  // ================================
  // LOGOUT
  // ================================

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActivePage("dashboard");
    setDistrict("All Districts");
    setSelectedDate("2026-09-08");
  };

  return (
    <div className="app">

      {/* =================================
          SIDEBAR
          ================================= */}

      <aside className="sidebar">

        {/* Logo */}

        <div className="logo">
          🌾 <span>KisanSetu</span>
        </div>

        <div className="admin-title">
          Government Admin
        </div>

        {/* =================================
            NAVIGATION
            ================================= */}

        <nav>

          {/* Dashboard */}

          <button
            className={`nav-item ${
              activePage === "dashboard" ? "active" : ""
            }`}
            onClick={() => handleNavigation("dashboard")}
          >
            📊 Dashboard
          </button>

          {/* Procurement Centres */}

          <button
            className={`nav-item ${
              activePage === "centres" ? "active" : ""
            }`}
            onClick={() => handleNavigation("centres")}
          >
            📍 Procurement Centres
          </button>

          {/* Congestion */}

          <button
            className={`nav-item ${
              activePage === "congestion" ? "active" : ""
            }`}
            onClick={() => handleNavigation("congestion")}
          >
            🚦 Congestion
          </button>

          {/* Forecast */}

          <button
            className={`nav-item ${
              activePage === "forecast" ? "active" : ""
            }`}
            onClick={() => handleNavigation("forecast")}
          >
            📈 Forecast
          </button>

          {/* AI Recommendations */}

          <button
            className={`nav-item ${
              activePage === "ai" ? "active" : ""
            }`}
            onClick={() => handleNavigation("ai")}
          >
            🤖 AI Recommendations
          </button>

          {/* Procurement Analytics */}

          <button
            className={`nav-item ${
              activePage === "procurement" ? "active" : ""
            }`}
            onClick={() => handleNavigation("procurement")}
          >
            🌾 Procurement Analytics
          </button>

          {/* Payment Analytics */}

          <button
            className={`nav-item ${
              activePage === "payments" ? "active" : ""
            }`}
            onClick={() => handleNavigation("payments")}
          >
            💰 Payment Analytics
          </button>

          {/* Voice Access */}

          <button
            className={`nav-item ${
              activePage === "voice" ? "active" : ""
            }`}
            onClick={() => handleNavigation("voice")}
          >
            📞 Voice Access
          </button>

        </nav>

        {/* =================================
            SIDEBAR BOTTOM
            ================================= */}

        <div className="sidebar-bottom">

          {/* Settings */}

          <button
            className="nav-item"
            onClick={() =>
              alert(
                "Settings module will be available in the next version."
              )
            }
          >
            ⚙️ Settings
          </button>

          {/* Logout */}

          <button
            className="nav-item logout"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>

        </div>

      </aside>

      {/* =================================
          MAIN CONTENT
          ================================= */}

      <main className="main-content">

        {/* =================================
            HEADER
            ================================= */}

        <header className="header">

          {/* Header Left */}

          <div>

            <h1>
              Government Dashboard
            </h1>

            <p>
              Monitor agricultural procurement
              across centres
            </p>

            {/* =================================
                FILTERS
                ================================= */}

            <div className="header-filters">

              {/* District */}

              <select
                value={district}
                onChange={(e) =>
                  setDistrict(e.target.value)
                }
              >
                <option value="All Districts">
                  All Districts
                </option>

                <option value="Darbhanga">
                  Darbhanga
                </option>

                <option value="Bahadurpur">
                  Bahadurpur
                </option>

                <option value="Benipur">
                  Benipur
                </option>
              </select>

              {/* Date */}

              <input
                type="date"
                value={selectedDate}
                onChange={(e) =>
                  setSelectedDate(e.target.value)
                }
              />

            </div>

          </div>

          {/* =================================
              ADMIN PROFILE
              ================================= */}

          <div className="admin-profile">

            <div className="notification">
              🔔
            </div>

            <div className="avatar">
              A
            </div>

            <div>

              <strong>
                Admin
              </strong>

              <small>
                Government Authority
              </small>

            </div>

          </div>

        </header>

        {/* =================================
            DASHBOARD CONTENT
            ================================= */}

        <section className="dashboard">

          <PageContent
            activePage={activePage}
            district={district}
            selectedDate={selectedDate}
          />

        </section>

      </main>

    </div>
  );
}

export default App;