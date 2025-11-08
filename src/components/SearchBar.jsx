// src/components/SearchBar.jsx
import React, { useState, useEffect } from "react";

const SearchBar = ({ query, setQuery, total }) => {
  const [local, setLocal] = useState(query || "");

  // debounce simple: actualiza setQuery 300ms después de dejar de tipear
  useEffect(() => {
    const t = setTimeout(() => {
      setQuery(local);
    }, 300);
    return () => clearTimeout(t);
  }, [local, setQuery]);

  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      <div className="relative">
        <input
          type="search"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          placeholder="Buscar juegos, p.ej. 'shooter', 'aventura'..."
          className="w-full pl-4 pr-12 py-3 rounded-full bg-black/50 border border-purple-600/40 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          aria-label="Buscar juegos"
        />
        <button
          onClick={() => {
            setLocal("");
            setQuery("");
          }}
          aria-label="Limpiar búsqueda"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-300 hover:text-gray-100"
        >
          {local ? "✕" : "🔍"}
        </button>
      </div>

      <p className="mt-2 text-sm text-gray-300">
        Mostrando <span className="font-semibold text-purple-300">{total}</span> resultados
      </p>
    </div>
  );
};

export default SearchBar;
