"use client";

import { use, useEffect, useState } from "react";

import { IColor } from "@/src/types";

import { GuessBoard } from "../GuessBoard";
import { GuessInput } from "../GuessInput";
import { SecretColor } from "../SecretColor";
import { getRandomColor } from "@/src/utils";
import { LoadingSpinner } from "../UI";

const initColor: IColor = {
  hex: "noColor",
  hsl: { hue: 0, saturation: 0, lightness: 0 },
  textColor: "#fff",
};

function Game() {
  const [guessArray, setGuessArray] = useState<IColor[]>([]);
  const [randomColor, setRandomColor] = useState<IColor>(initColor);

  useEffect(() => {
    setRandomColor(getRandomColor());
  }, []);

  const handleAddGuess = (newGuess: IColor) => {
    if (guessArray.length < 6) {
      setGuessArray((prev) => [...prev, newGuess]);
    } else {
      //todo
      //end game flag
    }
  };

  return (
    <>
      {randomColor.hex !== "noColor" && (
        <>
          <SecretColor randomColor={randomColor} />
          <GuessBoard guesses={guessArray} />
          <GuessInput handleAddGuess={handleAddGuess} />
        </>
      )}
      {randomColor.hex === "noColor" && <LoadingSpinner />}
    </>
  );
}

export default Game;
