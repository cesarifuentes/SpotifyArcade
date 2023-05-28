import React from "react";
import { Link } from "react-router-dom";

function Join() {
  var forceInputUppercase = function (e) {
    let el = e.target;
    let start = el.selectionStart;
    let end = el.selectionEnd;
    el.value = el.value.toUpperCase();
    el.setSelectionRange(start, end);
  };

  document.querySelectorAll(".code-input").forEach(function (current) {
    current.addEventListener("keyup", forceInputUppercase);
  });

  return (
    <div className="page">
      <h1>Join a Party</h1>
      <br />
      <br />
      <form>
        <div className="lobby-code top-right">
          <p>ENTER CODE</p>
          <h5>
            <input
              type="text"
              id="code"
              className="button large white code-input"
            />
          </h5>
        </div>

        {/* Button */}
        <Link to={`lobby/`}>
          {/* TODO: make into submit button */}
          {/* TODO: make button white until filled */}
          <button className="button large bottom-left primary">
            <h3>JOIN</h3>
          </button>
        </Link>
      </form>

      {/* Cancel Button */}
      <Link to={`/`}>
        <button className="button large bottom-right secondary">
          <h3>CANCEL</h3>
        </button>
      </Link>
    </div>
  );
}

export default Join;
