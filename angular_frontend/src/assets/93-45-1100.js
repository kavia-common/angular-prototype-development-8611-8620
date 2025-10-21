(function () {
  'use strict';

  // PUBLIC_INTERFACE
  /** Initialize lightweight interactions for the 45:1100 screen. */
  function initFigma451100() {
    const root = document.getElementById('screen-45-1100');
    if (!root) return;

    // Toggle "More" expansion visual state (stub behavior)
    const moreItem = root.querySelector('.fig-sb-more .fig-sb-link');
    if (moreItem) {
      moreItem.addEventListener('click', (e) => {
        e.preventDefault();
        const expanded = moreItem.getAttribute('aria-expanded') === 'true';
        moreItem.setAttribute('aria-expanded', String(!expanded));
        const li = moreItem.closest('.fig-sb-item');
        if (li) li.classList.toggle('is-open', !expanded);
      });
    }

    // Tabs switching (visual only)
    const tabs = root.querySelectorAll('.fig-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('fig-tab-active'));
        tab.classList.add('fig-tab-active');
      });
    });

    // Back button stub
    const backBtn = root.querySelector('.fig-icon-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        // eslint-disable-next-line no-console
        console.log('[prototype] Back clicked 45:1100');
      });
    }

    // Select dropdown stubs
    const selects = root.querySelectorAll('.fig-select');
    selects.forEach(s => {
      s.addEventListener('click', () => {
        // eslint-disable-next-line no-console
        console.log('[prototype] Select clicked: ', s.textContent ? s.textContent.trim() : '');
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFigma451100);
  } else {
    initFigma451100();
  }

  // PUBLIC_INTERFACE
  // Expose function for debugging if needed
  window.__FIGMA_45_1100_INIT__ = initFigma451100;
})();
