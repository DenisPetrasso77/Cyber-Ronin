import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

function App() {
  const [juegos, setJuegos] = useState([]);
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);
  const [cart, setCart] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showContact, setShowContact] = useState(false);


  const addToCart = (game) => {
    if (!cart.find((item) => item.title === game.title)) {
      setCart([...cart, game]);
    }
    setJuegoSeleccionado(null);
  };

  const removeFromCart = (title) => {
    setCart(cart.filter((item) => item.title !== title));
  };

  const finalizePurchase = () => {
    if (cart.length === 0) return;
    setShowSuccess(true);
    setCart([]);

    setTimeout(() => setShowSuccess(false), 3000);
  };

  useEffect(() => {
    fetch("/data/games.json")
      .then((res) => res.json())
      .then((data) => setJuegos(data))
      .catch((err) => console.error("Error al cargar los juegos:", err));
  }, []);

  // 🧮 Calcular total
  const total = cart.reduce((sum, item) => sum + (item.priceNumber || 0), 0);

  return (
    <div className="min-h-screen text-white font-sans relative">
      {/* 🎥 VIDEO DE FONDO */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 brightness-[0.4]"
      >
        <source src="/videos/cyberpunk-bg.mp4" type="video/mp4" />
      </video>

      {/* 🧭 NAVBAR */}
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
            Carrito 🛒 ({cart.length})
          </li>
        </ul>
      </nav>

      {/* 🏙️ HERO */}
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
  Sumergite en el universo gamer definitivo.
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

      {/* 🎮 SECCIÓN DE JUEGOS */}
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
              onClick={() => setJuegoSeleccionado(game)}
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

      {/* 🧾 MODAL DETALLE */}
      <AnimatePresence>
        {juegoSeleccionado && (
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
                src={juegoSeleccionado.img}
                alt={juegoSeleccionado.title}
                className="rounded-xl w-full h-64 object-cover mb-5"
              />
              <h2 className="text-3xl font-bold text-purple-400 mb-2">
                {juegoSeleccionado.title}
              </h2>
              <p className="text-gray-300 mb-3">{juegoSeleccionado.desc}</p>
              <p><span className="text-pink-400">Desarrolladora:</span> {juegoSeleccionado.dev}</p>
              <p><span className="text-pink-400">Género:</span> {juegoSeleccionado.genre}</p>
              <p className="mb-5"><span className="text-pink-400">Precio:</span> {juegoSeleccionado.price}</p>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => addToCart(juegoSeleccionado)}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 px-6 py-2 rounded-full font-semibold transition-all shadow-[0_0_25px_#a855f7]"
                >
                  Añadir al Carrito
                </button>
                <button
                  onClick={() => setJuegoSeleccionado(null)}
                  className="bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-full font-semibold transition-all shadow-[0_0_15px_#9333ea]"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🛒 CARRITO */}
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
                  onClick={() => removeFromCart(item.title)}
                  className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded-full shadow-[0_0_10px_#ef4444] transition"
                >
                  Eliminar
                </button>
              </div>
            ))}

            {/* TOTAL + FINALIZAR */}
            <div className="text-center mt-10">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">
                Total: ${total.toFixed(2)}
              </h3>
              <button
                onClick={finalizePurchase}
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-lg font-semibold shadow-[0_0_15px_#22c55e] transition"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="bg-black/60 backdrop-blur-md border-t border-purple-700/40 text-center py-10 mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-purple-400 drop-shadow-[0_0_15px_#a855f7]"
        >
          ⚔️ CyberRonin ⚔️
        </motion.h2>

        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Forjando el futuro del gaming desde el código y la pasión.  
          Explorá. Luchá. Evolucioná.  
        </p>

        <div className="flex justify-center gap-8 mt-6 text-lg">
          <a href="#" className="hover:text-purple-400 transition-all">
            Política de Privacidad
          </a>
          <a href="#" className="hover:text-purple-400 transition-all">
            Soporte
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowContact(true);
            }}
            className="hover:text-purple-400 transition-all"
          >
            Contacto
          </a>

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-gray-500 text-sm"
        >
          © {new Date().getFullYear()} CyberRonin.Todos los derechos reservados.
        </motion.p>
      </footer>

            {/* 🧑‍💻 MODAL DE CONTACTO */}
      <AnimatePresence>
        {showContact && (
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
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-purple-400 mb-6 drop-shadow-[0_0_15px_#a855f7]">
                  📬 Contacto
                </h2>

                <div className="space-y-4 mb-8">
                  <p className="text-gray-300 text-lg">
                    <span className="text-pink-400 font-semibold">Autor:</span> Franco Denis Petrasso
                  </p>
                  <p className="text-gray-300 text-lg">
                    <span className="text-pink-400 font-semibold">Email:</span> Denispetrasso77@gmail.com
                  </p>
                  <p className="text-gray-300 text-lg">
                    <span className="text-pink-400 font-semibold">LinkedIn:</span>{" "}
                    <a
                      href="https://www.linkedin.com/in/denis-petrasso"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-purple-400 transition-all underline underline-offset-4"
                    >
                      linkedin.com/in/denis-petrasso
                    </a>
                  </p>
                </div>

                <button
                  onClick={() => setShowContact(false)}
                  className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold transition-all shadow-[0_0_20px_#a855f7]"
                >
                  Cerrar
                </button>
              </motion.div>

          </motion.div>
        )}
      </AnimatePresence>


      {/* ✅ MENSAJE DE ÉXITO */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed bottom-10 right-10 bg-green-600 text-white px-6 py-3 rounded-xl shadow-[0_0_25px_#22c55e] font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
          >
            ✅ ¡Compra realizada con éxito! 🎮
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
