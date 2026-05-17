# Landing Page de Tejidos — Teje Ideas

Sitio web de marca personal para **[@teje_ideas01](https://www.instagram.com/teje_ideas01/)**, creada a partir del perfil de Instagram. Muestra servicios de tejidos en **crochet a mano**, galería con fotos reales y canales de contacto.

## Ver la web en línea

**https://tejeideas.netlify.app/**

Repositorio del código: [Brokenearth/Landing-Page-de-Tejidos](https://github.com/Brokenearth/Landing-Page-de-Tejidos)

## Vista local

Abre `index.html` en tu navegador (doble clic o arrastrar al navegador).  
También puedes usar la terminal:

```bash
# Desde la carpeta del proyecto
start index.html
```

> Las imágenes usan rutas relativas (`assets/instagram/`). Mantén esa carpeta junto al HTML.

## Contenido de la web

- Hero con tarjeta estilo perfil de Instagram (stats, bio, mini galería)
- Sección **Sobre mí**
- **Servicios** de crochet a mano
- **Galería** con fotos del perfil
- **Contacto**: WhatsApp, email e Instagram

## Estructura del proyecto

```
Landing-Page-de-Tejidos/
├── index.html              # Página principal (despliegue en Netlify)
├── web-teje-ideas01.html   # Misma web (copia de trabajo)
├── assets/
│   └── instagram/          # Fotos del perfil (profile.jpg, post-*.webp)
├── README.md
└── .gitignore
```

## Contacto (Teje Ideas)

| Canal | Enlace |
|--------|--------|
| Web | [tejeideas.netlify.app](https://tejeideas.netlify.app/) |
| Instagram | [@teje_ideas01](https://www.instagram.com/teje_ideas01/) |
| WhatsApp | [+57 324 6036069](https://wa.me/573246036069) |
| Email | [teje_ideas01@gmail.com](mailto:teje_ideas01@gmail.com) |

## Cómo actualizar la web publicada

1. Edita `index.html` (o `web-teje-ideas01.html` y luego copia a `index.html`).
2. Si cambias fotos, reemplázalas en `assets/instagram/`.
3. Sube los cambios a GitHub:

```bash
git add index.html assets README.md
git commit -m "Actualizar contenido de la web"
git push
```

Si el sitio está conectado a **Netlify** desde el repositorio de GitHub, el despliegue se hace solo en unos minutos tras cada `push`.

## Despliegue en Netlify

El sitio está publicado en [Netlify](https://tejeideas.netlify.app/) con el dominio **tejeideas.netlify.app**.

Para reconectar o crear un despliegue nuevo:

1. Entra en [netlify.com](https://www.netlify.com/) e inicia sesión.
2. **Add new site** → **Import an existing project** → conecta GitHub.
3. Elige el repo `Brokenearth/Landing-Page-de-Tejidos`.
4. **Build command:** déjalo vacío (sitio estático HTML).
5. **Publish directory:** `/` (raíz del repo, donde está `index.html`).
6. **Deploy site**.

Opcional: en **Domain settings** puedes personalizar el subdominio o enlazar un dominio propio.

## Créditos

- Perfil y fotos: [@teje_ideas01](https://www.instagram.com/teje_ideas01/)
- Generado con el kit **Instagram → Web** (marca personal artesanal)

---

© Teje Ideas · Hecho con 🧶
