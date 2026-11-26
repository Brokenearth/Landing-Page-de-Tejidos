const WHATSAPP_NUMBER = '573246036069';

const CATALOG = [
  {
    id: 'bolso-mantequilla',
    title: 'Bolso Redondo Mantequilla',
    category: 'bolsos',
    categoryLabel: 'Bolsos en trapillo',
    material: 'Trapillo tono mantequilla con borla y herrajes dorados',
    image: 'assets/instagram/post-11.webp',
    description:
      'Bolso circular tejido a mano en punto puff y medio punto con correa trenzada, mosquetones dorados y borla artesanal.',
  },
  {
    id: 'bolso-media-luna',
    title: 'Bolso Media Luna Rosa & Gris',
    category: 'bolsos',
    categoryLabel: 'Bolsos en trapillo',
    material: 'Trapillo rosa empolvado, ribete gris perla y botón de madera',
    image: 'assets/instagram/post-10.webp',
    description:
      'Bandolera artesanal con solapa tejida, cierre con botón natural en madera, borla lateral y asa trenzada desmontable.',
  },
  {
    id: 'bolso-boho-ocre',
    title: 'Bolso Boho Ocre con Flecos',
    category: 'bolsos',
    categoryLabel: 'Bolsos en trapillo',
    material: 'Trapillo ocre mostaza y cadena dorada entretejida',
    image: 'assets/instagram/post-8.webp',
    description:
      'Diseño circular estilo boho con flecos inferiores anudados a mano, botón en madera oscura y cadena metálica entrelazada.',
  },
  {
    id: 'tote-sol',
    title: 'Tote Bag Sol en Trapillo',
    category: 'bolsos',
    categoryLabel: 'Bolsos en trapillo',
    material: 'Trapillo amarillo cálido con textura acanalada',
    image: 'assets/instagram/post-6.webp',
    description:
      'Bolso amplio de uso diario tejido en puntos firmes para conservar su estructura, con dije circular tejido a juego.',
  },
  {
    id: 'mini-bolso-carmesi',
    title: 'Mini Bolso Corazón Carmesí',
    category: 'bolsos',
    categoryLabel: 'Bolsos en trapillo',
    material: 'Trapillo rojo carmesí con cierre de esfera tejida',
    image: 'assets/instagram/post-7.webp',
    description:
      'Pieza compacta con relieve frontal trenzado y cordón trenzado largo, pensada para salidas ligeras.',
  },
  {
    id: 'mochila-bordada',
    title: 'Mochila Artesanal Bordada',
    category: 'bolsos',
    categoryLabel: 'Bolsos en trapillo',
    material: 'Hilo café cacao con bordado floral en fucsia y amarillo',
    image: 'assets/instagram/post-4.webp',
    description:
      'Mochila tejida en base cacao con motivos florales bordados a mano, cordón ajustable y borlas laterales.',
  },
  {
    id: 'pantuflas-bicolor',
    title: 'Pantuflas en Trapillo Bicolor',
    category: 'bebe',
    categoryLabel: 'Bebé y calzado',
    material: 'Trapillo rosa suave y rojo carmesí acolchado',
    image: 'assets/instagram/post-5.webp',
    description:
      'Calzado cómodo para el hogar tejido con suela firme en trapillo grueso para mayor suavidad y durabilidad.',
  },
  {
    id: 'conjunto-bebe-aguamarina',
    title: 'Conjunto Bebé Gorro & Tenis',
    category: 'bebe',
    categoryLabel: 'Bebé y calzado',
    material: 'Lana antialérgica aguamarina y beige marfil',
    image: 'assets/instagram/post-12.webp',
    description:
      'Juego de gorro con pompón y tenis tejidos con cordones para bebé, elaborado con fibras suaves para piel delicada.',
  },
  {
    id: 'zapatitos-lazo',
    title: 'Zapatitos de Bebé con Lazo',
    category: 'bebe',
    categoryLabel: 'Bebé y calzado',
    material: 'Hilo acrílico suave rosa coral y suela gris',
    image: 'assets/instagram/post-1.webp',
    description:
      'Escarpines artesanales con moño frontal tejido y borde reforzado en contraste.',
  },
  {
    id: 'boticas-osito',
    title: 'Boticas Osito Blanco Marfil',
    category: 'bebe',
    categoryLabel: 'Bebé y calzado',
    material: 'Lana blanca y detalle de lazo rosa pastel',
    image: 'assets/instagram/post-3.webp',
    description:
      'Boticas para recién nacido con carita de osito tejida y lazo decorativo personalizable en el color que elijas.',
  },
  {
    id: 'coleccion-aretes',
    title: 'Colección de Aretes Calados',
    category: 'accesorios',
    categoryLabel: 'Aretes y prendas',
    material: 'Hilo fino mercerizado con herrajes y cuentas de madera',
    image: 'assets/instagram/post-9.webp',
    description:
      'Aretes ligeros tejidos en distintas geometrías y colores: aros bordados, gotas caladas y espirales.',
  },
  {
    id: 'top-calado-girasol',
    title: 'Blusa Calada & Girasol Tejido',
    category: 'accesorios',
    categoryLabel: 'Aretes y prendas',
    material: 'Hilo ligero rosa coral y amarillo girasol',
    image: 'assets/instagram/post-2.webp',
    description:
      'Prenda calada tejida sobre medida junto a flores eternas a crochet ideales para obsequios especiales.',
  },
];

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function buildWhatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Header scroll state & reading progress
const siteHeader = document.getElementById('siteHeader');
const progressBar = document.getElementById('readingProgress');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

