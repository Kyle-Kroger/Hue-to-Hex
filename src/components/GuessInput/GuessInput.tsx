import { IGuess } from "@/src/types";
import { getContrastYIQ, hexToHSL } from "@/src/utils";
import { useState } from "react";

interface Props {
  handleAddGuess: (guess: IGuess) => void;
}

const GuessInput = ({ handleAddGuess }: Props) => {
  const [guessHex, setGuessHex] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //TODO: Convert to hsl
    const hsl = hexToHSL(`#${guessHex}`);
    const contrastColor = getContrastYIQ(guessHex);
    const newGuess: IGuess = {
      hex: guessHex,
      hsl,
      textColor: contrastColor,
    };
    console.log(newGuess);
    handleAddGuess(newGuess);
    setGuessHex("");
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter a HEX Color:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guessHex}
        onChange={(event) => setGuessHex(event.target.value.toUpperCase())}
        pattern="[a-fA-F0-9]{6}"
        title="6 character HEX color (FF22CC)"
        maxLength={6}
        minLength={6}
      />
    </form>
  );
};

export default GuessInput;
