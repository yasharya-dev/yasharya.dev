/* Theme toggle: flips html[data-theme] between light and dark and remembers the
   choice in localStorage. Each page's <head> applies a saved choice before first
   paint (no flash). With no saved choice, the OS preference wins via CSS. If JS
   is off, the toggle is inert but the OS-preferred theme still applies. */
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function isDark() {
    var explicit = document.documentElement.getAttribute('data-theme');
    if (explicit) return explicit === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function syncLabel() {
    btn.setAttribute('aria-label', isDark() ? 'Switch to light mode' : 'Switch to dark mode');
  }

  syncLabel();

  btn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('ya-theme', next); } catch (e) {}
    syncLabel();
  });
})();
