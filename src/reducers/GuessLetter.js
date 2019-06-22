import { GUESS_LETTER } from "../actions/types";
import { words } from "../wordsToGuess";

//creating a balnk array that is displayed at the begnining
let selectedWord = words[Math.floor(Math.random() * words.length)];
let resultArray = [];

for (let i = 0; i < selectedWord.length; i++) {
  if (i === 2 || i === 4 || i === 6) {
    resultArray[i] = selectedWord[i] + " ";
  } else {
    resultArray[i] = "_ ";
  }
}

let gameStatus = "READY TO BEGIN";
let wrongGuess = 0;

//giving an initialState
let initialState = {
  selectedWord,
  resultArray,
  wrongGuess,
  gameStatus
};

//reducer changing the inital state based on new values
export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GUESS_LETTER:
      let result = showGuess(selectedWord, payload);
      return {
        ...state,
        selectedWord: result.selectedWord,
        resultArray: result.resultArray,
        wrongGuess: result.wrongGuess,
        gameStatus: result.gameStatus
      };

    //returns inital state
    default:
      return state;
  }
};

//changing the displayformat based on the guesses and well calculate status
function showGuess(word, guess) {
  if (resultArray.join("").toString() !== word && wrongGuess < 10) {
    gameStatus = "GAME IN PROGRESS";
    if (word.indexOf(guess) > -1) {
      for (let index = 0; index < word.length; index++) {
        if (word[index] === guess) {
          
          resultArray[index] = guess + " ";
        }
      }
      let result = JSON.parse( JSON.stringify(resultArray).replace(/"\s+|\s+"/g, '"'));
      if (result.join("").toString() === word) {
        gameStatus = "YOU WON!!";
      }
    } else {
      wrongGuess = wrongGuess + 1;
      if (wrongGuess === 10) {
        gameStatus = "YOU LOSE";
      }
    }
  }
  resultArray = Object.values(resultArray);
  return { selectedWord, resultArray, wrongGuess, gameStatus };
}
