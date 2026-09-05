import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function LiveQueue() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const savedBooking = localStorage.getItem("farmerBooking");

    if (savedBooking) {
      try {
        setBooking(JSON.parse(savedBooking));
      } catch (error) {
        console.error("Failed to load booking:", error);
      }
    }
  }, []);

  // No booking found
  if (!booking) {
    return (
      <div className="queue-page">

        <div className="queue-header">
          <button
            className="back-button"
            onClick={() => navigate("/farmer/centres")}
          >
            ← Back
          </button>

          <div>
            <h1>{t.liveQueueTitle}</h1>
            <p>No active booking</p>
          </div>
        </div>

        <div className="queue-centre-card">

          <span className="queue-icon">⚠️</span>

          <div>
            <h2>No Active Queue</h2>
            <p>
              Please book a procurement slot first.
            </p>
          </div>

        </div>

        <button
          className="dashboard-button"
          onClick={() => navigate("/farmer/centres")}
        >
          Find Procurement Centre →
        </button>

      </div>
    );
  }

  /*
   * Temporary prototype queue data.
   * Later this will come from:
   * GET /queue/{token}
   */

  const queuePosition =
    booking.queuePosition ||
    Math.max(2, booking.centreQueue || 8);

  const farmersAhead =
    booking.farmersAhead ||
    Math.max(1, queuePosition - 1);

  const estimatedWait =
    booking.estimatedWait ?? 21;

  const token =
    booking.token ||
    `KSN${String(booking.slotId).padStart(2, "0")}24`;

  /*
   * Temporary currently-serving token.
   * Backend will provide the real token later.
   */
  const currentToken =
    booking.currentToken ||
    `KSN${Math.max(
      1,
      Number(String(token).replace(/\D/g, "")) - 1
    )}`;

  const queueStatus =
    booking.centreLoad === "High"
      ? "High Congestion"
      : booking.centreLoad === "Medium"
      ? "Moderate Queue"
      : "Moving Normally";

  const queueStatusDescription =
    booking.centreLoad === "High"
      ? "Queue is currently congested. Waiting time may increase."
      : booking.centreLoad === "Medium"
      ? "Queue is moving, but moderate waiting time is expected."
      : "Queue is progressing normally.";

  const progressWidth = Math.max(
    10,
    Math.min(
      95,
      100 - farmersAhead * 4
    )
  );

  return (
    <div className="queue-page">

      {/* ================= HEADER ================= */}

      <div className="queue-header">

        <button
          className="back-button"
          onClick={() =>
            navigate("/farmer/token")
          }
        >
          ← Back
        </button>

        <div>

          <h1>
            {t.liveQueueTitle}
          </h1>

          <p>
            {booking.centreName}
          </p>

        </div>

      </div>

      {/* ================= CENTRE CARD ================= */}

      <div className="queue-centre-card">

        <span className="queue-icon">
          🌾
        </span>

        <div>

          <h2>
            {booking.centreName}
          </h2>

          <p>
            {t.realTimeQueue}
          </p>

        </div>

      </div>

      {/* ================= YOUR TOKEN ================= */}

      <div className="your-token-card">

        <p>
          {t.yourToken}
        </p>

        <h2>
          {token}
        </h2>

      </div>

      {/* ================= CURRENTLY SERVING ================= */}

      <div className="current-serving">

        <p>
          {t.currentlyServing}
        </p>

        <div className="serving-token">

          <span>
            🎫
          </span>

          <strong>
            {currentToken}
          </strong>

        </div>

      </div>

      {/* ================= QUEUE STATS ================= */}

      <div className="queue-stats">

        <div className="queue-stat">

          <span className="stat-icon">
            👨‍🌾
          </span>

          <strong>
            {farmersAhead}
          </strong>

          <p>
            {t.farmersAhead}
          </p>

        </div>

        <div className="queue-stat">

          <span className="stat-icon">
            ⏱️
          </span>

          <strong>
            {estimatedWait} min
          </strong>

          <p>
            {t.estimatedWait}
          </p>

        </div>

      </div>

      {/* ================= QUEUE STATUS ================= */}

      <div className="queue-status-card">

        <div className="status-top">

          <span className="status-dot"></span>

          <div>

            <h3>
              {queueStatus}
            </h3>

            <p>
              {queueStatusDescription}
            </p>

          </div>

        </div>

        <div className="last-updated">

          {t.lastUpdated}: Just now

        </div>

      </div>

      {/* ================= PROGRESS ================= */}

      <div className="queue-progress-card">

        <div className="progress-header">

          <span>
            {t.yourPosition}
          </span>

          <strong>
            {queuePosition}
          </strong>

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${progressWidth}%`,
            }}
          ></div>

        </div>

        <p>

          {t.turnEstimate}{" "}

          <strong>
            {estimatedWait} {t.minutes}
          </strong>

          .

        </p>

      </div>

      {/* ================= NOTIFICATION ================= */}

      <div className="queue-notification">

        <span>
          💡
        </span>

        <p>
          {t.turnNotification}
        </p>

      </div>

      {/* ================= REFRESH ================= */}

      <button
        className="refresh-button"
        onClick={() => {
          window.location.reload();
        }}
      >
        🔄 {t.refreshQueue}
      </button>

      {/* ================= DASHBOARD ================= */}

      <button
        className="dashboard-button"
        onClick={() =>
          navigate("/farmer/dashboard")
        }
      >
        {t.goDashboard}
      </button>

    </div>
  );
}