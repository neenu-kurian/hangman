import React, { Component } from 'react';
import Keyboard from './components/Keyboard';
import GameResult from './components/OutputFormat';
import './styles/App.scss';

class App extends Component {
  restartGame() {
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <div className="title">
          <h1 className="App-title">Hangman</h1>
        </div>
        <GameResult />
        <Keyboard />
        <div className="button-wrapper">
          <button className="new-game-button" onClick={this.restartGame}>
            New Game
          </button>
        </div>
      </div>
    );
  }
}

export default App;
