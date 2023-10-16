import styles from "./guess.module.css";
import { IColor } from "@/src/types";

import { range } from "@/src/utils";

interface Props {
  character: string;
  status: string;
}

const GuessCell = ({ character, status }: Props) => {
  const className =
    character !== "" ? `${styles.cell} ${styles[status]}` : styles.cell;
  return <span className={className}>{character}</span>;
};

export default GuessCell;
