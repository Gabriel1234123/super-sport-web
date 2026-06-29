import { useForm } from 'react-hook-form';
import { validarCredenciales } from '../utils/helpers';

export default function Contacto(){
  const {register,handleSubmit,reset,formState:{errors}}=useForm();
  const enviar=(data)=>{
    localStorage.setItem('consulta_super_sport', JSON.stringify({ ...data, fecha: new Date().toISOString() }, null, 2));
    validarCredenciales(data.nombre, 'consulta12345');
    alert(`Gracias ${data.nombre}. Tu consulta fue registrada.`);
    reset();
  };
  return <main className="max-w-6xl mx-auto px-5 py-12 grid lg:grid-cols-2 gap-8 items-start">
    <section className="bg-white rounded-3xl shadow p-8">
      <p className="text-red-600 uppercase font-black">Contacto</p>
      <h1 className="text-4xl font-black text-blue-950 mt-2">Super Sport Puerto Maldonado</h1>
      <p className="mt-4 text-slate-700">Av. 2 de Mayo N.° 353. Atención personalizada para consultas de tallas, stock, precios y pedidos.</p>
      <div className="mt-6 space-y-2"><p>📍 Puerto Maldonado, Madre de Dios</p><p>📲 WhatsApp: 999 999 999</p><p>🕘 Lunes a sábado: 9:00 am - 8:00 pm</p></div>
    </section>
    <form onSubmit={handleSubmit(enviar)} className="bg-white p-8 rounded-3xl shadow space-y-4">
      <input className="border p-3 rounded-xl w-full" placeholder="Nombre" {...register('nombre',{required:true})}/>{errors.nombre && <p className="text-red-600">El nombre es obligatorio.</p>}
      <input className="border p-3 rounded-xl w-full" placeholder="Producto de interés" {...register('producto',{required:true})}/>
      <input className="border p-3 rounded-xl w-full" placeholder="Celular" {...register('celular',{required:true,minLength:9})}/>{errors.celular && <p className="text-red-600">Ingrese un celular válido.</p>}
      <textarea className="border p-3 rounded-xl w-full" placeholder="Mensaje" {...register('mensaje')}/>
      <button className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl w-full font-black">Enviar consulta</button>
    </form>
  </main>;
}
