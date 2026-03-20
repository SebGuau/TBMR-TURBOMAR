/* =====================================================
   CENTRAL HIDROELÉCTRICA SUBMARINA — MAIN SCRIPT
   ===================================================== */

'use strict';

// ── Dark Mode ────────────────────────────────────────
const DARK_KEY = 'chsDarkMode';

function initDarkMode() {
  const stored = localStorage.getItem(DARK_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = stored !== null ? stored === 'true' : prefersDark;
  applyDarkMode(isDark);

  document.querySelectorAll('.btn-dark-mode').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark';
      applyDarkMode(!current);
      localStorage.setItem(DARK_KEY, String(!current));
    });
  });
}

function applyDarkMode(isDark) {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.querySelectorAll('.btn-dark-mode').forEach(btn => {
    btn.textContent = isDark ? '☀️' : '🌙';
    btn.setAttribute('aria-label', isDark ? 'Modo claro' : 'Modo oscuro');
  });
}

// ── Mobile Nav Toggle ────────────────────────────────
function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ── Active Nav Link ──────────────────────────────────
function initActiveNav() {
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === current) link.classList.add('active');
  });
}

// ── Table of Contents ────────────────────────────────
function buildTOC() {
  const tocList = document.getElementById('toc-list');
  if (!tocList) return;

  const content = document.querySelector('.content');
  if (!content) return;

  const headings = content.querySelectorAll('h2, h3');
  if (headings.length === 0) return;

  let currentH2Li = null;
  let currentSubList = null;

  headings.forEach((h, idx) => {
    // Assign ID if missing
    if (!h.id) {
      h.id = 'toc-' + idx + '-' + h.textContent.trim()
        .toLowerCase()
        .replace(/[^a-z0-9áéíóúñ\s]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 50);
    }

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;

    a.addEventListener('click', e => {
      e.preventDefault();
      h.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', '#' + h.id);
    });

    li.appendChild(a);

    if (h.tagName === 'H2') {
      tocList.appendChild(li);
      currentH2Li = li;
      currentSubList = null;
    } else if (h.tagName === 'H3') {
      if (!currentSubList) {
        currentSubList = document.createElement('ul');
        if (currentH2Li) {
          currentH2Li.appendChild(currentSubList);
        } else {
          tocList.appendChild(currentSubList);
        }
      }
      currentSubList.appendChild(li);
    }
  });

  // Highlight active TOC item on scroll
  initTOCScroll(tocList);
}

function initTOCScroll(tocList) {
  const links = tocList.querySelectorAll('a');
  if (links.length === 0) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, {
    rootMargin: '-80px 0px -70% 0px',
    threshold: 0
  });

  document.querySelectorAll('h2[id], h3[id]').forEach(h => observer.observe(h));
}

// ── Scroll to Top ────────────────────────────────────
function initScrollTop() {
  const btn = document.createElement('button');
  btn.className = 'scroll-top';
  btn.textContent = '↑';
  btn.setAttribute('aria-label', 'Volver arriba');
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Table Wrappers (Responsive) ──────────────────────
function wrapTables() {
  document.querySelectorAll('.content table').forEach(table => {
    if (table.closest('.table-wrapper')) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}

// ── Code Block Copy Button ───────────────────────────
function initCodeCopy() {
  document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.className = 'code-copy-btn';
    btn.textContent = 'Copiar';
    btn.style.cssText = `
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.3);
      color: white;
      font-size: 0.75rem;
      padding: 0.25rem 0.6rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.2s;
      font-family: inherit;
    `;

    btn.addEventListener('mouseenter', () => {
      btn.style.background = 'rgba(255,255,255,0.25)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.background = 'rgba(255,255,255,0.15)';
    });

    btn.addEventListener('click', () => {
      const code = pre.querySelector('code') || pre;
      navigator.clipboard.writeText(code.textContent).then(() => {
        btn.textContent = '✓ Copiado';
        setTimeout(() => { btn.textContent = 'Copiar'; }, 2000);
      }).catch(() => {
        btn.textContent = 'Error';
        setTimeout(() => { btn.textContent = 'Copiar'; }, 2000);
      });
    });

    pre.style.position = 'relative';
    pre.appendChild(btn);
  });
}

// ── Animate Stats on Scroll ──────────────────────────
function initStatAnimation() {
  const stats = document.querySelectorAll('.stat-value[data-target]');
  if (stats.length === 0) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStat(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => observer.observe(stat));
}

function animateStat(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = target * ease;

    if (Number.isInteger(target)) {
      el.textContent = Math.round(current) + suffix;
    } else {
      el.textContent = current.toFixed(1) + suffix;
    }

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// ── Card Hover Effect ────────────────────────────────
function initCardEffects() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = 'var(--color-primary)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = '';
    });
  });
}

