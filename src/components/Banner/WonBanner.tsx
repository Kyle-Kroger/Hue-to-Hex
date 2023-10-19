import { Banner } from ".";

interface Props {
  numGuesses: number;
}

const WonBanner = ({ numGuesses }: Props) => {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numGuesses === 1 ? "1 guess" : `${numGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
};

export default WonBanner;
