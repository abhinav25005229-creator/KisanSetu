import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <header className="farmer-header">

        <div>
          <h1>Namaste, Farmer 👋</h1>
          <p>KisanSetu mein aapka swagat hai</p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>

      </header>

      <main>

        <section className="welcome-card">
          <h2>Good Morning 🌾</h2>

          <p>
            Check your procurement status and queue.
          </p>
        </section>

        <section className="quick-grid">

          {/* MY PRODUCE */}
          <div
            className="quick-card"
            onClick={() => navigate("/farmer/add-produce")}
          >
            <span>🌾</span>

            <h3>My Produce</h3>

            <p>
              Add your produce
            </p>
          </div>


          {/* CENTRES */}
          <div className="quick-card">
            <span>📍</span>

            <h3>Centres</h3>

            <p>
              Find nearby centres
            </p>
          </div>


          {/* TOKEN */}
          <div className="quick-card">
            <span>🎫</span>

            <h3>My Token</h3>

            <p>
              No active token
            </p>
          </div>


          {/* PAYMENT */}
          <div className="quick-card">
            <span>💰</span>

            <h3>Payment</h3>

            <p>
              Check payment
            </p>
          </div>

        </section>

      </main>

    </div>
  );
}