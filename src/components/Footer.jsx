export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-12">
      <section className="max-w-7xl mx-auto px-5 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <img src="/logo-super-sport.png" alt="Super Sport" className="w-28 bg-white rounded-xl p-2 mb-3" />
          <p className="text-blue-100">Tienda de ropa, calzado, sandalias y accesorios deportivos para toda la familia en Puerto Maldonado.</p>
        </div>
        <div><h3 className="font-black mb-3">Información</h3><p>Quiénes somos</p><p>Política de privacidad</p><p>Cambios y devoluciones</p></div>
        <div><h3 className="font-black mb-3">Atención</h3><p>Guía de tallas</p><p>Formas de pago</p><p>Envíos y entregas</p></div>
        <div><h3 className="font-black mb-3">Contacto</h3><p>📍 Av. 2 de Mayo N.° 353</p><p>📞 999 999 999</p><p>🕘 Lun - Sáb: 9:00 am - 8:00 pm</p></div>
      </section>
      <p className="text-center text-sm border-t border-blue-800 py-4">© 2026 Super Sport - Proyecto integrador desarrollado con React + Vite.</p>
    </footer>
  );
}
