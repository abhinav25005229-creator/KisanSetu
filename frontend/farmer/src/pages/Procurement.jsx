import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const procurementData = {
  token: "WHT1024",
  centre: "Darbhanga Main Centre",
  produce: "Wheat",
  quantity: "500 KG",
  currentStage: "Quality Check",
};

const stages = [
  {
    title: "Registration",
    icon: "📝",
    status: "completed",
  },
  {
    title: "Slot Booked",
    icon: "📅",
    status: "completed",
  },
  {
    title: "Arrived at Centre",
    icon: "🚜",
    status: "completed",
  },
  {
    title: "Quality Check",
    icon: "🔍",
    status: "current",
  },
  {
    title: "Procurement",
    icon: "🌾",
    status: "pending",
  },
  {
    title: "Payment",
    icon: "💰",
    status: "pending",
  },
];

export default function Procurement() {
  const navigate = useNavigate();

  const { t } = useLanguage();

  const getStageTitle = (title) => {
    const translations = {
      Registration: t.registration,
      "Slot Booked": t.slotBooked,
      "Arrived at Centre": t.arrivedAtCentre,
      "Quality Check": t.qualityCheck,
      Procurement: t.procurement,
      Payment: t.payment,
    };

    return translations[title] || title;
  };

  const getStageStatus = (status) => {
    if (status === "completed") {
      return t.completed;
    }

    if (status === "current") {
      return t.inProgress;
    }

    return t.pending;
  };

  return (
    <div className="page-container">

      {/* Header */}
      <div className="page-header">

        <button
          className="back-button"
          onClick={() => navigate("/farmer/dashboard")}
        >
          ← Back
        </button>

        <h1>{t.procurementTitle}</h1>

        <p>{t.procurementSubtitle}</p>

      </div>

      {/* Basic Details */}
      <div className="procurement-card">

        <div className="procurement-top">

          <span className="procurement-icon">
            🌾
          </span>

          <div>
            <h2>{procurementData.produce}</h2>
            <p>{procurementData.quantity}</p>
          </div>

        </div>

        <div className="procurement-details">

          <div>
            <span>🎫 {t.token}</span>
            <strong>{procurementData.token}</strong>
          </div>

          <div>
            <span>📍 {t.centre}</span>
            <strong>{procurementData.centre}</strong>
          </div>

        </div>

      </div>

      {/* Current Status */}
      <div className="current-stage-card">

        <p>{t.currentStatus}</p>

        <h2>
          🔍 {t.qualityCheck}
        </h2>

        <span>
          {t.qualityVerification}
        </span>

      </div>

      {/* Timeline */}
      <div className="timeline-card">

        <h2>{t.procurementJourney}</h2>

        <div className="timeline">

          {stages.map((stage, index) => (

            <div
              className={`timeline-item ${stage.status}`}
              key={stage.title}
            >

              <div className="timeline-marker">

                {stage.status === "completed"
                  ? "✓"
                  : stage.icon}

              </div>

              <div className="timeline-content">

                <h3>
                  {getStageTitle(stage.title)}
                </h3>

                <p>
                  {getStageStatus(stage.status)}
                </p>

              </div>

              {index < stages.length - 1 && (
                <div className="timeline-line"></div>
              )}

            </div>

          ))}

        </div>

      </div>

      {/* Help / Notification */}
      <div className="procurement-note">

        💡 {t.statusUpdateNote}

      </div>

      {/* Actions */}
      <button
        className="primary-button"
        onClick={() => navigate("/farmer/payment")}
      >
        {t.viewPayment} →
      </button>

      <button
        className="secondary-button"
        onClick={() => navigate("/farmer/dashboard")}
      >
        {t.goDashboard}
      </button>

    </div>
  );
}