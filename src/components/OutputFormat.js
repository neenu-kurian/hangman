import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import '../styles/outputformat.scss';

class GameResult extends PureComponent {
  // to display the output format on screen
  render() {
    return (
      <div className="output-wrapper">
        <img className="hangman-image" src={`/images/${this.props.GuessLetter.wrongGuess}.png`} alt="hangman" />
        <br />
        <p>
Word:
          {this.props.GuessLetter.resultArray}
        </p>
        <p>
Incorrect guesses:
          {this.props.GuessLetter.wrongGuess}
        </p>
        <p>
Status :
          {` ${this.props.GuessLetter.gameStatus}`}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    GuessLetter: state.GuessLetter,
  };
}

export default connect(mapStateToProps)(GameResult);
