import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

// Available time slots
const slots = [
  {
    id: 1,
    time: "09:00 AM - 10:00 AM",
    available: 12,
  },
  {
    id: 2,
    time: "10:00 AM - 11:00 AM",
    available: 8,
  },
  {
    id: 3,
    time: "11:00 AM - 12:00 PM",
    available: 18,
  },
  {
    id: 4,
    time: "12:00 PM - 01:00 PM",
    available: 5,
  },
];

const centreData = {
  1: {
    name: "Bahadurpur Procurement Centre",
    distance: "2.4 km",
    queue: 18,
    wait: 42,
    load: "Medium",
  },

  2: {
    name: "Darbhanga Main Centre",
    distance: "4.1 km",
    queue: 8,
    wait: 21,
    load: "Low",
  },

  3: {
    name: "Benipur Procurement Centre",
    distance: "6.2 km",
    queue: 41,
    wait: 96,
    load: "High",
  },
};

export default function SlotBooking() {
  const navigate = useNavigate();
  const { centreId } = useParams();

  const { t } = useLanguage();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Get selected centre
  const selectedCentre =
    centreData[centreId] || centreData[2];

  const handleBooking = () => {
    // Date validation
    if (!selectedDate) {
      alert(t.selectDateAlert);
      return;
    }

    // Slot validation
    if (!selectedSlot) {
      alert(t.selectTimeAlert);
      return;
    }

    // Create booking object
    const booking = {
      bookingId: `KSN${Date.now()}`,

      centreId: Number(centreId),

      centreName: selectedCentre.name,

      centreDistance: selectedCentre.distance,

      centreQueue: selectedCentre.queue,

      estimatedWait: selectedCentre.wait,

      centreLoad: selectedCentre.load,

      date: selectedDate,

      slotId: selectedSlot.id,

      time: selectedSlot.time,

      status: "Confirmed",

      createdAt: new Date().toISOString(),
    };

    // Save booking
    localStorage.setItem(
      "farmerBooking",
      JSON.stringify(booking)
    );

    // Save selected centre separately
    localStorage.setItem(
      "selectedCentre",
      JSON.stringify(selectedCentre)
    );

    // Go to digital token
    navigate("/farmer/token");
  };

  return (
    <div className="page-container">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <button
          className="back-button"
          onClick={() =>
            navigate(
              `/farmer/recommendation/${centreId}`
            )
          }
        >
          ← Back
        </button>

        <h1>
          {t.slotBookingTitle} 🎫
        </h1>

        <p>
          {t.slotSubtitle}
        </p>

      </div>

      {/* ================= SELECTED CENTRE ================= */}

      <div className="form-card">

        <h2>
          📍 {selectedCentre.name}
        </h2>

        <p>
          {selectedCentre.distance} away
        </p>

        <div className="centre-info">

          <div>
            <strong>
              👥 {selectedCentre.queue}
            </strong>

            <small>
              {t.queue}
            </small>
          </div>

          <div>
            <strong>
              ⏱️ {selectedCentre.wait} min
            </strong>

            <small>
              {t.estimatedWait}
            </small>
          </div>

          <div>
            <strong>
              {selectedCentre.load === "Low"
                ? "🟢"
                : selectedCentre.load === "Medium"
                ? "🟡"
                : "🔴"}{" "}
              {selectedCentre.load}
            </strong>

            <small>
              {t.centreLoad}
            </small>
          </div>

        </div>

      </div>

      {/* ================= DATE ================= */}

      <div className="form-card">

        <label>
          {t.selectDate}
        </label>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
            setSelectedSlot(null);
          }}
          min={
            new Date()
              .toISOString()
              .split("T")[0]
          }
        />

      </div>

      {/* ================= TIME SLOTS ================= */}

      <div className="slot-section">

        <h2>
          {t.availableTimeSlots}
        </h2>

        <div className="slot-grid">

          {slots.map((slot) => {

            const isSelected =
              selectedSlot?.id === slot.id;

            const isAvailable =
              slot.available > 0;

            return (
              <button
                key={slot.id}
                disabled={!isAvailable}
                className={`slot-card ${
                  isSelected
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedSlot(slot)
                }
              >

                <strong>
                  {slot.time}
                </strong>

                <span>
                  {slot.available}{" "}
                  {t.slotsAvailable}
                </span>

              </button>
            );
          })}

        </div>

      </div>

      {/* ================= BOOKING SUMMARY ================= */}

      {selectedDate && selectedSlot && (

        <div className="form-card">

          <h2>
            📋 Booking Summary
          </h2>

          <p>
            <strong>Centre:</strong>{" "}
            {selectedCentre.name}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {selectedDate}
          </p>

          <p>
            <strong>Time:</strong>{" "}
            {selectedSlot.time}
          </p>

          <p>
            <strong>Estimated Wait:</strong>{" "}
            {selectedCentre.wait} minutes
          </p>

        </div>

      )}

      {/* ================= CONFIRM ================= */}

      <button
        className="primary-button booking-button"
        onClick={handleBooking}
      >
        {t.confirmSlotBooking} →
      </button>

    </div>
  );
}