interface Props {
  guesses: string[];
}

const GuessBoard = ({ guesses }: Props) => {
  return (
    <div className="guess-results">
      {guesses.map((guess, i) => (
        <p key={i} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
};

export default GuessBoard;
