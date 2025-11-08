// src/components/GameDetail.jsx
import React from "react";
import { motion } from "framer-motion";

const GameDetail = ({ juego, onClose, onAdd }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-900 rounded-2xl p-8 max-w-lg w-full shadow-[0_0_40px_#a855f7]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={juego.img}
          alt={juego.title}
          className="rounded-xl w-full h-64 object-cover mb-5"
        />
        <h2 className="text-3xl font-bold text-purple-400 mb-2">
          {juego.title}
        </h2>
        <p className="text-gray-300 mb-3">{juego.desc}</p>
        <p>
          <span className="text-pink-400">Desarrolladora:</span> {juego.dev}
        </p>
        <p>
          <span className="text-pink-400">Género:</span> {juego.genre}
        </p>
        <p className="mb-5">
          <span className="text-pink-400">Precio:</span> {juego.price}
        </p>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={() => onAdd(juego)}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 px-6 py-2 rounded-full font-semibold transition-all shadow-[0_0_25px_#a855f7]"
          >
            Añadir al Carrito
          </button>
          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-full font-semibold transition-all shadow-[0_0_15px_#9333ea]"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GameDetail;
