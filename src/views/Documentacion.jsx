export default function Documentacion(){
  return <main className="max-w-6xl mx-auto px-5 py-12 space-y-8">
    <section className="bg-white p-8 rounded-3xl shadow"><h1 className="text-4xl font-black text-blue-950">Segunda parte: Arquitectura y Diseño del Sistema</h1><p className="mt-3 text-slate-700">Documentación resumida del proyecto e-commerce Super Sport.</p></section>
    <section className="bg-white p-8 rounded-3xl shadow"><h2 className="text-2xl font-black text-blue-900">2.1 Arquitectura general</h2><div className="mt-5 grid md:grid-cols-3 gap-4 text-center"><div className="border rounded-2xl p-5"><b>Frontend</b><p>React + Vite + Tailwind</p></div><div className="border rounded-2xl p-5"><b>Backend</b><p>Node.js + Express</p></div><div className="border rounded-2xl p-5"><b>Base de datos</b><p>PostgreSQL + Prisma</p></div></div><p className="mt-5">La arquitectura propuesta es cliente-servidor. El cliente consume endpoints REST del backend, y el backend gestiona la lógica del negocio y la persistencia de datos.</p></section>
    <section className="bg-white p-8 rounded-3xl shadow"><h2 className="text-2xl font-black text-blue-900">2.2 Diseño de base de datos</h2><div className="overflow-auto"><table className="w-full mt-4 border"><thead className="bg-blue-900 text-white"><tr><th className="p-2">Entidad</th><th>Campos principales</th><th>Justificación</th></tr></thead><tbody><tr className="border"><td className="p-2 font-bold">Producto</td><td>id, nombre, precio, stock, talla, categoriaId</td><td>Permite controlar catálogo e inventario.</td></tr><tr className="border"><td className="p-2 font-bold">Categoría</td><td>id, nombre</td><td>Ordena productos por tipo.</td></tr><tr className="border"><td className="p-2 font-bold">Cliente</td><td>id, nombre, celular, email</td><td>Registra compradores y consultas.</td></tr><tr className="border"><td className="p-2 font-bold">Pedido</td><td>id, clienteId, total, estado</td><td>Gestiona compras realizadas.</td></tr><tr className="border"><td className="p-2 font-bold">DetallePedido</td><td>id, pedidoId, productoId, cantidad, precio</td><td>Relaciona productos con pedidos.</td></tr></tbody></table></div></section>
    <section className="bg-white p-8 rounded-3xl shadow"><h2 className="text-2xl font-black text-blue-900">2.3 Diseño de API</h2><div className="overflow-auto"><table className="w-full mt-4 border"><thead className="bg-red-600 text-white"><tr><th className="p-2">Método</th><th>Endpoint</th><th>Uso</th></tr></thead><tbody><tr className="border"><td className="p-2">GET</td><td>/api/productos</td><td>Listar productos</td></tr><tr className="border"><td className="p-2">POST</td><td>/api/productos</td><td>Crear producto</td></tr><tr className="border"><td className="p-2">PUT</td><td>/api/productos/:id</td><td>Actualizar producto</td></tr><tr className="border"><td className="p-2">DELETE</td><td>/api/productos/:id</td><td>Eliminar producto</td></tr><tr className="border"><td className="p-2">POST</td><td>/api/pedidos</td><td>Registrar pedido</td></tr></tbody></table></div><pre className="bg-slate-900 text-green-200 rounded-xl p-4 mt-5 overflow-auto">{`Request POST /api/productos
{
  "nombre": "Zapatillas Running Alpha",
  "precio": 229,
  "stock": 12,
  "categoriaId": 1
}

Response 201
{
  "id": 1,
  "mensaje": "Producto creado correctamente"
}`}</pre><p className="mt-4">El manejo de errores contempla respuestas 400, 404 y 500 con mensajes claros para el usuario.</p></section>
    <section className="bg-white p-8 rounded-3xl shadow"><h2 className="text-2xl font-black text-blue-900">2.4 Diseño UI/UX</h2><ul className="list-disc pl-6 mt-4 space-y-2"><li>Diseño responsive para celular, tablet y escritorio.</li><li>Catálogo con filtros por búsqueda y categoría.</li><li>Botones visibles para carrito y WhatsApp.</li><li>Colores corporativos rojo, azul y blanco del logo de Super Sport.</li><li>Jerarquía visual clara: hero, categorías, productos, promociones y contacto.</li></ul></section>
  </main>;
}
