import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

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

  const [booking, setBooking] = useState(null);
  const [produce, setProduce] = useState(null);

  useEffect(() => {
    // Get booking information
    const savedBooking =
      localStorage.getItem("farmerBooking");

    if (savedBooking) {
      try {
        setBooking(JSON.parse(savedBooking));
      } catch (error) {
        console.error(
          "Failed to load booking:",
          error
        );
      }
    }

    // Get farmer's produce information
    const savedProduce =
      localStorage.getItem("farmerProduce");

    if (savedProduce) {
      try {
        setProduce(JSON.parse(savedProduce));
      } catch (error) {
        console.error(
          "Failed to load produce:",
          error
        );
      }
    }
  }, []);

  // If booking does not exist
  if (!booking) {
    return (
      <div className="page-container">

        <div className="page-header">

          <button
            className="back-button"
            onClick={() =>
              navigate("/farmer/dashboard")
            }
          >
            ← Back
          </button>

          <h1>
            {t.procurementTitle}
          </h1>

          <p>
            {t.procurementSubtitle}
          </p>

        </div>

        <div className="procurement-card">

          <div className="procurement-top">

            <span className="procurement-icon">
              ⚠️
            </span>

            <div>
              <h2>
                No Active Procurement
              </h2>

              <p>
                Please book a procurement slot
                first.
              </p>
            </div>

          </div>

        </div>

        <button
          className="primary-button"
          onClick={() =>
            navigate("/farmer/centres")
          }
        >
          Find Procurement Centre →
        </button>

      </div>
    );
  }

  // Produce information
  const produceName =
    produce?.type || "Wheat";

  const quantity =
    produce?.quantity
      ? `${produce.quantity} KG`
      : "500 KG";

  // Temporary token for prototype
  const token =
    booking.token ||
    `KSN${String(
      booking.slotId
    ).padStart(2, "0")}24`;

  return (
    <div className="page-container">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <button
          className="back-button"
          onClick={() =>
            navigate("/farmer/dashboard")
          }
        >
          ← Back
        </button>

        <h1>
          {t.procurementTitle}
        </h1>

        <p>
          {t.procurementSubtitle}
        </p>

      </div>

      {/* ================= BASIC DETAILS ================= */}

      <div className="procurement-card">

        <div className="procurement-top">

          <span className="procurement-icon">
            🌾
          </span>

          <div>

            <h2>
              {produceName}
            </h2>

            <p>
              {quantity}
            </p>

          </div>

        </div>

        <div className="procurement-details">

          {/* Token */}

          <div>

            <span>
              🎫 {t.token}
            </span>

            <strong>
              {token}
            </strong>

          </div>

          {/* Centre */}

          <div>

            <span>
              📍 {t.centre}
            </span>

            <strong>
              {booking.centreName}
            </strong>

          </div>

        </div>

      </div>

      {/* ================= CURRENT STATUS ================= */}

      <div className="current-stage-card">

        <p>
          {t.currentStatus}
        </p>

        <h2>
          🔍 {t.qualityCheck}
        </h2>

        <span>
          {t.qualityVerification}
        </span>

      </div>

      {/* ================= TIMELINE ================= */}

      <div className="timeline-card">

        <h2>
          {t.procurementJourney}
        </h2>

        <div className="timeline">

          {stages.map(
            (stage, index) => (

              <div
                className={`timeline-item ${stage.status}`}
                key={stage.title}
              >

                {/* Marker */}

                <div className="timeline-marker">

                  {stage.status ===
                  "completed"
                    ? "✓"
                    : stage.icon}

                </div>

                {/* Content */}

                <div className="timeline-content">

                  <h3>
                    {getStageTitle(
                      stage.title,
                      t
                    )}
                  </h3>

                  <p>
                    {getStageStatus(
                      stage.status,
                      t
                    )}
                  </p>

                </div>

                {/* Connecting line */}

                {index <
                  stages.length - 1 && (
                  <div className="timeline-line"></div>
                )}

              </div>

            )
          )}

        </div>

      </div>

      {/* ================= NOTE ================= */}

      <div className="procurement-note">

        💡 {t.statusUpdateNote}

      </div>

      {/* ================= PAYMENT ================= */}

      <button
        className="primary-button"
        onClick={() =>
          navigate("/farmer/payment")
        }
      >
        {t.viewPayment} →
      </button>

      {/* ================= DASHBOARD ================= */}

      <button
        className="secondary-button"
        onClick={() =>
          navigate("/farmer/dashboard")
        }
      >
        {t.goDashboard}
      </button>

    </div>
  );
}

/*
 * Translate procurement stage titles
 */
function getStageTitle(title, t) {
  const translations = {
    Registration: t.registration,
    "Slot Booked": t.slotBooked,
    "Arrived at Centre": t.arrivedAtCentre,
    "Quality Check": t.qualityCheck,
    Procurement: t.procurement,
    Payment: t.payment,
  };

  return translations[title] || title;
}

/*
 * Translate stage status
 */
function getStageStatus(status, t) {
  if (status === "completed") {
    return t.completed;
  }

  if (status === "current") {
    return t.inProgress;
  }

  return t.pending;
}