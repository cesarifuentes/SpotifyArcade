import React, { Component } from "react";
import "./Button.scss";

import { Link } from "react-router-dom";

class Button extends Component {
  render() {
    // ...
    return (
      <Link to={this.props.to}>
        <button className={"button " + this.props.class}>
          <p>{this.props.text}</p>
        </button>
        <br />
        {/* <p>{JSON.stringify(data, null, 4)}</p> */}
      </Link>
    );
  }
}

export default Button; // Don’t forget to use export default!
