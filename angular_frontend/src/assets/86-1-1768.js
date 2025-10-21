(function () {
  'use strict';

  // PUBLIC_INTERFACE
  /** Initialize lightweight interactions for the 1:1768 screen. */
  function initOfpScreen() {
    const root = document.getElementById('screen-1-1768');
    if (!root) return;

    // Toggle "More" expansion visual state (stub behavior)
    const moreItem = root.querySelector('.ofp-menu-more .ofp-menu-link');
    if (moreItem) {
      moreItem.addEventListener('click', (e) => {
        e.preventDefault();
        const expanded = moreItem.getAttribute('aria-expanded') === 'true';
        moreItem.setAttribute('aria-expanded', String(!expanded));
        // Simple visual toggle by rotating caret or changing background
        const li = moreItem.closest('.ofp-menu-item');
        if (li) li.classList.toggle('is-open', !expanded);
      });
    }

    // Tabs switching (visual only)
    const tabs = root.querySelectorAll('.ofp-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });

    // Back button stub
    const backBtn = root.querySelector('.ofp-icon-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        // eslint-disable-next-line no-console
        console.log('[prototype] Back clicked');
      });
    }

    // Select dropdown stubs
    const selects = root.querySelectorAll('.ofp-select');
    selects.forEach(s => {
      s.addEventListener('click', () => {
        // eslint-disable-next-line no-console
        console.log('[prototype] Select clicked: ', s.textContent?.trim());
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOfpScreen);
  } else {
    initOfpScreen();
  }

  // Expose function for debugging if needed
  // PUBLIC_INTERFACE
  window.__OFPScreenInit = initOfpScreen;
})();
