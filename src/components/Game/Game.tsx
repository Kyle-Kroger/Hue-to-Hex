"use client";

import { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { IGuess } from "@/src/types";

import { GuessBoard } from "../GuessBoard";
import { GuessInput } from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessArray, setGuessArray] = useState<IGuess[]>([]);

  const handleAddGuess = (newGuess: IGuess) => {
    if (guessArray.length < 6) {
      setGuessArray((prev) => [...prev, newGuess]);
    } else {
      //todo
      //end game flag
    }
  };

  return (
    <>
      <GuessBoard guesses={guessArray} />
      <GuessInput handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
