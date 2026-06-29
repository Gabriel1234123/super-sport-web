import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productService } from '../services/productService';
import { categorias } from '../data/localProducts';
import { formatearSoles, resumenProductos } from '../utils/helpers';

export default function Catalogo(){
  const [params] = useSearchParams();
  const categoriaInicial = params.get('categoria') || 'todos';
  const [productos,setProductos]=useState([]);
  const [busqueda,setBusqueda]=useState('');
  const [categoria,setCategoria]=useState(categoriaInicial);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState('');

  useEffect(()=>{(async()=>{try{const data=await productService.getAll();setProductos(data)}catch(e){setError('No se pudo cargar el catálogo.')}finally{setLoading(false)}})()},[]);

  const filtrados=useMemo(()=>productos.filter((p)=>{
    const coincideCategoria = categoria === 'todos' || p.categoria === categoria;
    const coincideTexto = `${p.nombre} ${p.marca} ${p.descripcion}`.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideTexto;
  }),[productos,busqueda,categoria]);
  const resumen=resumenProductos(productos);

  if(loading) return <p className="text-center py-20 text-2xl font-black text-blue-900">Cargando catálogo...</p>;
  if(error) return <p className="text-center py-20 text-red-600 font-black">{error}</p>;

  return <main className="max-w-7xl mx-auto px-5 py-12">
    <div className="text-center mb-10">
      <p className="text-red-600 font-black uppercase">Catálogo digital</p>
      <h1 className="text-4xl md:text-5xl font-black text-blue-950">Ropa, calzado y accesorios</h1>
    </div>
    <section className="bg-white rounded-3xl shadow p-5 mb-8 grid md:grid-cols-4 gap-4 items-center">
      <input className="border p-3 rounded-xl md:col-span-2" placeholder="Buscar producto..." value={busqueda} onChange={(e)=>setBusqueda(e.target.value)}/>
      <select className="border p-3 rounded-xl" value={categoria} onChange={(e)=>setCategoria(e.target.value)}>{categorias.map((c)=><option key={c} value={c}>{c}</option>)}</select>
      <div className="text-sm text-slate-700"><b>Stock total:</b> {resumen.totalStock}<br/><b>Inventario:</b> {formatearSoles(resumen.valorInventario)}<br/><b>Promedio:</b> {formatearSoles(resumen.promedioPrecio)}</div>
    </section>
    {resumen.hayStockBajo && <p className="mb-6 bg-orange-100 text-orange-700 p-3 rounded-xl font-bold">Alerta: producto con stock bajo: {resumen.productoStockBajo?.nombre}</p>}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">{filtrados.map((producto)=><ProductCard key={producto.id} producto={producto}/>)}</div>
    {filtrados.length===0 && <p className="text-center py-12 font-bold">No se encontraron productos.</p>}
  </main>;
}
