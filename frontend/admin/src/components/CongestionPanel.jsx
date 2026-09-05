const congestionData = [
  {
    name: "Centre A",
    district: "Darbhanga",
    load: 94,
    queue: 137,
    wait: 150,
    status: "Critical",
  },
  {
    name: "Centre C",
    district: "Madhubani",
    load: 68,
    queue: 78,
    wait: 82,
    status: "Moderate",
  },
  {
    name: "Centre B",
    district: "Darbhanga",
    load: 35,
    queue: 35,
    wait: 35,
    status: "Normal",
  },
];
import { useState } from "react";
function CongestionPanel() {
    const [applied, setApplied] = useState(false);
  return (
    <section className="intelligence-grid">

      {/* CONGESTION */}
      <div className="panel-card">
        <div className="panel-header">
          <div>
            <h2>🚦 Congestion Monitoring</h2>
            <p>Identify overloaded procurement centres</p>
          </div>

          <span className="live-badge">
            ● LIVE
          </span>
        </div>

        <div className="congestion-list">
          {congestionData.map((centre) => (
            <div className="congestion-row" key={centre.name}>

              <div className="centre-info">
                <strong>{centre.name}</strong>
                <small>{centre.district}</small>
              </div>

              <div className="metric">
                <span>Load</span>
                <strong>{centre.load}%</strong>
              </div>

              <div className="metric">
                <span>Queue</span>
                <strong>{centre.queue}</strong>
              </div>

              <div className="metric">
                <span>Wait</span>
                <strong>{centre.wait} min</strong>
              </div>

              <span
                className={`congestion-status ${centre.status.toLowerCase()}`}
              >
                {centre.status}
              </span>

            </div>
          ))}
        </div>
      </div>

      {/* AI RECOMMENDATION */}
      <div className="panel-card ai-card">

        <div className="panel-header">
          <div>
            <h2>🤖 AI Recommendation</h2>
            <p>Smart load-balancing suggestion</p>
          </div>

          <span className="ai-badge">
            AI INSIGHT
          </span>
        </div>

        <div className="ai-alert">
          <div className="ai-icon">
            ⚠️
          </div>

          <div>
            <strong>Centre A is overloaded</strong>
            <p>
              Current load is <b>94%</b> with{" "}
              <b>137 farmers</b> waiting.
            </p>
          </div>
        </div>

        <div className="recommendation">

          <div className="recommendation-item">
            <span>📍</span>

            <div>
              <small>Recommended Alternative</small>
              <strong>Centre B</strong>
            </div>
          </div>

          <div className="recommendation-item">
            <span>⏱️</span>

            <div>
              <small>Expected Waiting Time</small>
              <strong>35 minutes</strong>
            </div>
          </div>

          <div className="recommendation-item">
            <span>👨‍🌾</span>

            <div>
              <small>Suggested Action</small>
              <strong>Shift future bookings</strong>
            </div>
          </div>

        </div>

                <button
        className="action-button"
        onClick={() => setApplied(true)}
        disabled={applied}
        >
        {applied ? "✓ Recommendation Applied" : "Apply Recommendation →"}
        </button>
                {applied && (
  <div className="recommendation-success">
    ✓ Recommendation successfully applied.
    <br />
    Centre B capacity increased to reduce queue pressure.
  </div>
)}
      </div>

    </section>
  );
}

export default CongestionPanel;