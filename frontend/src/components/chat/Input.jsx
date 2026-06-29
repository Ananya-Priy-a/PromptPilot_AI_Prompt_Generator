import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Button from "../ui/Button";
function Input({
  prompt,
  setPrompt,
  response,
  setResponse,
  loading,
  setLoading,
  error,
  setError,
  history,
  setHistory,
  model,
  setModel,
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
          prompt, model,
        }),
      });

      const data = await res.json();

      setResponse(data.response);

      const newChat = {
        prompt,
        response: data.response, model,
      };

      const updatedHistory = [...history, newChat];

      setHistory(updatedHistory);

      localStorage.setItem(
        "history",
        JSON.stringify(updatedHistory)
      );

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

      <div className="action-row">
        <select
          className="model-selector"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value="fast">Fast</option>
          <option value="balanced">Balanced</option>
          <option value="deep">Deep Thinking</option>
        </select>
        <Button
          text="Send"
          className="send-btn"
          onClick={handleSend}
        />
      </div>
      {loading && <p>Generating response...</p>}

      {error && <p>{error}</p>}

      {response && (
        <div className="response-box">
          <h3>Response</h3>

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {response}
          </ReactMarkdown>

        </div>
      )}

    </div>
  );
}

export default Input;