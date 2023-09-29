import { IGuess } from "@/src/types";
import Guess from "./Guess";
import { range } from "@/src/utils";

interface Props {
  guesses: IGuess[];
}

const GuessBoard = ({ guesses }: Props) => {
  return (
    <div className="guess-results">
      {range(3).map((i) => (
        <Guess key={i} guess={guesses[i]} type="hsl" />
      ))}
      {range(3).map((i) => (
        <Guess key={i} guess={guesses[i + 3]} type="hex" />
      ))}
    </div>
  );
};

export default GuessBoard;
