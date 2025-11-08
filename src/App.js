import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Games from "./components/Games";
import GameDetail from "./components/GameDetail";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import SuccessMessage from "./components/SuccessMessage";
import "./index.css";

function App() {
  const [juegos, setJuegos] = useState([]);
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);
  const [cart, setCart] = useState([]);
  const [showContact, setShowContact] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    fetch("/data/games.json")
      .then((res) => res.json())
      .then((data) => setJuegos(data))
      .catch((err) => console.error("Error al cargar los juegos:", err));
  }, []);

  const addToCart = (game) => {
    if (!cart.find((item) => item.title === game.title)) setCart([...cart, game]);
    setJuegoSeleccionado(null);
  };

  const removeFromCart = (title) =>
    setCart(cart.filter((item) => item.title !== title));

  const finalizePurchase = () => {
    if (cart.length === 0) return;
    setCart([]);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen text-white font-sans relative">
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 brightness-[0.4]"
      >
        <source src="/videos/cyberpunk-bg.mp4" type="video/mp4" />
      </video>

      <Navbar cartCount={cart.length} />
      <Hero />
      <Games juegos={juegos} onSelect={setJuegoSeleccionado} />
      <AnimatePresence>
        {juegoSeleccionado && (
          <GameDetail
            juego={juegoSeleccionado}
            onClose={() => setJuegoSeleccionado(null)}
            onAdd={addToCart}
          />
        )}
      </AnimatePresence>
      <Cart cart={cart} onRemove={removeFromCart} onFinalize={finalizePurchase} />
      <Footer onContactClick={() => setShowContact(true)} />

      <AnimatePresence>{showContact && <ContactModal onClose={() => setShowContact(false)} />}</AnimatePresence>
      <AnimatePresence>{showSuccess && <SuccessMessage />}</AnimatePresence>
    </div>
  );
}

export default App;
