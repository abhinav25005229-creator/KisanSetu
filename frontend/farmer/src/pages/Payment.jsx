import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const paymentData = {
  token: "WHT1024",
  centre: "Darbhanga Main Centre",
  produce: "Wheat",
  quantity: "500 KG",
  rate: "₹23.50 / KG",
  amount: "₹11,750",
  status: "Processing",
  transactionId: "KSN20260905001",
  expectedDate: "Within 2 working days",
};

export default function Payment() {
  const navigate = useNavigate();

  const { t } = useLanguage();

  return (
    <div className="page-container">

      <div className="page-header">

        <button
          className="back-button"
          onClick={() => navigate("/farmer/procurement")}
        >
          ← Back
        </button>

        <h1>{t.paymentTitle}</h1>

        <p>
          {t.paymentSubtitle}
        </p>

      </div>

      {/* Payment Status */}
      <div className="payment-status-card">

        <div className="payment-icon">
          💰
        </div>

        <p>{t.paymentTitle}</p>

        <h2>{t.processing}</h2>

        <span>
          {t.paymentProcessingMessage}
        </span>

      </div>

      {/* Amount */}
      <div className="payment-amount-card">

        <p>{t.totalProcurementAmount}</p>

        <h2>{paymentData.amount}</h2>

        <div className="payment-rate">
          {paymentData.quantity} × {paymentData.rate}
        </div>

      </div>

      {/* Payment Details */}
      <div className="payment-details-card">

        <h2>{t.paymentDetails}</h2>

        <div className="payment-row">
          <span>🌾 {t.produce}</span>
          <strong>{paymentData.produce}</strong>
        </div>

        <div className="payment-row">
          <span>⚖️ {t.quantity}</span>
          <strong>{paymentData.quantity}</strong>
        </div>

        <div className="payment-row">
          <span>🎫 {t.token}</span>
          <strong>{paymentData.token}</strong>
        </div>

        <div className="payment-row">
          <span>📍 {t.centre}</span>
          <strong>{paymentData.centre}</strong>
        </div>

        <div className="payment-row">
          <span>🧾 {t.transactionId}</span>
          <strong>{paymentData.transactionId}</strong>
        </div>

      </div>

      <div className="payment-info">
        💡 {t.expectedPayment}:{" "}
        <strong>{paymentData.expectedDate}</strong>
      </div>

      <button
        className="primary-button"
        onClick={() => navigate("/farmer/procurement")}
      >
        {t.viewProcurementStatus} →
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