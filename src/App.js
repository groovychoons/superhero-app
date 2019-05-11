import React, { Component } from "react";

import ColourSelector from "./components/ColourSelector";
import NameDisplay from "./components/NameDisplay";

import "./App.css";

/*
- Build a simple single page app that generates and displays the name of a fictional superhero / villain for the user. (Optional) You could also include a special power.

- Try using any combination of the following;  gender, favourite colour, favourite activity or favourite animal.
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colour: "",
      animal: "",
      activity: "",
      heroname: "",
      superpower: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    this.setState({
      heroname: this.state.colour + " " + this.state.animal,
      superpower: this.state.activity,
      colour: "",
      animal: "",
      activity: ""
    });
  }

  onSelect(colour) {
    this.setState({
      colour: colour
    });
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <header className="app-header">
            <h1 className="h2 py-5">
              SuperWho? - Generate Your Superhero Name!
            </h1>
          </header>
          <div className="row main">
            <div className="col-md-6">
              <form onSubmit={this.onSubmit} className="col-md-10">
                <ColourSelector
                  onSelect={this.onSelect}
                  colour={this.state.colour}
                />

                <div className="form-group mb-4">
                  <h3 className="h4">2. What's your favourite animal:</h3>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Type your favourite animal"
                    name="animal"
                    value={this.state.animal}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group mb-4">
                  <h3 className="h4">3. Select your favourite activity:</h3>
                  <select
                    className="form-control form-control-lg"
                    name="activity"
                    value={this.state.activity}
                    onChange={this.onChange}
                  >
                    <option value="" hidden>
                      Please select one
                    </option>
                    <option value="Time Travel">Netflix</option>
                    <option value="Water Breathing">Swimming</option>
                    <option value="Superhuman Speed">Running</option>
                    <option value="Flying">Travelling</option>
                    <option value="Mind Control">Socialising</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-dark btn-lg mb-5">
                  Generate your name!
                </button>
              </form>
            </div>

            <div className="col-md-6">
              <NameDisplay
                heroname={this.state.heroname}
                superpower={this.state.superpower}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
