(function () {
  'use strict';

  // PUBLIC_INTERFACE
  /** Initialize lightweight interactions for the 1:2066 (screen 90) prototype. */
  function initFigma2066() {
    const root = document.getElementById('screen-1-2066');
    if (!root) return;

    // Toggle "More" expansion visual state (stub behavior)
    const moreItem = root.querySelector('.fig90-menu-more .fig90-menu-link');
    if (moreItem) {
      moreItem.addEventListener('click', (e) => {
        e.preventDefault();
        const expanded = moreItem.getAttribute('aria-expanded') === 'true';
        moreItem.setAttribute('aria-expanded', String(!expanded));
        const li = moreItem.closest('.fig90-menu-item');
        if (li) li.classList.toggle('is-open', !expanded);
      });
    }

    // Tabs switching (visual only)
    const tabs = root.querySelectorAll('.fig90-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('fig90-tab-active'));
        tab.classList.add('fig90-tab-active');
      });
    });

    // Back button stub
    const backBtn = root.querySelector('.fig90-icon-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        // eslint-disable-next-line no-console
        console.log('[prototype] Back clicked 1:2066');
      });
    }

    // Select dropdown stubs
    const selects = root.querySelectorAll('.fig90-select');
    selects.forEach(s => {
      s.addEventListener('click', () => {
        // eslint-disable-next-line no-console
        console.log('[prototype] Select clicked: ', s.textContent ? s.textContent.trim() : '');
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFigma2066);
  } else {
    initFigma2066();
  }

  // PUBLIC_INTERFACE
  // Expose function for debugging if needed
  window.__FIGMA_1_2066_INIT__ = initFigma2066;
})();
