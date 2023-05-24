import React from "react";
import { Link } from "react-router-dom";

function Create() {
  return (
    <div class="page">
      <h1>Create a Party</h1>
      <br />
      <br />
      <form>
        <h3>Players</h3>
        <div class="radio-wrap">
          <input
            class="hidden radio-label"
            type="radio"
            name="players"
            id="pl-3"
            value="3"
          />
          <label class="button-label" for="pl-3">
            <h3>3</h3>
          </label>
          <input
            class="hidden radio-label"
            type="radio"
            name="players"
            id="pl-4"
            value="4"
          />
          <label class="button-label" for="pl-4">
            <h3>4</h3>
          </label>
        </div>
        <br />
        <br />
        <h3>Rounds</h3>
        <div class="number-wrap">
          <input
            type="number"
            id="quantity"
            name="quantity"
            inputmode="numeric"
            pattern="[0-9]*"
            min="1"
            max="10"
            step="1"
            // value="5"
          />
          {/* <p class="subtext">25 minutes</p> */}
        </div>
        <br />
        <br />
        <h3>Question Types</h3>
        <div class="checkbox-wrap">
          <input
            type="checkbox"
            id="question1"
            name="question1"
            value="Samples"
          />
          <label for="question1"> Samples</label>
          <br />
          <input
            type="checkbox"
            id="question2"
            name="question2"
            value="Lyrics"
          />
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
        </div>

        {/* Button */}
        <Link to={`lobby/`}>
          {/* TODO: make into submit button */}
          <button class="button large bottom-left primary">
            <h3>START</h3>
          </button>
        </Link>
      </form>

      {/* Cancel Button */}
      <Link to={`/home`}>
        <button class="button large bottom-right secondary">
          <h3>CANCEL</h3>
        </button>
      </Link>
    </div>
  );
}

export default Create;
