import React from "react";
import { Link } from "react-router-dom";

function Create() {
  function click(n) {
    var curr_toggle_button = document.getElementById(n);
    var isSelected = curr_toggle_button.classList.contains("selected");
    if (isSelected) {
      curr_toggle_button.classList.remove("selected");
    } else {
      curr_toggle_button.classList.add("selected");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handling submit...");
    var jsonData = {};
    // Get rounds
    var rounds = document.getElementById("quantity").value;
    if (!rounds) {
      return;
    }
    jsonData["rounds"] = rounds;
    // Get types
    var types = {};
    var buttons = document.getElementsByClassName("toggle-button");
    for (var index = 0; index < buttons.length; index++) {
      var button = buttons[index];
      var isSelected = button.classList.contains("selected");
      types[button.id] = isSelected;
    }
    jsonData["types"] = types;
    // Final
    // return jsonData;
    window.location = "lobby?Parameters=" + JSON.stringify(jsonData);
  };

  return (
    <div className="page">
      <ul className="flex-container-form horiz-center">
        <li className="flex-item-form">
          <h1>Create a Party</h1>
          <br />
          <form>
            {/* 
            <h2>Players</h2>
            <div className="radio-wrap">
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
            */}
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
                defaultValue={5}
                // value="5"
              />
              {/* <p className="subtext">25 minutes</p> */}
            </div>
            <br />
            <h2>Question Types</h2>
            <div className="checkbox-wrap">
              <div
                className="toggle-button"
                id="tb-1"
                onClick={() => click("tb-1")}
              >
                <p>SAMPLES</p>
              </div>

              <div
                className="toggle-button"
                id="tb-2"
                onClick={() => click("tb-2")}
              >
                <p>LYRICS</p>
              </div>

              <div
                className="toggle-button selected"
                id="tb-3"
                onClick={() => click("tb-3")}
              >
                <p>COVER ART</p>
              </div>

              <div
                className="toggle-button"
                id="tb-4"
                onClick={() => click("tb-4")}
              >
                <p>ARTISTS</p>
              </div>

              <div
                className="toggle-button"
                id="tb-5"
                onClick={() => click("tb-5")}
              >
                <p>PLAYLISTS</p>
              </div>
            </div>
            {/* TODO: include ppl with  */}
          </form>

          <br />

          {/* TODO: make into submit button */}

          {/* CREATE BUTTON */}
          {/* <Link to={`lobby/`}> */}
          <button
            className="button small bottom-right primary"
            style={{ margin: "20px" }}
            onClick={handleSubmit}
          >
            <p>START</p>
          </button>
          {/* </Link> */}
          {/* <br /> */}
          {/* JOIN BUTTON */}
          <Link to={`/`}>
            <button
              className="button small top-right secondary"
              style={{ margin: "20px" }}
            >
              <p>CANCEL</p>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Create;
