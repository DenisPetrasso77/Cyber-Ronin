import React from "react";

const Footer = ({ onContactClick }) => {
  return (
    <footer className="bg-black/60 backdrop-blur-md py-6 text-center border-t border-purple-500/30">
      <p className="text-gray-400 text-sm mb-2">
        © 2025 <span className="text-purple-400 font-semibold">Cyber Ronin</span>. Todos los derechos reservados.
      </p>

      <p
        className="text-pink-400 font-semibold cursor-pointer hover:text-pink-300 transition"
        onClick={onContactClick}
      >
        Contacto
      </p>
    </footer>
  );
};

export default Footer;
