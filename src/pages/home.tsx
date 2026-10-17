import { gameList } from "../data/games";
import GameCard from "../components/game-card";

export function Home() {
  return (
    <section className="h-full">
      <h1 className="text-3xl mb-6">Bibliothèque de jeux</h1>
      <div>
        {gameList.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
