import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import FeatureBar from '../components/FeatureBar';
import CategoryStrip from '../components/CategoryStrip';
import ProductCard from '../components/ProductCard';
import PromoBanners from '../components/PromoBanners';
import BrandStrip from '../components/BrandStrip';
import { productService } from '../services/productService';

export default function Home(){
  const [productos, setProductos] = useState([]);
  useEffect(()=>{productService.getAll().then((data)=>setProductos(data.slice(0,6)))},[]);
  return <>
    <Hero />
    <FeatureBar />
    <CategoryStrip />
    <section className="max-w-7xl mx-auto px-5 py-4">
      <h2 className="text-center text-3xl font-black text-blue-950 mb-8">PRODUCTOS DESTACADOS</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">{productos.map((p)=><ProductCard key={p.id} producto={p}/>)}</div>
    </section>
    <PromoBanners />
    <BrandStrip />
  </>;
}
