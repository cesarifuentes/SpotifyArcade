import React from "react";
// import { Link } from "react-router-dom";

function Start() {
  return (
    <div class="page">
      <div class="title">Create a Party</div>
      <br />
      <br />
      <form>
        <h1>How many people are playing?</h1>
        <select class="select-new" name="players" id="players">
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <br />
        <br />
        <h1>How many rounds?</h1>
        <select class="select-new" name="rounds" id="rounds">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <br />
        <br />
        <h1>How much time per round?</h1>
        <select class="select-new" name="time" id="time">
          <option value="15">15s</option>
          <option value="30">30s</option>
          <option value="45">45s</option>
          <option value="60">60s</option>
        </select>
        <br />
        <br />
        <h1>Select your question types:</h1>
        {/* <input type="checkbox" /> */}
        <input
          type="checkbox"
          id="question1"
          name="question1"
          value="Samples"
        />
        <label for="question1"> Samples</label>
        <br />
        <input type="checkbox" id="question2" name="question2" value="Lyrics" />
        <label for="question2"> Lyrics</label>
        <br />
        <input type="checkbox" id="question3" name="question3" value="Art" />
        <label for="question3"> Cover Art</label>
        <br />
        <input
          type="checkbox"
          id="question4"
          name="question4"
          value="Artists"
        />
        <label for="question4"> Artists</label>
        <br />
        <input
          type="checkbox"
          id="question5"
          name="question5"
          value="Playlists"
        />
        <label for="question5"> Playlists</label>
      </form>

      <br />
    </div>
  );
}

export default Start;
