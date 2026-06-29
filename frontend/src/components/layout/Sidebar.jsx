import Button from "../ui/Button";
import logo from "../../assets/logo.png";

function Sidebar({ setPrompt, setResponse, setError, history, setLoading, setHistory, setModel }) {
  const clearChat = () => {
    setPrompt("");
    setResponse("");
    setError("");
  };
  const openChat = (chat) => {
    setPrompt(chat.prompt);
    setResponse(chat.response);
    setModel(chat.model);
    setError("");
    setLoading(false);
  };
  const clearHistory = (chat) => {
    setHistory([]);
    localStorage.removeItem("history");

  }

  return (
    <aside className="sidebar">
      <div className="logo-section">
        <img src={logo} alt="PromptPilot Logo" />
        <h2>PromptPilot</h2>
      </div>

      <Button
        text="New Chat"
        className="sidebar-newc"
        onClick={clearChat}
      />

      <Button
        text="Clear History"
        className="sidebar-clearHistory"
        onClick={clearHistory}
      />

      <div className="history">
        <h3>History</h3>

        {[...history].reverse().map((chat, index) => (
          <div
            key={chat.id || index}
            className="history-item"
            onClick={() => openChat(chat)}
          >
            <small className="history-model">
              {chat.model === "fast" && "Fast"}
              {chat.model === "balanced" && "Balanced"}
              {chat.model === "deep" && "Deep Thinking"}
            </small>

            <p>{chat.prompt}</p>
          </div>
        ))}
      </div>

    </aside>
  );
}

export default Sidebar
