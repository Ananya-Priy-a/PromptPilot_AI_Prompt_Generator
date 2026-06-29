import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Input from "./components/chat/Input";
import { useState } from "react";

function App() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [model, setModel] = useState("fast");

  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );

  return (
    <div className="app">
      <Sidebar
        setPrompt={setPrompt}
        setResponse={setResponse}
        setError={setError}
        history={history}
        setLoading={setLoading}
        setHistory={setHistory}
      />

      <main className="main">
        <Header />
        <Input
          prompt={prompt}
          setPrompt={setPrompt}
          response={response}
          setResponse={setResponse}
          loading={loading}
          setLoading={setLoading}
          error={error}
          setError={setError}
          history={history}
          setHistory={setHistory}
          model={model}
          setModel={setModel}
        />
      </main>
    </div>
  );
}

export default App;