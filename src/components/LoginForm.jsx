import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.scss";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add real authentication here
    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      <div className="wechat-logo">WeChat</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      <div className="footer-links">
        <a href="#forgot">Forgot Password?</a>
        <a href="#signup">Sign Up</a>
      </div>
    </div>
  );
}
