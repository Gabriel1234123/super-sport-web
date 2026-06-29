import api from '../config/connectDB';
import { localProducts } from '../data/localProducts';

const endpoint = '/productos';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const productService = {
  getAll: async () => {
    try {
      if (!import.meta.env.VITE_API_URL) throw new Error('Modo demostrativo: API no configurada');
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      console.warn('Usando productos locales:', error.message);
      await delay(350);
      return localProducts;
    }
  },
  create: async (producto) => {
    try {
      if (!import.meta.env.VITE_API_URL) throw new Error('Modo local');
      const response = await api.post(endpoint, producto);
      return response.data;
    } catch {
      return { id: Date.now(), ...producto, precio: Number(producto.precio), stock: Number(producto.stock) };
    }
  },
  update: async (id, producto) => {
    try {
      if (!import.meta.env.VITE_API_URL) throw new Error('Modo local');
      const response = await api.put(`${endpoint}/${id}`, producto);
      return response.data;
    } catch {
      return { ...producto, id, precio: Number(producto.precio), stock: Number(producto.stock) };
    }
  },
  delete: async (id) => {
    try {
      if (!import.meta.env.VITE_API_URL) throw new Error('Modo local');
      const response = await api.delete(`${endpoint}/${id}`);
      return response.data;
    } catch {
      return { id, eliminado: true };
    }
  },
};
