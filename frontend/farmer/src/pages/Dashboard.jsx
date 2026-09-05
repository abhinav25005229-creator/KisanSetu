import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Dashboard() {
  const navigate = useNavigate();

  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="dashboard">

      {/* Language Button */}
      <button
        className="language-button"
        onClick={toggleLanguage}
      >
        🌐 {t.language}
      </button>

      {/* Header */}
      <header className="farmer-header">

        <div>
          <h1>Namaste, Farmer 👋</h1>

          <p>
            {t.welcome}
          </p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>

      </header>


      <main>

        {/* Welcome Card */}
        <section className="welcome-card">

          <h2>
            {t.goodMorning} 🌾
          </h2>

          <p>
            {t.checkStatus}
          </p>

        </section>


        {/* Quick Cards */}
        <section className="quick-grid">

          {/* MY PRODUCE */}
          <div
            className="quick-card"
            onClick={() =>
              navigate("/farmer/add-produce")
            }
          >
            <span>🌾</span>

            <h3>
              {t.myProduce}
            </h3>

            <p>
              {t.addProduce}
            </p>
          </div>


          {/* CENTRES */}
          <div
            className="quick-card"
            onClick={() =>
              navigate("/farmer/centres")
            }
          >
            <span>📍</span>

            <h3>
              {t.centres}
            </h3>

            <p>
              {t.findCentres}
            </p>
          </div>


          {/* TOKEN */}
          <div
            className="quick-card"
            onClick={() =>
              navigate("/farmer/token")
            }
          >
            <span>🎫</span>

            <h3>
              {t.myToken}
            </h3>

            <p>
              {t.noActiveToken}
            </p>
          </div>


          {/* PAYMENT */}
          <div
            className="quick-card"
            onClick={() =>
              navigate("/farmer/payment")
            }
          >
            <span>💰</span>

            <h3>
              {t.payment}
            </h3>

            <p>
              {t.checkPayment}
            </p>
          </div>


          {/* NOTIFICATIONS */}
          <div
            className="quick-card"
            onClick={() =>
              navigate("/farmer/notifications")
            }
          >
            <span>🔔</span>

            <h3>
              {t.notifications}
            </h3>

            <p>
              Check latest updates
            </p>
          </div>

        </section>

      </main>

    </div>
  );
}