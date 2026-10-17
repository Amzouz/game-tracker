import type { Game } from "../types/game";

export const gameList: Game[] = [
  {
    id: "1",
    name: "Zelda Breath Of The Wild",
    platform: "Wii U",
    status: "Terminé",
    progress: 100,
    rating: 9,
    review:
      "Très bon jeu, immersif, malgré que certaines musiques ne soient pas iconiques",
    price: null,
    cover:
      "https://assets.nintendo.eu/image/private/f_auto,c_limit,w_1920,q_auto:low/iga5dwhcp6dhlpatxcwc",
  },
  {
    id: "2",
    name: "Zelda Tears Of The Kingdom",
    platform: "Switch Lite",
    status: "En cours",
    progress: 25,
    rating: 8,
    review: "En cours d'analyse",
    price: null,
    cover:
      "https://images.launchbox-app.com/16e72707-5e1f-4277-8abb-bfba6917c003.jpg",
  },
];
