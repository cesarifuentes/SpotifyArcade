import React from "react";
import { Link } from "react-router-dom";

function Join() {
  return (
    <div class="page">
      <div class="title">Join a Party</div>
      <br />
      <br />
      <form>
        <div class="lobby-code top-right">
          <p>ENTER CODE</p>
          <h5>
            <input
              type="text"
              id="code"
              class="button large white code-input"
            />
          </h5>
        </div>

        {/* Button */}
        <Link to={`lobby/`}>
          {/* TODO: make into submit button */}
          {/* TODO: make button white until filled */}
          <button class="button large bottom-left green">
            <h5>Join Party</h5>
          </button>
        </Link>
      </form>

      {/* Cancel Button */}
      <Link to={`/home`}>
        <button class="button large bottom-right red">
          <h5>Cancel</h5>
        </button>
      </Link>
    </div>
  );
}

export default Join;
