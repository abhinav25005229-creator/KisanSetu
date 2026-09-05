import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

export default function SlotBooking() {
  const navigate = useNavigate();
  const { centreId } = useParams();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleBooking = () => {
    if (!selectedDate) {
      alert("Please select a date");
      return;
    }

    if (!selectedSlot) {
      alert("Please select a time slot");
      return;
    }

    const booking = {
      centreId,
      date: selectedDate,
      slotId: selectedSlot.id,
      time: selectedSlot.time,
    };

    // Temporary mock booking.
    // Later this will call POST /bookings
    localStorage.setItem(
      "farmerBooking",
      JSON.stringify(booking)
    );

    navigate("/farmer/token");
  };

  return (
    <div className="page-container">

      <div className="page-header">

        <button
          className="back-button"
          onClick={() =>
            navigate(`/farmer/recommendation/${centreId}`)
          }
        >
          ← Back
        </button>

        <h1>Book Your Slot 🎫</h1>

        <p>
          Apni convenient date aur time select karein
        </p>

      </div>

      <div className="form-card">

        <label>Select Date</label>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
        />

      </div>

      <div className="slot-section">

        <h2>Available Time Slots</h2>

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
                  isSelected ? "selected" : ""
                }`}
                onClick={() => setSelectedSlot(slot)}
              >

                <strong>
                  {slot.time}
                </strong>

                <span>
                  {slot.available} slots available
                </span>

              </button>
            );
          })}

        </div>

      </div>

      <button
        className="primary-button booking-button"
        onClick={handleBooking}
      >
        Confirm Slot Booking →
      </button>

    </div>
  );
}