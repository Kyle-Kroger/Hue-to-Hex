import { IColor, ICheckedCharacter } from "@/src/types";
import styles from "./guess.module.css";
import { checkGuess } from "../../game-helpers";
import { range } from "@/src/utils";
import GuessCell from "./GuessCell";

interface Props {
  guess: IColor;
  secretColorHex: string;
}

const Guess = ({ guess, secretColorHex }: Props) => {
  const guessStyle = {
    backgroundColor: `#${guess ? guess.hex : "#FFF"}`,
    color: guess ? guess.textColor : "#000",
  };

  let checkedGuess: ICheckedCharacter[] | null = null;
  if (guess) {
    checkedGuess = checkGuess(guess.hex, secretColorHex);
  }

  return (
    <>
      <p className={styles.hslGuess} style={guessStyle}>
        {guess
          ? `H: ${guess.hsl.hue} S: ${guess.hsl.saturation} L:${guess.hsl.lightness}`
          : ""}
      </p>
      <div className={styles.guess}>
        {range(6).map((i) => {
          const character = guess ? guess.hex.split("")[i] : "";
          const status = checkedGuess ? checkedGuess[i].status : "";
          return <GuessCell key={i} character={character} status={status} />;
        })}
      </div>
    </>
  );
};

export default Guess;
