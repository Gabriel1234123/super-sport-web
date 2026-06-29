import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-5 pt-8">
      <div className="rounded-[2rem] overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white shadow-2xl grid lg:grid-cols-2 items-center min-h-[430px]">
        <div className="p-8 md:p-14">
          <p className="uppercase font-black text-red-400 tracking-widest">Nueva temporada 2026</p>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mt-4">Ropa y calzado deportivo para toda la familia</h1>
          <p className="text-blue-100 text-lg mt-5 max-w-xl">Super Sport Puerto Maldonado: calidad, garantía y economía en zapatillas, polos, sandalias, shorts, jeans, casacas y accesorios.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/catalogo" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-black">Ver catálogo</Link>
            <a href="https://wa.me/51999999999?text=Hola,%20quiero%20consultar%20por%20productos%20de%20Super%20Sport" target="_blank" className="border border-white px-6 py-3 rounded-xl font-black">Comprar por WhatsApp</a>
          </div>
        </div>
        <div className="relative h-full min-h-[360px] bg-[url('https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
