import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Redirect logic
    if (isLoggedIn && window.location.pathname === "/") {
      navigate("/home");
    }
    if (!isLoggedIn && window.location.pathname === "/home") {
      navigate("/");
    }
  }, [navigate]);

  return <Outlet />;
}
