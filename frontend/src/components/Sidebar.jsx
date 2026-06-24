import Button from "./Button";

function Sidebar({ setPrompt, setResponse, setError, history, setLoading}) {
  const clearChat = () => {
    setPrompt("");
    setResponse("");
    setError("");
  };
  const openChat = (chat) => {
    setPrompt(chat.prompt);
    setResponse(chat.response);
    setError("");
    setLoading(false);
};
  
  return (
    <aside className="sidebar">
      <h2>PromptPilot</h2>

      <Button
        text="Home"
        className="sidebar-home"
        onClick={clearChat}
      />

      <Button
        text="New Chat"
        className="sidebar-newc"
        onClick={clearChat}
      />

      <div className="history">
        <h3>History</h3>
        
        {history.map((chat, index) => (
          <div
            key={index}
            className="history-item"
            onClick={() => openChat(chat)}
          >
            <p>{chat.prompt}</p>
          </div>
        ))}
      </div>

    </aside>
  );
}

export default Sidebar
