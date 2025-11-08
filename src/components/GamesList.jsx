// src/components/GamesList.jsx
import React from "react";

const GameCard = ({ game }) => {
  return (
    <article className="bg-black/40 border border-purple-500/20 rounded-lg p-4 flex gap-4 items-center">
      {game.image && (
        <img src={game.image} alt={game.title} className="w-24 h-16 object-cover rounded-md" />
      )}
      <div>
        <h3 className="text-lg font-semibold text-purple-300">{game.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-2">{game.description}</p>
      </div>
    </article>
  );
};

const GamesList = ({ games = [] }) => {
  if (!games.length) {
    return <p className="text-center text-gray-400 py-8">Todavía no hay juegos que coincidan.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {games.map((g) => (
        <GameCard key={g.id} game={g} />
      ))}
    </div>
  );
};

export default GamesList;
