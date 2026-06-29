import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatearSoles } from '../utils/helpers';

export default function Navbar() {
  const { totalItems, total } = useCart();
  
  // Mejora: Se añade una transición suave y un sutil borde inferior dinámico para el enlace activo
  const navClass = ({ isActive }) => 
    `font-bold transition-colors duration-200 hover:text-red-600 pb-1 border-b-2 ${
      isActive ? 'text-red-600 border-red-600' : 'text-slate-800 border-transparent hover:border-red-600/30'
    }`;

  return (
    <header className="bg-white/95 backdrop-blur sticky top-0 z-50 shadow-sm">
      <section className="max-w-7xl mx-auto px-4 py-3 grid lg:grid-cols-[230px_1fr_340px] gap-4 items-center">
        
        {/* Logo con animación hover */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo-super-sport.png" alt="Logo Super Sport" className="w-20 h-16 object-contain transition-transform group-hover:scale-105" />
          <span className="text-2xl font-black text-blue-900 hidden sm:block tracking-tight">Super Sport</span>
        </Link>
        
        {/* Buscador con mejor feedback visual */}
        <div className="hidden lg:block">
          <input 
            className="w-full rounded-full border border-slate-200 px-5 py-2.5 shadow-inner bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400 text-sm" 
            placeholder="Buscar productos en Super Sport..." 
          />
        </div>
        
        {/* Accesos rápidos con diseño tipo píldora (Pills) */}
        <div className="flex justify-end items-center gap-4 text-sm">
          <a 
            className="font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5" 
            href="https://wa.me/51999999999" 
            target="_blank"
            rel="noreferrer"
          >
            <span>💬</span> WhatsApp
          </a>
          
          {/* Carrito estilizado con burbuja de notificación inteligente */}
          <Link 
            to="/carrito" 
            className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-900 px-4 py-1.5 rounded-full font-black transition-colors"
          >
            <span className="relative text-base">
              🛒
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </span>
            <span className="text-xs font-bold text-slate-500 ml-1 hidden sm:inline">Total:</span>
            <span>{formatearSoles(total)}</span>
          </Link>
        </div>
      </section>
      
      {/* Menú de navegación inferior con fondo suavizado */}
      <nav className="border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap gap-x-8 gap-y-2 justify-center text-sm">
          <NavLink className={navClass} to="/">Inicio</NavLink>
          <NavLink className={navClass} to="/catalogo">Catálogo</NavLink>
          <NavLink className={navClass} to="/admin">Admin</NavLink>
          <NavLink className={navClass} to="/contacto">Contacto</NavLink>
          <NavLink className={navClass} to="/documentacion">Documentación</NavLink>
          <NavLink className={navClass} to="/carrito">Carrito</NavLink>
        </div>
      </nav>
    </header>
  );
}