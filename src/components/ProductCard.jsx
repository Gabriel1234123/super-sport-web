import { useCart } from '../context/CartContext';
import { calcularDescuento, formatearSoles } from '../utils/helpers';

export default function ProductCard({ producto }) {
  const { addToCart } = useCart();
  const descuento = calcularDescuento(producto.precio, producto.precioAnterior);
  const stockBajo = Number(producto.stock) <= 5;
  return (
    <article className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col">
      <div className="relative bg-slate-50">
        {descuento > 0 && <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full">-{descuento}%</span>}
        <img src={producto.imagen || '/logo-super-sport.png'} alt={producto.nombre} className="h-56 w-full object-cover" />
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <p className="text-xs uppercase font-black text-red-600">{producto.categoria}</p>
        <h3 className="text-xl font-black text-blue-900">{producto.nombre}</h3>
        <p className="text-slate-600 line-clamp-2">{producto.descripcion}</p>
        <p className="text-sm"><b>Marca:</b> {producto.marca ?? 'Super Sport'}</p>
        <p className="text-sm"><b>Tallas:</b> {producto.talla ?? 'Consultar'}</p>
        <p className={stockBajo ? 'text-orange-600 font-black' : 'text-emerald-700 font-black'}>{producto.stock > 0 ? 'Disponible' : 'Agotado'} | Stock: {producto.stock}</p>
        <div className="flex items-end gap-3">
          <p className="text-3xl font-black text-red-600">{formatearSoles(producto.precio)}</p>
          {producto.precioAnterior && <p className="line-through text-slate-400 mb-1">{formatearSoles(producto.precioAnterior)}</p>}
        </div>
        <button disabled={producto.stock <= 0} onClick={() => addToCart(producto)} className="mt-auto bg-blue-900 disabled:bg-slate-400 text-white py-3 rounded-xl font-black hover:bg-blue-800 transition">Agregar al carrito</button>
      </div>
    </article>
  );
}
