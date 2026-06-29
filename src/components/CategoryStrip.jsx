const categorias = [
  ['👟','Zapatillas'], ['👕','Polos'], ['🩳','Shorts'], ['👖','Jeans'], ['🩴','Sandalias'], ['🧥','Casacas'], ['🧢','Accesorios'], ['👗','Moda Dama'], ['🧒','Niños']
];
export default function CategoryStrip() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      <h2 className="text-center text-3xl font-black text-blue-950 mb-8">CATEGORÍAS</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-5">
        {categorias.map(([icon,nombre])=><a href={`/catalogo?categoria=${encodeURIComponent(nombre.toLowerCase())}`} key={nombre} className="text-center group"><div className="bg-white rounded-full h-24 w-24 mx-auto grid place-items-center text-5xl shadow group-hover:scale-105 transition">{icon}</div><p className="font-black text-sm mt-3 text-blue-950">{nombre}</p></a>)}
      </div>
    </section>
  );
}
