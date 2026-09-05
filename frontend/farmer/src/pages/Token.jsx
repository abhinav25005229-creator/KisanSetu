import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const tokenData = {
  token: "WHT1024",
  centre: "Darbhanga Main Centre",
  date: "Tomorrow",
  slot: "11:00 AM - 12:00 PM",
  queuePosition: 16,
  farmersAhead: 15,
  estimatedWait: 42,
  status: "Confirmed",
};

export default function Token() {
  const navigate = useNavigate();

  const { t } = useLanguage();

  return (
    <div className="page-container">

      <div className="page-header">
        <h1>{t.tokenTitle} 🎉</h1>

        <p>{t.tokenSubtitle}</p>
      </div>

      <div className="token-card">

        <div className="token-icon">
          🎫
        </div>

        <p className="token-label">
          {t.digitalToken}
        </p>

        <h2 className="token-number">
          {tokenData.token}
        </h2>

        <div className="token-status">
          ✓ {t.confirmed}
        </div>

        <div className="token-details">

          <div className="token-detail">
            <span>📍 {t.centre}</span>
            <strong>{tokenData.centre}</strong>
          </div>

          <div className="token-detail">
            <span>📅 {t.date}</span>
            <strong>{tokenData.date}</strong>
          </div>

          <div className="token-detail">
            <span>🕚 {t.slot}</span>
            <strong>{tokenData.slot}</strong>
          </div>

        </div>

        <div className="queue-summary">

          <div>
            <strong>{tokenData.queuePosition}</strong>
            <span>{t.queuePosition}</span>
          </div>

          <div>
            <strong>{tokenData.farmersAhead}</strong>
            <span>{t.farmersAhead}</span>
          </div>

          <div>
            <strong>{tokenData.estimatedWait} min</strong>
            <span>{t.estimatedWait}</span>
          </div>

        </div>

        <div className="token-note">
          💡 {t.queueUpdateNote}
        </div>

        <button
          className="primary-button"
          onClick={() => navigate("/farmer/live-queue")}
        >
          {t.viewLiveQueue} →
        </button>

        <button
          className="secondary-button"
          onClick={() => navigate("/farmer/dashboard")}
        >
          {t.goDashboard}
        </button>

      </div>

    </div>
  );
}