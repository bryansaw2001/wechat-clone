import { FaWeixin } from "react-icons/fa";

export default function Message({ text, isMe }) {
  return (
    <div className={`message ${isMe ? "sent" : "received"}`}>
      {!isMe && <FaWeixin className="avatar" />}
      <div className="bubble">
        <p>{text}</p>
      </div>
    </div>
  );
}
