import { useCart } from '../context/CartContext';
import { calcularDescuento, formatearSoles } from '../utils/helpers';

export default function ProductCard({ producto }) {
  const { addToCart } = useCart();

  const descuento = calcularDescuento(producto.precio, producto.precioAnterior);
  const stockBajo = Number(producto.stock) > 0 && Number(producto.stock) <= 5;
  const agotado = Number(producto.stock) <= 0;

  const mensajeWhatsApp = `Hola, quiero consultar por el producto ${producto.nombre}`;

  return (
    <article className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col group">
      <div className="relative bg-slate-50 overflow-hidden">
        {descuento > 0 && (
          <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full">
            -{descuento}%
          </span>
        )}

        {stockBajo && (
          <span className="absolute top-3 right-3 z-10 bg-orange-500 text-white text-xs font-black px-3 py-1 rounded-full">
            Stock bajo
          </span>
        )}

        <img
          src={producto.imagen || '/logo-super-sport.png'}
          alt={producto.nombre}
          className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5 flex flex-col gap-2 flex-1">
        <p className="text-xs uppercase font-black text-red-600">
          {producto.categoria}
        </p>

        <h3 className="text-xl font-black text-blue-900">
          {producto.nombre}
        </h3>

        <p className="text-slate-600 line-clamp-2">
          {producto.descripcion}
        </p>

        <div className="text-sm text-slate-700 space-y-1">
          <p><b>Marca:</b> {producto.marca ?? 'Super Sport'}</p>
          <p><b>Tallas:</b> {producto.talla ?? 'Consultar'}</p>
        </div>

        <p className={agotado ? 'text-red-600 font-black' : stockBajo ? 'text-orange-600 font-black' : 'text-emerald-700 font-black'}>
          {agotado ? 'Agotado' : stockBajo ? 'Últimas unidades' : 'Disponible'} | Stock: {producto.stock}
        </p>

        <div className="flex items-end gap-3">
          <p className="text-3xl font-black text-red-600">
            {formatearSoles(producto.precio)}
          </p>

          {producto.precioAnterior && (
            <p className="line-through text-slate-400 mb-1">
              {formatearSoles(producto.precioAnterior)}
            </p>
          )}
        </div>

        <div className="mt-auto grid grid-cols-1 gap-2">
          <button
            disabled={agotado}
            onClick={() => addToCart(producto)}
            className="bg-blue-900 disabled:bg-slate-400 text-white py-3 rounded-xl font-black hover:bg-blue-800 transition"
          >
            {agotado ? 'Producto agotado' : 'Agregar al carrito'}
          </button>

          <a
            href={`https://wa.me/51999999999?text=${encodeURIComponent(mensajeWhatsApp)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center border border-blue-900 text-blue-900 py-3 rounded-xl font-black hover:bg-blue-900 hover:text-white transition"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}