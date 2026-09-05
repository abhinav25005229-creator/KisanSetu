import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function LiveQueue() {
  const navigate = useNavigate();

  const { t } = useLanguage();

  const queueData = {
    centre: "Darbhanga Main Centre",
    token: "WHT1024",
    currentToken: "WHT1009",
    farmersAhead: 15,
    estimatedWait: 42,
    status: "Moving Normally",
    lastUpdated: "Just now",
  };

  return (
    <div className="queue-page">

      {/* Header */}
      <div className="queue-header">

        <button
          className="back-button"
          onClick={() => navigate("/farmer/token")}
        >
          ← Back
        </button>

        <div>
          <h1>{t.liveQueueTitle}</h1>
          <p>{queueData.centre}</p>
        </div>

      </div>

      {/* Centre Card */}
      <div className="queue-centre-card">

        <span className="queue-icon">🌾</span>

        <div>
          <h2>{queueData.centre}</h2>
          <p>{t.realTimeQueue}</p>
        </div>

      </div>

      {/* Your Token */}
      <div className="your-token-card">

        <p>{t.yourToken}</p>

        <h2>{queueData.token}</h2>

      </div>

      {/* Current Serving */}
      <div className="current-serving">

        <p>{t.currentlyServing}</p>

        <div className="serving-token">

          <span>🎫</span>

          <strong>{queueData.currentToken}</strong>

        </div>

      </div>

      {/* Queue Stats */}
      <div className="queue-stats">

        <div className="queue-stat">

          <span className="stat-icon">👨‍🌾</span>

          <strong>
            {queueData.farmersAhead}
          </strong>

          <p>{t.farmersAhead}</p>

        </div>

        <div className="queue-stat">

          <span className="stat-icon">⏱️</span>

          <strong>
            {queueData.estimatedWait} min
          </strong>

          <p>{t.estimatedWait}</p>

        </div>

      </div>

      {/* Queue Status */}
      <div className="queue-status-card">

        <div className="status-top">

          <span className="status-dot"></span>

          <div>

            <h3>{t.movingNormally}</h3>

            <p>{t.queueProgressing}</p>

          </div>

        </div>

        <div className="last-updated">

          {t.lastUpdated}: {queueData.lastUpdated}

        </div>

      </div>

      {/* Progress */}
      <div className="queue-progress-card">

        <div className="progress-header">

          <span>{t.yourPosition}</span>

          <strong>
            {queueData.farmersAhead + 1}
          </strong>

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${Math.max(
                10,
                100 - queueData.farmersAhead * 4
              )}%`,
            }}
          ></div>

        </div>

        <p>
          {t.turnEstimate}{" "}
          <strong>
            {queueData.estimatedWait} {t.minutes}
          </strong>
          .
        </p>

      </div>

      {/* Notification */}
      <div className="queue-notification">

        <span>💡</span>

        <p>
          {t.turnNotification}
        </p>

      </div>

      {/* Actions */}
      <button
        className="refresh-button"
        onClick={() => window.location.reload()}
      >
        🔄 {t.refreshQueue}
      </button>

      <button
        className="dashboard-button"
        onClick={() => navigate("/farmer/dashboard")}
      >
        {t.goDashboard}
      </button>

    </div>
  );
}