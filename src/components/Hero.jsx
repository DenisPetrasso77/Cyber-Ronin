// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="h-screen flex flex-col justify-center items-center text-center px-5"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-6xl font-bold text-purple-300 drop-shadow-[0_0_25px_#a855f7] mb-6"
      >
        Bienvenido a CyberRonin
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="text-gray-200 text-2xl max-w-2xl mb-10 leading-relaxed drop-shadow-[0_0_10px_#a855f7]"
      >
        Sumergite en el universo gamer definitivo. Explorá juegos, conectá con otros
        jugadores y viví la experiencia del gaming sin límites.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.6 }}
        onClick={() =>
          document.getElementById("juegos")?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold text-lg transition-all shadow-[0_0_20px_#9333ea] hover:shadow-[0_0_35px_#a855f7]"
      >
        Explorar Juegos
      </motion.button>
    </section>
  );
};

export default Hero;
