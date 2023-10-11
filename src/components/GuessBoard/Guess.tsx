import { IColor } from "@/src/types";
import styles from "./guess.module.css";
import { range } from "@/src/utils";

interface Props {
  guess: IColor;
  type: string;
}

const Guess = ({ guess, type }: Props) => {
  const guessStyle = {
    backgroundColor: `#${guess ? guess.hex : "#FFF"}`,
    color: guess ? guess.textColor : "#000",
  };
  if (type === "hsl") {
    return (
      <p className={styles.hslGuess} style={guessStyle}>
        {guess ? guess.hex : ""}
      </p>
    );
  }

  return (
    <div className={styles.guess}>
      {range(6).map((i) => (
        <span
          key={i}
          className="cell"
          style={{ color: guess ? guess.textColor : "#000" }}
        >
          {guess ? guess.hex[i] : ""}
        </span>
      ))}
    </div>
  );
};

export default Guess;
