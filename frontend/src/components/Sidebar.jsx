import Button from "./Button";

function Sidebar({ setPrompt, setResponse, setError }) {
  const clearChat = () => {
    setPrompt("");
    setResponse("");
    setError("");
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

    </aside>
  );
}

export default Sidebar
