import { IColor } from "@/src/types";
import Guess from "./Guess";
import { range } from "@/src/utils";

interface Props {
  guesses: IColor[];
  secretColorHex: string;
}

const GuessBoard = ({ guesses, secretColorHex }: Props) => {
  return (
    <div className="guess-results">
      {range(5).map((i) => (
        <Guess key={i} guess={guesses[i]} secretColorHex={secretColorHex} />
      ))}
    </div>
  );
};

export default GuessBoard;
