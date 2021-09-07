import React, { useState } from "react";
import "./index.css";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [markdown, setMarkdown] = useState(
    "[A quick reference to the Markdown syntax](https://www.markdownguide.org/cheat-sheet/)"
  );

  const inputHandler = (evt) => {
    setMarkdown(evt.target.value);
  };
  return (
    <main>
      <div className="mainContainer">
        <textarea type="text" className="textArea" onChange={inputHandler}>
          {markdown}
        </textarea>
      </div>
      <article className="markdownText">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </main>
  );
};

export default App;
