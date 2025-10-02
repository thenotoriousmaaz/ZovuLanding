// Minimal JS for accordions and dynamic year
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  const accordions = document.querySelectorAll('[data-accordion]');
  accordions.forEach((root) => {
    const buttons = root.querySelectorAll('.accordion__item');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        const panel = btn.nextElementSibling;
        btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        if (panel) {
          if (expanded) { panel.setAttribute('hidden', ''); }
          else { panel.removeAttribute('hidden'); }
        }
      });
    });
  });
})();


