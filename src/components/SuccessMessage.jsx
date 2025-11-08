// src/components/SuccessMessage.jsx
import React from "react";
import { motion } from "framer-motion";

const SuccessMessage = () => {
  return (
    <motion.div
      className="fixed bottom-10 right-10 bg-green-600 text-white px-6 py-3 rounded-xl shadow-[0_0_25px_#22c55e] font-semibold"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4 }}
    >
      ✅ ¡Compra realizada con éxito! 🎮
    </motion.div>
  );
};

export default SuccessMessage;
