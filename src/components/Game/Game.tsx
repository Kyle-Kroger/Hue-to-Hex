"use client";

import { useState } from "react";

import { IGuess } from "@/src/types";

import { GuessBoard } from "../GuessBoard";
import { GuessInput } from "../GuessInput";

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
