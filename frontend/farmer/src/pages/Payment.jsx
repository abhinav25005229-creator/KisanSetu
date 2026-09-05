import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Payment() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [booking, setBooking] = useState(null);
  const [produce, setProduce] = useState(null);

  useEffect(() => {
    // Load booking
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

    // Load produce
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

  // No booking
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
            {t.paymentTitle}
          </h1>

          <p>
            {t.paymentSubtitle}
          </p>

        </div>

        <div className="payment-status-card">

          <div className="payment-icon">
            ⚠️
          </div>

          <h2>
            No Payment Information
          </h2>

          <span>
            Please complete a procurement
            booking first.
          </span>

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

  // Produce
  const produceName =
    produce?.type || "Wheat";

  const quantityNumber =
    Number(produce?.quantity) || 500;

  const quantity =
    `${quantityNumber} KG`;

  // Prototype procurement rate
  const rate = 23.5;

  const totalAmount =
    quantityNumber * rate;

  const formattedAmount =
    `₹${totalAmount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const formattedRate =
    `₹${rate.toFixed(2)} / KG`;

  // Temporary token
  const token =
    booking.token ||
    `KSN${String(
      booking.slotId
    ).padStart(2, "0")}24`;

  // Temporary transaction ID
  const transactionId =
    booking.transactionId ||
    `KSN${new Date()
      .getFullYear()}${String(
      new Date().getMonth() + 1
    ).padStart(2, "0")}${String(
      new Date().getDate()
    ).padStart(2, "0")}001`;

  const expectedDate =
    "Within 2 working days";

  return (
    <div className="page-container">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <button
          className="back-button"
          onClick={() =>
            navigate("/farmer/procurement")
          }
        >
          ← Back
        </button>

        <h1>
          {t.paymentTitle}
        </h1>

        <p>
          {t.paymentSubtitle}
        </p>

      </div>

      {/* ================= PAYMENT STATUS ================= */}

      <div className="payment-status-card">

        <div className="payment-icon">
          💰
        </div>

        <p>
          {t.paymentTitle}
        </p>

        <h2>
          {t.processing}
        </h2>

        <span>
          {t.paymentProcessingMessage}
        </span>

      </div>

      {/* ================= TOTAL AMOUNT ================= */}

      <div className="payment-amount-card">

        <p>
          {t.totalProcurementAmount}
        </p>

        <h2>
          {formattedAmount}
        </h2>

        <div className="payment-rate">
          {quantity} × {formattedRate}
        </div>

      </div>

      {/* ================= PAYMENT DETAILS ================= */}

      <div className="payment-details-card">

        <h2>
          {t.paymentDetails}
        </h2>

        {/* Produce */}

        <div className="payment-row">

          <span>
            🌾 {t.produce}
          </span>

          <strong>
            {produceName}
          </strong>

        </div>

        {/* Quantity */}

        <div className="payment-row">

          <span>
            ⚖️ {t.quantity}
          </span>

          <strong>
            {quantity}
          </strong>

        </div>

        {/* Token */}

        <div className="payment-row">

          <span>
            🎫 {t.token}
          </span>

          <strong>
            {token}
          </strong>

        </div>

        {/* Centre */}

        <div className="payment-row">

          <span>
            📍 {t.centre}
          </span>

          <strong>
            {booking.centreName}
          </strong>

        </div>

        {/* Transaction */}

        <div className="payment-row">

          <span>
            🧾 {t.transactionId}
          </span>

          <strong>
            {transactionId}
          </strong>

        </div>

      </div>

      {/* ================= PAYMENT INFO ================= */}

      <div className="payment-info">

        💡 {t.expectedPayment}:{" "}

        <strong>
          {expectedDate}
        </strong>

      </div>

      {/* ================= PROCUREMENT ================= */}

      <button
        className="primary-button"
        onClick={() =>
          navigate("/farmer/procurement")
        }
      >
        {t.viewProcurementStatus} →
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