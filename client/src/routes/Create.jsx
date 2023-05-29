import React from "react";
import { Link } from "react-router-dom";

function Create() {
  return (
    <div className="page">
      <h1>Create a Party</h1>
      <br />
      <br />
      <form>
        <h2>Players</h2>
        <div className="radio-wrap">
          <input
            className="hidden radio-label"
            type="radio"
            name="players"
            id="pl-3"
            value="3"
          />
          <label className="button-label" htmlFor="pl-3">
            <h3>3</h3>
          </label>
          <input
            className="hidden radio-label"
            type="radio"
            name="players"
            id="pl-4"
            value="4"
          />
          <label className="button-label" htmlFor="pl-4">
            <h3>4</h3>
          </label>
        </div>
        <br />
        <br />
        <h2>Rounds</h2>
        <div className="number-wrap">
          <input
            type="number"
            id="quantity"
            name="quantity"
            inputMode="numeric"
            pattern="[0-9]*"
            min="1"
            max="10"
            step="1"
            // value="5"
          />
          {/* <p className="subtext">25 minutes</p> */}
        </div>
        <br />
        <br />
        <h2>Question Types</h2>
        <div className="checkbox-wrap">
          <input
            type="checkbox"
            id="question1"
            name="question1"
            value="Samples"
          />
          <label htmlFor="question1"> Samples</label>
          <br />
          <input
            type="checkbox"
            id="question2"
            name="question2"
            value="Lyrics"
          />
          <label htmlFor="question2"> Lyrics</label>
          <br />
          <input type="checkbox" id="question3" name="question3" value="Art" />
          <label htmlFor="question3"> Cover Art</label>
          <br />
          <input
            type="checkbox"
            id="question4"
            name="question4"
            value="Artists"
          />
          <label htmlFor="question4"> Artists</label>
          <br />
          <input
            type="checkbox"
            id="question5"
            name="question5"
            value="Playlists"
          />
          <label htmlFor="question5"> Playlists</label>
        </div>

        {/* Button */}
        <Link to={`lobby/`}>
          {/* TODO: make into submit button */}
          <button className="button large bottom-left primary">
            <h3>START</h3>
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

export default Create;
