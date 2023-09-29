import { IGuess } from "@/src/types";
import { useState } from "react";

interface Props {
  handleAddGuess: (guess: IGuess) => void;
}

const GuessInput = ({ handleAddGuess }: Props) => {
  const [guess, setGuess] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //TODO: Convert to hsl
    //TODO: Calculate contrast
    const newGuess: IGuess = { hex: guess, hsl: "TODO", textColor: "#000" };
    handleAddGuess(newGuess);
    setGuess("");
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
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        pattern="[a-fA-F0-9]{6}"
        title="6 character HEX color (FF22CC)"
        maxLength={6}
        minLength={6}
      />
    </form>
  );
};

export default GuessInput;
