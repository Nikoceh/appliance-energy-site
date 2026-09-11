// ===================================================
// Appliance Energy Consumption — navigation script
// Handles swapping between the three "pages" (which are
// really just <section> elements shown/hidden with CSS),
// and gives the current nav button an "active" state.
// ===================================================

function showPage(pageId) {
  // Hide every page section, then show only the one requested.
  document.querySelectorAll('.page').forEach(function (page) {
    page.classList.toggle('active', page.id === pageId);
  });

  // Update the nav so the current page is visually marked.
  document.querySelectorAll('.nav-links button').forEach(function (button) {
    button.classList.toggle('active', button.dataset.page === pageId);
  });

  // Reflect the page in the URL hash so refresh/back-forward still work.
  window.location.hash = pageId;

  // Scroll to top when swapping pages.
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// On load: open whichever page matches the URL hash, defaulting to home.
document.addEventListener('DOMContentLoaded', function () {
  const initialPage = window.location.hash.replace('#', '') || 'home';
  const validPages = ['home', 'televisions', 'about'];
  showPage(validPages.includes(initialPage) ? initialPage : 'home');

  // Footer year, set dynamically so it never goes stale.
  document.getElementById('year').textContent = new Date().getFullYear();
});

// Support browser back/forward buttons.
window.addEventListener('hashchange', function () {
  const page = window.location.hash.replace('#', '');
  if (['home', 'televisions', 'about'].includes(page)) {
    showPage(page);
  }
});

// ===================================================
// Chart gallery lightbox — click a thumbnail to view
// it full size, click anywhere (or Escape) to close.
// ===================================================

function openLightbox(src, caption) {
  const lightbox = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-img').alt = caption;
  document.getElementById('lightbox-caption').textContent = caption;
  lightbox.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});
