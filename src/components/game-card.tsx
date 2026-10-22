import { Trash2 } from "lucide-react";
import { Gamepad2 } from "lucide-react";
import { useGame } from "../context/game-context";
import type { Game } from "../types/game";
import { useState } from "react";

type GameCardProps = { game: Game };

export default function GameCard({ game }: GameCardProps) {
  const { deleteGame } = useGame();
  const [imgError, setImgError] = useState(false);
  return (
    <article className="flex flex-row gap-6 border-2 border-primary-300 rounded-3xl p-2">
      <div className="flex gap-4">
        {game.cover && !imgError ? (
          <img
            src={game.cover}
            alt={game.name}
            onError={() => setImgError(true)}
            className="w-28 h-28 rounded-2xl"
          />
        ) : (
          <div className="w-28 h-28 rounded-2xl bg-primary-800 flex items-center justify-center">
            <Gamepad2 size={40} />
          </div>
        )}

        <div>
          <h3 className="font-bold text-lg">{game.name}</h3>
          <p>{game.platform}</p>
          <p>{game.status}</p>
        </div>
      </div>
      <div>
        <p>{game.progress}</p>
        <p>{game.rating}</p>
        {game.price !== null && <p>{game.price} €</p>}
        <p>{game.review}</p>
      </div>
      <button
        type="button"
        onClick={() => deleteGame(game.id)}
        className="cursor-pointer"
      >
        <Trash2 />
      </button>
    </article>
  );
}
