export default function Sidebar({ contacts, setActiveContact, onLogout }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>WeChat</h3>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} onClick={() => setActiveContact(contact)}>
            <span className="contact-name">{contact.name}</span>
            <span className="contact-status">{contact.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
