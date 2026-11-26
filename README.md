# Landing Page de Tejidos — Teje Ideas

Sitio web comercial estilo **atelier artesanal** para **[@teje_ideas01](https://www.instagram.com/teje_ideas01/)**, diseñado para exhibir sus piezas reales en crochet y trapillo y convertir visitas en encargos directos por WhatsApp.

## Ver la web en línea

**https://tejeideas.netlify.app/**

Repositorio: [Brokenearth/Landing-Page-de-Tejidos](https://github.com/Brokenearth/Landing-Page-de-Tejidos)

## Qué incluye esta versión

- **Identidad visual acorde al negocio (Atelier Palo de Rosa & Lino):** paleta cálida extraída de las piezas reales y del logo (`#FBF9F6`, `#F2ECE4`, `#261E1B`, `#9E4A5C`, `#B47B2B`) combinada con `Playfair Display` y `DM Sans`.
- **Hero editorial asimétrico:** protagonizado por los bolsos en trapillo con movimiento parallax sutil.
- **Catálogo real de 12 piezas con filtros y Lightbox:** filtrado por *Bolsos en trapillo*, *Bebé y calzado* y *Aretes y prendas*, con vista ampliada y enlace directo a WhatsApp con el nombre de cada pieza.
- **Configurador de pedido a medida:** selección visual de tipo de pieza y tonos de hilo que genera la cotización lista en WhatsApp (`+57 324 6036069`).
- **Animaciones accesibles:** barra de progreso, reveals escalonados, contadores y parallax optimizados con `requestAnimationFrame` y soporte completo para `prefers-reduced-motion`.

## Estructura del proyecto

```
Landing-Page-de-Tejidos/
├── index.html          # Estructura semántica y SEO
├── styles.css          # Sistema de diseño Atelier Palo de Rosa & Lino
├── app.js              # Catálogo, filtros, Lightbox, parallax y pedido WhatsApp
├── assets/
│   └── instagram/      # Fotos reales (profile.jpg, post-1..12.webp)
├── README.md
└── .gitignore
```

## Despliegue en Netlify

Sitio estático puro (sin paso de compilación): conecta el repositorio en Netlify con directorio de publicación `/` y cada `push` a `main` actualiza **https://tejeideas.netlify.app/** automáticamente.
