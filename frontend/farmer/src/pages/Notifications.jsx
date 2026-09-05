import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Notifications() {
  const navigate = useNavigate();

  const { language, t } = useLanguage();

  const [booking, setBooking] = useState(null);
  const [produce, setProduce] = useState(null);

  useEffect(() => {
    const savedBooking =
      localStorage.getItem("farmerBooking");

    const savedProduce =
      localStorage.getItem("farmerProduce");

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

  // =========================
  // No booking state
  // =========================

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
            {t.notificationTitle}
          </h1>

          <p>
            {t.notificationSubtitle}
          </p>

        </div>

        <div className="notification-info">

          ⚠️{" "}
          {language === "en"
            ? "No active procurement booking found."
            : "कोई सक्रिय खरीद बुकिंग नहीं मिली।"}

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

  // =========================
  // Dynamic booking data
  // =========================

  const token =
    booking.token ||
    `KSN${String(
      booking.slotId
    ).padStart(2, "0")}24`;

  const centre =
    booking.centreName ||
    "Procurement Centre";

  const farmersAhead =
    booking.farmersAhead ||
    Math.max(
      1,
      (booking.centreQueue || 8) - 1
    );

  const estimatedWait =
    booking.estimatedWait ?? 21;

  const quantity =
    Number(produce?.quantity) || 500;

  const rate = 23.5;

  const amount =
    quantity * rate;

  const formattedAmount =
    `₹${amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  // =========================
  // Notifications
  // =========================

  const notifications = [

    {
      id: 1,
      icon: "🎫",
      titleKey: "slotBookingConfirmed",

      messageEn:
        `Your procurement slot at ${centre} has been successfully booked.`,

      messageHi:
        `${centre} पर आपका खरीद स्लॉट सफलतापूर्वक बुक हो गया है।`,

      time: "10 minutes ago",
      type: "success",
    },

    {
      id: 2,
      icon: "🚜",
      titleKey: "queueUpdated",

      messageEn:
        `There are ${farmersAhead} farmers ahead of your token ${token}. Estimated wait is ${estimatedWait} minutes.`,

      messageHi:
        `आपके टोकन ${token} से पहले ${farmersAhead} किसान हैं। अनुमानित प्रतीक्षा ${estimatedWait} मिनट है।`,

      time: "5 minutes ago",
      type: "info",
    },

    {
      id: 3,
      icon: "🔔",
      titleKey: "turnApproaching",

      messageEn:
        "Your turn is approaching soon. Please stay available near the procurement centre.",

      messageHi:
        "आपकी बारी जल्द आने वाली है। कृपया खरीद केंद्र के पास उपलब्ध रहें।",

      time: "Just now",
      type: "warning",
    },

    {
      id: 4,
      icon: "🔍",
      titleKey: "qualityCheck",

      messageEn:
        "Quality verification of your produce is currently in progress.",

      messageHi:
        "आपकी उपज की गुणवत्ता जांच प्रक्रिया में है।",

      time: "Today",
      type: "info",
    },

    {
      id: 5,
      icon: "💰",
      titleKey: "paymentUpdate",

      messageEn:
        `Payment of ${formattedAmount} is currently being processed.`,

      messageHi:
        `${formattedAmount} का भुगतान प्रक्रिया में है।`,

      time: "Today",
      type: "payment",
    },

  ];

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
          {t.notificationTitle}
        </h1>

        <p>
          {t.notificationSubtitle}
        </p>

      </div>

      {/* ================= NOTIFICATION LIST ================= */}

      <div className="notifications-list">

        {notifications.map(
          (notification) => (

            <div
              className={`notification-card ${notification.type}`}
              key={notification.id}
            >

              {/* Icon */}

              <div className="notification-icon">
                {notification.icon}
              </div>

              {/* Content */}

              <div className="notification-content">

                <div className="notification-title-row">

                  <h3>
                    {t[
                      notification.titleKey
                    ]}
                  </h3>

                  {/* New badge */}

                  {notification.id === 3 && (
                    <span className="new-badge">
                      {t.newNotification}
                    </span>
                  )}

                </div>

                <p>
                  {language === "en"
                    ? notification.messageEn
                    : notification.messageHi}
                </p>

                <span className="notification-time">
                  {notification.time}
                </span>

              </div>

            </div>

          )
        )}

      </div>

      {/* ================= INFO ================= */}

      <div className="notification-info">

        💡{" "}

        {language === "en"
          ? "KisanSetu will update you when queue, procurement or payment status changes."
          : "कतार, खरीद या भुगतान की स्थिति बदलने पर किसानसेतु आपको अपडेट करेगा।"}

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
  );
}