// Catalog rendering & category filtering
const catalogGrid = document.getElementById('catalogGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const catalogCount = document.getElementById('catalogCount');
let activeCategory = 'all';

function renderCatalog(category, animateReveal = false) {
  if (!catalogGrid) return;
  const items = category === 'all' ? CATALOG : CATALOG.filter((item) => item.category === category);

  if (catalogCount) {
    catalogCount.textContent = `${items.length} ${items.length === 1 ? 'pieza' : 'piezas'}`;
  }

  const useReveal = animateReveal && !prefersReducedMotion;

  catalogGrid.innerHTML = items
    .map(
      (item, index) => `
      <article class="piece-card ${useReveal ? 'will-reveal' : ''}" style="transition-delay:${useReveal ? Math.min(index * 45, 270) : 0}ms">
        <button type="button" class="piece-trigger" data-piece-id="${item.id}" aria-label="Ver detalle de ${item.title}">
          <div class="piece-media">
            <img src="${item.image}" alt="${item.title} — ${item.material}" loading="lazy" />
            <span class="piece-badge">${item.categoryLabel}</span>
          </div>
          <div class="piece-body">
            <div>
              <h3 class="piece-title">${item.title}</h3>
              <p class="piece-meta">${item.material}</p>
            </div>
            <span class="piece-action">Ver detalle y cotizar</span>
          </div>
        </button>
      </article>
    `
    )
    .join('');

  if (useReveal) {
    observeReveals(catalogGrid.querySelectorAll('.will-reveal'));
  }
}

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    activeCategory = btn.dataset.filter || 'all';
    filterButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    renderCatalog(activeCategory, false);
  });
});

// IntersectionObserver for progressive reveal animations
let revealObserver = null;
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
  );
}

function observeReveals(nodes) {
  nodes.forEach((node) => {
    if (!revealObserver) {
      node.classList.add('visible');
      return;
    }
    revealObserver.observe(node);
  });
}

// Initialize static reveal blocks
const staticReveals = document.querySelectorAll('[data-reveal]');
if (!prefersReducedMotion) {
  staticReveals.forEach((el) => el.classList.add('will-reveal'));
  observeReveals(staticReveals);
}

// Initial catalog render
renderCatalog('all', true);

// Lightbox modal
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCat = document.getElementById('lightboxCat');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const lightboxMat = document.getElementById('lightboxMat');
const lightboxWa = document.getElementById('lightboxWa');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentPieceIndex = 0;
let lastFocusedElement = null;

function getVisibleList() {
  return activeCategory === 'all'
    ? CATALOG
    : CATALOG.filter((item) => item.category === activeCategory);
}

function openLightboxById(pieceId) {
  const list = getVisibleList();
  const idx = list.findIndex((item) => item.id === pieceId);
  if (idx === -1) return;
  currentPieceIndex = idx;
  lastFocusedElement = document.activeElement;
  updateLightboxContent(list[idx]);
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  lightboxClose?.focus();
}

function updateLightboxContent(item) {
  if (!item) return;
  lightboxImg.src = item.image;
  lightboxImg.alt = item.title;
  lightboxCat.textContent = item.categoryLabel;
  lightboxTitle.textContent = item.title;
  lightboxDesc.textContent = item.description;
  lightboxMat.textContent = item.material;
  lightboxWa.href = buildWhatsAppUrl(
    `Hola Teje Ideas, me interesa cotizar la pieza "${item.title}" (${item.material}).`
  );
}

function closeLightbox() {
  if (!lightbox || lightbox.hidden) return;
  lightbox.hidden = true;
  document.body.style.overflow = '';
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

function stepLightbox(delta) {
  const list = getVisibleList();
  if (list.length === 0) return;
  currentPieceIndex = (currentPieceIndex + delta + list.length) % list.length;
  updateLightboxContent(list[currentPieceIndex]);
}

catalogGrid?.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-piece-id]');
  if (!trigger) return;
  openLightboxById(trigger.dataset.pieceId);
});

