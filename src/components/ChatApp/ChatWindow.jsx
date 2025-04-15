import { useState } from "react";
import Message from "./Message";

export default function ChatWindow({ activeContact }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there!", isMe: false },
    { id: 2, text: "Hi! How are you?", isMe: true },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: Date.now(), text: newMessage, isMe: true },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <h2>{activeContact.name}</h2>
      </div>
      <div className="messages">
        {messages.map((msg) => (
          <Message key={msg.id} text={msg.text} isMe={msg.isMe} />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
