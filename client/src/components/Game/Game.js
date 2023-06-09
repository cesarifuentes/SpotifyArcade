import React, { Component } from "react";
import "./Game.scss";

// HELPER
import { IonIcon } from "@ionic/react";
import { person, people } from "ionicons/icons";
import Button from "../../components/Button/Button";

import { Link } from "react-router-dom";

class Game extends Component {
  render() {
    // ...
    return (
      <li className="flex-item-main">
        {/* LOGO */}
        <img
          className="game-logo immovable"
          src={this.props.logo}
          alt="game-logo"
        />
        {/* DESCRIPTION */}
        <p style={{ textAlign: "center", width: "400px" }}>{this.props.desc}</p>
        <br />
        {/* CREATE BUTTON */}
        <Button
          to={this.props.link1}
          text="CREATE PARTY"
          class="small primary"
        />
        {/* JOIN BUTTON */}
        <Button
          to={this.props.link2}
          text="JOIN PARTY"
          class="small secondary"
        />
        {/* PLAYERS */}
        <div className="player-count bottom-right">
          <IonIcon icon={this.props.players > 2 ? people : person}></IonIcon>
          <span>&nbsp;{this.props.players}</span>
        </div>
        {/* END */}
      </li>
    );
  }
}

export default Game; // Don’t forget to use export default!
