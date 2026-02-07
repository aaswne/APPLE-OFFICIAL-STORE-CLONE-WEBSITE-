import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [error, hasError] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="wrap">
      <div className="container">
        <header className="top">
          <h1>Character Counter</h1>
          <p className="muted">Type text → submit → see character count.</p>
        </header>

        <div className="panel">
          <div className="row">
            <label className="label" htmlFor="txt">Text</label>
            <span className="chip">{count} chars</span>
          </div>

          <input
            id="txt"
            className={`input ${error ? "inputError" : ""}`}
            type="text"
            value={text}
            placeholder="Type here..."
            onChange={(e) => {
              setText(e.target.value);
              setCount(e.target.value.length);
            }}
          />

          {error && <p className="error">Please enter something before submitting.</p>}

          <div className="buttons">
            <button
              className="btn btnPrimary"
              onClick={() => {
                if (text === "") hasError(true);
                else {
                  hasError(false);
                  setName(text);
                }
              }}
            >
              Submit
            </button>

            <button
              className="btn"
              disabled={!text}
              onClick={() => setName("")}
            >
              Clear
            </button>
          </div>
        </div>

        <section className="result">
          <h2>Submitted Text</h2>
          <div className={`output ${name ? "" : "empty"}`}>
            {name ? name : "Nothing submitted yet."}
          </div>
        </section>

        <footer className="footer muted">
          Built with React (useState, controlled input, conditional UI)
        </footer>
      </div>
    </div>
  );
}

export default App;
