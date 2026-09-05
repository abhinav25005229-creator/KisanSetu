import { useNavigate, useParams } from "react-router-dom";

const recommendation = {
  centreName: "Darbhanga Main Centre",
  distance: "4.1 km",
  queue: 8,
  wait: 21,
  load: "Low",
  slot: "11:00 AM - 12:00 PM",
  date: "Tomorrow",
};

export default function Recommendation() {
  const navigate = useNavigate();
  const { centreId } = useParams();

  return (
    <div className="page-container">

      <div className="page-header">

        <button
          className="back-button"
          onClick={() => navigate("/farmer/centres")}
        >
          ← Back
        </button>

        <h1>AI Recommendation 🤖</h1>

        <p>
          Aapke liye suitable centre aur slot
        </p>

      </div>

      <div className="recommendation-card">

        <div className="recommendation-badge">
          ⭐ Recommended for You
        </div>

        <h2>
          {recommendation.centreName}
        </h2>

        <p className="recommendation-distance">
          📍 {recommendation.distance}
        </p>

        <div className="recommendation-stats">

          <div>
            <strong>👥 {recommendation.queue}</strong>
            <span>Queue</span>
          </div>

          <div>
            <strong>⏱️ {recommendation.wait} min</strong>
            <span>Expected Wait</span>
          </div>

          <div>
            <strong>🟢 {recommendation.load}</strong>
            <span>Centre Load</span>
          </div>

        </div>

        <div className="recommended-slot">

          <span>🕚 Recommended Slot</span>

          <strong>
            {recommendation.slot}
          </strong>

          <small>
            {recommendation.date}
          </small>

        </div>

        <button
          className="primary-button"
          onClick={() =>
            navigate(`/farmer/slot-booking/${centreId}`)
          }
        >
          Choose This Slot →
        </button>

      </div>

    </div>
  );
}
