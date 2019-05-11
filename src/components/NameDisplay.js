import React, { Component } from "react";

class NameDisplay extends Component {
  render() {
    const { heroname, superpower } = this.props;
    return (
      <div className="px-4">
        <h3>Your Superhero Name is:</h3>
        <p className="h1 text-center">{heroname ? heroname : "???"}</p>
        <br /> <h3>Your Superpower is:</h3>
        <p className="h1 text-center mb-5">{superpower ? superpower : "???"}</p>
      </div>
    );
  }
}

export default NameDisplay;
