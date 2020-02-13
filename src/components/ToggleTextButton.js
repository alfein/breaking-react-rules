import React from "react";
import autobind from "class-autobind";

class ToggleTextButton extends React.Component {
  constructor(props) {
    super(props);

    this.showText = true;
    this.commandCallbackConverter = props.commandCallbackConverter;

    this.state = {
      showText: this.showText
    };

    autobind(this);

    if(this.commandCallbackConverter) {
      this.commandCallbackConverter.onGetState = () => this.getState();
      this.commandCallbackConverter.onToggleShowText = () => this.toggleShowText();
    }
  }

  getState() {
    console.log("Reading state", JSON.stringify(this.state, null, 2));
    return this.state;
  }

  toggleShowText() {
    console.log("toggleCalled");

    this.setState(oldState => {
      const newState = { showText: !oldState.showText };
      this.showText = newState.showText;
      console.log("State Changing", JSON.stringify(newState, null, 2));

      if (typeof this.props.onStateChanged === "function") {
        setTimeout(() => this.props.onStateChanged(this), 0);
      }

      return newState;
    });
  }

  render() {
    return (
      <button onClick={this.toggleShowText}>
        {this.state.showText && "Text"}
        {!this.state.showText && "No Text"}
      </button>
    );
  }
}

export default ToggleTextButton;
