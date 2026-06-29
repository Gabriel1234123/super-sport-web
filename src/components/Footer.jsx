export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-12">
      <section className="max-w-7xl mx-auto px-5 py-10 grid md:grid-cols-4 gap-8">

        {/* Logo */}
        <div>
          <img
            src="/logo-super-sport.png"
            alt="Super Sport"
            className="w-28 bg-white rounded-xl p-2 mb-4"
          />

          <h2 className="text-2xl font-black mb-2">
            Super Sport
          </h2>

          <p className="text-blue-100 leading-7">
            Calidad, garantía y economía.
            Somos una tienda especializada en ropa, calzado y accesorios
            deportivos para toda la familia en Puerto Maldonado.
          </p>
        </div>

        {/* Productos */}
        <div>
          <h3 className="font-black text-lg mb-4">
            Productos
          </h3>

          <ul className="space-y-2 text-blue-100">
            <li>👟 Zapatillas deportivas</li>
            <li>👕 Polos y camisetas</li>
            <li>🩳 Shorts y buzos</li>
            <li>🩴 Sandalias</li>
            <li>🧥 Casacas</li>
            <li>🎒 Accesorios deportivos</li>
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="font-black text-lg mb-4">
            Servicios
          </h3>

          <ul className="space-y-2 text-blue-100">
            <li>✅ Atención personalizada</li>
            <li>✅ Asesoría en tallas</li>
            <li>✅ Productos de calidad</li>
            <li>✅ Promociones permanentes</li>
            <li>✅ Novedades en temporada</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-black text-lg mb-4">
            Contacto
          </h3>

          <ul className="space-y-2 text-blue-100">
            <li>📍 Av. 2 de Mayo N.° 353</li>
            <li>📱 WhatsApp: +51 999 999 999</li>
            <li>📧 supersportpm@gmail.com</li>
            <li>🕘 Lunes a Sábado</li>
            <li>09:00 a.m. – 08:00 p.m.</li>
          </ul>
        </div>

      </section>

      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">

          <p>
            © 2026 <strong>Super Sport Puerto Maldonado</strong>. Todos los derechos reservados.
          </p>

          <p className="mt-2 md:mt-0">
            Proyecto Integrador • React • Vite • Tailwind CSS
          </p>

        </div>
      </div>
    </footer>
  );
}