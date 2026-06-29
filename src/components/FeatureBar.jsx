const features = [
  ['🚚', 'Envíos rápidos', 'A todo Puerto Maldonado'],
  ['🛡️', 'Calidad garantizada', 'Productos originales'],
  ['🏷️', 'Mejores precios', 'Economía siempre'],
  ['🎧', 'Atención personalizada', 'Por WhatsApp'],
];
export default function FeatureBar() {
  return <section className="max-w-7xl mx-auto px-5 mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{features.map(([icon,title,text])=><article key={title} className="bg-white rounded-2xl shadow p-5 flex gap-3 items-center"><span className="text-3xl">{icon}</span><div><h3 className="font-black text-blue-900">{title}</h3><p className="text-sm text-slate-600">{text}</p></div></article>)}</section>;
}
