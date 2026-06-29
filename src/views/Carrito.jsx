import { useCart } from '../context/CartContext';
import { calcularIGV, construirMensajeWhatsApp, formatearSoles } from '../utils/helpers';

export default function Carrito(){
  const {cart,removeFromCart,changeQuantity,clearCart,total}=useCart();
  const igv = calcularIGV(total);
  const totalFinal = total + igv;
  return <main className="max-w-5xl mx-auto px-5 py-12">
    <h1 className="text-4xl font-black text-blue-950 mb-8">Carrito de compras</h1>
    {cart.length===0 ? <p className="bg-white p-6 rounded-2xl shadow">El carrito está vacío.</p> : <div className="grid lg:grid-cols-[1fr_330px] gap-6">
      <section className="space-y-4">{cart.map((item)=><article key={item.id} className="bg-white p-4 rounded-2xl shadow flex gap-4 items-center">
        <img src={item.imagen} alt={item.nombre} className="w-24 h-24 object-cover rounded-xl" />
        <div className="flex-1"><h3 className="font-black text-blue-900">{item.nombre}</h3><p>{formatearSoles(item.precio)} c/u</p><input type="number" min="1" value={item.cantidad} onChange={(e)=>changeQuantity(item.id,e.target.value)} className="border rounded-lg px-3 py-1 w-20 mt-2" /></div>
        <button className="text-red-600 font-black" onClick={()=>removeFromCart(item.id)}>Eliminar</button>
      </article>)}</section>
      <aside className="bg-blue-950 text-white p-6 rounded-3xl shadow h-fit">
        <h2 className="text-2xl font-black mb-4">Resumen</h2>
        <p>Subtotal: {formatearSoles(total)}</p>
        <p>IGV 18%: {formatearSoles(igv)}</p>
        <p className="text-3xl font-black mt-3">Total: {formatearSoles(totalFinal)}</p>
        <a className="block text-center bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded-xl mt-5 font-black" target="_blank" href={`https://wa.me/51999999999?text=${construirMensajeWhatsApp(cart,totalFinal)}`}>Enviar por WhatsApp</a>
        <button className="w-full mt-3 underline" onClick={clearCart}>Vaciar carrito</button>
      </aside>
    </div>}
  </main>;
}
