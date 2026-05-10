// Lazy-load 3 analytics bundles (gtag 157KB + analytics + clarity) behind first
// user interaction. Saves ~155KB unused-JS from critical path → big LCP win.
// Triggers: any of scroll/click/touchstart/keydown/mousemove, OR 5s timeout fallback.
// web-vitals.js stays eager (small, must run pre-interaction to capture CWV bounce).
(function() {
  var loaded = false;
  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    var sources = ['js/gtag.js', 'js/analytics.js', 'js/clarity-setup.js'];
    sources.forEach(function(src) {
      var s = document.createElement('script');
      s.src = src;
      s.defer = true;
      document.head.appendChild(s);
    });
  }
  var events = ['scroll', 'click', 'touchstart', 'keydown', 'mousemove'];
  var opts = { once: true, passive: true };
  events.forEach(function(ev) {
    window.addEventListener(ev, loadAnalytics, opts);
  });
  // Fallback: ensure analytics loads even if user reads page without interacting
  setTimeout(loadAnalytics, 5000);
})();
