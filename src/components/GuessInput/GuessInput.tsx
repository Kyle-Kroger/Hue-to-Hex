import { useState } from "react";

const GuessInput = ({}) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(input.toUpperCase());
    setInput("");
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter a HEX Color:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        pattern="[a-fA-f0-9]{6}"
        title="6 character HEX color (FF22CC)"
      />
    </form>
  );
};

export default GuessInput;
