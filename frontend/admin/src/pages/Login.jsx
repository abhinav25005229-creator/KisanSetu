import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      onLogin();
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          🌾
        </div>

        <h1>KisanSetu</h1>

        <p className="login-subtitle">
          Government Administration Portal
        </p>

        <form onSubmit={handleSubmit}>

          <label>Admin Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">
            Sign In →
          </button>

        </form>

        <div className="login-demo">
          Demo credentials: <strong>admin / admin123</strong>
        </div>

      </div>

    </div>
  );
}

export default Login;