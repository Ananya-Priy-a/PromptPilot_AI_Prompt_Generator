import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";

function App() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  return (
    <div className="app">
      <Sidebar
        setPrompt={setPrompt}
        setResponse={setResponse}
        setError={setError}
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
        />
      </main>
    </div>
  );
}

export default App;