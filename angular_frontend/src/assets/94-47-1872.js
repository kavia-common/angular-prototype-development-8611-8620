(function () {
  'use strict';

  // PUBLIC_INTERFACE
  /** Initialize lightweight interactions for the 47:1872 screen. */
  function initFigma471872() {
    const root = document.getElementById('screen-47-1872');
    if (!root) return;

    // Toggle "More" expansion visual state (stub behavior)
    const moreItem = root.querySelector('.ofp94-menu-more .ofp94-menu-link');
    if (moreItem) {
      moreItem.addEventListener('click', (e) => {
        e.preventDefault();
        const expanded = moreItem.getAttribute('aria-expanded') === 'true';
        moreItem.setAttribute('aria-expanded', String(!expanded));
        const li = moreItem.closest('.ofp94-menu-item');
        if (li) li.classList.toggle('is-open', !expanded);
      });
    }

    // Tabs switching (visual only)
    const tabs = root.querySelectorAll('.ofp94-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('ofp94-tab-active'));
        tab.classList.add('ofp94-tab-active');
      });
    });

    // Back button stub
    const backBtn = root.querySelector('.ofp94-icon-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        // eslint-disable-next-line no-console
        console.log('[prototype] Back clicked 47:1872');
      });
    }

    // Select dropdown stubs
    const selects = root.querySelectorAll('.ofp94-select');
    selects.forEach(s => {
      s.addEventListener('click', () => {
        // eslint-disable-next-line no-console
        console.log('[prototype] Select clicked: ', s.textContent ? s.textContent.trim() : '');
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFigma471872);
  } else {
    initFigma471872();
  }

  // PUBLIC_INTERFACE
  // Expose function for debugging if needed
  window.__FIGMA_47_1872_INIT__ = initFigma471872;
})();
