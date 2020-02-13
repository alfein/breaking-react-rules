import React from "react";
import "./App.css";
import ToggleTextButton from "./components/ToggleTextButton";
import autobind from "class-autobind";
import CommandCallbackConverter from "./CommandCallbackConverter"

class App extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);

    this.commandCallbackConverter = CommandCallbackConverter;
  }

  componentDidMount() {
    this.setMyStateFromChildState();
  }

  handleToggled() {
    this.setMyStateFromChildState();
  }

  setMyStateFromChildState() {
    console.warn(
      "OMG, I am reading the state of my child component, React people would not like that."
    );
    this.setState({ toggleButtonState: this.commandCallbackConverter.getState() });
  }

  toggleOtherButton() {
    console.warn(
      "OMG, I am calling a function on the child component which actually changes it state! React people would not like that."
    );
    this.commandCallbackConverter.toggleShowText();
  }

  render() {
    return (
      <div className="App">
        <ToggleTextButton commandCallbackConverter={this.commandCallbackConverter}
          onStateChanged={this.handleToggled}
        />
        <div>
          <code>{"My State:" + JSON.stringify(this.state, null, 2)}</code>
        </div>

        <button onClick={this.toggleOtherButton}>
          Toggle other button because I can
        </button>
      </div>
    );
  }
}

export default App;
