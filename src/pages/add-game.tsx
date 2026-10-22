import React, { useState } from "react";
import type { GameStatus } from "../types/game";
import { useGame } from "../context/game-context";
import { useNavigate } from "react-router";

export function AddGame() {
  const { addGame } = useGame();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("");
  const [status, setStatus] = useState<GameStatus>("Wishlist");
  const [cover, setCover] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addGame({
      id: crypto.randomUUID(),
      name: name,
      platform: platform,
      status: status,
      cover: cover,
      price: status === "Wishlist" && price !== "" ? Number(price) : null,
      progress: 0,
      rating: 0,
      review: "",
    });
    navigate("/");
  };

  return (
    <section className="h-full">
      <h1 className="text-3xl mb-6">Ajouter un jeu</h1>
      <form className="flex flex-col gap-3 w-1/2" onSubmit={handleSubmit}>
        <label>Nom du jeu :</label>
        <input
          className="bg-white text-black rounded-xl"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Plateforme du jeu :</label>
        <input
          className="bg-white text-black rounded-xl"
          type="text"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
        <label>Etat du jeu :</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as GameStatus)}
        >
          <option value="Wishlist">Wishlist</option>
          <option value="En cours">En cours</option>
          <option value="En pause">En pause</option>
          <option value="Terminé">Terminé</option>
        </select>
        <label>Cover du jeu :</label>
        <input
          className="bg-white text-black rounded-xl"
          type="url"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
        {status === "Wishlist" && (
          <input
            className="bg-white text-black rounded-xl"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Prix"
          />
        )}
        <button type="submit">Ajouter</button>
      </form>
    </section>
  );
}
