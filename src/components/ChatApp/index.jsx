import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import Sidebar from "./SideBar";
import ChatWindow from "./ChatWindow";
import "../../styles/chat.scss";

export default function ChatApp() {
  const [contacts] = useState([
    { id: 1, name: "Mom", status: "Online" },
    { id: 2, name: "Work Group", status: "3 new messages" },
  ]);
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const navigate = useNavigate(); // Add this hook

  // Add logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="chat-app">
      <Sidebar
        contacts={contacts}
        setActiveContact={setActiveContact}
        onLogout={handleLogout} // Pass logout handler
      />
      <ChatWindow activeContact={activeContact} />
    </div>
  );
}
