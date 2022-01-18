import React, { Component } from "react";

class CogCalc extends Component {
  state = {
    frontCog: 0,
    rearCog: 0,
  };
  render() {
    return (
      <div data-testid="cog-component">
        <div data-testid="cogs">
          <span data-testid="front-cog-1">{this.state.frontCog}</span>
          <span data-testid="front-cog-discription">{this.FormatCogSize()}</span>
          <span>{this.state.rearCog}</span>
        </div>
        <div></div>
      </div>
    );
  }

  FormatCogSize() {
    const { frontCog } = this.state;
    return frontCog < 50 ? "Going Easy" : "Pushing Hard";
  }
}

export default CogCalc;
