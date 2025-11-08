// src/components/Navbar.jsx
import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-black/50 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <h1
        className="text-3xl font-extrabold text-purple-400 drop-shadow-[0_0_10px_#a855f7] cursor-pointer hover:text-purple-300 transition-all"
        onClick={() =>
          document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        CyberRonin
      </h1>

      <ul className="flex gap-8 text-lg">
        <li
          className="hover:text-purple-400 cursor-pointer"
          onClick={() =>
            document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Inicio
        </li>
        <li
          className="hover:text-purple-400 cursor-pointer"
          onClick={() =>
            document.getElementById("juegos")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Juegos
        </li>
        <li
          className="hover:text-purple-400 cursor-pointer"
          onClick={() =>
            document.getElementById("carrito")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Carrito 🛒 ({cartCount})
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
