"use client";

import { use, useEffect, useState } from "react";

import { IColor } from "@/src/types";

import { GuessBoard } from "../GuessBoard";
import { GuessInput } from "../GuessInput";
import { SecretColor } from "../SecretColor";
import { getRandomColor } from "@/src/utils";
import { LoadingSpinner } from "../UI";
import { STATUS, NUM_OF_GUESSES_ALLOWED } from "@/src/constants";
import { LostBanner, WonBanner } from "../Banner";

const initColor: IColor = {
  hex: "noColor",
  hsl: { hue: 0, saturation: 0, lightness: 0 },
  textColor: "#fff",
};

function Game() {
  const [guessArray, setGuessArray] = useState<IColor[]>([]);
  const [randomColor, setRandomColor] = useState<IColor>(initColor);
  const [status, setStatus] = useState(STATUS.ONGOING);

  useEffect(() => {
    setRandomColor(getRandomColor());
  }, []);

  const handleAddGuess = (newGuess: IColor) => {
    const newGuessArray = [...guessArray, newGuess];
    if (newGuessArray.length <= NUM_OF_GUESSES_ALLOWED) {
      setGuessArray(newGuessArray);
    }
    console.log(newGuess.hex, randomColor.hex);
    if (newGuess.hex === randomColor.hex) {
      setStatus(STATUS.WON);
    }

    if (
      newGuess.hex !== randomColor.hex &&
      newGuessArray.length === NUM_OF_GUESSES_ALLOWED
    ) {
      setStatus(STATUS.LOST);
    }
  };

  return (
    <>
      {randomColor.hex !== "noColor" && (
        <>
          <SecretColor randomColor={randomColor} />
          <GuessBoard guesses={guessArray} secretColorHex={randomColor.hex} />
          <GuessInput handleAddGuess={handleAddGuess} />
          {status === STATUS.WON && (
            <WonBanner numGuesses={guessArray.length} />
          )}
          {status === STATUS.LOST && <LostBanner answer={randomColor.hex} />}
        </>
      )}
      {randomColor.hex === "noColor" && <LoadingSpinner />}
    </>
  );
}

export default Game;
