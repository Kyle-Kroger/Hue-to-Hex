import { useState } from "react";

const GuessInput = ({}) => {
  const [guess, setGuess] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(guess.toUpperCase());
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
