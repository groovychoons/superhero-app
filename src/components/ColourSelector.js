import React, { Component } from "react";

// Individual colour block component
class ColourBlock extends Component {
  render() {
    // Destructuring props
    const { name, selectedColour, colour, onSelect } = this.props;

    let colourBlock;

    // Display white border if colour is selected
    if (name === selectedColour) {
      colourBlock = (
        <svg width="60" height="60" onClick={() => onSelect(name)}>
          <rect
            x="4"
            y="4"
            rx="10"
            ry="10"
            width="46"
            height="46"
            style={{
              fill: colour,
              stroke: "#fff",
              strokeWidth: "4"
            }}
          />
        </svg>
      );
    }
    // Display without border if colour is not selected
    else {
      colourBlock = (
        <svg width="60" height="60" onClick={() => onSelect(name)}>
          <rect
            x="2"
            y="2"
            rx="10"
            ry="10"
            width="50"
            height="50"
            style={{ fill: colour, cursor: "pointer" }}
          />
        </svg>
      );
    }

    return <React.Fragment>{colourBlock}</React.Fragment>;
  }
}

// Component to generate six colour blocks
const ColourSelector = props => {
  return (
    <div className="py-4">
      <h3 className="h4">1. Pick your superhero's colour:</h3>
      <div style={{ textAlign: "center" }}>
        <ColourBlock
          onSelect={props.onSelect}
          name={"Scarlet"}
          colour={"#861c20"}
          selectedColour={props.colour}
        />
        <ColourBlock
          onSelect={props.onSelect}
          name={"Sky"}
          colour={"#447c8f"}
          selectedColour={props.colour}
        />
        <ColourBlock
          onSelect={props.onSelect}
          name={"Golden"}
          colour={"#a35d2e"}
          selectedColour={props.colour}
        />
        <ColourBlock
          onSelect={props.onSelect}
          name={"Emerald"}
          colour={"#427533"}
          selectedColour={props.colour}
        />
        <ColourBlock
          onSelect={props.onSelect}
          name={"Pink"}
          colour={"#b10e50"}
          selectedColour={props.colour}
        />
        <ColourBlock
          onSelect={props.onSelect}
          name={"Lavender"}
          colour={"#71598f"}
          selectedColour={props.colour}
        />
      </div>
    </div>
  );
};

export default ColourSelector;
