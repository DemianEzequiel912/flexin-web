# Flexin Web – Tienda de Bolsas Reutilizables (React + Vite)

**Demo online:** https://demianezequiel912.github.io/flexin-web/#/  

---

## Descripción  
Flexin Web es una aplicación de comercio electrónico simple realizada como Trabajo Práctico en React + Vite.  
La aplicación muestra un catálogo de bolsas reutilizables, con detalles por producto, navegación entre secciones y manejo de estados (*loading* y *error*) al consumir datos desde un JSON externo.

---

## Tecnologías utilizadas  
- React  
- Vite  
- React Router DOM  
- Fetch API (consumo de JSON externo)  
- JavaScript ES6+  
- Bootstrap / CSS personalizado  
- GitHub Pages (deploy)  

---

## Rutas de la aplicación  

| Ruta                  | Descripción                          |
|-----------------------|--------------------------------------|
| `/`                   | Página de inicio                      |
| `/tienda`             | Catálogo de productos (fetch JSON)    |
| `/producto/:id`       | Página de detalle del producto        |
| `/nosotros`           | Información de la empresa             |
| `/contacto`           | Formulario de contacto                |
| `*`                   | Ruta 404 – Página “No encontrado”     |

---

## Principales funcionalidades  
- Carga de datos mediante un JSON externo (`public/productos.json`).  
- Manejo de estados: **loading** y **error** durante la carga.  
- Componentes reutilizables (tarjetas, listas, navbar/footer).  
- Página de detalle por ID utilizando `useParams`.  
- Navegación con React Router, incluyendo página 404.  
- Compatibilidad con GitHub Pages mediante `HashRouter` y `import.meta.env.BASE_URL`.  
- Deploy directo utilizando GitHub Pages.

---

## Cómo ejecutar el proyecto localmente  

```bash
# clonar el repositorio
git clone https://github.com/demianezequiel912/flexin-web.git  

# ir al directorio
cd flexin-web  

# instalar dependencias
npm install  

# correr el servidor de desarrollo
npm run dev  

# generar build para producción
npm run build  

# ver el build localmente
npm run preview  
```

---

## Autores  
- **Demian Sebrero**  
- **Jorge Mindolacio**
- **Ivan Vida**
- **Agustin de Boeuf**  

---

## Notas finales  
Este proyecto fue desarrollado para practicar los conceptos fundamentales de React:  
- ruteo,  
- consumo de datos dinámicos,  
- manejo de estado,  
- componentes modulares,  
- y despliegue.  

El proyecto puede ampliarse con funcionalidades como carrito de compras, filtros, autenticación y más.
