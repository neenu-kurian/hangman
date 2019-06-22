import React, { PureComponent } from "react";
import { alphabets } from "../keyboard";
import "../styles/keyboard.scss"
import { connect } from "react-redux";
import guessLetter from "../actions/GuessLetter";

export class Keyboard extends PureComponent {
  callKeyPress(value) {
    this.props.onKeyPress(value); //calling the action creator on keypress
  }

  //to render each key of keyboard on screen
  renderLetter(value) {
    return (
      <button
        className="keyboard-keys"
        color="#841584"
        key={value}
        onClick={()=>{ this.callKeyPress(value)}}
      >
        {value}
      </button>
    );
  }

  //code to display keyboard on screen
  render() {
    return (<div className="keyboard-wrapper">{alphabets.map(this.renderLetter.bind(this))}</div>);
  }
}

// calling reducer based on the action
function mapDispatchToProps(dispatch) {
  return {
    onKeyPress: value => dispatch(guessLetter(value))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Keyboard);
