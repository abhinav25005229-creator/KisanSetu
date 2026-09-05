import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const notifications = [
  {
    id: 1,
    icon: "🎫",
    titleKey: "slotBookingConfirmed",
    messageEn:
      "Your procurement slot at Darbhanga Main Centre has been successfully booked.",
    messageHi:
      "Darbhanga Main Centre पर आपका खरीद स्लॉट सफलतापूर्वक बुक हो गया है।",
    time: "10 minutes ago",
    type: "success",
  },
  {
    id: 2,
    icon: "🚜",
    titleKey: "queueUpdated",
    messageEn:
      "There are 15 farmers ahead of your token WHT1024. Estimated wait is 42 minutes.",
    messageHi:
      "आपके टोकन WHT1024 से पहले 15 किसान हैं। अनुमानित प्रतीक्षा 42 मिनट है।",
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
      "Payment of ₹11,750 is currently being processed.",
    messageHi:
      "₹11,750 का भुगतान प्रक्रिया में है।",
    time: "Today",
    type: "payment",
  },
];

export default function Notifications() {
  const navigate = useNavigate();

  const { language, t } = useLanguage();

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

        <h1>
          {t.notificationTitle}
        </h1>

        <p>
          {t.notificationSubtitle}
        </p>

      </div>

      {/* Notification List */}
      <div className="notifications-list">

        {notifications.map((notification) => (

          <div
            className={`notification-card ${notification.type}`}
            key={notification.id}
          >

            <div className="notification-icon">
              {notification.icon}
            </div>

            <div className="notification-content">

              <div className="notification-title-row">

                <h3>
                  {t[notification.titleKey]}
                </h3>

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

        ))}

      </div>

      {/* Info */}
      <div className="notification-info">

        💡{" "}
        {language === "en"
          ? "KisanSetu will update you when queue, procurement or payment status changes."
          : "कतार, खरीद या भुगतान की स्थिति बदलने पर किसानसेतु आपको अपडेट करेगा।"}

      </div>

      {/* Actions */}
      <button
        className="primary-button"
        onClick={() => navigate("/farmer/live-queue")}
      >
        {t.viewLiveQueue} →
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