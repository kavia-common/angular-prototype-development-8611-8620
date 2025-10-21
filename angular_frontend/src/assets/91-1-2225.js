(function () {
  'use strict';

  // PUBLIC_INTERFACE
  /** Initialize lightweight interactions for the 1:2225 screen. */
  function initFigma2225() {
    const root = document.getElementById('screen-1-2225');
    if (!root) return;

    // Toggle "More" expansion visual state (stub behavior)
    const moreItem = root.querySelector('.scr91-menu-more .scr91-menu-link');
    if (moreItem) {
      moreItem.addEventListener('click', (e) => {
        e.preventDefault();
        const expanded = moreItem.getAttribute('aria-expanded') === 'true';
        moreItem.setAttribute('aria-expanded', String(!expanded));
        const li = moreItem.closest('.scr91-menu-item');
        if (li) li.classList.toggle('is-open', !expanded);
      });
    }

    // Tabs switching (visual only)
    const tabs = root.querySelectorAll('.scr91-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('scr91-tab-active'));
        tab.classList.add('scr91-tab-active');
      });
    });

    // Back button stub
    const backBtn = root.querySelector('.scr91-icon-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        // eslint-disable-next-line no-console
        console.log('[prototype] Back clicked 1:2225');
      });
    }

    // Select dropdown stubs
    const selects = root.querySelectorAll('.scr91-select');
    selects.forEach(s => {
      s.addEventListener('click', () => {
        // eslint-disable-next-line no-console
        console.log('[prototype] Select clicked: ', s.textContent ? s.textContent.trim() : '');
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFigma2225);
  } else {
    initFigma2225();
  }

  // PUBLIC_INTERFACE
  // Expose function for debugging if needed
  window.__FIGMA_1_2225_INIT__ = initFigma2225;
})();
