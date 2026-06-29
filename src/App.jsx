import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Catalogo from './views/Catalogo';
import Carrito from './views/Carrito';
import Admin from './views/Admin';
import Contacto from './views/Contacto';
import Documentacion from './views/Documentacion';

export default function App(){
  return <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/documentacion" element={<Documentacion />} />
      </Routes>
      <a href="https://wa.me/51999999999" target="_blank" className="fixed right-5 bottom-5 z-50 bg-emerald-500 text-white w-16 h-16 rounded-full grid place-items-center text-3xl shadow-2xl">☘</a>
      <Footer />
    </BrowserRouter>
  </CartProvider>;
}