lightboxClose?.addEventListener('click', closeLightbox);
lightboxPrev?.addEventListener('click', () => stepLightbox(-1));
lightboxNext?.addEventListener('click', () => stepLightbox(1));

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (!lightbox || lightbox.hidden) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') stepLightbox(-1);
  if (event.key === 'ArrowRight') stepLightbox(1);
});

// Animated metrics counters
const metricEls = document.querySelectorAll('.metric-value[data-count]');
if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  metricEls.forEach((el) => {
    el.textContent = `${el.dataset.count}${el.dataset.suffix || ''}`;
  });
} else {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number.parseInt(el.dataset.count || '0', 10);
        const suffix = el.dataset.suffix || '';
        const duration = 950;
        const start = performance.now();

        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = `${Math.round(eased * target)}${suffix}`;
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = `${target}${suffix}`;
          }
        };

        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  metricEls.forEach((el) => counterObserver.observe(el));
}

// Smooth requestAnimationFrame scroll loop for header, progress & parallax
const parallaxBand = document.getElementById('parallaxBand');
const parallaxImg = document.getElementById('parallaxImg');
const heroLayers = document.querySelectorAll('[data-parallax-speed]');
let scrollTicking = false;

function handleScrollFrame() {
  scrollTicking = false;
  const scrollY = window.scrollY;

  siteHeader?.classList.toggle('scrolled', scrollY > 28);

  if (progressBar) {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
    progressBar.style.transform = `scaleX(${pct})`;
  }

  if (prefersReducedMotion) return;

  if (parallaxBand && parallaxImg) {
    const rect = parallaxBand.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.14;
      parallaxImg.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    }
  }

  if (scrollY < window.innerHeight * 1.2) {
    heroLayers.forEach((layer) => {
      const speed = Number.parseFloat(layer.dataset.parallaxSpeed || '0');
      layer.style.transform = `translate3d(0, ${(scrollY * speed).toFixed(1)}px, 0)`;
    });
  }
}

window.addEventListener(
  'scroll',
  () => {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(handleScrollFrame);
    }
  },
  { passive: true }
);
handleScrollFrame();

// Yarn swatch selector + WhatsApp Order Builder
const swatchButtons = document.querySelectorAll('.swatch-btn');
let selectedTone = 'Mantequilla';

swatchButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    selectedTone = btn.dataset.tone || 'Mantequilla';
    swatchButtons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
  });
});

const orderForm = document.getElementById('orderForm');
const orderConfirmation = document.getElementById('orderConfirmation');
const orderSummaryText = document.getElementById('orderSummaryText');
const orderWaLink = document.getElementById('orderWaLink');
const copyOrderBtn = document.getElementById('copyOrderBtn');

let lastOrderMessage = '';

orderForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre = document.getElementById('orderName')?.value.trim() || '';
  const tipo = document.getElementById('orderType')?.value || 'Bolso en trapillo';
  const detalles = document.getElementById('orderNotes')?.value.trim() || '';

  lastOrderMessage =
    `Hola Teje Ideas, soy ${nombre}. Me gustaría cotizar: ${tipo} en tono "${selectedTone}". ` +
    `Detalles de mi idea: ${detalles}`;

  const waUrl = buildWhatsAppUrl(lastOrderMessage);
  if (orderWaLink) orderWaLink.href = waUrl;
  if (orderSummaryText) {
    orderSummaryText.textContent = `Pedido preparado para WhatsApp: ${tipo} · tono ${selectedTone}.`;
  }
  if (orderConfirmation) {
    orderConfirmation.hidden = false;
  }

  window.open(waUrl, '_blank', 'noopener,noreferrer');
});

copyOrderBtn?.addEventListener('click', async () => {
  if (!lastOrderMessage) return;
  try {
    await navigator.clipboard.writeText(lastOrderMessage);
    copyOrderBtn.textContent = 'Mensaje copiado';
    setTimeout(() => {
      copyOrderBtn.textContent = 'Copiar mensaje';
    }, 2200);
  } catch {
    // Fallback ignored if clipboard blocked
  }
});

// Email link protection against Cloudflare Email Obfuscation proxies
const emailTrigger = document.getElementById('emailTrigger');
emailTrigger?.addEventListener('click', () => {
  const user = emailTrigger.dataset.user || '';
  const domain = emailTrigger.dataset.domain || '';
  if (user && domain) {
    window.location.href = `mailto:${user}@${domain}`;
  }
});
