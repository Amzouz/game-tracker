export type GameStatus = "Terminé" | "En cours" | "En pause" | "Wishlist";

export type Game = {
  id: string;
  name: string;
  platform: string;
  status: GameStatus;
  progress: number;
  rating: number;
  review: string;
  price: number | null;
  cover: string;
};
