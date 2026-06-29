import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('carrito_super_sport')) ?? []);

  useEffect(() => {
    localStorage.setItem('carrito_super_sport', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existe = prev.find((item) => item.id === product.id);
      if (existe) return prev.map((item) => item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item);
      return [...prev, { ...product, cantidad: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
  const changeQuantity = (id, cantidad) => setCart((prev) => prev.map((item) => item.id === id ? { ...item, cantidad: Math.max(1, Number(cantidad)) } : item));
  const clearCart = () => setCart([]);

  const total = useMemo(() => cart.reduce((acc, item) => acc + Number(item.precio) * Number(item.cantidad), 0), [cart]);
  const totalItems = useMemo(() => cart.reduce((acc, item) => acc + Number(item.cantidad), 0), [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, changeQuantity, clearCart, total, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