// ── Search (Index Page) ──────────────────────────────
function initSearch() {
  const input = document.querySelector('.search-input');
  if (!input) return;

  const cards = document.querySelectorAll('.card[data-search]');

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    cards.forEach(card => {
      const text = card.dataset.search.toLowerCase();
      card.style.display = (!q || text.includes(q)) ? '' : 'none';
    });
  });
}

// ── Reading Progress Bar ─────────────────────────────
function initProgressBar() {
  const content = document.querySelector('.content');
  if (!content) return;

  const bar = document.createElement('div');
  bar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: var(--color-primary-light);
    z-index: 200;
    transition: width 0.1s;
    width: 0%;
  `;
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = Math.min(progress, 100) + '%';
  }, { passive: true });
}

// ── Keyboard Navigation ──────────────────────────────
function initKeyboardNav() {
  document.addEventListener('keydown', e => {
    // Alt+Left = previous doc
    if (e.altKey && e.key === 'ArrowLeft') {
      const prev = document.querySelector('.btn-prev');
      if (prev && prev.href) window.location.href = prev.href;
    }
    // Alt+Right = next doc
    if (e.altKey && e.key === 'ArrowRight') {
      const next = document.querySelector('.btn-next');
      if (next && next.href) window.location.href = next.href;
    }
    // / = focus search
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      const search = document.querySelector('.search-input');
      if (search) {
        e.preventDefault();
        search.focus();
      }
    }
  });
}

// ── External Links ───────────────────────────────────
function initExternalLinks() {
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
}

// ── Image Rotator ─────────────────────────────────────
function initImageRotators() {
  const rotatorConfig = [
    { id: 'rotator-01', name: '01-portada' },
    { id: 'rotator-02', name: '02-diagrama' },
    { id: 'rotator-03', name: '03-lcoe' },
    { id: 'rotator-04', name: '04-presion' },
    { id: 'rotator-05', name: '05-turbina' },
    { id: 'rotator-06', name: '06-modulos' },
    { id: 'rotator-07', name: '07-control' },
    { id: 'rotator-08', name: '08-instalacion' },
    { id: 'rotator-09', name: '09-planta' },
    { id: 'rotator-10', name: '10-flujo' },
    { id: 'rotator-11', name: '11-costa' },
    { id: 'rotator-12', name: '12-ciclo' }
  ];

  rotatorConfig.forEach(config => {
    const rotatorEl = document.getElementById(config.id);
    if (!rotatorEl) return;

    const img = rotatorEl.querySelector('.rotating-image');
    if (!img) return;

    // Detect base path from initial src (handles both root and docs/html/ levels)
    const initialSrc = img.getAttribute('src') || '';
    const basePath = initialSrc.replace(/[^/]*$/, '');

    let currentIndex = 1;
    const totalImages = 4;

    function rotateImage() {
      img.style.opacity = '0';
      setTimeout(() => {
        currentIndex = currentIndex === totalImages ? 1 : currentIndex + 1;
        const newSrc = `${basePath}${config.name}-${currentIndex}.jpg`;
        img.src = newSrc;
        img.onerror = function() {
          console.warn(`No se pudo cargar: ${newSrc}`);
        };
        img.style.opacity = '1';
      }, 250);
    }

    setInterval(rotateImage, 4000);
  });
}

// ── Init All ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initNavToggle();
  initActiveNav();
  buildTOC();
  initScrollTop();
  wrapTables();
  initCodeCopy();
  initStatAnimation();
  initCardEffects();
  initSearch();
  initProgressBar();
  initKeyboardNav();
  initExternalLinks();
  initImageRotators();
});
