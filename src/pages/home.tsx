import GameCard from "../components/game-card";
import { useGame } from "../context/game-context";

export function Home() {
  const { games } = useGame();
  return (
    <section className="h-full">
      <h1 className="text-3xl mb-6">Bibliothèque de jeux</h1>
      <div>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
