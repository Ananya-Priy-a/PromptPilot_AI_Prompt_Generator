import logo from "../../assets/logo.png";
function Header() {
  return (
    <div className="header-section">
      <img
        src={logo}
        alt="PromptPilot"
      />

      <h1>
        Hello! What's on your mind today?
      </h1>
    </div>
  );
}

export default Header;