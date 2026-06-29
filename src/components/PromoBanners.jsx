export default function PromoBanners() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-6 grid lg:grid-cols-3 gap-5">

      <article className="rounded-2xl overflow-hidden shadow-xl bg-[url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900')] bg-cover bg-center">
        <div className="bg-black/60 p-8 h-full text-white">
          <p className="uppercase text-red-400 font-bold tracking-widest">
            Nueva Colección
          </p>

          <h3 className="text-3xl font-black mt-2">
            Zapatillas Deportivas
          </h3>

          <p className="mt-3">
            Modelos modernos para dama, caballero y niños.
          </p>

          <span className="inline-block mt-5 bg-red-600 px-5 py-2 rounded-full font-black">
            Ver modelos
          </span>
        </div>
      </article>

      <article className="rounded-2xl bg-blue-900 text-white p-8 shadow-xl hover:scale-105 transition">
        <p className="uppercase text-blue-200 font-bold">
          Promoción
        </p>

        <h3 className="text-3xl font-black mt-2">
          Ropa Deportiva
        </h3>

        <p className="mt-3">
          Polos, shorts, casacas, jeans y mucho más.
        </p>

        <p className="text-2xl font-black text-yellow-300 mt-5">
          Desde S/ 35
        </p>
      </article>

      <article className="rounded-2xl bg-red-600 text-white p-8 shadow-xl hover:scale-105 transition">
        <p className="uppercase text-red-100 font-bold">
          Atención personalizada
        </p>

        <h3 className="text-3xl font-black mt-2">
          Compra por WhatsApp
        </h3>

        <p className="mt-3">
          Consulta disponibilidad, tallas y precios de nuestros productos.
        </p>

        <a
          href="https://wa.me/51999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 bg-white text-red-600 px-5 py-2 rounded-full font-black"
        >
          Escribir ahora
        </a>
      </article>

    </section>
  );
}