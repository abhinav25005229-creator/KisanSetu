import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    village: "",
    district: "",
    state: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    console.log("Farmer registration:", form);

    alert("Registration successful! Mock OTP sent.");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="logo">🌾</div>

        <h1>Farmer Registration</h1>

        <p className="subtitle">
          किसान पंजीकरण
        </p>

        <form onSubmit={handleRegister}>

          <label>Full Name</label>
          <input
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Mobile Number</label>
          <input
            name="mobile"
            type="tel"
            placeholder="10-digit mobile number"
            maxLength={10}
            value={form.mobile}
            onChange={handleChange}
            required
          />

          <label>Village</label>
          <input
            name="village"
            placeholder="Enter village"
            value={form.village}
            onChange={handleChange}
            required
          />

          <label>District</label>
          <input
            name="district"
            placeholder="Enter district"
            value={form.district}
            onChange={handleChange}
            required
          />

          <label>State</label>
          <input
            name="state"
            placeholder="Enter state"
            value={form.state}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p className="switch-text">
          Already registered?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}