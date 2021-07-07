import { GUESS_LETTER } from './types';

// action creater takes the letter that is pressed and returns it back as payloadager
export default function guessLetter(letter) {
  return {
    type: GUESS_LETTER,
    payload: letter,
  };
}
