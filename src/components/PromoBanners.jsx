export default function PromoBanners() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-6 grid lg:grid-cols-3 gap-5">
      <article className="rounded-2xl bg-red-600 text-white p-7 shadow-lg bg-[url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900')] bg-cover bg-center overflow-hidden"><div className="bg-red-700/80 p-5 rounded-xl"><h3 className="text-3xl font-black">OFERTAS ESPECIALES</h3><p className="text-xl font-bold">Hasta 30% OFF</p></div></article>
      <article className="rounded-2xl bg-blue-900 text-white p-7 shadow-lg"><h3 className="text-3xl font-black">2 POLOS POR S/ 70</h3><p className="text-blue-100">Combinables para dama y caballero</p></article>
      <article className="rounded-2xl bg-slate-950 text-white p-7 shadow-lg"><h3 className="text-3xl font-black">ZAPATILLAS DESDE S/ 129</h3><p className="text-slate-200">Variedad de modelos</p></article>
    </section>
  );
}
