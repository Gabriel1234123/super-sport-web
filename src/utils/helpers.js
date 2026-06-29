export const formatearSoles = (precio) => `S/ ${Number(precio ?? 0).toFixed(2)}`;
export const calcularIGV = (monto) => Number((Number(monto) * 0.18).toFixed(2));
export const calcularDescuento = (precio, precioAnterior) => {
  if (!precioAnterior || precioAnterior <= precio) return 0;
  return Math.round(((precioAnterior - precio) / precioAnterior) * 100);
};
export const validarCredenciales = (usuario, password) => {
  const valido = usuario.trim() !== '' && password.length > 8;
  if (valido) localStorage.setItem('usuario_activo', usuario);
  return valido;
};
export const resumenProductos = (productos) => {
  const totalStock = productos.reduce((acc, p) => acc + Number(p.stock ?? 0), 0);
  const valorInventario = productos.reduce((acc, p) => acc + Number(p.precio ?? 0) * Number(p.stock ?? 0), 0);
  const hayStockBajo = productos.some((p) => Number(p.stock) <= 5);
  const todosConStock = productos.every((p) => Number(p.stock) > 0);
  const productoStockBajo = productos.find((p) => Number(p.stock) <= 5);
  const promedioPrecio = productos.length ? productos.reduce((acc, p) => acc + Number(p.precio), 0) / productos.length : 0;
  return { totalStock, valorInventario, hayStockBajo, todosConStock, productoStockBajo, promedioPrecio };
};
export const construirMensajeWhatsApp = (cart, total) => {
  const detalle = cart.map((item) => `• ${item.cantidad} x ${item.nombre} - ${formatearSoles(item.precio * item.cantidad)}`).join('%0A');
  return `Hola,%20quiero%20realizar%20este%20pedido:%0A${detalle}%0A%0ATotal:%20${encodeURIComponent(formatearSoles(total))}`;
};
