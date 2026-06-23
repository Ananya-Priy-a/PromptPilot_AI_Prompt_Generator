function Input({
  prompt,
  setPrompt,
  response,
  setResponse,
  loading,
  setLoading,
  error,
  setError,
}) {

  const handleSend = async () => {

    if (!prompt.trim()) {
      setError("Please enter a prompt");
      return;
    }

    setError("");
    setLoading(true);

    try {

      const res = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await res.json();

      setResponse(data.response);

    } catch (err) {

      setError("Failed to generate response");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="chat-box">

      <textarea
        placeholder="Enter your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        className="send-btn"
        onClick={handleSend}
      >
        Send
      </button>

      {loading && <p>Generating response...</p>}

      {error && <p>{error}</p>}

      {response && (
        <div>
          <h3>Response</h3>
          <p>{response}</p>
        </div>
      )}

    </div>
  );
}

export default Input;