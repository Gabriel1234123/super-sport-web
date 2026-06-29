import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { productService } from '../services/productService';
import { formatearSoles } from '../utils/helpers';

const camposIniciales = { nombre:'', categoria:'zapatillas', genero:'unisex', marca:'Super Sport', precio:'', precioAnterior:'', stock:'', talla:'', imagen:'', descripcion:'' };

export default function Admin(){
  const [productos,setProductos]=useState([]);
  const [editando,setEditando]=useState(null);
  const {register,handleSubmit,reset,setValue,formState:{errors}}=useForm({ defaultValues: camposIniciales });

  useEffect(()=>{productService.getAll().then(setProductos)},[]);

  const cargarEdicion=(producto)=>{setEditando(producto);Object.entries(producto).forEach(([key,value])=>setValue(key,value ?? ''))};
  const cancelar=()=>{setEditando(null);reset(camposIniciales)};
  const guardar=async(data)=>{
    const payload = { ...data, precio:Number(data.precio), precioAnterior:Number(data.precioAnterior || 0), stock:Number(data.stock) };
    if(editando){const actualizado=await productService.update(editando.id,payload);setProductos(productos.map((p)=>p.id===editando.id?actualizado:p));}
    else{const creado=await productService.create(payload);setProductos([creado,...productos]);}
    cancelar();
  };
  const eliminar=async(id)=>{if(confirm('¿Está seguro de eliminar este producto?')){await productService.delete(id);setProductos(productos.filter((p)=>p.id!==id));}};

  return <main className="max-w-7xl mx-auto px-5 py-12">
    <h1 className="text-4xl font-black text-blue-950 mb-2">Panel de administración</h1>
    <p className="mb-8 text-slate-600">CRUD demostrativo: agregar, editar y eliminar productos del catálogo.</p>
    <form onSubmit={handleSubmit(guardar)} className="bg-white p-6 rounded-3xl shadow grid md:grid-cols-3 gap-4 mb-8">
      <input className="border p-3 rounded-xl" placeholder="Nombre" {...register('nombre',{required:'Nombre obligatorio'})}/>
      <select className="border p-3 rounded-xl" {...register('categoria',{required:true})}><option>zapatillas</option><option>polos</option><option>shorts</option><option>sandalias</option><option>casacas</option><option>jeans</option><option>camisas</option><option>moda dama</option><option>niños</option><option>accesorios</option></select>
      <input className="border p-3 rounded-xl" placeholder="Marca" {...register('marca')}/>
      <input className="border p-3 rounded-xl" placeholder="Precio" type="number" {...register('precio',{required:true,min:1})}/>
      <input className="border p-3 rounded-xl" placeholder="Precio anterior" type="number" {...register('precioAnterior')}/>
      <input className="border p-3 rounded-xl" placeholder="Stock" type="number" {...register('stock',{required:true,min:0})}/>
      <input className="border p-3 rounded-xl" placeholder="Talla" {...register('talla')}/>
      <input className="border p-3 rounded-xl md:col-span-2" placeholder="URL de imagen" {...register('imagen')}/>
      <textarea className="border p-3 rounded-xl md:col-span-3" placeholder="Descripción" {...register('descripcion',{required:true})}/>
      {Object.keys(errors).length>0 && <p className="text-red-600 font-bold md:col-span-3">Completa los campos obligatorios.</p>}
      <button className="bg-blue-900 text-white p-3 rounded-xl font-black">{editando ? 'Actualizar producto' : 'Agregar producto'}</button>
      {editando && <button type="button" className="bg-slate-200 p-3 rounded-xl font-bold" onClick={cancelar}>Cancelar</button>}
    </form>
    <section className="grid md:grid-cols-2 gap-4">{productos.map((p)=><article key={p.id} className="bg-white p-4 rounded-2xl shadow flex justify-between gap-4"><div><h3 className="font-black text-blue-900">{p.nombre}</h3><p>{p.categoria} | Stock: {p.stock} | {formatearSoles(p.precio)}</p></div><div className="flex gap-2"><button className="bg-blue-600 text-white px-3 rounded-xl" onClick={()=>cargarEdicion(p)}>Editar</button><button className="bg-red-600 text-white px-3 rounded-xl" onClick={()=>eliminar(p.id)}>Eliminar</button></div></article>)}</section>
  </main>;
}
