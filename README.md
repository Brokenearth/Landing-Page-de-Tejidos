# Landing Page de Tejidos — Teje Ideas

Sitio web de marca personal para **[@teje_ideas01](https://www.instagram.com/teje_ideas01/)**, creada a partir del perfil de Instagram. Muestra servicios de tejidos en **crochet a mano**, galería con fotos reales y canales de contacto.

## Ver la web en línea

Una vez activado **GitHub Pages** en el repositorio:

**https://brokenearth.github.io/Landing-Page-de-Tejidos/**

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
├── index.html              # Página principal (GitHub Pages)
├── web-teje-ideas01.html   # Misma web (copia de trabajo)
├── assets/
│   └── instagram/          # Fotos del perfil (profile.jpg, post-*.webp)
├── README.md
└── .gitignore
```

## Contacto (Teje Ideas)

| Canal | Enlace |
|--------|--------|
| Instagram | [@teje_ideas01](https://www.instagram.com/teje_ideas01/) |
| WhatsApp | [+57 324 6036069](https://wa.me/573246036069) |
| Email | [teje_ideas01@gmail.com](mailto:teje_ideas01@gmail.com) |

## Cómo actualizar la web publicada

1. Edita `index.html` (o `web-teje-ideas01.html` y luego copia a `index.html`).
2. Si cambias fotos, reemplázalas en `assets/instagram/`.
3. Sube los cambios a GitHub:

```bash
git add index.html assets
git commit -m "Actualizar contenido de la web"
git push
```

GitHub Pages se actualiza solo en unos minutos.

## Despliegue con GitHub Pages

1. Repositorio → **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` → **/ (root)** → Save

## Créditos

- Perfil y fotos: [@teje_ideas01](https://www.instagram.com/teje_ideas01/)
- Generado con el kit **Instagram → Web** (marca personal artesanal)

---

© Teje Ideas · Hecho con 🧶
