import { Header } from "../src/components/Header";
import { Game } from "../src/components/Game";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}
