import { useState } from "react";

const farmerData = {
  phone: "9876543210",
  name: "Rajesh Kumar",
  farmerId: "KS1024",
  token: "KSN024",
  centre: "Bahadurpur Procurement Centre",
  district: "Darbhanga",
  queuePosition: 18,
  farmersAhead: 17,
  estimatedWait: 42,
  procurementStatus: "Quality Check",
  paymentStatus: "Processing",
  paymentAmount: "₹11,750",
};

function VoiceAccess() {
  const [callReceived, setCallReceived] = useState(false);
  const [responseType, setResponseType] = useState("sms");

  const handleMissedCall = () => {
    setCallReceived(true);
  };

  const resetDemo = () => {
    setCallReceived(false);
    setResponseType("sms");
  };

  return (
    <div className="voice-access-page">

      {/* HEADER */}
      <div className="voice-page-header">
        <div>
          <h1>📞 KisanSetu Voice Access</h1>
          <p>
            Missed-call based access for farmers with limited smartphone
            connectivity
          </p>
        </div>

        <span className="voice-demo-badge">
          DEMO MODE
        </span>
      </div>

      {/* MAIN GRID */}
      <div className="voice-grid">

        {/* MISSED CALL CARD */}
        <div className="voice-card missed-call-card">

          <div className="voice-card-header">
            <div>
              <h2>📲 Missed Call Service</h2>
              <p>
                Simulate a farmer's missed call
              </p>
            </div>
          </div>

          <div className="phone-display">

            <div className="phone-icon">
              📞
            </div>

            <small>KisanSetu Service Number</small>

            <strong>
              1800-XXX-XXXX
            </strong>

            <span>
              Toll-free farmer assistance
            </span>

          </div>

          <div className="farmer-number">

            <label>
              Incoming Farmer Number
            </label>

            <div className="number-box">
              +91 {farmerData.phone}
            </div>

          </div>

          {!callReceived ? (
            <button
              className="missed-call-button"
              onClick={handleMissedCall}
            >
              📞 Simulate Missed Call
            </button>
          ) : (
            <button
              className="missed-call-button received"
              disabled
            >
              ✓ Missed Call Received
            </button>
          )}

          {callReceived && (
            <div className="call-success">
              <span>✓</span>

              <div>
                <strong>Farmer identified successfully</strong>

                <p>
                  Mobile number matched with Farmer ID{" "}
                  <b>{farmerData.farmerId}</b>
                </p>
              </div>
            </div>
          )}

        </div>

        {/* FARMER STATUS */}
        <div className="voice-card status-card">

          <div className="voice-card-header">
            <div>
              <h2>👨‍🌾 Farmer Status</h2>
              <p>
                Information retrieved after missed call
              </p>
            </div>
          </div>

          {!callReceived ? (
            <div className="empty-voice-state">
              <div>📱</div>
              <strong>Waiting for missed call...</strong>
              <p>
                Click "Simulate Missed Call" to start the workflow.
              </p>
            </div>
          ) : (
            <div className="farmer-status-content">

              <div className="farmer-profile">

                <div className="farmer-avatar">
                  👨‍🌾
                </div>

                <div>
                  <strong>{farmerData.name}</strong>
                  <small>
                    Farmer ID: {farmerData.farmerId}
                  </small>
                </div>

              </div>

              <div className="status-grid">

                <div className="status-item">
                  <small>Digital Token</small>
                  <strong>{farmerData.token}</strong>
                </div>

                <div className="status-item">
                  <small>Centre</small>
                  <strong>{farmerData.centre}</strong>
                </div>

                <div className="status-item">
                  <small>Queue Position</small>
                  <strong>{farmerData.queuePosition}</strong>
                </div>

                <div className="status-item">
                  <small>Farmers Ahead</small>
                  <strong>{farmerData.farmersAhead}</strong>
                </div>

                <div className="status-item">
                  <small>Estimated Wait</small>
                  <strong>{farmerData.estimatedWait} min</strong>
                </div>

                <div className="status-item">
                  <small>Procurement</small>
                  <strong>{farmerData.procurementStatus}</strong>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>

      {/* RESPONSE SECTION */}
      {callReceived && (
        <div className="voice-response-card">

          <div className="voice-response-header">

            <div>
              <h2>📤 Automated Farmer Response</h2>

              <p>
                KisanSetu sends the latest procurement information
                automatically.
              </p>
            </div>

            <div className="response-tabs">

              <button
                className={responseType === "sms" ? "active" : ""}
                onClick={() => setResponseType("sms")}
              >
                📩 SMS
              </button>

              <button
                className={responseType === "voice" ? "active" : ""}
                onClick={() => setResponseType("voice")}
              >
                🔊 Voice
              </button>

            </div>

          </div>

          {responseType === "sms" ? (

            <div className="sms-preview">

              <div className="sms-phone-header">
                <span>📱</span>
                <strong>KisanSetu</strong>
              </div>

              <div className="sms-message">

                <strong>KisanSetu:</strong>

                <p>
                  Namaskar {farmerData.name}, your procurement
                  status has been updated.
                </p>

                <p>
                  🎫 Token: <b>{farmerData.token}</b>
                  <br />
                  🏢 Centre: <b>{farmerData.centre}</b>
                  <br />
                  👥 Queue Position: <b>{farmerData.queuePosition}</b>
                  <br />
                  ⏱️ Estimated Wait:{" "}
                  <b>{farmerData.estimatedWait} minutes</b>
                </p>

                <p>
                  🌾 Procurement:{" "}
                  <b>{farmerData.procurementStatus}</b>
                  <br />
                  💰 Payment:{" "}
                  <b>{farmerData.paymentStatus}</b>
                  <br />
                  Amount: <b>{farmerData.paymentAmount}</b>
                </p>

                <span className="sms-time">
                  Just now
                </span>

              </div>

            </div>

          ) : (

            <div className="voice-preview">

              <div className="voice-wave">
                <span>🔊</span>
                <div className="wave-bars">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </div>

              <div className="voice-script">

                <small>
                  IVR RESPONSE PREVIEW
                </small>

                <p>
                  "Namaskar {farmerData.name}. Aapka token{" "}
                  <b>{farmerData.token}</b> hai.
                  Aapke aage {farmerData.farmersAhead} farmers hain.
                  Aapka estimated waiting time{" "}
                  {farmerData.estimatedWait} minutes hai.
                  Aapka procurement status{" "}
                  {farmerData.procurementStatus} hai.
                  Payment amount {farmerData.paymentAmount} hai
                  aur payment processing mein hai."
                </p>

              </div>

              <div className="voice-status">
                ● Voice response ready
              </div>

            </div>

          )}

          <button
            className="reset-demo-button"
            onClick={resetDemo}
          >
            ↻ Reset Demo
          </button>

        </div>
      )}

      {/* HOW IT WORKS */}
      <div className="voice-how-card">

        <div className="voice-how-header">
          <h2>⚙️ How KisanSetu Voice Access Works</h2>

          <p>
            Designed for farmers who may not regularly use
            smartphone applications.
          </p>
        </div>

        <div className="voice-flow">

          <div className="flow-step">
            <div className="flow-icon">📞</div>
            <strong>1. Missed Call</strong>
            <span>Farmer gives a missed call</span>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-step">
            <div className="flow-icon">🔍</div>
            <strong>2. Identify</strong>
            <span>Mobile number is matched</span>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-step">
            <div className="flow-icon">🧠</div>
            <strong>3. Fetch Status</strong>
            <span>Queue and procurement data</span>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-step">
            <div className="flow-icon">📩</div>
            <strong>4. Respond</strong>
            <span>SMS or voice response</span>
          </div>

        </div>

      </div>

      {/* PRODUCTION NOTE */}
      <div className="voice-production-note">

        <span>💡</span>

        <div>
          <strong>Production Integration</strong>

          <p>
            The prototype uses a simulated missed-call event.
            In production, a telecom/IVR provider can send the
            incoming-call event to the KisanSetu backend through
            a webhook, which then retrieves farmer status and
            triggers SMS or voice communication.
          </p>
        </div>

      </div>

    </div>
  );
}

export default VoiceAccess;