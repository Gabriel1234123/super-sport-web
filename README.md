# Super Sport Puerto Maldonado - Proyecto Final React + Vite

Proyecto e-commerce demostrativo para Super Sport. Incluye SPA, React Router, Tailwind, Context API, Axios, React Hook Form, carrito con localStorage, CRUD de productos, filtros con arrays y documentación técnica de la segunda parte.

## Instalación

```bash
npm install
npm run dev
```

## Rutas
- `/` Inicio
- `/catalogo` Catálogo con búsqueda y filtro
- `/carrito` Carrito de compras
- `/admin` CRUD de productos
- `/contacto` Formulario con validación
- `/documentacion` Arquitectura, BD, API y UI/UX

## API opcional
Si tienes MockAPI o backend Express, crea un `.env` con:

```bash
VITE_API_URL=https://tu-api.mockapi.io
```

El frontend consumirá `/productos`. Si no existe API, usa productos locales.
