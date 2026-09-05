import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary mock authentication
    if (mobile.length === 10 && otp.length === 6) {
      navigate("/farmer/dashboard");
    } else {
      alert("Please enter valid mobile number and OTP");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="logo">🌾</div>

        <h1>KisanSetu</h1>

        <p className="subtitle">
          आपकी खेती, आपकी सुविधा
        </p>

        <form onSubmit={handleLogin}>

          <label>Mobile Number</label>

          <input
            type="tel"
            placeholder="Enter 10-digit mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            maxLength={10}
          />

          <label>OTP</label>

          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="switch-text">
          New farmer?{" "}
          <Link to="/register">
            Register here
          </Link>
        </p>

      </div>
    </div>
  );
}