// src/components/Games.jsx
import React from "react";
import { motion } from "framer-motion";

const Games = ({ juegos, onSelect }) => {
  return (
    <section
      id="juegos"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 px-10 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-purple-300 text-center mb-12 drop-shadow-[0_0_25px_#a855f7] animate-pulse"
      >
        Más Jugado
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {juegos.map((game, index) => (
          <motion.div
            key={index}
            onClick={() => onSelect(game)}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-black/60 border border-pink-500/30 rounded-2xl shadow-[0_0_20px_#ec4899] hover:shadow-[0_0_40px_#ec4899] transition-all duration-300 cursor-pointer"
          >
            <img
              src={game.img}
              alt={game.title}
              className="rounded-t-2xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-pink-300">
                {game.title}
              </h3>
              <p className="text-gray-300 mt-2 text-sm">{game.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Games;
