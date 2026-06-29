import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatearSoles } from '../utils/helpers';

export default function Navbar() {
  const { totalItems, total } = useCart();
  const navClass = ({ isActive }) => `font-bold hover:text-red-600 ${isActive ? 'text-red-600' : 'text-slate-800'}`;
  return (
    <header className="bg-white/95 backdrop-blur sticky top-0 z-50 shadow-sm">
      <section className="max-w-7xl mx-auto px-4 py-3 grid lg:grid-cols-[230px_1fr_260px] gap-4 items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo-super-sport.png" alt="Logo Super Sport" className="w-20 h-16 object-contain" />
          <span className="text-2xl font-black text-blue-900 hidden sm:block">Super Sport</span>
        </Link>
        <div className="hidden lg:block">
          <input className="w-full rounded-full border border-slate-200 px-5 py-3 shadow-inner" placeholder="Buscar productos en Super Sport..." />
        </div>
        <div className="flex justify-end gap-4 text-sm">
          <a className="font-bold text-emerald-600" href="https://wa.me/51999999999" target="_blank">WhatsApp</a>
          <Link to="/carrito" className="font-black text-blue-900">🛒 {totalItems} | {formatearSoles(total)}</Link>
        </div>
      </section>
      <nav className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-6 justify-center text-sm">
          <NavLink className={navClass} to="/">Inicio</NavLink>
          <NavLink className={navClass} to="/catalogo">Catálogo</NavLink>
          <NavLink className={navClass} to="/admin">Admin</NavLink>
          <NavLink className={navClass} to="/contacto">Contacto</NavLink>
          <NavLink className={navClass} to="/carrito">Carrito</NavLink>
        </div>
      </nav>
    </header>
  );
}
