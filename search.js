// Search overlay logic — shared across all pages
(function () {
  const overlay  = document.getElementById('searchOverlay');
  const trigger  = document.getElementById('searchTrigger');
  const closeBtn = document.getElementById('searchClose');
  const backdrop = document.getElementById('searchBackdrop');
  const input    = document.getElementById('searchInput');

  if (!overlay || !trigger) return;

  function openSearch() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input && input.focus(), 180);
  }

  function closeSearch() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    if (input) input.value = '';
  }

  trigger.addEventListener('click', openSearch);
  closeBtn && closeBtn.addEventListener('click', closeSearch);
  backdrop && backdrop.addEventListener('click', closeSearch);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSearch();
    // Ctrl/Cmd+K shortcut
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
  });
})();
