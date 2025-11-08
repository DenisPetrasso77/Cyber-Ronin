// src/components/Cart.jsx
import React from "react";

const Cart = ({ cart, onRemove, onFinalize }) => {
  const total = cart.reduce((sum, item) => sum + (item.priceNumber || 0), 0);

  return (
    <section id="carrito" className="bg-gradient-to-b from-gray-900 to-black px-10 pt-20 pb-10">
      <h2 className="text-4xl font-bold text-purple-300 mb-10 text-center drop-shadow-[0_0_20px_#a855f7]">
        🛒 Tu Carrito
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-400 text-center">
          Todavía no agregaste ningún juego.
        </p>
      ) : (
        <div className="space-y-6 max-w-3xl mx-auto">
          {cart.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-black/50 border border-purple-500/30 rounded-2xl p-5 shadow-[0_0_20px_#9333ea]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-purple-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.genre}</p>
                  <p className="text-pink-400 font-bold mt-1">{item.price}</p>
                </div>
              </div>

              <button
                onClick={() => onRemove(item.title)}
                className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full shadow-[0_0_10px_#ef4444] transition"
              >
                Eliminar
              </button>
            </div>
          ))}

          <div className="text-center mt-10">
            <h3 className="text-2xl font-bold text-pink-400 mb-4">
              Total: ${total.toFixed(2)}
            </h3>
            <button
              onClick={onFinalize}
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-lg font-semibold shadow-[0_0_15px_#22c55e] transition"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
