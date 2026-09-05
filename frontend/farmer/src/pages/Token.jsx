import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Token() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const savedBooking = localStorage.getItem("farmerBooking");

    if (savedBooking) {
      try {
        setBooking(JSON.parse(savedBooking));
      } catch (error) {
        console.error("Failed to read booking:", error);
      }
    }
  }, []);

  // If booking data is not available
  if (!booking) {
    return (
      <div className="page-container">

        <div className="page-header">
          <h1>🎫 {t.tokenTitle}</h1>
          <p>{t.tokenSubtitle}</p>
        </div>

        <div className="token-card">

          <div className="token-icon">
            ⚠️
          </div>

          <h2>No Booking Found</h2>

          <p>
            Please book a procurement slot first.
          </p>

          <button
            className="primary-button"
            onClick={() =>
              navigate("/farmer/centres")
            }
          >
            Find Procurement Centre →
          </button>

        </div>

      </div>
    );
  }

  /*
   * Temporary token generation for prototype.
   * Later this will come from backend API.
   */
  const tokenNumber =
    booking.token ||
    `KSN${String(booking.slotId).padStart(2, "0")}24`;

  /*
   * Temporary queue information.
   * Later this will come from live queue API.
   */
 const queuePosition =
    booking.queuePosition ||
    Math.max(2, booking.centreQueue || 8);

const farmersAhead =
    booking.farmersAhead ||
    Math.max(1, queuePosition - 1);

const estimatedWait =
    booking.estimatedWait ?? 21;

const status = "Confirmed";

  return (
    <div className="page-container">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <h1>
          {t.tokenTitle} 🎉
        </h1>

        <p>
          {t.tokenSubtitle}
        </p>

      </div>

      {/* ================= TOKEN CARD ================= */}

      <div className="token-card">

        <div className="token-icon">
          🎫
        </div>

        <p className="token-label">
          {t.digitalToken}
        </p>

        <h2 className="token-number">
          {tokenNumber}
        </h2>

        <div className="token-status">
          ✓ {t.confirmed}
        </div>

        {/* ================= BOOKING DETAILS ================= */}

        <div className="token-details">

          {/* Centre */}

          <div className="token-detail">

            <span>
              📍 {t.centre}
            </span>

            <strong>
              {booking.centreName}
            </strong>

          </div>

          {/* Date */}

          <div className="token-detail">

            <span>
              📅 {t.date}
            </span>

            <strong>
              {booking.date}
            </strong>

          </div>

          {/* Slot */}

          <div className="token-detail">

            <span>
              🕚 {t.slot}
            </span>

            <strong>
              {booking.time}
            </strong>

          </div>

        </div>

        {/* ================= QUEUE SUMMARY ================= */}

        <div className="queue-summary">

          <div>

            <strong>
              {queuePosition}
            </strong>

            <span>
              {t.queuePosition}
            </span>

          </div>

          <div>

            <strong>
              {farmersAhead}
            </strong>

            <span>
              {t.farmersAhead}
            </span>

          </div>

          <div>

            <strong>
              {estimatedWait} min
            </strong>

            <span>
              {t.estimatedWait}
            </span>

          </div>

        </div>

        {/* ================= NOTE ================= */}

        <div className="token-note">

          💡 {t.queueUpdateNote}

        </div>

        {/* ================= LIVE QUEUE ================= */}

        <button
          className="primary-button"
          onClick={() =>
            navigate("/farmer/live-queue")
          }
        >
          {t.viewLiveQueue} →
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

    </div>
  );
}