import type { Game } from "../types/game";

type GameCardProps = { game: Game };

export default function GameCard({ game }: GameCardProps) {
  return (
    <article className="flex flex-row gap-6 border-2 border-primary-300 rounded-3xl p-2">
      <div className="flex gap-4">
        <img
          src={game.cover}
          alt={game.name}
          className="w-28 h-28 rounded-2xl"
        />
        <div>
          <h3 className="font-bold text-lg">{game.name}</h3>
          <p>{game.platform}</p>
          <p>{game.status}</p>
        </div>
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
