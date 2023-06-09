import React, { Component } from "react";
import "./UserCard.scss";

// HELPER
import { IonIcon } from "@ionic/react";
import { person, people } from "ionicons/icons";
import Button from "../../components/Button/Button";

import { Link } from "react-router-dom";

function click(n) {
  // turn off all user-group elements
  const group = document.getElementsByClassName("user-group");
  for (var i = 0; i < group.length; ++i) {
    var user = group[i];
    user.classList.remove("selected");
  }
  // turn on clicked user-group
  var curr_user = document.getElementById(n);
  curr_user.classList.add("selected");
}

class UserCard extends Component {
  render() {
    return (
      <div
        className={"user-group " + this.props.position}
        onClick={() => click(this.props.id)}
        id={this.props.id}
      >
        {/* position of icername v image matters for aligmnet */}

        {this.props.align == "right" ? (
          <div className="username right">
            <h2>{this.props.user ? this.props.user.display_name : "N/A"}</h2>
          </div>
        ) : (
          ""
        )}

        <img
          className={
            "profile-img medium " +
            this.props.align +
            " immovable navbar-element visible "
          }
          //   src="/assets/images/profile.jpg"
          src={
            this.props.user
              ? this.props.user.images.at(0).url
              : "/assets/images/error.png"
          }
          alt="spotify-logo"
        />

        {this.props.align == "left" ? (
          <div className="username">
            <h2>{this.props.user ? this.props.user.display_name : "N/A"}</h2>
          </div>
        ) : (
          ""
        )}

        {/* <div className="username">
          <h2>{this.props.user ? this.props.user.display_name : "N/A"}</h2>
        </div> */}
      </div>
    );
  }
}

export default UserCard; // Don’t forget to use export default!
