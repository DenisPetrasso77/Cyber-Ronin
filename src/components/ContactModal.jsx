// src/components/ContactModal.jsx
import React from "react";
import { motion } from "framer-motion";

const ContactModal = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-900 rounded-2xl p-8 max-w-md w-full shadow-[0_0_40px_#a855f7] text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <h2 className="text-3xl font-bold text-purple-400 mb-6">
          📬 Contacto
        </h2>
        <p className="text-gray-300 text-lg mb-2">
          <span className="text-pink-400 font-semibold">Autor:</span> Franco Denis Petrasso
        </p>
        <p className="text-gray-300 text-lg mb-2">
          <span className="text-pink-400 font-semibold">Email:</span> Denispetrasso77@gmail.com
        </p>
        <p className="text-gray-300 text-lg mb-2">
          <span className="text-pink-400 font-semibold">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/denis-petrasso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 underline"
          >
            linkedin.com/in/denis-petrasso
          </a>
        </p>

        <button
          onClick={onClose}
          className="bg-purple-600 hover:bg-purple-700 mt-5 px-6 py-2 rounded-full font-semibold transition-all"
        >
          Cerrar
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
