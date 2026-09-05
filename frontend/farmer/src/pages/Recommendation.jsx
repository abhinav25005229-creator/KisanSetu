import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

// Mock AI recommendation data
// Later this data will come from the AI/Backend API.
const centreData = {
  1: {
    centreName: "Bahadurpur Procurement Centre",
    distance: "2.4 km",
    queue: 18,
    wait: 42,
    load: "Medium",
    slot: "10:00 AM - 11:00 AM",
    date: "Tomorrow",
    recommendation:
      "Moderate queue detected. This centre is suitable, but a lower-wait centre may provide a faster experience.",
  },

  2: {
    centreName: "Darbhanga Main Centre",
    distance: "4.1 km",
    queue: 8,
    wait: 21,
    load: "Low",
    slot: "11:00 AM - 12:00 PM",
    date: "Tomorrow",
    recommendation:
      "Best option. Lowest queue and shortest estimated waiting time.",
  },

  3: {
    centreName: "Benipur Procurement Centre",
    distance: "6.2 km",
    queue: 41,
    wait: 96,
    load: "High",
    slot: "01:00 PM - 02:00 PM",
    date: "Tomorrow",
    recommendation:
      "High congestion detected. Consider a lower-load centre to reduce your waiting time.",
  },
};

export default function Recommendation() {
  const navigate = useNavigate();
  const { centreId } = useParams();

  const { t } = useLanguage();

  // Get recommendation according to selected centre
  const recommendation = centreData[centreId] || centreData[2];

  // Translate centre load
  const loadText =
    recommendation.load === "Low"
      ? t.low
      : recommendation.load === "Medium"
      ? t.medium
      : t.high;

  // Load icon
  const loadIcon =
    recommendation.load === "Low"
      ? "🟢"
      : recommendation.load === "Medium"
      ? "🟡"
      : "🔴";

  return (
    <div className="page-container">

      {/* ================= HEADER ================= */}
      <div className="page-header">

        <button
          className="back-button"
          onClick={() => navigate("/farmer/centres")}
        >
          ← Back
        </button>

        <h1>
          🤖 {t.recommendationTitle}
        </h1>

        <p>
          {t.recommendedForYou}
        </p>

      </div>

      {/* ================= AI CARD ================= */}
      <div className="recommendation-card">

        {/* AI Header */}
        <div className="recommendation-header">

          <div className="ai-icon">
            🤖
          </div>

          <div>
            <h2>
              {t.recommendedForYou}
            </h2>

            <p>
              AI analysis based on queue,
              waiting time and centre load
            </p>
          </div>

        </div>

        {/* ================= CENTRE NAME ================= */}
        <div className="recommended-centre">

          <h2>
            {recommendation.centreName}
          </h2>

          <span>
            📍 {recommendation.distance}
          </span>

        </div>

        {/* ================= STATS ================= */}
        <div className="recommendation-stats">

          {/* Queue */}
          <div className="recommendation-stat">

            <span className="stat-icon">
              👥
            </span>

            <strong>
              {recommendation.queue}
            </strong>

            <small>
              {t.currentQueue}
            </small>

          </div>

          {/* Waiting Time */}
          <div className="recommendation-stat">

            <span className="stat-icon">
              ⏱️
            </span>

            <strong>
              {recommendation.wait} min
            </strong>

            <small>
              {t.estimatedWait}
            </small>

          </div>

          {/* Centre Load */}
          <div className="recommendation-stat">

            <span className="stat-icon">
              {loadIcon}
            </span>

            <strong>
              {loadText}
            </strong>

            <small>
              {t.centreLoad}
            </small>

          </div>

        </div>

        {/* ================= RECOMMENDED SLOT ================= */}
        <div className="recommended-slot">

          <h3>
            🕐 {t.recommendedSlot}
          </h3>

          <div className="slot-highlight">

            <strong>
              {recommendation.slot}
            </strong>

            <span>
              📅 {recommendation.date}
            </span>

          </div>

        </div>

        {/* ================= AI INSIGHT ================= */}
        <div className="ai-insight">

          <div className="insight-title">
            🤖 AI Insight
          </div>

          <p>
            {recommendation.recommendation}
          </p>

        </div>

        {/* ================= ACTION ================= */}
        <button
          className="primary-button"
          onClick={() =>
            navigate(
              `/farmer/slot-booking/${centreId}`
            )
          }
        >
          {t.chooseSlot} →
        </button>

      </div>

    </div>
  );
}