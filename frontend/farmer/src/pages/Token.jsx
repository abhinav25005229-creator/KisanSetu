import { useNavigate } from "react-router-dom";

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

  return (
    <div className="page-container">

      <div className="page-header">
        <h1>Booking Confirmed 🎉</h1>
        <p>Aapka procurement slot successfully book ho gaya hai.</p>
      </div>

      <div className="token-card">

        <div className="token-icon">
          🎫
        </div>

        <p className="token-label">
          Your Digital Token
        </p>

        <h2 className="token-number">
          {tokenData.token}
        </h2>

        <div className="token-status">
          ✓ {tokenData.status}
        </div>

        <div className="token-details">

          <div className="token-detail">
            <span>📍 Centre</span>
            <strong>{tokenData.centre}</strong>
          </div>

          <div className="token-detail">
            <span>📅 Date</span>
            <strong>{tokenData.date}</strong>
          </div>

          <div className="token-detail">
            <span>🕚 Slot</span>
            <strong>{tokenData.slot}</strong>
          </div>

        </div>

        <div className="queue-summary">

          <div>
            <strong>{tokenData.queuePosition}</strong>
            <span>Queue Position</span>
          </div>

          <div>
            <strong>{tokenData.farmersAhead}</strong>
            <span>Farmers Ahead</span>
          </div>

          <div>
            <strong>{tokenData.estimatedWait} min</strong>
            <span>Estimated Wait</span>
          </div>

        </div>

        <div className="token-note">
          💡 Aapko queue update aur turn approaching ki
          notification milti rahegi.
        </div>

        <button
          className="primary-button"
          onClick={() => navigate("/farmer/live-queue")}
        >
          View Live Queue →
        </button>

        <button
          className="secondary-button"
          onClick={() => navigate("/farmer/dashboard")}
        >
          Go to Dashboard
        </button>

      </div>

    </div>
  );
}