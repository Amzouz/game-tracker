import { createContext, useContext, useState, type ReactNode } from "react";
import type { Game } from "../types/game";
import { gameList } from "../data/games";

type GameContextType = {
  games: Game[];
  addGame: (newGame: Game) => void;
  deleteGame: (id: string) => void;
};

const GamesContext = createContext<GameContextType | null>(null);

export function GamesProvider({ children }: { children: ReactNode }) {
  const [games, setGames] = useState<Game[]>(gameList);

  const addGame = (newGame: Game) => setGames([...games, newGame]);

  const deleteGame = (id: string) =>
    setGames(games.filter((game) => game.id !== id));

  return (
    <GamesContext.Provider value={{ games, addGame, deleteGame }}>
      {children}
    </GamesContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GamesContext);
  if (!context) {
    throw new Error("useGame doit être utilisé dans un GameProvider");
  }
  return context;
}
