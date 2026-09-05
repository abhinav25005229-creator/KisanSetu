import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { toggleLanguage, language, t } = useLanguage();

  const [voiceOpen, setVoiceOpen] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  // =========================================================
  // ENGLISH → HINDI AUDIO
  // =========================================================
  const speakEnglishThenHindiAudio = (
    englishText,
    hindiAudioFile
  ) => {
    if (!("speechSynthesis" in window)) {
      alert("Voice support is not available in this browser.");
      return;
    }

    // Stop previous English speech
    window.speechSynthesis.cancel();

    const englishSpeech =
      new SpeechSynthesisUtterance(englishText);

    englishSpeech.lang = "en-IN";
    englishSpeech.rate = 0.85;
    englishSpeech.pitch = 1;

    // English started
    englishSpeech.onstart = () => {
      setSpeaking(true);
    };

    // =====================================================
    // ENGLISH FINISHED → HINDI MP3 STARTS
    // =====================================================
    englishSpeech.onend = () => {
      console.log("English finished → Playing Hindi");

      const hindiAudio = new Audio(
        `/audio/${hindiAudioFile}`
      );

      hindiAudio.preload = "auto";

      hindiAudio.onplay = () => {
        console.log("Hindi audio started");
        setSpeaking(true);
      };

      hindiAudio.onended = () => {
        console.log("Hindi audio finished");
        setSpeaking(false);
      };

      hindiAudio.onerror = (error) => {
        console.error(
          "Hindi audio failed:",
          hindiAudioFile,
          error
        );

        setSpeaking(false);
      };

      hindiAudio
        .play()
        .catch((error) => {
          console.error(
            "Could not play Hindi audio:",
            error
          );

          setSpeaking(false);
        });
    };

    englishSpeech.onerror = (error) => {
      console.error(
        "English speech error:",
        error
      );

      setSpeaking(false);
    };

    // Start English
    window.speechSynthesis.speak(
      englishSpeech
    );
  };

  // =========================================================
  // START VOICE DEMO
  // =========================================================
  const startVoiceDemo = () => {
    setVoiceOpen(true);

    speakEnglishThenHindiAudio(
      "Welcome to KisanSetu. Please select an option to know your token, queue, procurement or payment status.",
      "welcome-hi.mp3"
    );
  };

  // =========================================================
  // CLOSE VOICE DEMO
  // =========================================================
  const closeVoiceDemo = () => {
    window.speechSynthesis.cancel();

    setSpeaking(false);
    setVoiceOpen(false);
  };

  return (
    <div className="dashboard">

      {/* =====================================================
          LANGUAGE
      ===================================================== */}

      <button
        className="language-button"
        onClick={toggleLanguage}
      >
        🌐 {t.language}
      </button>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="farmer-header">
        <div>
          <h1>Namaste, Farmer 👋</h1>
          <p>{t.welcome}</p>
        </div>

        <div className="profile-icon">
          👨‍🌾
        </div>
      </header>

      <main>

        {/* ===================================================
            WELCOME
        =================================================== */}

        <section className="welcome-card">
          <h2>
            {t.goodMorning} 🌾
          </h2>

          <p>
            {t.checkStatus}
          </p>
        </section>

        {/* ===================================================
            QUICK ACTIONS
        =================================================== */}

        <section className="quick-grid">

          {/* My Produce */}

          <div
            className="quick-card"
            onClick={() =>
              navigate("/farmer/add-produce")
            }
          >
            <span>🌾</span>

            <h3>
              {t.myProduce}
            </h3>

            <p>
              {t.addProduce}
            </p>
          </div>

          {/* Centres */}

          <div
            className="quick-card"
            onClick={() =>
              navigate("/farmer/centres")
            }
          >
            <span>📍</span>

            <h3>
              {t.centres}
            </h3>

            <p>
              {t.findCentres}
            </p>
          </div>

          {/* Token */}

          <div
            className="quick-card"
            onClick={() =>
              navigate("/farmer/token")
            }
          >
            <span>🎫</span>

            <h3>
              {t.myToken}
            </h3>

            <p>
              {t.noActiveToken}
            </p>
          </div>

          {/* Payment */}

          <div
            className="quick-card"
            onClick={() =>
              navigate("/farmer/payment")
            }
          >
            <span>💰</span>

            <h3>
              {t.payment}
            </h3>

            <p>
              {t.checkPayment}
            </p>
          </div>

          {/* Notifications */}

          <div
            className="quick-card"
            onClick={() =>
              navigate("/farmer/notifications")
            }
          >
            <span>🔔</span>

            <h3>
              {t.notifications}
            </h3>

            <p>
              {t.checkNotifications}
            </p>
          </div>

        </section>

        {/* ===================================================
            VOICE ASSISTANCE
        =================================================== */}

        <section className="voice-assistance-card">

          <div className="voice-icon">
            📞
          </div>

          <div className="voice-content">

            <h2>
              Voice Assistance
            </h2>

            <p>
              Get your token, queue, procurement
              and payment information through
              a simple phone call.
            </p>

            <div className="voice-features">

              <span>
                🎫 Token Status
              </span>

              <span>
                🚶 Queue Position
              </span>

              <span>
                🌾 Procurement Status
              </span>

              <span>
                💰 Payment Status
              </span>

            </div>

            <button
              className="voice-call-button"
              onClick={startVoiceDemo}
            >
              📞 Call KisanSetu
            </button>

            <small>
              Available in Hindi & English
            </small>

          </div>

        </section>

        {/* ===================================================
            VOICE / IVR DEMO PANEL
        =================================================== */}

        {voiceOpen && (

          <section className="voice-demo-panel">

            {/* HEADER */}

            <div className="voice-demo-header">

              <div>

                <h2>
                  📞 KisanSetu Voice Assistance
                </h2>

                <p>
                  Interactive IVR Demo
                </p>

              </div>

              <button
                className="voice-close-button"
                onClick={closeVoiceDemo}
              >
                ✕
              </button>

            </div>

            {/* =================================================
                CALL STATUS
            ================================================= */}

            <div className="call-status">

              <div className="call-animation">
                {speaking ? "🔊" : "📞"}
              </div>

              <div>

                <strong>
                  {speaking
                    ? "KisanSetu is speaking..."
                    : "Call Connected"}
                </strong>

                <p>
                  {speaking
                    ? "Please listen..."
                    : "Select an option below"}
                </p>

              </div>

            </div>

            {/* =================================================
                FARMER INFO
            ================================================= */}

            <div className="caller-info">

              <span>
                👨‍🌾
              </span>

              <div>

                <strong>
                  Farmer: Demo Farmer
                </strong>

                <small>
                  Token: WHT1024
                </small>

              </div>

            </div>

            {/* =================================================
                IVR OPTIONS
            ================================================= */}

            <div className="ivr-options">

              {/* ===============================================
                  OPTION 1 — TOKEN
              =============================================== */}

              <button
                onClick={() =>
                  speakEnglishThenHindiAudio(
                    "Your token number is WHT1024. You have 15 farmers ahead of you.",
                    "token-hi.mp3"
                  )
                }
              >

                <span>
                  1
                </span>

                🎫 Token Status

              </button>

              {/* ===============================================
                  OPTION 2 — QUEUE
              =============================================== */}

              <button
                onClick={() =>
                  speakEnglishThenHindiAudio(
                    "There are 15 farmers ahead of you. Your estimated waiting time is 42 minutes.",
                    "queue-hi.mp3"
                  )
                }
              >

                <span>
                  2
                </span>

                🚶 Queue Status

              </button>

              {/* ===============================================
                  OPTION 3 — PROCUREMENT
              =============================================== */}

              <button
                onClick={() =>
                  speakEnglishThenHindiAudio(
                    "Your wheat procurement is currently under quality verification at Darbhanga Main Centre.",
                    "procurement-hi.mp3"
                  )
                }
              >

                <span>
                  3
                </span>

                🌾 Procurement Status

              </button>

              {/* ===============================================
                  OPTION 4 — PAYMENT
              =============================================== */}

              <button
                onClick={() =>
                  speakEnglishThenHindiAudio(
                    "Your procurement amount is eleven thousand seven hundred fifty rupees. Payment is processing and is expected within two working days.",
                    "payment-hi.mp3"
                  )
                }
              >

                <span>
                  4
                </span>

                💰 Payment Status

              </button>

            </div>

            {/* =================================================
                REPEAT INSTRUCTIONS
            ================================================= */}

            <button
              className="repeat-voice-button"
              onClick={() =>
                speakEnglishThenHindiAudio(
                  "Please select one. Press one for token status. Press two for queue status. Press three for procurement status. Press four for payment status.",
                  "welcome-hi.mp3"
                )
              }
            >
              🔊 Repeat Instructions
            </button>

            {/* =================================================
                DEMO NOTE
            ================================================= */}

            <div className="demo-note">
              💡 Voice assistance demo — browser voice simulation
            </div>

          </section>

        )}

      </main>

    </div>
  );
}