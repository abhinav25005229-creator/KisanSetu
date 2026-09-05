export default function Dashboard() {
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

          <div className="quick-card">
            <span>🌾</span>
            <h3>My Produce</h3>
            <p>Add your produce</p>
          </div>

          <div className="quick-card">
            <span>📍</span>
            <h3>Centres</h3>
            <p>Find nearby centres</p>
          </div>

          <div className="quick-card">
            <span>🎫</span>
            <h3>My Token</h3>
            <p>No active token</p>
          </div>

          <div className="quick-card">
            <span>💰</span>
            <h3>Payment</h3>
            <p>Check payment</p>
          </div>

        </section>

      </main>
    </div>
  );
}