
import { useState } from "react";
import "./index.css";
import PageContent from "./components/PageContent";
import Login from "./pages/Login";



function App() {


    const [activePage, setActivePage] = useState("dashboard");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
const [district, setDistrict] = useState("All Districts");
const [selectedDate, setSelectedDate] = useState("2026-09-04");

if (!isLoggedIn) {
  return <Login onLogin={() => setIsLoggedIn(true)} />;
}

return (
  <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">
          🌾 <span>KisanSetu</span>
        </div>

        <div className="admin-title">Government Admin</div>

       <nav>
  <button
    className={`nav-item ${
      activePage === "dashboard" ? "active" : ""
    }`}
    onClick={() => setActivePage("dashboard")}
  >
    📊 Dashboard
  </button>

  <button
    className={`nav-item ${
      activePage === "centres" ? "active" : ""
    }`}
    onClick={() => setActivePage("centres")}
  >
    📍 Procurement Centres
  </button>

  <button
    className={`nav-item ${
      activePage === "congestion" ? "active" : ""
    }`}
    onClick={() => setActivePage("congestion")}
  >
    🚦 Congestion
  </button>

  <button
    className={`nav-item ${
      activePage === "forecast" ? "active" : ""
    }`}
    onClick={() => setActivePage("forecast")}
  >
    📈 Forecast
  </button>

  <button
    className={`nav-item ${
      activePage === "ai" ? "active" : ""
    }`}
    onClick={() => setActivePage("ai")}
  >
    🤖 AI Recommendations
  </button>

  <button
    className={`nav-item ${
      activePage === "procurement" ? "active" : ""
    }`}
    onClick={() => setActivePage("procurement")}
  >
    🌾 Procurement Analytics
  </button>

  <button
    className={`nav-item ${
      activePage === "payments" ? "active" : ""
    }`}
    onClick={() => setActivePage("payments")}
  >
    💰 Payment Analytics
  </button>
</nav>

        <div className="sidebar-bottom">
          <button className="nav-item">⚙️ Settings</button>
         <button
  className="nav-item logout"
  onClick={() => setIsLoggedIn(false)}
>
  🚪 Logout
</button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main-content">

        {/* HEADER */}
        <header className="header">
          <div>
            <h1>Government Dashboard</h1>
            <p>Monitor agricultural procurement across centres</p>
            <div className="header-filters">

  <select
    value={district}
    onChange={(e) => setDistrict(e.target.value)}
  >
    <option>All Districts</option>
    <option>GHAZIABAD</option>
    <option>HAPUR</option>
    <option>BULANDSHAHR</option>
    <option>Muzaffarnagar</option>
  </select>

  <input
    type="date"
    value={selectedDate}
    onChange={(e) => setSelectedDate(e.target.value)}
  />

</div>
          </div>

          <div className="admin-profile">
            <div className="notification">🔔</div>

            <div className="avatar">
              A
            </div>

            <div>
              <strong>Admin</strong>
              <small>Government Authority</small>
            </div>
          </div>
        </header>

       {/* DASHBOARD */}
<section className="dashboard">
  <PageContent activePage={activePage} />
</section>
      </main>

    </div>
  );
}

export default App;