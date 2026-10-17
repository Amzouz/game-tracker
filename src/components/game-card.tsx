import type { Game } from "../types/game";

export default function GameCard({ game }: { game: Game }) {
  return (
    <article>
      <div>
        <img src={game.cover} alt={game.name} className="w-30 h-30" />
        <h3>{game.name}</h3>
        <p>{game.platform}</p>
        <p>{game.status}</p>
      </div>
      <div>
        <p>{game.progress}</p>
        <p>{game.rating}</p>
        {game.price && <p>{game.price}</p>}
        <p>{game.review}</p>
      </div>
    </article>
  );
}
