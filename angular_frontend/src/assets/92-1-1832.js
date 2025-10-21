(function () {
  'use strict';

  // PUBLIC_INTERFACE
  /** Initialize lightweight interactions for the 1:1832 screen. */
  function initFigma1832() {
    const root = document.getElementById('screen-1-1832');
    if (!root) return;

    // Toggle "More" expansion visual state (stub behavior)
    const moreItem = root.querySelector('.fig-menu-more .fig-menu-link');
    if (moreItem) {
      moreItem.addEventListener('click', (e) => {
        e.preventDefault();
        const expanded = moreItem.getAttribute('aria-expanded') === 'true';
        moreItem.setAttribute('aria-expanded', String(!expanded));
        const li = moreItem.closest('.fig-menu-item');
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
        console.log('[prototype] Back clicked 1:1832');
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
    document.addEventListener('DOMContentLoaded', initFigma1832);
  } else {
    initFigma1832();
  }

  // PUBLIC_INTERFACE
  // Expose function for debugging if needed
  window.__FIGMA_1_1832_INIT__ = initFigma1832;
})();
